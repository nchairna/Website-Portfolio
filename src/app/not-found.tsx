"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorSize = 20;

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      {/* Custom cursor - hidden on mobile */}
      <motion.div
        className="fixed pointer-events-none z-[45] rounded-full bg-white/80 hidden md:block"
        style={{
          width: cursorSize,
          height: cursorSize,
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

      <div className="h-screen w-screen bg-black flex flex-col items-center justify-center relative cursor-none">
        {/* Back button */}
        <motion.button
          onClick={() => router.push('/')}
          className="absolute top-8 left-8 text-white flex items-center gap-2 cursor-none md:hover:scale-110 transition-transform"
          whileHover={{ x: -5 }}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="text-white"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="font-['Gambarino'] text-lg">Go Back</span>
        </motion.button>

        <h1 
          className="text-white text-4xl md:text-5xl mb-4 font-['Gambarino']"
        >
          Sorry :(
        </h1>
        
        <p 
          className="text-white text-[200px] md:text-[400px] leading-none font-['Gambarino']"
        >
          404
        </p>
        
        <p 
          className="text-white text-xl md:text-3xl mt-4 font-['Gambarino'] text-center px-4"
        >
          chai hasn't worked on this page yet
        </p>
      </div>
    </>
  );
} 