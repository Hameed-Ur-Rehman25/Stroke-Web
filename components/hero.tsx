"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <section className="px-6 pt-8 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen relative overflow-hidden">
      {/* Background Text Effect */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none z-0 pb-2 md:pb-4 lg:pb-1">
        <h1 className="text-[5rem] md:text-[8rem] lg:text-[12rem] xl:text-[14rem] 2xl:text-[16rem] font-black text-blue-200/40 select-none">
          FamCare247
        </h1>
      </div>

      {/* Language Switcher - Top Right */}
      <div className="absolute top-6 right-6 z-10">
        <motion.button
          onClick={toggleLanguage}
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe className="h-4 w-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">{language}</span>
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                {t("welcome")}
              </h1>
              <motion.h2 
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                FamCare247
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl font-medium text-purple-600"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t("tagline")}
              </motion.p>
            </div>

            {/* Problem Statement Box */}
            <motion.div 
              className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-gray-700 font-medium">
                {(() => {
                  const problemText = t("problem");
                  const boldText = language === "EN" ? "You're not alone" : "Anda tidak keseorangan";
                  const parts = problemText.split(boldText);
                  return (
                    <>
                      {parts[0]}
                      <span className="font-bold">{boldText}{parts[1] || "."}</span>
                    </>
                  );
                })()}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Hero Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1] // Custom ease-in-out curve
            }}
          >
            <motion.div 
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg 2xl:max-w-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <Image
                  src={language === "EN" ? "/EN-hero_image.png" : "/MY-hero_image.png"}
                  alt="FamCare247 Hero"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, 60vw"
                  style={{
                    filter: 'drop-shadow(0 25px 50px -12px rgba(0, 0, 0, 0.25))'
                  }}
                />
                {/* Additional shadow layer for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-2xl blur-3xl -z-10"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}