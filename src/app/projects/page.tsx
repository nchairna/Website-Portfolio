'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue } from 'framer-motion'
import { useState } from 'react'


interface Project {
  name: string
  slug: string
  imageUrl: string
}

const projects: Project[] = [
  {
    name: 'Biru',
    slug: 'biru',
    imageUrl: '/biru logo svg.svg'
  },
  {
    name: 'Indorder',
    slug: 'indorder',
    imageUrl: '/indorderlogo.svg'
  },
  {
    name: 'SmartBin',
    slug: 'smartbin',
    imageUrl: '/smartbinlogo.svg'
  },

]

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link href={`/projects/${project.slug}`} className="group block w-10/12">
      <motion.div 
        className="relative aspect-video rounded-xl overflow-hidden border-opacity-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src={project.imageUrl}
          alt={`${project.name} thumbnail`}
          fill
          className="object-cover"
        />
      </motion.div>
      <motion.div 
        className="mt-4 mb-8 flex items-center justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <h3 className="text-xl md:text-3xl text-white font-light">{project.name}</h3>
      </motion.div>
    </Link>
  )
}

export default function ProjectsPage() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [showCursor, setShowCursor] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    cursorX.set(event.clientX - rect.left)
    cursorY.set(event.clientY - rect.top)
  }

  return (
    <div 
      className="min-h-screen p-8"
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          display: showCursor ? 'block' : 'none'
        }}
      >
        <div className="bg-black text-white px-4 py-2 rounded-full -translate-x-1/2 -translate-y-1/2">
          View {hoveredProject?.name}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className={`max-w-6xl mx-auto ${showCursor ? 'cursor-none' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
