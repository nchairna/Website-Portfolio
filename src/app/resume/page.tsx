'use client';

import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';

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

  const education = [
    {
      school: "UCI",
      degree: "B.S Computer Science",
      year: "2023 - 2025",
      description: "Brief description of your studies and achievements"
    },
    {
      school: "De Anza College",
      degree: "Transfer in Computer Science",
      year: "2021 - 2023",
      description: "Brief description of your studies and achievements"
    },
    {
      school: "Bina Bangsa Highschool",
      degree: "Your Degree",
      year: "20XX - 20XX",
      description: "Brief description of your studies and achievements"
    },
    // Add more education entries as needed
  ];

  const work = [
    {
      company: "Company Name",
      position: "Your Position",
      period: "20XX - Present",
  
    },
    {
      company: "Company Name",
      position: "Your Position",
      period: "20XX - Present",
    
    },
    // 
    // Add more work entries as needed
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "etc."]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Next.js", "Node.js", "etc."]
    },
    // Add more skill categories as needed
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">My Professional Journey</h1>
      
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
                  <h3 className="text-xl font-bold">{edu.school}</h3>
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
                  <h3 className="text-xl font-bold">{job.company}</h3>
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
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-white"
              >
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
