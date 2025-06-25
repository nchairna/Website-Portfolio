"use client";
import { motion } from 'framer-motion';
import Button from './Button';

const Skills = () => {
  const skills = [
    'Next.js', 'React', 'Java', 'C++', 'Python', 'Git',
    'SQL', 'Storybook', 'Adobe XD', 'Figma', 'Axios', 
    'Vue', 'Angular'
  ];

  // Skills to highlight with reversed styling
  const highlightedSkills = ['React', 'Figma', 'Next.js'];

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.08, // Start after text, then stagger
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="bg-black text-white px-6 sm:px-12 md:px-24 py-16 w-full">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">
        {/* Left: Description Text */}
        <motion.div 
          className="lg:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
        >
          <h2 className="font-['PPObjectSans-Regular'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            creating<br />
            products with<br />
            skills of
          </h2>
        </motion.div>
        
        {/* Right: Skills Grid */}
        <div className="lg:w-2/3">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-end">
            {skills.map((skill, index) => {
              const isHighlighted = highlightedSkills.includes(skill);
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={index}
                  variants={buttonVariants}
                >
                  <Button 
                    className={`mb-2 ${isHighlighted ? '!bg-white !text-black hover:!bg-transparent hover:!text-white' : ''}`}
                  >
                    {skill}
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 