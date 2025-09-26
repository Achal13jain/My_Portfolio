
'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)

  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false)
  //     setFormData({ name: '', email: '', subject: '', message: '' })
  //     alert('Message sent successfully! I\'ll get back to you soon.')
  //   }, 2000)
  // }
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  // Use Formspree or Netlify Forms for contact functionality
  try {
    const response = await fetch('https://formspree.io/f/mrbybveo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Message sent successfully! I\'ll get back to you soon.')
    } else {
      alert('Failed to send message. Please try again.')
    }
  } catch (error) {
    alert('Error sending message. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'jainachal38@gmail.com',
      href: 'mailto:jainachal38@gmail.com',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 94069 18980',
      href: 'tel:+919406918980',
      color: 'from-teal-500 to-teal-700',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Indore, India',
      href: 'https://share.google/O5txBSd5LvUY74nbd',
      color: 'from-purple-600 to-teal-600',
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      href: 'https://github.com/Achal13jain',
      color: 'hover:text-purple-400',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      href: 'https://linkedin.com/in/achal-jain13',
      color: 'hover:text-teal-400',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-navy-950 to-navy-900">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-gradient mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's connect and create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 glass rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} text-white`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">{item.label}</p>
                    <p className="text-white group-hover:text-purple-300 transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex items-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className={`text-slate-400 ${social.color} transition-colors p-3 rounded-lg hover:bg-slate-800/50`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500/50"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500/50"
                    placeholder="Your Email"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500/50"
                  placeholder="Subject"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500/50 resize-none"
                  placeholder="Your message..."
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  className="w-full btn-primary px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-8 border-t border-slate-700/50"
        >
          {/* <p className="text-slate-400 mb-4">Built with Next.js, Tailwind CSS, and Framer Motion</p> */}
          <p className="text-slate-500 text-sm">© 2025 Achal Jain. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
