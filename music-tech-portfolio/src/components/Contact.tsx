'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-8 max-w-5xl mx-auto bg-dark">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold mb-20 text-accent tracking-wider"
          style={{ fontFamily: 'Orbitron', textShadow: '0 0 20px rgba(0, 217, 102, 0.2)' }}
        >
          CONTACT
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-20"
        >
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <p className="text-primary text-xs tracking-widest uppercase font-light mb-3">Email</p>
              <a
                href="mailto:ayush@example.com"
                className="line-accent text-accent text-lg font-light hover:text-primary"
              >
                hello@ayushupreti.com
              </a>
            </div>

            <div>
              <p className="text-primary text-xs tracking-widest uppercase font-light mb-4">Connect</p>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="line-accent text-accent font-light hover:text-primary"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="line-accent text-accent font-light hover:text-primary"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="line-accent text-accent font-light hover:text-primary"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-8"
            variants={itemVariants}
          >
            <div>
              <label className="block text-xs font-light tracking-widest uppercase text-accent-muted mb-3">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 bg-transparent border-b border-primary/30 focus:border-primary focus:outline-none transition-colors text-accent font-light placeholder-accent-muted/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-xs font-light tracking-widest uppercase text-accent-muted mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 bg-transparent border-b border-primary/30 focus:border-primary focus:outline-none transition-colors text-accent font-light placeholder-accent-muted/50"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-xs font-light tracking-widest uppercase text-accent-muted mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-0 py-3 bg-transparent border-b border-primary/30 focus:border-primary focus:outline-none transition-colors text-accent font-light placeholder-accent-muted/50 resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="line-accent px-1 py-2 text-accent font-light inline-block hover:text-primary"
            >
              Send Message →
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 border-b border-primary/30 text-primary text-center font-light"
              >
                ✓ Message sent successfully!
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  )
}
