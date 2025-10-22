'use client'

import { motion } from 'framer-motion'
import React, { useRef, useEffect, useState } from 'react'

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section ref={containerRef} id="about" className="py-32 px-6 md:px-8 max-w-5xl mx-auto bg-dark">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold mb-20 text-accent tracking-wider"
          style={{ fontFamily: 'Orbitron', textShadow: '0 0 20px rgba(0, 217, 102, 0.2)' }}
        >
          ABOUT
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-20">
          <motion.div variants={itemVariants} className="space-y-8">
            <p className="text-accent font-light text-lg leading-relaxed hover:text-primary transition-colors">
              I&apos;m a computer scientist and creative technologist. At Caldwell University, I bridged the gap between music and technology—engineering events, managing AV/IT infrastructure, and producing music in my apartment studio.
            </p>
            <p className="text-accent font-light text-lg leading-relaxed hover:text-primary transition-colors">
              I&apos;m self-taught in guitar, bass, vocals, and music production. I create in Ableton, mixing and mastering my own work. My passion lies at the intersection of code, sound, and art—building tools and experiences that matter.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-12">
            <div className="group">
              <h3 className="text-primary text-xs tracking-widest uppercase font-light mb-6 group-hover:text-primary transition-colors">
                Skills
              </h3>
              <ul className="space-y-3 border-l border-primary/30 pl-6 group-hover:border-primary transition-colors">
                <li className="text-accent-muted font-light hover:text-primary transition-colors cursor-pointer">Audio Engineering & Event Management</li>
                <li className="text-accent-muted font-light hover:text-primary transition-colors cursor-pointer">Music Production & Mixing</li>
                <li className="text-accent-muted font-light hover:text-primary transition-colors cursor-pointer">Full-stack Development</li>
                <li className="text-accent-muted font-light hover:text-primary transition-colors cursor-pointer">AV/IT Infrastructure</li>
                <li className="text-accent-muted font-light hover:text-primary transition-colors cursor-pointer">Guitar, Bass, Vocals</li>
              </ul>
            </div>

            <div className="group">
              <h3 className="text-primary text-xs tracking-widest uppercase font-light mb-6">
                Education
              </h3>
              <p className="text-accent-muted font-light group-hover:text-accent transition-colors">
                B.S. Computer Science<br />
                Caldwell University<br />
                2021–2025
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
