"use client"

import { Lock, Shield, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function Security() {
  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure",
      description: "Your information stays encrypted on your device.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Private by Design", 
      description: "No accounts. No tracking. No selling of data.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Your Data. Safe.",
      description: "Only you decide what gets shared.",
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
            Privacy you can trust.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Caring for a loved one is personal – and so is your data.
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
              className="text-center group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group-hover:-translate-y-2 border border-white/10">
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
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
                  <h4 className="text-lg font-semibold text-white mb-2">WhatsApp Encryption</h4>
                  <p className="text-gray-300">
                    All conversations are protected by WhatsApp's end-to-end encryption, ensuring only you can read your messages.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <Lock className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">No Data Storage</h4>
                  <p className="text-gray-300">
                    We don't store your conversations or personal information on our servers. Your privacy remains fully under your control.
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
