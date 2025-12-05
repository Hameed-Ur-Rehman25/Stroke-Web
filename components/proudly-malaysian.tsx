"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function ProudlyMalaysian() {
  const { t } = useLanguage()

  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t("proudlyMalaysian")}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("proudlyMalaysianText")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

