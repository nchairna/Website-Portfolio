"use client";
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';

const PillyPage = () => {
  const skills = ["Figma", "User Testing",  "User Research", "Pitching", "Prototyping", "Inclusive Design"];
  
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
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Award Badge */}
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {/* Medal circle */}
              <circle cx="12" cy="16" r="4" strokeWidth="2"/>
              {/* Ribbon left */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 12L6 4"/>
              {/* Ribbon right */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 12L18 4"/>
            </svg>
            <span className="text-white/80 font-['PPObjectSans-Regular'] text-xs sm:text-sm">
              UCI Designathon 2nd Place
            </span>
          </motion.div>

          {/* Project Title */}
          <motion.h1 
            variants={fadeInUp}
            className="font-['PPObjectSans-Heavy'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6"
            style={{ letterSpacing: '-0.07em' }}
          >
            Pilly
          </motion.h1>

          {/* Project Description */}
          <motion.p 
            variants={fadeInUp}
            className="font-['PPObjectSans-Regular'] text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 sm:mb-12 max-w-4xl leading-relaxed"
          >
            Meet Pilly, your friendly companion for medication management. Like Alexa for your pills, Pilly talks, expresses emotions, and becomes a universal visual language to make taking medication simple, safe, and engaging for everyone.
          </motion.p>

          {/* Skills */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12"
          >
            {skills.map((skill, index) => (
              <Button key={index} className="text-xs sm:text-sm lg:text-md px-3 sm:px-4 py-1.5 sm:py-2 lg:py-4 lg:px-6">
                {skill}
              </Button>
            ))}
          </motion.div>

          {/* Figma Link */}
          <motion.div variants={fadeInUp}>
            <a 
              href="https://www.figma.com/design/kANUYBo3sayVl97II2zMf6/PILLY?node-id=24-81&t=xjgJDTv0rpOnDLur-1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 text-white/80 hover:text-white transition-colors duration-300 group"
            >
              <span className="font-['PPObjectSans-Regular'] text-base sm:text-lg">View Figma Design</span>
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" 
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
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-['PPObjectSans-Heavy'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12"
            style={{ letterSpacing: '-0.07em' }}
          >
            Design Assets
          </motion.h2>

                     {/* Image Grid */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                           {/* Problem Discovery - Pilly Logo */}
              <motion.div variants={fadeInUp}>
                <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden mb-3 sm:mb-4">
                  <div className="w-full h-64 sm:h-72 md:h-82">
                    <img 
                      src="/images/Pilly/Pilly logo.png" 
                      alt="Pilly Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-['PPObjectSans-Regular'] text-white/80 text-base sm:text-lg">Pilly Logo</p>
                </div>
              </motion.div>

                           {/* Final Design - Pilly Product */}
              <motion.div variants={fadeInUp}>
                <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden mb-3 sm:mb-4">
                  <div className="w-full h-64 sm:h-72 md:h-82">
                    <img 
                      src="/images/Pilly/Pilly product.png" 
                      alt="Pilly Product - Final Design" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-['PPObjectSans-Regular'] text-white/80 text-base sm:text-lg">Product Design</p>
                </div>
              </motion.div>
           </div>
        </motion.div>
      </section>

             {/* Project Overview Section */}
       <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerContainer}
           className="max-w-6xl mx-auto"
         >
           <motion.h2 
             variants={fadeInUp}
             className="font-['PPObjectSans-Heavy'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-12 sm:mb-16 text-start"
             style={{ letterSpacing: '-0.07em' }}
           >
             Project Overview
           </motion.h2>

           {/* Challenge Card */}
           <motion.div 
             variants={fadeInUp}
             className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8 group hover:border-white/30 transition-all duration-500"
           >
             <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-0 flex items-center justify-center">
                 <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                 </svg>
               </div>
               <h3 className="font-['PPObjectSans-Heavy'] text-xl sm:text-2xl md:text-3xl">The Challenge</h3>
             </div>
                           <p className="font-['PPObjectSans-Regular'] text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                The UCI Designathon challenged 257 competitors to &ldquo;Reimagine how you interact with the world.&rdquo; 
                I chose to tackle medication management - a critical issue where traditional solutions often fail 
                people with accessibility needs, leading to serious health consequences and loss of independence.
              </p>
           </motion.div>

           {/* Solution Card */}
           <motion.div 
             variants={fadeInUp}
             className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8 group hover:border-white/30 transition-all duration-500"
           >
             <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-0  flex items-center justify-center">
                 <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                 </svg>
               </div>
               <h3 className="font-['PPObjectSans-Heavy'] text-xl sm:text-2xl md:text-3xl">The Solution</h3>
             </div>
             <p className="font-['PPObjectSans-Regular'] text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
               Pilly reimagines medication management as an accessible, empowering experience. The interface 
               combines universal design principles with a friendly mascot companion, making medication 
               management feel less clinical and more like having a supportive friend by your side.
             </p>
           </motion.div>

           {/* Process & Outcome Grid */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
             {/* Process Card */}
             <motion.div 
               variants={fadeInUp}
               className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 group hover:border-white/30 transition-all duration-500"
             >
               <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-0 flex items-center justify-center">
                   <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                   </svg>
                 </div>
                 <h3 className="font-['PPObjectSans-Heavy'] text-lg sm:text-xl md:text-2xl">The Process</h3>
               </div>
               <p className="font-['PPObjectSans-Regular'] text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                 Conducted task-based usability testing with 10+ participants, including older adults and users 
                 with visual or motor impairments. Observed time-to-completion and error rates to identify 
                 usability barriers, then applied WCAG accessibility standards throughout the design process.
               </p>
             </motion.div>

             {/* Outcome Card */}
             <motion.div 
               variants={fadeInUp}
               className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 group hover:border-white/30 transition-all duration-500"
             >
               <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-0 flex items-center justify-center">
                   <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                   </svg>
                 </div>
                 <h3 className="font-['PPObjectSans-Heavy'] text-lg sm:text-xl md:text-2xl">The Outcome</h3>
               </div>
               <p className="font-['PPObjectSans-Regular'] text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                 Earned 2nd place out of 257 competitors by presenting a research-driven, inclusive design 
                 solution to industry judges. Pilly demonstrates how thoughtful accessibility design can create 
                 real-world impact, making medication management clear, easy, and independent for everyone.
               </p>
             </motion.div>
           </div>
         </motion.div>
       </section>

      {/* Pilly Mascot Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-['PPObjectSans-Heavy'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12"
            style={{ letterSpacing: '-0.07em' }}
          >
            Meet Pilly, Your Companion
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
               <h3 className="font-['PPObjectSans-Regular'] text-xl sm:text-2xl mb-4 sm:mb-6">The Mascot</h3>
               <p className="font-['PPObjectSans-Regular'] text-base sm:text-lg text-white/80 leading-relaxed mb-4 sm:mb-6">
                 I created Pilly as a companion, a mascot that expresses emotion which I see as a universal 
                 language for all elders, children, and all backgrounds. Pilly transcends age, culture, and 
                 language barriers through intuitive visual expressions that everyone can understand.
               </p>
               <p className="font-['PPObjectSans-Regular'] text-base sm:text-lg text-white/80 leading-relaxed">
                 We design with inclusivity, simplicity and safety in mind, taking into precautions and 
                 layers of safety to ensure medication management is accessible and secure for everyone.
               </p>
             </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden order-1 lg:order-2">
              <img 
                src="/images/Pilly/Pilly Mascot.png" 
                alt="Pilly Mascot" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Key Features Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-['PPObjectSans-Heavy'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12"
            style={{ letterSpacing: '-0.07em' }}
          >
            Key Features
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 hover:border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="font-['PPObjectSans-Regular'] text-lg sm:text-xl">Smart Reminders</h3>
              </div>
              <p className="font-['PPObjectSans-Regular'] text-sm sm:text-base text-white/80">
                Intelligent notification system that adapts to user behavior and medication schedules.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 hover:border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-['PPObjectSans-Regular'] text-lg sm:text-xl">Progress Tracking</h3>
              </div>
              <p className="font-['PPObjectSans-Regular'] text-sm sm:text-base text-white/80">
                Visual progress indicators and statistics to motivate users and show their adherence journey.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 hover:border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="font-['PPObjectSans-Regular'] text-lg sm:text-xl">Gamification</h3>
              </div>
              <p className="font-['PPObjectSans-Regular'] text-sm sm:text-base text-white/80">
                Reward system with achievements and streaks to make medication adherence engaging and fun.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 hover:border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-['PPObjectSans-Regular'] text-lg sm:text-xl">Voice & Expressions</h3>
              </div>
              <p className="font-['PPObjectSans-Regular'] text-sm sm:text-base text-white/80">
                Pilly talks and shows emotions through universal visual expressions that everyone can understand.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      

      {/* User Research Insights Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-['PPObjectSans-Heavy'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-12 sm:mb-16 text-center"
            style={{ letterSpacing: '-0.07em' }}
          >
            User Research Insights
          </motion.h2>

          {/* Research Methodology */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white/5 border border-white/10 hover:border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-0 flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-['PPObjectSans-Heavy'] text-xl sm:text-2xl md:text-3xl">Research Methodology</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-['PPObjectSans-Heavy'] text-white mb-1 sm:mb-2">10+</div>
                <div className="font-['PPObjectSans-Regular'] text-white/80 text-sm sm:text-base">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-['PPObjectSans-Heavy'] text-white mb-1 sm:mb-2">Task-Based</div>
                <div className="font-['PPObjectSans-Regular'] text-white/80 text-sm sm:text-base">Usability Testing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-['PPObjectSans-Heavy'] text-white mb-1 sm:mb-2">WCAG 2.1</div>
                <div className="font-['PPObjectSans-Regular'] text-white/80 text-sm sm:text-base">Accessibility Standards</div>
              </div>
            </div>
          </motion.div>

          {/* Key Findings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <motion.div 
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 group hover:border-white/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-0 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-['PPObjectSans-Heavy'] text-xl sm:text-2xl">Key Findings</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="font-['PPObjectSans-Regular'] text-white/80 text-sm sm:text-base">50% of users forget to take medications at least once a week</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="font-['PPObjectSans-Regular'] text-white/80 text-sm sm:text-base">Traditional alarms are often ignored or dismissed</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="font-['PPObjectSans-Regular'] text-white/80 text-sm sm:text-base">Users want to feel in control of their health journey</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="font-['PPObjectSans-Regular'] text-white/80 text-sm sm:text-base">Visual feedback and progress tracking increase motivation</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="font-['PPObjectSans-Regular'] text-white/80 text-sm sm:text-base">Users prefer friendly, conversational interfaces over clinical ones</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="font-['PPObjectSans-Regular'] text-white/80 text-sm sm:text-base">Safety concerns are top priority for medication management</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 group hover:border-white/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-['PPObjectSans-Heavy'] text-xl sm:text-2xl">Design Principles</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="font-['PPObjectSans-Regular'] text-white/80 text-sm sm:text-base">Make medication management feel empowering, not burdensome</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2  bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="font-['PPObjectSans-Regular'] text-white/80 text-sm sm:text-base">Provide immediate feedback and clear progress indicators</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="font-['PPObjectSans-Regular'] text-white/80 text-sm sm:text-base">Create a sense of achievement and celebration</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="font-['PPObjectSans-Regular'] text-white/80 text-sm sm:text-base">Ensure the interface is accessible to all age groups</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="font-['PPObjectSans-Regular'] text-white/80 text-sm sm:text-base">Prioritize safety through clear communication and error prevention</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <p className="font-['PPObjectSans-Regular'] text-white/80 text-sm sm:text-base">Use expression as universal visual language that transcends language barriers</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* User Personas */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white/5 border border-white/10 hover:border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-0 flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-['PPObjectSans-Heavy'] text-xl sm:text-2xl md:text-3xl">Target Users</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h4 className="font-['PPObjectSans-Heavy'] text-base sm:text-lg mb-1 sm:mb-2">Older Adults</h4>
                <p className="font-['PPObjectSans-Regular'] text-white/80 text-xs sm:text-sm">Need clear, simple interfaces with large text and intuitive navigation</p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500/20 border border-yellow-500/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-['PPObjectSans-Heavy'] text-base sm:text-lg mb-1 sm:mb-2">Busy Professionals</h4>
                <p className="font-['PPObjectSans-Regular'] text-white/80 text-xs sm:text-sm">Want quick, efficient medication management that fits their lifestyle</p>
              </div>
              <div className="text-center group sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-['PPObjectSans-Heavy'] text-base sm:text-lg mb-1 sm:mb-2">Caregivers</h4>
                <p className="font-['PPObjectSans-Regular'] text-white/80 text-xs sm:text-sm">Need to monitor and support loved ones&apos; medication adherence</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default PillyPage; 