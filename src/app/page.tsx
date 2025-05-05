"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

// import { generateViewport } from 'your-library'

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

const Home = () => {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [showArrow, setShowArrow] = useState(true);
 

  const cursorSize = 20; // Size of the default circle cursor

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 

  const handleGuideNavigation = (guide: string) => {
    router.push(`/guides/${guide.toLowerCase()}`);
  };

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[45] rounded-full bg-white/80"
        style={{
          width: cursorSize,
          height: cursorSize,
          display: showCursor ? 'none' : 'block'
        }}
        animate={{
          x: mousePosition.x - cursorSize/2,
          y: mousePosition.y - cursorSize/2,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />

      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 90,
          scale: showCursor ? 1 : 0,
          opacity: showCursor ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        <div className="bg-white font-bold text-lg text-black px-5 py-3 rounded-full">
          Chai&apos;s {hoverText} Guide
        </div>
      </motion.div>

     
      <motion.div
        key={showArrow ? "visible" : "hidden"}
        className="fixed bottom-24 right-8 pointer-events-none z-40 whitespace-nowrap"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: showArrow ? 1 : 0,
          y: showArrow ? [0, 15, 0] : 0
        }}

        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: {
            duration: 0.5,
            ease: "easeInOut"
          }
        }}
      >
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className="text-white"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>

    
      {/* Existing Guides Section */}
      <div className="relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-4 pb-0 mb-0"
        >
          <svg viewBox="0 0 500 100" className="w-full h-48 mt-18 mb-3">
            <path
              id="curve"
              d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
              fill="transparent"
            />
            <text className="fill-white" style={{ fontFamily: 'Gambarino' }}>
              <textPath href="#curve" startOffset="50%" textAnchor="middle" className="text-3xl md:text-3xl lg:text-3xl">
                Chai&apos;s Portfolio
              </textPath>
            </text>
          </svg>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-16 md:gap-2 items-center justify-items-center relative max-w-7xl mx-auto px-4 md:px-8 -mt-16 cursor-none ${showCursor ? 'cursor-none' : ''}`}
        >
          <motion.div variants={fadeInUp} className="relative">
            <motion.button
              className="border-none bg-transparent p-0 cursor-none"
              whileHover={{ 
                scale: 1.1,
                rotate: 10,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }
              }}
              onClick={() => handleGuideNavigation('coffee')}
              onMouseEnter={() => {
                setShowCursor(true);
                setHoverText("Coffee");
              }}
              onMouseLeave={() => {
                setShowCursor(false);
                setHoverText("");
              }}
            >
              <motion.img
                src="/cortado_processed.jpg"
                alt="Coffee"
                className="lg:w-[max] lg:h-[max] object-contain"
          
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                  }}
                />
            </motion.button>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center mt-4 md:mt-0">
            <motion.button
              className="border-none bg-transparent p-0 cursor-none"
              whileHover={{ 
                scale: 1.1,
                rotate: -10,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }
              }}
              onClick={() => handleGuideNavigation('food')}
              onMouseEnter={() => {
                setShowCursor(true);
                setHoverText("Food");
              }}
              onMouseLeave={() => {
                setShowCursor(false);
                setHoverText("");
              }}
            >
              <motion.img
                src="/panwebp.webp"
                alt="Pan"
                className="sm:pt-0 w-80 h-64 lg:w-[max] lg:h-72 object-contain"
         
        
                  transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>

            <motion.button
              className="border-none bg-transparent p-0 mt-16 cursor-none"
              whileHover={{ 
                scale: 1.1,
                rotate: 10,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }
              }}
              onClick={() => handleGuideNavigation('music')}
              onMouseEnter={() => {
                setShowCursor(true);
                setHoverText("Music");
              }}
              onMouseLeave={() => {
                setShowCursor(false);
                setHoverText("");
              }}
            >
              <motion.img
                src="/airpods.webp"
                alt="Headphones"
                className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
             
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.div>
          <motion.div variants={fadeInUp} className="relative">
            <motion.button
              className="border-none bg-transparent p-0 cursor-none"
              whileHover={{ 
                scale: 1.1,
                rotate: -10,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }
              }}
              onClick={() => handleGuideNavigation('snowboard')}
              onMouseEnter={() => {
                setShowCursor(true);
                setHoverText("Snowboard");
              }}
              onMouseLeave={() => {
                setShowCursor(false);
                setHoverText("");
              }}
            >
              <motion.img
                src="/snowboard.png"
                alt="Snowboard"
                className="mt-16 lg:mt-28 lg:w-max lg:h-[100] object-contain"
               
      
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </>
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
      className="max-w-7xl mx-auto px-4 md:px-8 relative mt-16 mb-16 cursor-none"
    >
      <motion.div 
        variants={fadeInUp}
        className="w-full h-24 mt-8 mb-3"
      >
        <svg viewBox="0 0 500 100" className="w-full h-full">
          <path
            id="curve-connect"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
            fill="transparent"
          />
          <text className="fill-white" style={{ fontFamily: 'Gambarino' }}>
            <textPath href="#curve-connect" startOffset="50%" textAnchor="middle" className="text-3xl md:text-3xl lg:text-3xl">
              Connect
            </textPath>
          </text>
        </svg>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        className="grid grid-cols-2 gap-6 max-w-md mx-auto cursor-none"
      >
        {[
          { 
            name: 'LinkedIn', 
            url: 'https://www.linkedin.com/in/your-profile',
            icon: '/linkedin-icon.png' // Add your LinkedIn icon
          },
          { 
            name: 'Instagram', 
            url: 'https://www.instagram.com/your-profile',
            icon: '/instagram-icon.png' // Add your Instagram icon
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
              className="absolute inset-0 border bg-white border-gray-500 opacity-100 transition-all duration-75 ease-out group-hover:opacity-0"
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
              className="cursor-none relative w-full bg-black border border-black p-4 text-center translate-y-[2px]transition-all duration-75 ease-out group-hover:translate-y-[-8px] group-hover:translate-x-[-8px] hover:scale-102 scale-100 group-hover:border-white group-hover:border-1"
              onClick={() => handleSocialNavigation(social.url)}
            >
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Gambarino' }}>
                {social.name}
              </h2>
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
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
      className="w-[80vw] mx-auto cursor-none relative mt-32"
    >
    
      
      <motion.div 
        className="flex flex-col"
        variants={staggerContainer}
      >
        {projects.map((project) => (
          <motion.div 
            key={project.name}
            variants={fadeInUp}
            className="group relative origin-top cursor-none w-full"
          >
            <div className="transform-gpu group-hover:scale-[1.08] transition-all duration-300 ease-in-out border-b border-white/20 group-hover:border-opacity-0">
              <div 
                className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-in-out"
                style={{ backgroundColor: project.bgHoverColor }}
              />
              <div className="relative py-12 flex justify-between items-center pl-16 pr-16">
                <h3 
                  className={`font-bold transition-colors duration-100 ease-in-out text-white group-hover:text-[var(--hover-color)] ${
                    project.name === 'SLPR' ? 'text-6xl' : 'text-5xl'
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
                  className="w-12 h-12 text-white transform group-hover:rotate-180 transition-all duration-500 ease-in-out group-hover:text-[var(--hover-color)]"
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

export default function Page() {
  return (
    <main className="min-h-screen">
      <Home />
      <ProjectList />
      <SocialMedia />
    </main>
  );
} 