"use client";
import { motion } from 'framer-motion';

export default function Footer() {
  const buttonBaseClasses = `
    inline-block
    px-7 py-3
    border-2 border-white
    rounded-full
    bg-transparent
    text-white
    font-['PPObjectSans-Regular']
    text-base sm:text-lg md:text-xl
    transition-all duration-300 ease-out
    cursor-pointer
    no-underline
  `.trim().replace(/\s+/g, ' ');

  const titleVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <footer className="bg-black text-white px-6 sm:px-12 md:px-24 py-16 w-full">
      <motion.div 
        className="text-center lg:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="font-['PPObjectSans-Heavy'] text-4xl sm:text-5xl md:text-6xl mb-8" 
          style={{ letterSpacing: '-0.07em' }}
          variants={titleVariants}
        >
          Contact me at
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center lg:justify-start gap-4"
          variants={staggerContainer}
        >
          <motion.a 
            href="mailto:chairnandon@gmail.com" 
            className={`${buttonBaseClasses} hover:bg-white hover:white hover:text-black`}
            variants={itemVariants}
          >
            Email
          </motion.a>
          
          <motion.a 
            href="https://linkedin.com/in/your-profile" 
            className={`${buttonBaseClasses} hover:bg-blue-600 hover:border-blue-600 hover:text-white`}
            variants={itemVariants}
          >
            LinkedIn
          </motion.a>
          
          <motion.a 
            href="https://instagram.com/your-profile" 
            className={`${buttonBaseClasses} hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 hover:text-white`}
            variants={itemVariants}
          >
            Instagram
          </motion.a>
          
          <motion.a 
            href="https://github.com/your-username" 
            className={`${buttonBaseClasses} hover:bg-gray-800 hover:border-gray-600 hover:text-white`}
            variants={itemVariants}
          >
            GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </footer>
  );
} 