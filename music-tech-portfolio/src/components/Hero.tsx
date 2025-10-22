'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section className="relative w-full min-h-screen bg-dark flex items-center justify-center overflow-hidden pt-20">
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-accent-muted text-xs tracking-widest uppercase font-light">
            Computer Science & Music
          </p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-8xl lg:text-9xl font-bold mb-12 text-accent leading-tight tracking-wider"
          style={{ fontFamily: 'Orbitron', textShadow: '0 0 30px rgba(0, 217, 102, 0.3)' }}
        >
          AYUSH UPRETI
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-12 space-y-4 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-accent font-light leading-relaxed">
            Computer Science graduate from Caldwell University (2021–2025)
          </p>
          <p className="text-base md:text-lg text-accent-muted font-light leading-relaxed">
            Audio engineer, music producer, and technologist. Engineered events, managed AV/IT infrastructure, and created music across college. Self-taught guitarist, bassist, vocalist, and producer in Ableton.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-8 justify-center flex-wrap"
        >
          <a href="#work" className="line-accent px-1 py-2 text-accent font-light hover:text-primary">
            Work
          </a>
          <a href="#about" className="line-accent px-1 py-2 text-accent font-light hover:text-primary">
            About
          </a>
          <a href="#contact" className="line-accent px-1 py-2 text-accent font-light hover:text-primary">
            Contact
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
