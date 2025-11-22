"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <section className="px-6 pt-8 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto">
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
                FamCare24/7
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
                {t("problem")}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Phone Mockup */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden w-80 h-[600px]">
                  {/* WhatsApp Header */}
                  <div className="bg-green-500 text-white p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-green-500 font-bold text-sm">FC</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">FamCare247</h3>
                      <p className="text-xs opacity-90">Online</p>
                    </div>
                  </div>

                  {/* Chat Content */}
                  <div className="p-4 space-y-4 bg-gray-50 h-full">
                    {/* Welcome Message */}
                    <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%]">
                      <p className="text-sm text-gray-800">
                        {t("welcomeMessage")}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%]">
                      <p className="text-sm text-gray-800 mb-3">{t("howCanHelp")}</p>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">1️⃣</span>
                          <span>{t("strokeBasics")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded">2️⃣</span>
                          <span>{t("emergencySigns")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">3️⃣</span>
                          <span>{t("strokeMedications")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">4️⃣</span>
                          <span>{t("homeCare")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">5️⃣</span>
                          <span>{t("rehabExercises")}</span>
                        </div>
                        <div className="text-center text-gray-500 text-xs mt-2">...</div>
                      </div>
                    </div>

                    {/* Typing Indicator */}
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -left-4 bg-green-500 text-white p-2 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.677.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.72.045.419-.1.824z"/>
                </svg>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}