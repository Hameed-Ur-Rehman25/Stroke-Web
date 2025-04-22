"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

// Counter animation component
const AnimatedCounter = ({ value, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        // When the counter comes into view
        if (entries[0].isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    // Observe the counter element
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    // Cleanup observer
    return () => {
      if (nodeRef.current) {
        observer.unobserve(nodeRef.current);
      }
    };
  }, [isInView]);

  useEffect(() => {
    // Start counting animation when in view
    if (!isInView) return;

    let startValue = 0;
    const endValue = value;
    const totalFrames = 100;
    const increment = endValue / totalFrames;
    const counter = setInterval(() => {
      startValue += increment;
      
      if (startValue > endValue) {
        setCount(endValue);
        clearInterval(counter);
      } else {
        setCount(Math.floor(startValue));
      }
    }, duration * 1000 / totalFrames);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  // Format the number with commas
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div ref={nodeRef} className="flex items-center justify-center">
      <motion.span
        className="text-4xl font-bold text-gray-800"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
      >
        {formattedCount}{suffix}
      </motion.span>
    </div>
  );
};

export default function Community() {
  return (
    <section className="px-6 max-w-6xl mx-auto py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">Join our global community</h2>
        <p className="text-xl text-gray-600 mb-12">Step into the future of health with StrokeAI.ai</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div 
          className="bg-white rounded-xl p-8 shadow-lg border border-indigo-50 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-full mb-6 shadow-md">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="#7C3AED" strokeWidth="2" />
              <path d="M6 9H18" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 14H18" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="mb-2 h-14 flex items-center">
            <AnimatedCounter value={1000000} suffix="+" duration={2.5} />
          </div>
          <p className="text-gray-600 text-center font-medium">Successful Health Chat</p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl p-8 shadow-lg border border-indigo-50 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-full mb-6 shadow-md">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#7C3AED" strokeWidth="2" />
              <path
                d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                stroke="#7C3AED"
                strokeWidth="2"
              />
              <path d="M2 12H22" stroke="#7C3AED" strokeWidth="2" />
            </svg>
          </div>
          <div className="mb-2 h-14 flex items-center">
            <AnimatedCounter value={300000} suffix="+" duration={2} />
          </div>
          <p className="text-gray-600 text-center font-medium">Active Users Globally</p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl p-8 shadow-lg border border-indigo-50 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-full mb-6 shadow-md">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="#7C3AED" strokeWidth="2" />
              <path d="M12 8V12L15 15" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
              <path d="M7.5 2.5V6.5" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
              <path d="M16.5 2.5V6.5" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
              <path d="M2.5 10.5H21.5" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="mb-2 h-14 flex items-center">
            <AnimatedCounter value={24} suffix="/7" duration={1.5} />
          </div>
          <p className="text-gray-600 text-center font-medium">Availability for Your Health Needs</p>
        </motion.div>
      </div>

      <motion.div 
        className="mt-16 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="text-gray-700 font-medium">Ready to experience advanced stroke care?</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-md px-8 py-3 shadow-lg hover:shadow-xl transition-all">
            Start Consultation
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
