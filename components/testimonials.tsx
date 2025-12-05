"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useLanguage } from "@/contexts/language-context"

export default function Testimonials() {
  const { t } = useLanguage()
  
  // Helper function to get initials from name
  const getInitials = (name: string) => {
    const parts = name.split(" ")
    if (parts.length >= 2) {
      return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }
  
  const testimonials = [
    {
      name: "Aisyah M.",
      title: "Stroke Caregiver",
      avatar: "/avatar-woman.png",
      testimonial:
        "FamCare247 makes caregiving so much easier. The explanations are simple, and the emergency guidance helped calm me during stressful moments.",
    },
    {
      name: "Rajesh K.",
      title: "Son of Stroke Survivor",
      avatar: "/avatar-man.png",
      testimonial:
        "The WhatsApp support is fast, clear, and available anytime. It really helped my family understand what to do during recovery.",
    },
    {
      name: "Li Xuan L.",
      title: "Physiotherapist",
      avatar: "/avatar-doctor.png",
      testimonial:
        "I recommend FamCare247 to patients' families because it gives practical home-care tips and reliable stroke information instantly.",
    },
    {
      name: "Hafiz S.",
      title: "Nurse, Acute Stroke Unit",
      avatar: "/avatar-doctor.png",
      testimonial:
        "This tool is very useful for caregivers who feel overwhelmed. It provides accurate guidance and helps them stay prepared.",
    },
    {
      name: "Dr. Farah Nabila",
      title: "Neurologist",
      avatar: "/avatar-doctor.png",
      testimonial:
        "FamCare247 is a helpful companion for families navigating stroke recovery. It makes complex information easy to understand and empowers caregivers to respond confidently.",
    },
    {
      name: "Adam T.",
      title: "Stroke Survivor",
      avatar: "/avatar-man.png",
      testimonial:
        "Having FamCare247 on WhatsApp gave me confidence during my recovery. The tips and reminders helped me stay consistent with exercises and medications.",
    },
  ]

  return (
    <section className="px-6 py-16 bg-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-800 mb-2">{t("trustedBy")}</h2>
          <p className="text-xl text-slate-600">
            {t("realStories")}
          </p>
        </div>
        <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide scroll-smooth">
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg px-6 py-8 flex flex-col items-center text-center border border-slate-100 w-[280px] md:w-[calc((100vw-12rem-4.5rem)/4)] lg:w-[calc((1152px-4.5rem)/4)] flex-shrink-0">
              <Avatar className="w-20 h-20 mb-4 bg-purple-100">
                <AvatarFallback className="text-purple-600 font-semibold text-lg bg-purple-100">
                  {getInitials(t.name)}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-bold text-slate-800 mb-1">{t.name}</h3>
              <p className="text-sm text-purple-600 font-medium mb-4">{t.title}</p>
              <p className="text-slate-600 mb-5 text-[15px]">{t.testimonial}</p>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} viewBox="0 0 20 20" fill="#FBBF24" className="w-5 h-5"><polygon points="10 1.5 12.7 7.6 19.3 8.3 14 13 15.2 19.5 10 16.3 4.8 19.5 6 13 0.7 8.3 7.3 7.6 10 1.5" /></svg>
                ))}
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
