'use client'

import { motion } from 'framer-motion'
import React, { useRef, useEffect, useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  category: string
  tags: string[]
  image?: string
  audioUrl?: string
  videoUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Harmonic Resonator Plugin',
    description: 'A sophisticated VST/AU plugin that creates lush harmonic layers through advanced frequency analysis and synthesis.',
    category: 'Plugin Development',
    tags: ['C++', 'JUCE', 'DSP', 'Real-time Audio'],
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%231a1a1a" width="400" height="300"/%3E%3Ccircle cx="200" cy="150" r="80" fill="%2300d9ff" opacity="0.2"/%3E%3Ccircle cx="200" cy="150" r="60" fill="%23ff006e" opacity="0.2"/%3E%3C/svg%3E',
  },
  {
    id: 2,
    title: 'Interactive Audio Visualizer',
    description: 'Real-time audio visualization engine using Web Audio API with customizable visual effects and responsive design.',
    category: 'Web Development',
    tags: ['Web Audio API', 'Canvas', 'React', 'TypeScript'],
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%231a1a1a" width="400" height="300"/%3E%3Crect x="50" y="100" width="20" height="100" fill="%2300d9ff"/%3E%3Crect x="90" y="80" width="20" height="120" fill="%23ff006e"/%3E%3Crect x="130" y="120" width="20" height="80" fill="%2300d9ff"/%3E%3C/svg%3E',
  },
  {
    id: 3,
    title: 'Granular Synthesis Engine',
    description: 'Advanced granular synthesis tool for experimental sound design with real-time parameter control and preset management.',
    category: 'Sound Design',
    tags: ['DSP', 'Synthesis', 'Audio Processing'],
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%231a1a1a" width="400" height="300"/%3E%3Ccircle cx="100" cy="100" r="30" fill="%2300d9ff" opacity="0.3"/%3E%3Ccircle cx="200" cy="150" r="40" fill="%23ff006e" opacity="0.3"/%3E%3Ccircle cx="300" cy="120" r="35" fill="%2300d9ff" opacity="0.3"/%3E%3C/svg%3E',
  },
  {
    id: 4,
    title: 'Spatial Audio Processor',
    description: 'Immersive spatial audio processing using Ambisonics and HRTF for 3D sound positioning and binaural rendering.',
    category: 'Audio Engineering',
    tags: ['Ambisonics', 'HRTF', 'Spatial Audio', 'Web Audio'],
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%231a1a1a" width="400" height="300"/%3E%3Cpath d="M200 50 L250 150 L200 250 L150 150 Z" fill="%2300d9ff" opacity="0.2" stroke="%23ff006e" stroke-width="2"/%3E%3C/svg%3E',
  },
  {
    id: 5,
    title: 'ML-Powered Audio Classification',
    description: 'Machine learning model for real-time audio classification and genre detection using neural networks.',
    category: 'AI/ML',
    tags: ['TensorFlow', 'Python', 'ML', 'Audio Analysis'],
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%231a1a1a" width="400" height="300"/%3E%3Crect x="60" y="80" width="30" height="30" fill="%2300d9ff"/%3E%3Crect x="120" y="60" width="30" height="50" fill="%23ff006e"/%3E%3Crect x="180" y="100" width="30" height="20" fill="%2300d9ff"/%3E%3Crect x="240" y="70" width="30" height="40" fill="%23ff006e"/%3E%3C/svg%3E',
  },
  {
    id: 6,
    title: 'Collaborative DAW Interface',
    description: 'Web-based collaborative music production interface with real-time synchronization and multi-user editing.',
    category: 'Web Development',
    tags: ['WebSockets', 'React', 'Real-time Sync', 'DAW'],
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%231a1a1a" width="400" height="300"/%3E%3Cline x1="50" y1="150" x2="350" y2="150" stroke="%2300d9ff" stroke-width="2"/%3E%3Ccircle cx="100" cy="150" r="8" fill="%23ff006e"/%3E%3Ccircle cx="200" cy="150" r="8" fill="%2300d9ff"/%3E%3Ccircle cx="300" cy="150" r="8" fill="%23ff006e"/%3E%3C/svg%3E',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
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
    <section ref={containerRef} id="work" className="py-32 px-6 md:px-8 max-w-6xl mx-auto bg-dark">
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
          WORK
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="card-minimal hover-lift rounded-lg overflow-hidden h-full flex flex-col">
                <div className="relative w-full h-56 bg-dark-secondary overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-accent-muted text-xs tracking-widest uppercase font-light mb-4 group-hover:text-primary transition-colors">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold mb-4 text-accent group-hover:text-primary transition-colors tracking-wide" style={{ fontFamily: 'Orbitron' }}>
                    {project.title}
                  </h3>
                  <p className="text-accent-muted font-light text-base mb-6 flex-1 leading-relaxed group-hover:text-accent transition-colors">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-accent-muted border border-primary/20 font-light group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-accent/20 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="card-minimal rounded-lg max-w-2xl w-full p-10 max-h-[90vh] overflow-y-auto bg-dark"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-accent-muted text-xs tracking-widest uppercase font-light mb-3">
                  {selectedProject.category}
                </p>
                <h3 className="text-4xl font-bold text-accent tracking-wide" style={{ fontFamily: 'Orbitron' }}>
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-accent-muted hover:text-accent text-2xl font-light"
              >
                ✕
              </button>
            </div>

            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-lg mb-8 h-72 object-cover"
              />
            )}

            <p className="text-accent font-light mb-8 leading-relaxed text-lg">
              {selectedProject.description}
            </p>

            <div className="mb-8">
              <h4 className="text-primary text-xs tracking-widest uppercase font-light mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-primary/10 text-accent-muted border border-primary/20 text-sm font-light hover:bg-primary/20 hover:border-primary/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a href="#" className="line-accent px-1 py-2 text-accent inline-block hover:text-primary">
              View Full Project →
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
