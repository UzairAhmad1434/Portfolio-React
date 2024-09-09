/* eslint-disable react/prop-types */
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import cn from "@/lib/utils";

export default function TypingAnimation({ text, duration = 100, className }) {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  // Typing effect
  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect); // Stop the typing effect when done
      }
    }, duration);

    return () => {
      clearInterval(typingEffect); // Cleanup interval
    };
  }, [i, text, duration]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {displayedText}
      {i < text.length && (
        <motion.span
          animate={{ opacity: [0, 1] }} // Animate between opacity 0 and 1
          transition={{
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "reverse", // Reverse back and forth for a smooth blink
            duration: 0.5, // Smooth duration for the blink
          }}
        >
          |{/* Blinking cursor */}
        </motion.span>
      )}
    </h1>
  );
}
