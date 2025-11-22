"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Is my data secure?",
      answer: "Yes. Your information stays on your device and inside WhatsApp's end-to-end encrypted chat. No accounts. No tracking. No data stored on our servers."
    },
    {
      question: "Does FamCare247 replace my doctor?",
      answer: "No. FamCare247 provides guidance, education, and support – but it does not diagnose or replace medical professionals. Always follow your doctor's medical advice."
    },
    {
      question: "Do I need internet to use FamCare247?",
      answer: "Yes. Because FamCare247 runs on WhatsApp, an internet connection is required to chat and receive support."
    },
    {
      question: "Is FamCare247 free to use?",
      answer: "Yes. The WhatsApp support is free to use. (Optional advanced features may be added later.)"
    },
    {
      question: "Which languages are supported?",
      answer: "Currently available in:\n• English\n• Bahasa Melayu\n(More languages coming soon.)"
    },
    {
      question: "Can I trust the medical information?",
      answer: "Yes. All content is reviewed and adapted from credible, medically recognised stroke guidelines and clinical best practices."
    },
    {
      question: "Can I ask questions anytime?",
      answer: "Yes. The AI assistant is available 24 hours a day, every day."
    },
    {
      question: "Can it help in emergencies?",
      answer: "Yes – FamCare247 provides BEFAST steps and tells you what to do immediately, including helping you locate the nearest stroke-ready hospitals. But always call 999 if someone shows emergency symptoms."
    },
    {
      question: "Who is FamCare247 made for?",
      answer: "• Family caregivers\n• Stroke survivors\n• Nurses & therapists\n• Anyone who wants fast, reliable stroke guidance"
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about using FamCare247 – your 24/7 WhatsApp Stroke Care Companion.
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
              Still have questions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our team is here to help. Reach out anytime.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
