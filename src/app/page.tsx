"use client";
import { motion, useMotionValue} from "framer-motion";
import { useState } from "react";

const Home = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [showCursor, setShowCursor] = useState(false);
  const [hoverText, setHoverText] = useState("");

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    cursorX.set(event.clientX - rect.left);
    cursorY.set(event.clientY - rect.top);
  };

  return (
    <>
      <motion.div
        className="absolute pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          display: showCursor ? 'block' : 'none'
        }}
      >
        <div className="bg-white font-bold text-black px-4 py-2 rounded-full -translate-x-1/2 -translate-y-1/2">
          Chai's {hoverText} Guide
        </div>
      </motion.div>

      <div 
        className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-16 md:gap-2 items-center justify-items-center relative max-w-7xl mx-auto px-4 md:px-8 ${showCursor ? 'cursor-none' : ''}`}
        onMouseMove={handleMouseMove}
      >
        <div className="relative">
          <motion.button
            className="border-none bg-transparent p-0"
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => {
              setShowCursor(true);
              setHoverText("Coffee");
            }}
            onMouseLeave={() => {
              setShowCursor(false);
              setHoverText("");
            }}
          >
            <motion.img
              src="/cortado_processed.jpg"
              alt="Coffee"
              className=" lg:w-[max] lg:h-[max] object-contain"
              animate={{
                y: [0, -5, 0],
                x: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </div>

        <div className="flex flex-col items-center justify-center mt-4 md:mt-0">
          <motion.button
            className="border-none bg-transparent p-0"
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => {
              setShowCursor(true);
              setHoverText("Food");
            }}
            onMouseLeave={() => {
              setShowCursor(false);
              setHoverText("");
            }}
          >
            <motion.img
              src="/panwebp.webp"
              alt="Pan"
              className="sm:pt-0 w-58 h-56 lg:w-[max] lg:h-72 object-contain"
              animate={{
                y: [0, -8, 0],
                x: [-5, 5, -5]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>

          <motion.button
            className="border-none bg-transparent p-0 mt-16"
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => {
              setShowCursor(true);
              setHoverText("Music");
            }}
            onMouseLeave={() => {
              setShowCursor(false);
              setHoverText("");
            }}
          >
            <motion.img
              src="/airpods.webp"
              alt="Headphones"
              className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
              animate={{
                y: [0, 5, 0],
                x: [5, -5, 3]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </div>
        <motion.button
          className="border-none bg-transparent p-0"
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => {
            setShowCursor(true);
            setHoverText("Snowboard");
          }}
          onMouseLeave={() => {
            setShowCursor(false);
            setHoverText("");
          }}
        >
          <motion.img
            src="/snowboard.png"
            alt="Snowboard"
            className="mt-16 lg:mt-28 lg:w-max lg:h-[100] object-contain"
            animate={{
              y: [0, -5, 0],
              x: [0, 8, 0]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.button>
      </div>
    </>
  );
};

export default Home;