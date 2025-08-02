"use client";
import { motion } from 'framer-motion';

const BackButton = () => {
  return (
    <motion.a
      href="/"
      className="fixed top-8 left-8 z-50 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <svg 
        className="w-6 h-6 text-white group-hover:translate-x-[-2px] transition-transform duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </motion.a>
  );
};

export default BackButton; 