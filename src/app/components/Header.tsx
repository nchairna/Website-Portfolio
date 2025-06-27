"use client";

// This file will be moved to src/app/components/Header.tsx for better organization.
import { motion } from 'framer-motion';

const chaiLetters = 'chai.'.split('');

const letterVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const navVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7 + i * 0.18, // start after chai finishes
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const navItems = ['projects', 'resume', 'contact'];

const Header = () => {
  return (
    <header className="bg-black text-white px-6 sm:px-12 md:px-24 pt-8 sm:pt-12 pb-8 sm:pb-12 w-full">
      {/* Navigation */}
      <nav className="flex justify-center lg:justify-start gap-6 sm:gap-12 md:gap-20 mb-24 sm:mb-48 md:mb-72">
        {navItems.map((item, i) => (
          <motion.a
            key={item}
            href={`/${item.toLowerCase()}`}
            className="font-['PPObjectSans-Regular'] text-sm sm:text-lg md:text-xl lg:text-2xl hover:underline transition-all"
            initial="hidden"
            animate="visible"
            custom={i}
            variants={navVariants}
          >
            {item}
          </motion.a>
        ))}
      </nav>
      {/* Main Title */}
      <div>
        <h1
          className="font-['PPObjectSans-Heavy'] text-white text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] leading-none text-center lg:text-left"
          style={{ letterSpacing: '-0.07em' }}
        >
          {chaiLetters.map((char, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              custom={i}
              variants={letterVariants}
              style={{ display: 'inline-block' }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
      </div>
    </header>
  );
};

export default Header; 