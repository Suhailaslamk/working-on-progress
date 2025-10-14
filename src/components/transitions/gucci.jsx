 "use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function GucciTextTransition() {
  const words = ["Elegance", "Innovation", "Luxury", "Timeless"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-[100px] bg-black text-white text-5xl font-serif overflow-hidden">
      <motion.span
        key={index}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="inline-block"
      >
        {words[index]}
      </motion.span>
    </div>
  );
}