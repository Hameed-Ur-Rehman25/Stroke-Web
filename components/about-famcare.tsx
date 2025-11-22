"use client"

import { motion } from "framer-motion"
import { Target, Heart, Users, MapPin } from "lucide-react"

export default function AboutFamCare() {
  const teamMembers = [
    "Dr. Anwar Fazal - PhD researcher focusing on mHealth for stroke family caregivers",
    "Prof. Madya Dr. Wan Asyraf - Consultant Neurologist", 
    "Prof. Madya Dr. Aznida Firzah - Family Medicine Specialist",
    "Ms Tracy Chan - Experienced stroke caregiver and educator",
    "Dr Fatin Liyana - Medical Key Opinion Leader"
  ]

  const sections = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission",
      content: "To make stroke caregiving easier, clearer, and better supported for every Malaysian family – anytime, anywhere. We believe every caregiver deserves guidance and every survivor deserves the best chance at recovery.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Why We Built This",
      content: "Stroke caregiving can feel overwhelming, confusing and lonely. After hospital discharge, many families struggle with medications, symptoms, appointments, rehab and knowing what to do in emergencies.\n\nWe built FamCare247 to give caregivers immediate, trustworthy answers through WhatsApp – the simplest and most familiar tool Malaysians already use every day.\n\nOur goal is to bring clarity, confidence and 24/7 support to every home caring for a stroke survivor.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Our Team",
      content: "FamCare247 is a Malaysian digital health initiative founded by Dr. Anwar Fazal, whose PhD research focuses on mHealth for stroke family caregivers.\n\nThe platform is co-developed with:",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Made for Malaysia",
      content: "FamCare247 is created by Malaysians, for Malaysians – and is free to use.\n\nOur mission is to strengthen stroke recovery and caregiving nationwide by providing clear, trustworthy, and clinically aligned support – available 24/7.",
      color: "from-red-500 to-red-600"
    }
  ]

  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About FamCare247
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering Malaysian families with expert stroke care guidance
          </p>
        </motion.div>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Icon and Title */}
                <div className="flex-shrink-0">
                  <div className={`bg-gradient-to-r ${section.color} text-white p-4 rounded-2xl shadow-lg`}>
                    {section.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {section.title}
                  </h3>
                  
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                    
                    {/* Team Members List */}
                    {section.title === "Our Team" && (
                      <div className="mt-6">
                        <ul className="space-y-3">
                          {teamMembers.map((member, mIndex) => (
                            <li key={mIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{member}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-6 text-gray-600">
                          We are supported by a multidisciplinary team of stroke nurses, rehabilitation specialists, and NASAM caregivers, ensuring everything we provide is grounded in real clinical experience and real caregiver needs.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Separator Line (except for last item) */}
              {index < sections.length - 1 && (
                <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              🇲🇾 Proudly Malaysian
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Built with deep understanding of Malaysian healthcare systems, cultural values, and family dynamics. 
              We're committed to supporting every Malaysian family affected by stroke, completely free of charge.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
