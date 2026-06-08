'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SiMedium } from 'react-icons/si'

import { blogs } from '@/data/portfolio-data'
import { FeaturedBlogCard, RegularBlogCard } from './BlogCard'

const BlogsSection = () => {
  const mediumProfileUrl = 'https://medium.com/@jainachal38'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 100,
      },
    },
  }

  const latestPosts = blogs.slice(0, 4)
  const featuredPost = latestPosts.find(b => b.featured) || latestPosts[0]
  const otherPosts = latestPosts.filter(b => b !== featuredPost)

  return (
    <section id="blogs" className="relative">
      {/* Top Divider */}
      <div className="w-full h-px bg-slate-800/60"></div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-[pulse_2s_infinite] [animation-delay:2s]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-gradient mb-6">
            Read My Articles
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Thoughts on AI/ML, cloud infrastructure, and developer tooling. Learning in public.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Featured Post */}
          {featuredPost && (
            <FeaturedBlogCard post={featuredPost} variants={itemVariants} />
          )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <RegularBlogCard
                key={post.title}
                post={post}
                variants={itemVariants}
              />
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex justify-center"
          >
            <a
              href={mediumProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-500/30 bg-navy-800 px-6 py-3 text-sm font-semibold text-purple-300 shadow-lg shadow-purple-500/10 transition-all duration-300 hover:border-purple-400/50 hover:bg-navy-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 sm:px-8"
            >
              <SiMedium size={18} />
              <span>Read More on Medium</span>
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full h-px bg-slate-800/60 absolute bottom-0"></div>
    </section>
  )
}

export default BlogsSection
