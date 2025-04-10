'use client';

import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { motion, useMotionValue } from 'framer-motion';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const TimelineConnector = () => (
  <motion.div
    className="absolute left-[-2px]  w-1 top-[70px] bottom-[60px] bg-white z-10"
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    transition={{ duration: 1 }}
    style={{ transformOrigin: 'top' }}
  />
);

const TimelineItem = ({ children, index }: { children: React.ReactNode, index: number }) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
  >
    <motion.div
      className="absolute left-[-8px] top-[50%] w-4 h-4 rounded-full bg-white"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: index * 0.2 + 0.1 }}
    />
    {children}
  </motion.div>
);

export default function ResumePage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [showCursor, setShowCursor] = useState(false);
  const [hoverText, setHoverText] = useState("");

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const scrollX = window.scrollX || document.documentElement.scrollLeft;
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    cursorX.set(event.clientX + scrollX - rect.left);
    cursorY.set(event.clientY + scrollY - rect.top);
  };

  const education = [
    {
      school: "UCI",
      location: "Irvine, CA",
      degree: "B.S Computer Science, Emphasis in Intelligent Systems",
      year: "2023 - 2025",
      description: "Brief description of your studies and achievements"
    },
    {
      school: "De Anza College",
      location: "Cupertino, CA",
      degree: "Transfer in Computer Science",
      year: "2021 - 2023",
      description: "Brief description of your studies and achievements"
    },
    {
      school: "BBS Highschool",
      location: "Jakarta, Indonesia",
      degree: "IGCSE",
      year: "2016 - 2020",
      description: "Brief description of your studies and achievements"
    },
    // Add more education entries as needed
  ];

  const work = [
    {
      company: "Antariksa Audio",
      position: "Product Developer",
      period: "August 2023 - Present",
      location: "Jakarta, Indonesia"
    },
    {
      company: "TelandC",
      position: "Web & Development Intern",
      period: "June 2023 - September 2023",
      location: "Jakarta, Indonesia"
    },
    {
      company: "HerbyHertape",
      position: "Web Developer",
      period: "June 2023 - August 2023",
      location: "Jakarta, Indonesia"
    }
  ];

  const skills = [
    {
      category: "Technical Skills",
      items: [
        {
          name: "JavaScript",
          logo: "/logo-javascript.svg",
        },
        {
          name: "TypeScript",
          logo: "/typescript.svg",
        },
        {
          name: "Python",
          logo: "/python-5.svg",
        },
        {
          name: "C++",
          logo: "/c.svg",
        },
        {
          name: "React",
          logo: "react-2.svg",
        },
        {
          name: "Next.js",
          logo: "/next-js.svg",
        },
        {
          name: "HTML",
          logo: "/html-1.svg",
        },
        {
          name: "CSS",
          logo: "/css-3.svg",
        },
        {
          name: "Figma",
          logo: "/figma-icon.svg",
        },
      
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        className="absolute pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          display: showCursor ? 'block' : 'none'
        }}
      >
        <div className="bg-white font-bold text-black px-4 py-2 rounded-full -translate-x-1/2 -translate-y-1/2">
          {hoverText}
        </div>
      </motion.div>

      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Tab.List className="flex space-x-1 rounded-xl bg-white/10 bg-opacity-100 p-1">
          {['Education', 'Work', 'Skills'].map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full text-xl rounded-lg py-2.5 font-medium leading-5',
                  'ring-white/60 ring-offset-2 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-black text-xl shadow'
                    : 'text-white hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        
        <Tab.Panels className="mt-8">
          <Tab.Panel className="space-y-12 relative">
            <TimelineConnector />
            {education.map((edu, index) => (
              <TimelineItem key={index} index={index}>
                <div className="ml-8 bg-white/10 p-6 rounded-lg backdrop-blur-sm text-white">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">{edu.school}</h3>
                    <span className="text-sm ml-2 text-white/60">{edu.location}</span>
                  </div>
                  <p className="text-white/80">{edu.degree}</p>
                  <p className="text-white">{edu.year}</p>
                </div>
              </TimelineItem>
            ))}
          </Tab.Panel>

          <Tab.Panel className="space-y-12 relative">
            <TimelineConnector />
            {work.map((job, index) => (
              <TimelineItem key={index} index={index}>
                <div className="ml-8 bg-white/10 p-6 rounded-lg backdrop-blur-sm text-white">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">{job.company}</h3>
                    <span className="text-sm ml-2 text-white/60">{job.location}</span>
                  </div>
                  <p className="text-white/80">{job.position}</p>
                  <p className="text-white/60">{job.period}</p>
                </div>
              </TimelineItem>
            ))}
          </Tab.Panel>

          <Tab.Panel className="space-y-6">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`p-6 rounded-lg text-white min-h-[400px] relative overflow-hidden ${showCursor ? 'cursor-none' : ''}`}
                onMouseMove={handleMouseMove}
              >
                <h3 className="text-xl font-bold mb-4 text-center">{category.category}</h3>
                <div className="flex flex-wrap gap-6 justify-center items-center">
                  {category.items.map((skill, skillIndex) => {
                    const sizeClasses = { bubble: 'w-32 h-32', icon: 'w-16 h-16' };
                    return (
                      <motion.div
                        key={skillIndex}
                        className="relative -mx-2"
                        initial={{ y: 0, scale: 1 }}
                        animate={{ x: 0, y: 0 }}
                        whileHover={{ 
                          scale: 1.1,
                          transition: { type: "spring", damping: 10, stiffness: 100 }
                        }}
                        onMouseEnter={() => {
                          setShowCursor(true);
                          setHoverText(skill.name);
                        }}
                        onMouseLeave={() => {
                          setShowCursor(false);
                          setHoverText("");
                        }}
                      >
                        <div
                          className={`${sizeClasses.bubble} rounded-2xl bg-white/10 backdrop-blur-sm 
                                    flex items-center justify-center transition-all duration-300 relative`}
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className={`${sizeClasses.icon} object-contain`}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}