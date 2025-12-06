"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
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
      name: t("testimonial1Name"),
      title: t("testimonial1Title"),
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
      testimonial: t("testimonial1Text"),
    },
    {
      name: t("testimonial2Name"),
      title: t("testimonial2Title"),
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
      testimonial: t("testimonial2Text"),
    },
    {
      name: t("testimonial3Name"),
      title: t("testimonial3Title"),
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=faces",
      testimonial: t("testimonial3Text"),
    },
    {
      name: t("testimonial4Name"),
      title: t("testimonial4Title"),
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=faces",
      testimonial: t("testimonial4Text"),
    },
    {
      name: t("testimonial5Name"),
      title: t("testimonial5Title"),
      avatar: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=200&fit=crop&crop=faces",
      testimonial: t("testimonial5Text"),
    },
    {
      name: t("testimonial6Name"),
      title: t("testimonial6Title"),
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
      testimonial: t("testimonial6Text"),
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
              <div key={i} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg shadow-purple-200/50 px-6 py-8 flex flex-col items-center text-center border border-slate-100/50 w-[280px] md:w-[calc((100vw-12rem-4.5rem)/4)] lg:w-[calc((1152px-4.5rem)/4)] flex-shrink-0">
              <Avatar className="w-20 h-20 mb-4 bg-purple-100">
                <AvatarImage 
                  src={t.avatar}
                  alt={t.name}
                />
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
