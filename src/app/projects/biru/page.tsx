"use client";
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';

const BiruPage = () => {
  const skills = ["Mobile App", "Market Research", "Prototyping", "User Research", "UI/UX Design", "Figma"];
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
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

  return (
    <div className="bg-black text-white min-h-screen">
      <BackButton />
      
      {/* Hero Section */}
      <section className="px-6 sm:px-12 md:px-24 py-16 md:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Award Badge */}
          <motion.div 
            variants={fadeInUp}
            className="inline-block bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <span className="text-white/80 font-['PPObjectSans-Regular'] text-sm">
              Beall-Butterworth 3rd Place
            </span>
          </motion.div>

          {/* Project Title */}
          <motion.h1 
            variants={fadeInUp}
            className="font-['PPObjectSans-Heavy'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6"
            style={{ letterSpacing: '-0.07em' }}
          >
            Biru
          </motion.h1>

          {/* Project Description */}
          <motion.p 
            variants={fadeInUp}
            className="font-['PPObjectSans-Regular'] text-xl sm:text-2xl md:text-3xl text-white/80 mb-12 max-w-4xl"
          >
            Matching housemaids and households in Indonesia through an innovative mobile platform that streamlines the hiring process and ensures quality matches.
          </motion.p>

          {/* Skills */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap gap-3 mb-12"
          >
            {skills.map((skill, index) => (
              <Button key={index} className="text-sm px-4 py-2">
                {skill}
              </Button>
            ))}
          </motion.div>

          {/* Figma Link */}
          <motion.div variants={fadeInUp}>
            <a 
              href="https://www.figma.com/file/your-biru-project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 group"
            >
              <span className="font-['PPObjectSans-Regular'] text-lg">View Figma Design</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Project Images Section */}
      <section className="px-6 sm:px-12 md:px-24 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-['PPObjectSans-Heavy'] text-3xl sm:text-4xl md:text-5xl mb-12"
            style={{ letterSpacing: '-0.07em' }}
          >
            Design Process
          </motion.h2>

          {/* Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Placeholder for images */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 aspect-video flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-['PPObjectSans-Regular'] text-white/50">User Research & Insights</p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 aspect-video flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-['PPObjectSans-Regular'] text-white/50">Final Mobile App</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Project Details Section */}
      <section className="px-6 sm:px-12 md:px-24 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-['PPObjectSans-Heavy'] text-3xl sm:text-4xl md:text-5xl mb-12"
            style={{ letterSpacing: '-0.07em' }}
          >
            Project Overview
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp}>
              <h3 className="font-['PPObjectSans-Regular'] text-2xl mb-6">Challenge</h3>
              <p className="font-['PPObjectSans-Regular'] text-lg text-white/80 leading-relaxed">
                The domestic help industry in Indonesia faces significant challenges with trust, 
                verification, and matching quality. Families struggle to find reliable housemaids, 
                while housemaids face difficulties finding fair employment opportunities.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="font-['PPObjectSans-Regular'] text-2xl mb-6">Solution</h3>
              <p className="font-['PPObjectSans-Regular'] text-lg text-white/80 leading-relaxed">
                Biru creates a trusted platform that connects verified housemaids with families 
                through a comprehensive matching system, background verification, and transparent 
                communication tools.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="font-['PPObjectSans-Regular'] text-2xl mb-6">Process</h3>
              <p className="font-['PPObjectSans-Regular'] text-lg text-white/80 leading-relaxed">
                Conducted extensive user research with both families and housemaids, created 
                wireframes and prototypes, tested with real users, and iterated based on feedback 
                to create an intuitive and trustworthy platform.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="font-['PPObjectSans-Regular'] text-2xl mb-6">Outcome</h3>
              <p className="font-['PPObjectSans-Regular'] text-lg text-white/80 leading-relaxed">
                Successfully designed a mobile app that addresses the core pain points of both 
                user groups, earning 3rd place in the Beall-Butterworth competition for innovative 
                solutions to real-world problems.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BiruPage; 