'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Audio Engineering',
    skills: ['DSP', 'Signal Processing', 'Audio Analysis', 'Synthesis', 'Mixing & Mastering'],
  },
  {
    name: 'Plugin Development',
    skills: ['JUCE Framework', 'C++', 'VST/AU', 'Real-time Audio', 'Parameter Automation'],
  },
  {
    name: 'Web Audio',
    skills: ['Web Audio API', 'Canvas/WebGL', 'React', 'TypeScript', 'Real-time Processing'],
  },
  {
    name: 'Music Production',
    skills: ['Ableton Live', 'Logic Pro', 'Sound Design', 'Arrangement', 'Production Techniques'],
  },
  {
    name: 'Programming',
    skills: ['C++', 'Python', 'JavaScript/TypeScript', 'Full-stack Development', 'Git'],
  },
  {
    name: 'Emerging Tech',
    skills: ['Machine Learning', 'Spatial Audio', 'Ambisonics', 'HRTF', 'Neural Networks'],
  },
]

export default function Skills() {
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
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={containerRef} id="skills" className="py-32 px-6 md:px-8 max-w-5xl mx-auto bg-dark-secondary">
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold mb-20 text-accent tracking-wider"
          style={{ fontFamily: 'Orbitron', textShadow: '0 0 20px rgba(0, 217, 102, 0.2)' }}
        >
          SKILLS
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-16"
          variants={containerVariants}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="space-y-4 group"
            >
              <h3 className="text-primary text-xs tracking-widest uppercase font-light group-hover:text-primary transition-colors" style={{ fontFamily: 'Playfair Display' }}>
                {category.name}
              </h3>
              <ul className="space-y-3 border-l border-primary/30 pl-6 group-hover:border-primary transition-colors">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-accent-muted font-light hover:text-primary transition-colors cursor-pointer"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
