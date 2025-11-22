"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function CaregiverImage() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-2xl">
            <Image
              src="/caregiver-image.png"
              alt="Healthcare professionals providing care"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl object-cover w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
