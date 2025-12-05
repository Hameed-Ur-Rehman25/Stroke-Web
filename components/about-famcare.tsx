"use client"

import { motion } from "framer-motion"
import { Target, Heart, Users, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutFamCare() {
  const { t } = useLanguage()
  const teamMembers = [
    "Prof. Madya Dr. Wan Asyraf - Consultant Neurologist", 
    "Prof. Madya Dr. Aznida Firzah - Family Medicine Specialist",
    "Ms Tracy Chan - Experienced stroke caregiver and educator",
    "Dr Fatin Liyana - Medical Key Opinion Leader"
  ]

  const sections = [
    {
      icon: <Target className="h-8 w-8" />,
      title: t("mission"),
      content: t("missionText"),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t("whyWeBuilt"),
      content: t("whyWeBuiltText"),
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t("ourTeam"),
      content: "FamCare247 is a Malaysian digital health initiative founded by Dr. Anwar Fazal, whose PhD research focuses on mHealth for stroke family caregivers.\n\nThe platform is co-developed with:",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: t("madeForMalaysia"),
      content: t("madeForMalaysiaText"),
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
            {t("aboutFamCare")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("empoweringFamilies")}
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
      </div>
    </section>
  )
}
