"use client";
import { motion } from "framer-motion";
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ProjectsPage() {
  const projects = [
    { 
      name: 'Biru', 
      bgHoverColor: 'rgb(59, 130, 246)',
      textHoverColor: 'rgb(255, 255, 255)',
      slug: 'biru',
      isInternal: true
    },
    { 
      name: 'Pilly', 
      bgHoverColor: '#ffffff',
      textHoverColor: '#000000',
      slug: 'pilly',
      externalLink: 'https://devpost.com/software/pilly-kbw8tm'
    },
    { 
      name: 'Indorder', 
      bgHoverColor: '#2f2f2f',
      textHoverColor: '#F6F930',
      slug: 'indorder',
      externalLink: 'https://devpost.com/software/indorder'
    },
    { 
      name: 'SLPR', 
      bgHoverColor: '#d7fc01',
      textHoverColor: '#000000',
      slug: 'slpr',
      externalLink: 'https://www.figma.com/design/DyHBvP0sMToYrenTukUY03/SLPR?node-id=0-1&t=UmKMkKMrSnCHCZXN-1'
    }
  ];

  const handleProjectClick = (project: { isInternal?: boolean; externalLink?: string; slug: string }) => {
    if (project.isInternal) {
      window.location.href = `/projects/${project.slug}`;
    } else if (project.externalLink) {
      window.open(project.externalLink, '_blank');
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <nav className="w-full px-8 pt-8">
        <Link 
          href="/"
          className="font-['Outfit'] font-semibold text-white text-2xl relative hover:opacity-100 transition-opacity after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-8px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
        >
          back
        </Link>
      </nav>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="w-[80vw] mx-auto mt-20"
      >
        <motion.div 
          className="flex flex-col"
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <div key={project.name}>
              <motion.div 
                variants={fadeInUp}
                className="group relative origin-top w-full cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="transform-gpu group-hover:scale-[1.08] transition-all duration-300 ease-in-out border-b border-white/20 group-hover:border-opacity-0">
                  <div 
                    className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-in-out"
                    style={{ backgroundColor: project.bgHoverColor }}
                  />
                  <div className="relative py-12 flex justify-between items-center pl-4 pr-4 md:pl-16 md:pr-16">
                    <h3 
                      className={`font-bold transition-colors duration-100 ease-in-out text-white group-hover:text-[var(--hover-color)] text-3xl md:text-5xl w-full text-center md:text-left ${
                        project.name === 'SLPR' ? 'md:text-6xl' : 'md:text-5xl'
                      }`}
                      style={{ 
                        '--hover-color': project.textHoverColor,
                        fontFamily: project.name === 'SLPR' 
                          ? 'BiggerDisplay' 
                          : project.name === 'Pilly'
                          ? 'Nunito-Black'
                          : 'inherit',
                        letterSpacing: project.name === 'SLPR' ? '0.05em' : 'inherit'
                      } as React.CSSProperties}
                    >
                      {project.name}
                    </h3>
                    
                    <svg 
                      className="w-12 h-12 text-white transform group-hover:rotate-180 transition-all duration-500 ease-in-out group-hover:text-[var(--hover-color)] hidden md:block"
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      style={{
                        '--hover-color': project.textHoverColor
                      } as React.CSSProperties}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
} 