import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const words = ["Listener", "Well-wisher", "Psychologist."]; // List of words to cycle through

const AnimatedHomeTitle = ({ text, className = "" }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % words.length;
        if (newIndex === words.length - 1) {
          clearInterval(interval);
        }
        return newIndex;
      });
    }, 1500); // Change word every 2 seconds
  }, []);

  const currentWord = words[currentWordIndex];

  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <div
        className={`inline-block w-full text-black font-bold capitalize sm:text-4xl text-4xl sm:text-left text-center ${className}`}
      >
        Your
        <motion.h1
          className="sm:text-6xl md:text-5xl font-bold text-blue-500 text-left"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          {currentWord}
        </motion.h1>
      </div>
    </div>
  );
};

export default AnimatedHomeTitle;
