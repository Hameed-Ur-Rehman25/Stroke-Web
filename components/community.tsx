"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import StrokeRiskAssessment from './stroke-risk-assessment';

export default function Community() {
  return (
    <section className="px-6 max-w-6xl mx-auto py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">Stroke Risk Assessment</h2>
        <p className="text-xl text-gray-600 mb-6">Understanding your personal risk factors is key to preventing stroke</p>
      </motion.div>

      <StrokeRiskAssessment />
    </section>
  )
}
