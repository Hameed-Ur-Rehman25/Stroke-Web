"use client"

import { motion } from "framer-motion"
import { Heart, Users, Shield, Clock } from "lucide-react"
import Image from "next/image"

export default function CaregiverEmpathy() {
  const caregivingChallenges = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Emotional Support",
      description: "Caring for a stroke survivor can be emotionally overwhelming. You're not alone in feeling stressed, worried, or uncertain."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Family Guidance",
      description: "Every family's journey is different. We provide personalized advice that fits your unique situation and cultural context."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliable Information",
      description: "Cut through the confusion with medically-reviewed, culturally-appropriate guidance you can trust."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Always Available",
      description: "Questions don't wait for office hours. Get support whenever you need it, day or night."
    }
  ]

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              You're Not Alone in This Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Caring for a stroke survivor is one of life's most challenging experiences. 
              We understand the sleepless nights, the difficult decisions, and the overwhelming responsibility you feel.
            </p>
          </motion.div>
        </div>

        {/* Caregiver Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <div className="relative rounded-2xl overflow-hidden max-w-2xl mx-auto">
              <Image
                src="/caregiver-image.png"
                alt="Malaysian healthcare professionals supporting stroke survivors"
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-sm font-medium text-gray-700">24/7 Care</span>
                </div>
              </motion.div>

              <motion.div 
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">Expert Support</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Support Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caregivingChallenges.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <div className="text-purple-600">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Every Malaysian Family Deserves Support
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're in Kuala Lumpur, Penang, Johor, or anywhere in Malaysia, 
              FamCare247 understands your cultural context and provides guidance that makes sense for your family. 
              We're here to help you navigate this journey with confidence and compassion.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
