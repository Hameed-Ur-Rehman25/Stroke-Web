"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  const slides = [
    {
      title: "What is FamCare 24/7?",
      subtitle: "Your Stroke Caregiving Assistant",
      description: "FamCare 24/7 is a WhatsApp-based chatbot designed to provide family caregivers of stroke patients with instant support and reliable resources—all FREE.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Here's how we can help:",
      subtitle: "Comprehensive Support for Caregivers",
      description: "Expert Advice: Access accurate, trusted answers to your stroke-related questions.\nTailored Resources: Find educational videos, caregiving tips, and emotional guidance.\n24/7 Availability: Get help anytime, day or night, at your convenience.\nUser-Friendly Chatbot: Enjoy seamless, simple conversations with our AI-powered assistant.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "What we offer:",
      subtitle: "Resources for Caregivers",
      description: "• Common health questions answered for caregivers.\n• Tailored stroke care info for families.\n• Videos and resources to ease caregiving.\n• AI-powered chatbot for stroke caregivers.\n• 24/7 personalized support in real time.\n• Accessible via website and mobile app.",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Why Choose Us?",
      subtitle: "Expert Support for Your Journey",
      description: "Because we understand your challenges. FamCare 24/7 was developed by experts in stroke care who know what caregivers need most—answers, support, and reassurance.\n\nWe're here to make your caregiving journey more manageable by offering personalized tools and resources at no cost to you.",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Where can you find us?",
      subtitle: "Always Available on WhatsApp",
      description: "FamCare 24/7 operates exclusively on WhatsApp, providing family caregivers of stroke patients with instant access to tailored guidance, resources, and compassionate support. Whether you're seeking answers or emotional reassurance, we're here for you—anytime, anywhere.\n\nWith our expertise in bot AI and in Stroke evaluation, we have the backing of AI Engineers and professional medicals behind us, ensuring our products always function at a high standard!",
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
          FamCare24/7
        </motion.h2>
        <motion.p
          className="text-2xl font-medium text-purple-600"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your 24/7 support system for family caregivers of stroke patients
        </motion.p>
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

            <p className="text-gray-600 mt-4 min-h-[160px]">
              {slides[firstSlideIndex].description.split('\n').map((text, i) => (
                <span key={i} className="block mb-2">{text}</span>
              ))}
            </p>
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

              <p className="text-gray-600 mt-4 min-h-[160px]">
                {slides[secondSlideIndex].description.split('\n').map((text, i) => (
                  <span key={i} className="block mb-2">{text}</span>
                ))}
              </p>
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
        <p className="text-gray-700 font-semibold text-xl">Join us today! Whether you're ready...</p>
        <p className="text-gray-600 text-center max-w-2xl mb-2">
          Connect with us on WhatsApp today to experience compassionate expert-backed guidance--completely FREE
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-md px-8 py-3 shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.677.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.72.045.419-.1.824z"/>
            </svg>
            Chat on WhatsApp
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
