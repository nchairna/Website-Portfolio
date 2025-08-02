"use client";
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';

const BookinPage = () => {
  const skills = ["Fullstack", "React", "Node.js", "MongoDB", "Express", "JavaScript", "CSS", "HTML"];
  
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
          {/* Project Title */}
          <motion.h1 
            variants={fadeInUp}
            className="font-['PPObjectSans-Heavy'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6"
            style={{ letterSpacing: '-0.07em' }}
          >
            Bookin
          </motion.h1>

          {/* Project Description */}
          <motion.p 
            variants={fadeInUp}
            className="font-['PPObjectSans-Regular'] text-xl sm:text-2xl md:text-3xl text-white/80 mb-12 max-w-4xl"
          >
            A modern booking platform that simplifies the reservation process for businesses and customers alike, built with React and Node.js.
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
              href="https://www.figma.com/file/your-bookin-project" 
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
            Development Process
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="font-['PPObjectSans-Regular'] text-white/50">Planning & Architecture</p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 aspect-video flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="font-['PPObjectSans-Regular'] text-white/50">Final Web App</p>
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
                Traditional booking systems are often complex, slow, and provide poor user experience. 
                Businesses need a streamlined solution that makes reservations simple for both staff and customers.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="font-['PPObjectSans-Regular'] text-2xl mb-6">Solution</h3>
              <p className="font-['PPObjectSans-Regular'] text-lg text-white/80 leading-relaxed">
                Bookin provides an intuitive web application that simplifies the booking process with 
                real-time availability, instant confirmations, and a clean, responsive interface.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="font-['PPObjectSans-Regular'] text-2xl mb-6">Process</h3>
              <p className="font-['PPObjectSans-Regular'] text-lg text-white/80 leading-relaxed">
                Built a full-stack application using React for the frontend, Node.js and Express for the backend, 
                and MongoDB for data storage. Implemented real-time features and responsive design.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="font-['PPObjectSans-Regular'] text-2xl mb-6">Outcome</h3>
              <p className="font-['PPObjectSans-Regular'] text-lg text-white/80 leading-relaxed">
                Created a fully functional booking platform that demonstrates modern web development 
                practices, clean code architecture, and excellent user experience design.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Technical Details Section */}
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
            Technical Implementation
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="font-['PPObjectSans-Regular'] text-xl mb-4">Frontend</h3>
              <ul className="font-['PPObjectSans-Regular'] text-white/80 space-y-2">
                <li>• React with Hooks</li>
                <li>• Responsive CSS</li>
                <li>• Modern UI Components</li>
                <li>• State Management</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="font-['PPObjectSans-Regular'] text-xl mb-4">Backend</h3>
              <ul className="font-['PPObjectSans-Regular'] text-white/80 space-y-2">
                <li>• Node.js & Express</li>
                <li>• RESTful API</li>
                <li>• MongoDB Database</li>
                <li>• Authentication</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="font-['PPObjectSans-Regular'] text-xl mb-4">Features</h3>
              <ul className="font-['PPObjectSans-Regular'] text-white/80 space-y-2">
                <li>• Real-time Booking</li>
                <li>• User Management</li>
                <li>• Calendar Integration</li>
                <li>• Email Notifications</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BookinPage; 