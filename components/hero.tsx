"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  const slides = [
    {
      title: "Stroke Early Detection",
      subtitle: "Your Personal Stroke Health Assistant, 24/7.",
      description: "Recognize stroke symptoms instantly and get immediate guidance. Our AI stroke assistance chat offers rapid symptom checking, personalized recommendations for next steps, and detailed recovery guidance plans – all created and validated by our team of experienced neurologists and stroke specialists.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Stroke Care Validated by Specialists",
      subtitle: "Advanced Stroke AI Meets Medical Expertise.",
      description: "Our chatbot uses LLMs fine-tuned on stroke-specific medical data, patient-specialist conversations, and stroke treatment protocols. Our specialized AI system understands stroke symptoms and provides accurate, time-sensitive guidance. Every recommendation and recovery plan is validated by stroke medical professionals to ensure it meets clinical standards.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Emergency Response Guidance",
      subtitle: "Critical Time-Saving Information.",
      description: "When every minute counts, our AI provides clear, step-by-step guidance for stroke emergencies. Learn the FAST method (Face, Arms, Speech, Time) for stroke detection and get location-based emergency service information to ensure rapid response and treatment.",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Rehabilitation Support",
      subtitle: "Recovery Journey Companion.",
      description: "Post-stroke recovery requires ongoing support. Our AI offers personalized rehabilitation exercises, monitors progress, and provides encouragement throughout your recovery journey, helping to improve outcomes and quality of life after stroke.",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Prevention Strategies",
      subtitle: "Reduce Your Risk Factors.",
      description: "Understanding your personal risk factors is key to preventing stroke. Our AI analyzes your lifestyle and medical history to provide tailored prevention strategies, helping you make informed decisions about diet, exercise, and medication management.",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const totalPairs = Math.ceil(slides.length / 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % totalPairs);
    }, 10000);
    return () => clearInterval(interval);
  }, [totalPairs]);

  const handleDotClick = (index: number) => {
    setActiveSlideIndex(index);
  };

  const goToPrevSlide = () => {
    setActiveSlideIndex((prev) => (prev === 0 ? totalPairs - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % totalPairs);
  };

  // Get the current pair of slides to display
  const firstSlideIndex = activeSlideIndex * 2;
  const secondSlideIndex = firstSlideIndex + 1 < slides.length ? firstSlideIndex + 1 : null;

  return (
    <section className="px-6 pt-12 md:pt-16 max-w-6xl mx-auto">
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-gray-700">Welcome to</h1>
        <motion.h2 
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          the Stroke Health Chat
        </motion.h2>
      </motion.div>

      <div className="mt-8 relative">
        <div className="grid md:grid-cols-2 gap-6">
          {/* First slide */}
          <motion.div 
            className="bg-white rounded-lg p-6 shadow-lg border-l-4 relative overflow-hidden"
            style={{ borderColor: `rgb(${firstSlideIndex * 30 + 100}, ${firstSlideIndex * 20 + 80}, 255)` }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            key={`slide-${firstSlideIndex}`}
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${slides[firstSlideIndex].color}`}></div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{slides[firstSlideIndex].title}</h3>
                <p className="text-lg font-medium text-indigo-700">{slides[firstSlideIndex].subtitle}</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-2 rounded-full shadow-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#7C3AED"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 16V12" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8H12.01" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <p className="text-gray-600 mt-4 min-h-[160px]">{slides[firstSlideIndex].description}</p>
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-transparent to-indigo-50 opacity-50 pointer-events-none"></div>
          </motion.div>

          {/* Second slide (if available) */}
          {secondSlideIndex !== null && (
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-lg border-l-4 relative overflow-hidden"
              style={{ borderColor: `rgb(${secondSlideIndex * 30 + 100}, ${secondSlideIndex * 20 + 80}, 255)` }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              key={`slide-${secondSlideIndex}`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${slides[secondSlideIndex].color}`}></div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{slides[secondSlideIndex].title}</h3>
                  <p className="text-lg font-medium text-pink-700">{slides[secondSlideIndex].subtitle}</p>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-2 rounded-full shadow-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 11L12 14L22 4"
                      stroke="#C026D3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                      stroke="#C026D3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <p className="text-gray-600 mt-4 min-h-[160px]">{slides[secondSlideIndex].description}</p>
              <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-transparent to-pink-50 opacity-50 pointer-events-none"></div>
            </motion.div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <motion.button 
            onClick={goToPrevSlide}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white p-3 rounded-full transition-all shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous slides"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
          <motion.button 
            onClick={goToNextSlide}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full transition-all shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next slides"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-3">
        {Array.from({ length: totalPairs }).map((_, index) => (
          <motion.button 
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full transition-all ${activeSlideIndex === index ? 'bg-gradient-to-r from-indigo-500 to-purple-500 scale-125' : 'bg-gray-300'}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slides ${index * 2 + 1}-${Math.min((index + 1) * 2, slides.length)}`}
          />
        ))}
      </div>

      <motion.div 
        className="mt-12 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-gray-700 font-semibold">Try Stroke Health Chat Now</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-md px-8 py-3 shadow-lg hover:shadow-xl transition-all">
            Start Consultation
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
