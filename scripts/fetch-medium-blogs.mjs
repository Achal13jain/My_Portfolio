import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outputPath = path.resolve(__dirname, '../data/generated-medium-blogs.ts')

const mediumUsername = process.env.MEDIUM_USERNAME || 'jainachal38'
const feedUrl = process.env.MEDIUM_RSS_URL || `https://medium.com/feed/@${mediumUsername}`
const postLimit = Number.parseInt(process.env.MEDIUM_POST_LIMIT || '6', 10)
const fallbackImage = process.env.MEDIUM_FALLBACK_IMAGE || '/og-image.png'
const wordsPerMinute = 220

async function main() {
  const rss = await fetchText(feedUrl)
  const posts = parseMediumPosts(rss).slice(0, postLimit)

  if (posts.length === 0) {
    throw new Error(`No Medium posts found in feed: ${feedUrl}`)
  }

  const source = toGeneratedSource(posts)
  const current = await readFile(outputPath, 'utf8').catch(() => '')

  if (current === source) {
    console.log(`Medium blog data is already up to date (${posts.length} posts).`)
    return
  }

  await writeFile(outputPath, source, 'utf8')
  console.log(`Updated Medium blog data with ${posts.length} posts from ${feedUrl}.`)
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'achal-portfolio-medium-fetcher/1.0',
      'Accept': 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch Medium feed: ${response.status} ${response.statusText}`)
  }

  return response.text()
}

function parseMediumPosts(rss) {
  const items = [...rss.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map(match => match[0])

  return items.map((item, index) => {
    const title = cleanText(getTagContent(item, 'title')) || 'Untitled Medium post'
    const url = cleanText(getTagContent(item, 'link'))
    const pubDate = cleanText(getTagContent(item, 'pubDate'))
    const encodedContent = getTagContent(item, 'content:encoded')
    const descriptionContent = getTagContent(item, 'description')
    const html = encodedContent || descriptionContent
    const categories = getTagContents(item, 'category').map(cleanTag).filter(Boolean)
    const tags = unique(categories).slice(0, 4)
    const category = normalizeCategory(tags[0] || 'Medium')
    const description = summarizeHtml(descriptionContent || encodedContent)
    const readTime = estimateReadTime(encodedContent || descriptionContent || title)
    const image = extractImage(item, html) || fallbackImage

    return {
      title,
      description,
      url,
      platform: 'medium',
      image,
      category,
      date: formatMonthYear(pubDate),
      readTime,
      featured: index === 0,
      tags: tags.length > 0 ? tags : ['Medium'],
    }
  }).filter(post => post.url)
}

function getTagContent(xml, tagName) {
  const match = xml.match(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i'))
  return match ? decodeXml(unwrapCdata(match[1]).trim()) : ''
}

function getTagContents(xml, tagName) {
  return [...xml.matchAll(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'gi'))]
    .map(match => decodeXml(unwrapCdata(match[1]).trim()))
}

function getTagAttribute(xml, tagName, attributeName) {
  const match = xml.match(new RegExp(`<${tagName}\\b[^>]*\\b${attributeName}=["']([^"']+)["'][^>]*\\/?>`, 'i'))
  return match ? decodeXml(match[1]) : ''
}

function extractImage(item, html) {
  const mediaContent = getMediaContentImage(item)
  const mediaThumbnail = getTagAttribute(item, 'media:thumbnail', 'url')
  const firstHtmlImage = getFirstImageFromHtml(html)

  return [mediaContent, mediaThumbnail, firstHtmlImage].find(isUsableImageUrl) || ''
}

function getMediaContentImage(item) {
  const mediaTags = [...item.matchAll(/<media:content\b([^>]*)\/?>/gi)]

  for (const [, attributes] of mediaTags) {
    const url = getAttributeValue(attributes, 'url')
    const medium = getAttributeValue(attributes, 'medium')
    const type = getAttributeValue(attributes, 'type')

    if (url && (medium === 'image' || type.startsWith('image/') || (!medium && !type))) {
      return decodeXml(url)
    }
  }

  return ''
}

function getFirstImageFromHtml(html) {
  const decodedHtml = decodeXml(unwrapCdata(html))
  const imageMatches = [...decodedHtml.matchAll(/<img\b[^>]*>/gi)]

  for (const [imageTag] of imageMatches) {
    const src = getAttributeValue(imageTag, 'src') || getAttributeValue(imageTag, 'data-src')
    if (isUsableImageUrl(src)) {
      return src
    }
  }

  return ''
}

function getAttributeValue(source, attributeName) {
  const match = source.match(new RegExp(`\\b${attributeName}=["']([^"']+)["']`, 'i'))
  return match ? decodeXml(match[1]) : ''
}

function isUsableImageUrl(url) {
  if (!url) {
    return false
  }

  const normalized = url.startsWith('//') ? `https:${url}` : url
  return /^https?:\/\//i.test(normalized) && !/medium\.com\/_\/stat/i.test(normalized)
}

function summarizeHtml(html) {
  const text = stripHtml(html)
    .replace(/\bContinue reading on Medium\b.*$/i, '')
    .replace(/\s+/g, ' ')
    .trim()

  return truncate(text, 180) || 'Read the latest article from Medium.'
}

function stripHtml(html) {
  return decodeXml(unwrapCdata(html))
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<figure\b[\s\S]*?<\/figure>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function estimateReadTime(html) {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute))
  return `${minutes} min read`
}

function formatMonthYear(value) {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return 'Recent'
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}

function cleanTag(value) {
  const cleaned = cleanText(value)
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  return toDisplayTag(cleaned)
}

function normalizeCategory(value) {
  return cleanTag(value).toUpperCase() || 'MEDIUM'
}

function cleanText(value) {
  return decodeXml(unwrapCdata(value))
    .replace(/\s+/g, ' ')
    .trim()
}

function toDisplayTag(value) {
  const specialCases = {
    ai: 'AI',
    api: 'API',
    apis: 'APIs',
    aws: 'AWS',
    ci: 'CI',
    cd: 'CD',
    fastapi: 'FastAPI',
    irctc: 'IRCTC',
    javascript: 'JavaScript',
    ml: 'ML',
    ui: 'UI',
    ux: 'UX',
  }

  return value
    .toLowerCase()
    .split(' ')
    .filter(Boolean)
    .map(word => specialCases[word] || `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ')
}

function truncate(value, maxLength) {
  if (value.length <= maxLength) {
    return value
  }

  return `${value.slice(0, maxLength - 1).trimEnd()}...`
}

function unique(values) {
  const seen = new Set()

  return values.filter(value => {
    const key = value.toLowerCase()
    if (seen.has(key)) {
      return false
    }
    seen.add(key)
    return true
  })
}

function unwrapCdata(value = '') {
  return value.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '')
}

function decodeXml(value = '') {
  const namedEntities = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    nbsp: ' ',
    quot: '"',
  }

  return value.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (entity, code) => {
    const normalized = code.toLowerCase()

    if (normalized.startsWith('#x')) {
      return String.fromCodePoint(Number.parseInt(normalized.slice(2), 16))
    }

    if (normalized.startsWith('#')) {
      return String.fromCodePoint(Number.parseInt(normalized.slice(1), 10))
    }

    return namedEntities[normalized] || entity
  })
}

function toGeneratedSource(posts) {
  const payload = posts.map(post => ({
    title: post.title,
    description: post.description,
    url: post.url,
    platform: post.platform,
    image: post.image,
    category: post.category,
    date: post.date,
    readTime: post.readTime,
    featured: post.featured,
    tags: post.tags,
  }))

  return escapeNonAscii(`import type { BlogPost } from './portfolio-data'

// Generated by scripts/fetch-medium-blogs.mjs. Edit the fetch script, not this file.
export const mediumBlogs: BlogPost[] = ${JSON.stringify(payload, null, 2)}
`)
}

function escapeNonAscii(value) {
  return value.replace(/[^\x00-\x7F]/g, character => {
    const codePoint = character.codePointAt(0)

    if (codePoint <= 0xffff) {
      return `\\u${codePoint.toString(16).padStart(4, '0')}`
    }

    const adjusted = codePoint - 0x10000
    const high = 0xd800 + (adjusted >> 10)
    const low = 0xdc00 + (adjusted & 0x3ff)
    return `\\u${high.toString(16).padStart(4, '0')}\\u${low.toString(16).padStart(4, '0')}`
  })
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
