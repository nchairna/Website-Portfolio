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

const Header = () => {
  return (
    <div className="relative w-full">
      <nav className="w-full px-8 pt-8">
        <ul className="flex justify-center gap-20 font-['Outfit'] font-semibold text-white text-2xl">
          <li>
            <Link 
              href="/projects" 
              className="relative hover:opacity-100 transition-opacity after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-8px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              projects
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="relative hover:opacity-100 transition-opacity after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-8px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              contact
            </Link>
          </li>
          <li>
            <Link 
              href="/resume" 
              className="relative hover:opacity-100 transition-opacity after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-8px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              resume
            </Link>
          </li>
        </ul>
      </nav>

      <div className="h-[50vh] flex items-center justify-center">
        <motion.h1 
          className="font-['CabinetGrotesk-Black'] text-white text-[16vw] leading-none flex"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            },
            hidden: {}
          }}
          style={{
            width: '100vw',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          {'Chairnando'.split('').map((letter, index) => (
            <motion.span
              key={index}
              className="cursor-pointer"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100
                  }
                }
              }}
              whileHover={{ 
                scale: 1.2,
                transition: {
                  stiffness: 400,
                  damping: 10
                }
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
};

const ProjectList = () => {
  // Define project configurations with both background and text hover colors
  const projects = [
    { 
      name: 'Biru', 
      bgHoverColor: 'rgb(59, 130, 246)',    // White bg
      textHoverColor: 'rgb(255, 255, 255)'    // Blue text
    },
    { 
      name: 'Pilly', 
      bgHoverColor: '#ffffff',    // Dark gray bg
      textHoverColor: '#000000'     // Pink text
    },
    { 
      name: 'Indorder', 
      bgHoverColor: '#2f2f2f',    // Dark gray bg
      textHoverColor: '#F6F930'     // Pink text
    },
    { 
      name: 'SLPR', 
      bgHoverColor: '#d7fc01' ,    
      textHoverColor: '#000000'     // Green text
    },
    { 
      name: 'SmartBin', 
      bgHoverColor: '#08B651',    // White bg
      textHoverColor: '#E4FA84'     // Yellow text
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="w-[80vw] mx-auto relative"
    >
    
      
      <motion.div 
        className="flex flex-col"
        variants={staggerContainer}
      >
        {projects.map((project) => (
          <motion.div 
            key={project.name}
            variants={fadeInUp}
            className="group relative origin-top w-full"
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
                      : project.name === 'SmartBin'
                      ? 'Chillax-Semibold'
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
        ))}
      </motion.div>
    </motion.div>
  );
};

const SocialMedia = () => {
  const handleSocialNavigation = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="w-[80vw] mx-auto px-4 md:px-8 relative mt-44 mb-16"
    >
      <motion.div 
        variants={staggerContainer}
        className="grid grid-cols-2 gap-6 max-w-md ml-0"
      >
        {[
          { 
            name: 'LinkedIn', 
            url: 'https://www.linkedin.com/in/Nicholas-Chairnando',
            bgColor: 'bg-[#0A66C2]', // LinkedIn brand blue
            textHoverColor: '#0A66C2',    // Same as background for text
            icon: '/linkedin-icon.png'
          },
          { 
            name: 'Instagram', 
            url: 'https://www.instagram.com/archaiived',
            bgColor: 'bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584]', // Instagram gradient
            textHoverColor: '#E1306C',    // Using middle gradient color for text
            icon: '/instagram-icon.png'
          }
        ].map((social, index) => (
          <motion.div 
            key={social.name} 
            className="relative group"
            initial={{ 
              y: 2,
              x: 1,
              scale: 0.98
            }}
            whileInView={{ 
              y: -2,
              x: -1,
              scale: 1
            }}
            viewport={{ once: false }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.2,
              ease: "easeOut"
            }}
          >
            <motion.div 
              className={`absolute inset-0 border ${social.bgColor} opacity-100 transition-all duration-75 ease-out group-hover:opacity-100`}
              initial={{ 
                y: 2,
                x: 3,
                opacity: 1
              }}
              whileInView={{ 
                y: 0,
                x: 0,
                opacity: 1
              }}
              viewport={{ once: false }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.2,
                ease: "easeOut"
              }}
            />
            <button
              className="relative w-full bg-black border border-black p-4 text-center translate-y-[4px]transition-all duration-75 ease-out group-hover:translate-y-[-16px] group-hover:translate-x-[-10px] hover:scale-102 scale-100 group-hover:border-gray-500 group-hover:border-1"
              onClick={() => handleSocialNavigation(social.url)}
            >
              <h2 
                style={{ 
                  color: 'white',
                  '--hover-color': social.textHoverColor
                } as React.CSSProperties}
                className="text-2xl font-bold text-white font-['Outfit'] transition-colors duration-75 group-hover:text-[var(--hover-color)]"
              >
                {social.name}
              </h2>
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default function Page() {
  return (
    <main>
      <Header />
      <ProjectList />
      <SocialMedia />
    </main>
  );
} 