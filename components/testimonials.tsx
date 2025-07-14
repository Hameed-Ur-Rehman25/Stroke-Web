"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      name: "Dr. Anna Greig",
      title: "Head of Nuclear Medicine Centers",
      titleColor: "text-indigo-600",
      avatar: "/avatar-doctor.png",
      testimonial:
        "\"I'm really impressed with StrokeAI.ai. As a doctor, I've seen how AI can truly help with accurate diagnoses and better patient care. This platform offers reliable advice that benefits both patients and doctors alike.\"",
    },
    {
      name: "Jessica K.",
      title: "User",
      titleColor: "text-purple-600",
      avatar: "/avatar-woman.png",
      testimonial:
        "\"Having StrokeAI.ai feels like having a personal health helper with me all the time. It's helped me make good choices for my family's health. I'd recommend it to anyone who wants to take charge of their well-being.\"",
    },
    {
      name: "Michael B.",
      title: "User",
      titleColor: "text-purple-600",
      avatar: "/avatar-man.png",
      testimonial:
        "\"StrokeAI.ai has changed how I take care of my health! It's so convenient to get health information whenever I need it. The tips I've gotten have really helped me.\"",
    },
  ]

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const nextSlide = () => {
    setAutoplay(false);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }

  const prevSlide = () => {
    setAutoplay(false);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  const goToSlide = (index) => {
    setAutoplay(false);
    setCurrentSlide(index);
  }

  return (
    <section className="px-6 py-16 bg-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">What our users say</h2>
          <p className="text-xl text-slate-600 mb-12">
            Discover why thousands trust StrokeAI.ai for their health needs.
          </p>
        </motion.div>

      <div className="relative">
        <motion.button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-purple-100 rounded-full p-3 shadow-md transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6 text-purple-500" />
        </motion.button>

        <div className="overflow-hidden px-14">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid md:grid-cols-1 gap-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center overflow-hidden">
                      {testimonials[currentSlide].avatar ? (
                        <img 
                          src={testimonials[currentSlide].avatar} 
                          alt={testimonials[currentSlide].name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder-user.jpg";
                          }}
                        />
                      ) : (
                        <span className="text-2xl font-bold text-purple-500">
                          {testimonials[currentSlide].name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-purple-500 rounded-full p-1 border-2 border-white">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{testimonials[currentSlide].name}</h3>
                    <p className="text-sm text-purple-500 font-medium">{testimonials[currentSlide].title}</p>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="relative">
                    <svg className="absolute -top-4 -left-4 h-8 w-8 text-purple-200" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-lg text-slate-600 pl-2 leading-relaxed">{testimonials[currentSlide].testimonial}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-purple-100 rounded-full p-3 shadow-md transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6 text-purple-500" />
        </motion.button>
      </div>

      <div className="flex justify-center mt-8 gap-3">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${index === currentSlide ? 'bg-purple-500 scale-125' : 'bg-gray-300'}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      </div>
    </section>
  )
}
