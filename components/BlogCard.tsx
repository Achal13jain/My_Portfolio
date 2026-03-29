'use client'

import { motion, useMotionTemplate, useMotionValue, Variants } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { SiMedium, SiHashnode } from 'react-icons/si'
import Image from 'next/image'
import { MouseEvent } from 'react'
import { BlogPost } from '@/data/portfolio-data'

const platformConfig = {
  medium: {
    icon: SiMedium,
    color: 'from-purple-500 to-purple-700',
    gradient: 'bg-gradient-to-br from-purple-900/20 to-purple-700/20',
    border: 'border-purple-500/30',
    glow: 'shadow-purple-500/20',
    badgeText: 'text-purple-400',
    badgeBg: 'bg-purple-500/10',
    badgeBorder: 'border-purple-500/20',
    label: 'Medium'
  },
  hashnode: {
    icon: SiHashnode,
    color: 'from-teal-500 to-teal-700',
    gradient: 'bg-gradient-to-br from-teal-900/20 to-teal-700/20',
    border: 'border-teal-500/30',
    glow: 'shadow-teal-500/20',
    badgeText: 'text-teal-400',
    badgeBg: 'bg-teal-500/10',
    badgeBorder: 'border-teal-500/20',
    label: 'Hashnode'
  }
}

interface FeaturedBlogCardProps {
  post: BlogPost
  variants: Variants
}

export const FeaturedBlogCard = ({ post, variants }: FeaturedBlogCardProps) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const config = platformConfig[post.platform]
  const IconComponent = config.icon

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(168, 85, 247, 0.15),
      transparent 80%
    )
  `

  return (
    <motion.div variants={variants}>
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        className="group block relative"
      >
        {/* Spotlight Overlay */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-20"
          style={{ background: spotlightBackground }}
        />

        <div className={`glass rounded-2xl overflow-hidden flex flex-col lg:flex-row border ${config.border} hover:border-opacity-50 transition-all duration-500 relative ${config.gradient}`}>
          {/* Image Side */}
          <div className="w-full lg:w-[55%] relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden">
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            
            {/* Category Tag overlay */}
            <div className={`absolute top-6 left-6 ${config.badgeBg} backdrop-blur-md border ${config.badgeBorder} ${config.badgeText} px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase`}>
              {post.category}
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-[45%] p-8 lg:p-12 flex flex-col justify-center relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`${config.badgeBg} ${config.badgeText} border ${config.badgeBorder} px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5`}>
                <Sparkles size={14} className="fill-current" />
                Featured
              </span>
              <span className="bg-slate-800/80 text-white border border-slate-700/50 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2">
                <IconComponent size={14} />
                <span className="capitalize">{post.platform}</span>
              </span>
            </div>

            <div className="text-slate-400 text-sm font-medium mb-3">
              {post.date} &bull; {post.readTime}
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-space-grotesk font-bold text-white mb-5 group-hover:text-purple-300 transition-colors">
              {post.title}
            </h3>

            <p className="text-slate-300 leading-relaxed mb-8">
              {post.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-slate-800/80 border border-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <div className={`mt-auto ${config.badgeText} font-semibold text-sm flex items-center gap-1 transition-colors`}>
              Read on {config.label}
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          
          {/* Hover Glow Effect */}
          <div className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${config.glow} shadow-2xl -z-10`}></div>
        </div>
      </a>
    </motion.div>
  )
}

interface RegularBlogCardProps {
  post: BlogPost
  variants: Variants
}

export const RegularBlogCard = ({ post, variants }: RegularBlogCardProps) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const config = platformConfig[post.platform]
  const IconComponent = config.icon

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(45, 212, 191, 0.15),
      transparent 80%
    )
  `

  return (
    <motion.div
      variants={variants}
      className="h-full"
    >
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        className="group flex flex-col relative h-full"
      >
        {/* Spotlight Overlay */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-20"
          style={{ background: spotlightBackground }}
        />

        <div className={`glass rounded-2xl overflow-hidden flex flex-col h-full border ${config.border} hover:border-opacity-50 transition-all duration-500 relative ${config.gradient}`}>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            <div className={`absolute top-4 left-4 ${config.badgeBg} backdrop-blur-md border ${config.badgeBorder} ${config.badgeText} px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase`}>
              {post.category}
            </div>
          </div>

          <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="text-slate-400 text-xs font-medium">
                {post.date} &bull; {post.readTime}
              </div>
              <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${config.color} text-white`}>
                <IconComponent size={14} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors leading-snug">
              {post.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
              {post.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-2 mb-6">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="bg-slate-800/80 border border-slate-700/50 text-slate-300 px-2.5 py-1 rounded-full text-[10px] font-medium">
                  {tag}
                </span>
              ))}
              {post.tags.length > 2 && (
                <span className="bg-slate-800/80 border border-slate-700/50 text-slate-300 px-2.5 py-1 rounded-full text-[10px] font-medium">
                  +{post.tags.length - 2}
                </span>
              )}
            </div>

            <div className={`${config.badgeText} font-semibold text-xs flex items-center gap-1 transition-colors mt-auto pt-4 border-t border-slate-700/50`}>
              Read on {config.label}
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${config.glow} shadow-2xl -z-10`}></div>
        </div>
      </a>
    </motion.div>
  )
}
