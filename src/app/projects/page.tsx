'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion} from 'framer-motion'
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

const ProjectCard = ({ project, onMouseEnter, onMouseLeave }: { project: Project; onMouseEnter: () => void; onMouseLeave: () => void }) => {
  return (
    <Link 
      href={`/projects/${project.slug}`} 
      className="group block w-10/12"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="min-h-screen p-8 relative"
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor */}
      {showCursor && hoveredProject && (
        <motion.div
          className="fixed pointer-events-none z-50 bg-white text-black p-4 rounded-lg"
          animate={{
            x: mousePosition.x + 20,
            y: mousePosition.y + 20,
          }}
          transition={{ duration: 0, ease: "linear" }}
        >
          <p className="text-sm font-medium">{hoveredProject.name}</p>
          <p className="text-xs opacity-75">View Project →</p>
        </motion.div>
      )}

      <div className={`max-w-6xl mx-auto ${showCursor ? 'cursor-none' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onMouseEnter={() => {
                setShowCursor(true);
                setHoveredProject(project);
              }}
              onMouseLeave={() => {
                setShowCursor(false);
                setHoveredProject(null);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
