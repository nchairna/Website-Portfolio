"use client";
import { motion } from 'framer-motion';
import Button from './Button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Biru",
      description: "Matching housemaids and households in Indonesia",
      award: "Beall-Butterworth 3rd Place",
      skills: ["Mobile", "Matching", "Java"],
      link: "/projects/biru",
      size: "large" // Top left - larger box
    },
    {
      id: 2,
      title: "Bookin",
      description: "Bookings made simpler.",
      award: null,
      skills: ["next.js", "react"],
      link: "/projects/bookin",
      size: "small" // Bottom left - smaller box
    },
    {
      id: 3,
      title: "Pilly",
      description: "A companion that helps you re-imagine how you take your pills.",
      award: "Designathon 2nd Place",
      skills: ["next.js", "react", "Java"],
      link: "/projects/pilly",
      size: "tall" // Right side - tall box
    }
  ];

  const boxVariants = {
    hidden: { 
      opacity: 0, 
      y: 0,
      scale: 0.9
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

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

  return (
    <section className="bg-black text-white px-6 sm:px-12 md:px-24 py-16 w-full">
      {/* Section Title */}
      <motion.h2 
        className="font-['PPObjectSans-Heavy'] text-4xl sm:text-5xl md:text-6xl mb-12" 
        style={{ letterSpacing: '-0.07em' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={titleVariants}
      >
        projects
      </motion.h2>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[800px]">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {projects.filter(p => p.size !== 'tall').map((project, index) => (
            <motion.div
              key={project.id}
              className={`
                relative border border-white/80 rounded-3xl p-8 md:p-12 lg:p-16
                bg-black hover:bg-gray-900/30 hover:border-white hover:shadow-2xl hover:shadow-white/10
                transform-gpu transition-all duration-500 ease-out
                ${project.size === 'large' ? 'flex-[2]' : 'flex-1'}
              `}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={index}
              variants={boxVariants}
              whileHover={{ 
                scale: 1.03, 
                transition: { 
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic-bezier for smooth easing
                } 
              }}
            >
              {/* Award Badge */}
              {project.award && (
                <div className="absolute top-6 right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 text-xs sm:text-sm text-white/70 text-right max-w-[150px]">
                  {project.award}
                </div>
              )}

              {/* Project Content */}
              <div className="flex flex-col h-full md:justify-center">
                <div className="flex-2 mb-4 md:flex md:flex-col md:justify-center">
                  <h3 className="font-['PPObjectSans-Regular'] text-3xl sm:text-4xl md:text-5xl mb-1 md:text-center lg:text-left">
                    {project.title}
                  </h3>
                  <p className="font-['PPObjectSans-Regular']  sm:text-xl lg:text-2xl text-white/80  -4 max-w-md md:text-center lg:text-left md:mx-auto lg:mx-0">
                    {project.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 md:justify-center lg:justify-start">
                  {project.skills.map((skill, index) => (
                    <Button key={index} className="text-sm px-4 py-2">
                      {skill}
                    </Button>
                  ))}
                </div>
              </div>

              {/* CTA Arrow - Always bottom right */}
              <a href={project.link} className="group absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16">
                <svg 
                  className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Right Column - Tall Box */}
        {projects.filter(p => p.size === 'tall').map((project) => (
          <motion.div
            key={project.id}
            className="relative border border-white/80 rounded-3xl p-8 md:p-12 lg:p-16 bg-black hover:bg-gray-900/30 hover:border-white hover:shadow-2xl hover:shadow-white/10 transform-gpu transition-all duration-500 ease-out"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={2} // Third box in sequence
            variants={boxVariants}
            whileHover={{ 
              scale: 1.03, 
              transition: { 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic-bezier for smooth easing
              } 
            }}
          >
            {/* Award Badge */}
            {project.award && (
              <div className="absolute top-6 right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 text-xs sm:text-sm text-white/70 text-right max-w-[150px]">
                {project.award}
              </div>
            )}

            {/* Project Content */}
            <div className="flex flex-col h-full md:justify-center">
              <div className="flex-2 md:flex md:flex-col md:justify-center">
                <h3 className="font-['PPObjectSans-Regular'] text-3xl sm:text-4xl md:text-5xl mb-2 md:text-center lg:text-left">
                  {project.title}
                </h3>
                <p className="font-['PPObjectSans-Regular'] text-lg sm:text-xl text-white/80 mb-6 max-w-md md:text-center lg:text-left md:mx-auto lg:mx-0">
                  {project.description}
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 md:justify-center lg:justify-start">
                {project.skills.map((skill, index) => (
                  <Button key={index} className="text-sm px-4 py-2">
                    {skill}
                  </Button>
                ))}
              </div>
            </div>

            {/* CTA Arrow - Always bottom right */}
            <a href={project.link} className="group absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16">
              <svg 
                className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 