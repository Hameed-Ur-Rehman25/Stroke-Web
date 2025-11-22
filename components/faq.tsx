"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: t("faqDataSecure"),
      answer: t("faqDataSecureAns")
    },
    {
      question: t("faqReplaceDoctor"),
      answer: t("faqReplaceDoctorAns")
    },
    {
      question: t("faqNeedInternet"),
      answer: t("faqNeedInternetAns")
    },
    {
      question: t("faqFree"),
      answer: t("faqFreeAns")
    },
    {
      question: t("faqLanguages"),
      answer: t("faqLanguagesAns")
    },
    {
      question: t("faqTrustInfo"),
      answer: t("faqTrustInfoAns")
    },
    {
      question: t("faqAskAnytime"),
      answer: t("faqAskAnytimeAns")
    },
    {
      question: t("faqEmergencies"),
      answer: t("faqEmergenciesAns")
    },
    {
      question: t("faqMadeFor"),
      answer: t("faqMadeForAns")
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="px-6 py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t("frequentlyAsked")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("faqSubtitle")}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-2xl"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-6 w-6 text-gray-500" />
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t("stillHaveQuestions")}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {t("teamHere")}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {t("contactSupport")}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
