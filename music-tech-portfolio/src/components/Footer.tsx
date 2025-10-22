'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/20 py-16 px-6 md:px-8 bg-dark">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-12">
          <div>
            <p className="text-primary text-xs tracking-widest uppercase font-light mb-2">
              Ayush Upreti
            </p>
            <p className="text-accent-muted font-light text-sm hover:text-accent transition-colors">
              Computer Science & Music
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#about" className="line-accent text-accent-muted font-light text-sm hover:text-primary">
              About
            </a>
            <a href="#work" className="line-accent text-accent-muted font-light text-sm hover:text-primary">
              Work
            </a>
            <a href="#contact" className="line-accent text-accent-muted font-light text-sm hover:text-primary">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-accent-muted text-xs font-light">
            © {currentYear} Ayush Upreti. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
