"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

// import { generateViewport } from 'your-library'





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
          y: mousePosition.y - 20,
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

      <div className="relative min-h-screen pt-28">

          

    
        

      <div className="pt-22 pb-0 mb-0">
        <h2 className="text-6xl font-bold text-white mb-2 max-w-7xl mx-auto px-4 md:px-8">Guides</h2>
      </div>

        <div 
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  gap-16 md:gap-2 items-center justify-items-center relative max-w-7xl mx-auto px-4 md:px-8 ${showCursor ? 'cursor-none' : ''}`}
        >
          <div className="relative">
            <motion.button
              className="border-none bg-transparent p-0 cursor-none"
              whileHover={{ scale: 1.1 }}
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
          </div>

          <div className="flex flex-col items-center justify-center mt-4 md:mt-0">
            <motion.button
              className="border-none bg-transparent p-0 cursor-none"
              whileHover={{ scale: 1.1 }}
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
                className="sm:pt-0 w-58 h-56 lg:w-[max] lg:h-72 object-contain"
         
        
                  transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>

            <motion.button
              className="border-none bg-transparent p-0 mt-16 cursor-none"
              whileHover={{ scale: 1.1 }}
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
          </div>
          <motion.button
            className="border-none bg-transparent p-0 cursor-none"
            whileHover={{ scale: 1.1 }}
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
        </div>
      </div>
    </>
  );
};

const SocialMedia = () => {
  const handleSocialNavigation = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 relative mt-16 mb-16">
      <h1 className="text-3xl font-semibold text-gray-400 text-center mb-8">
        Connect
      </h1>

      <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
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
              className="relative w-full bg-black border border-black p-4 text-center translate-y-[2px]transition-all duration-75 ease-out group-hover:translate-y-[-8px] group-hover:translate-x-[-8px] hover:scale-102 scale-100 group-hover:border-white group-hover:border-1"
              onClick={() => handleSocialNavigation(social.url)}
            >
              <h2 className="text-xl font-bold text-white">
                {social.name}
              </h2>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrollState, setScrollState] = useState({
    hasScrolled: false,
    scrollProgress: 0
  });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          
          setScrollState({
            hasScrolled: currentScrollY > 50,
            scrollProgress: Math.min((currentScrollY / maxScroll) * 100, 100)
          });

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrollState.hasScrolled 
          ? 'bg-black/80 backdrop-blur-sm border-b border-white/10' 
          : ' border-b-0'}
      `}
    >
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5">
        <div 
          className="h-full bg-gray-400 transition-all duration-300"
          style={{ width: `${scrollState.scrollProgress}%` }}
        />
      </div>

      {/* Existing navbar content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Left menu items */}
          <div className="flex items-center gap-8">
            <a
              href="#guides"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-md font-medium"
            >
              Guides
            </a>
            <a
              href="#designs"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-md font-medium"
            >
              Designs
            </a>
          </div>

          {/* Logo/Title */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold text-white tracking-wider">
                蔡
              </h1>
              <span className="text-s text-gray-300 tracking-widest mt-1">
                CHAI
              </span>
            </div>
          </div>

          {/* Right menu items */}
          <div className="flex items-center gap-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-md font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-md font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ProjectList = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorSize = 20;

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="max-w-7xl mx-auto px-4 md:px-8 mt-32 cursor-none relative"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="fixed pointer-events-none z-[45] rounded-full"
        style={{
          width: cursorSize,
          height: cursorSize,
          backgroundColor: isHovering ? 'black' : 'rgba(255, 255, 255, 0.8)',
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

      <h2 className="text-6xl font-bold text-white mb-16">Projects</h2>
      <div className="flex flex-col">
        {[
          'Biru',
          'Indorder',
          'Agung Graha',
          'SmartBin'
        ].map((project) => (
          <div 
            key={project}
            className="group border-t border-white/20 relative origin-top cursor-none"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="transform-gpu group-hover:scale-[1.08] transition-all duration-300 ease-in-out">
              <div className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
              <div className="relative py-8 flex justify-between items-center">
                <h3 className="text-4xl font-bold text-white ml-6 group-hover:text-black transition-all duration-100 ease-in-out">
                  {project}
                </h3>
                <svg 
                  className="w-10 h-10 text-white transform mr-4 group-hover:rotate-180 group-hover:text-black transition-transform duration-500 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
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
          </div>
        ))}
        <div className="border-t border-white/20" />
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <main className="min-h-screen cursor-none">
      <Navbar />
    
      <Home />
      <ProjectList />
      <SocialMedia />
    </main>
  );
} 