"use client"

import { Lock, Shield, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function Security() {
  const { t } = useLanguage()
  
  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: t("secure"),
      description: t("secureDesc"),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: t("privateByDesign"), 
      description: t("privateByDesignDesc"),
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: t("yourDataSafe"),
      description: t("yourDataSafeDesc"),
      color: "from-green-500 to-green-600"
    }
  ]

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-gray-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <Lock className="h-12 w-12 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("privacyTrust")}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t("caringPersonal")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group flex"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group-hover:-translate-y-2 border border-white/10 flex flex-col h-full w-full">
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg flex-shrink-0`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Security Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{t("whatsappEncryption")}</h4>
                  <p className="text-gray-300">
                    {t("whatsappEncryptionDesc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <Lock className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{t("noDataStorage")}</h4>
                  <p className="text-gray-300">
                    {t("noDataStorageDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
