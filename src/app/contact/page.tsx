'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 pt-52 pb-16 sticky top-0">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img 
                src="/myface.svg" 
                alt="Nicholas Chairnando" 
                className="w-full max-w-[320px] h-auto mx-auto mb-6 object-cover"
              />
            </motion.div>

            <div className="space-y-6 text-center md:text-left">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold sticky top-0 bg-black py-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                Nicholas Chairnando
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                <a 
                  href="mailto:chairnandon@gmail.com" 
                  className="text-lg md:text-xl font-light hover:underline text-white hover:text-gray-300 transition-colors"
                >
                  chairnandon@gmail.com
                </a>
              </motion.div>

              <motion.div 
                className="flex justify-center md:justify-start space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                <a href="https://www.linkedin.com/in/nicholas-chairnando/" target="_blank" rel="noopener noreferrer">
                  <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
                </a>
                <a href="https://github.com/nchairna" target="_blank" rel="noopener noreferrer">
                  <img src="/githubs.svg" alt="GitHub" className="w-8 h-8" />
                </a>
                <a href="https://www.instagram.com/archaiived/" target="_blank" rel="noopener noreferrer">
                  <img src="/instasvg.svg" alt="Instagram" className="w-8 h-8" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}