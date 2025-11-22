"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "EN" | "MY"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  EN: {
    "welcome": "Welcome to",
    "tagline": "Malaysia's #1 WhatsApp Stroke Caregiving AI Companion",
    "problem": "Feeling lost or overwhelmed caring for a stroke patient? Unsure where to start and what to do next? You're not alone.",
    "welcomeMessage": "Welcome to FAMCARE247, your 24/7 Stroke & Family Care Companion 🏥",
    "howCanHelp": "How can I help you today?",
    "strokeBasics": "Stroke Basics",
    "emergencySigns": "Emergency Signs (BEFAST)",
    "strokeMedications": "Stroke Medications",
    "homeCare": "Home Care",
    "rehabExercises": "Rehab & Exercises",
  },
  MY: {
    "welcome": "Selamat datang ke",
    "tagline": "Rakan AI Penjagaan Strok WhatsApp #1 Malaysia",
    "problem": "Berasa tersesat atau tertekan menjaga pesakit strok? Tidak pasti di mana untuk bermula dan apa yang perlu dilakukan seterusnya? Anda tidak keseorangan.",
    "welcomeMessage": "Selamat datang ke FAMCARE247, Rakan Penjagaan Strok & Keluarga 24/7 anda 🏥",
    "howCanHelp": "Bagaimana saya boleh membantu anda hari ini?",
    "strokeBasics": "Asas Strok",
    "emergencySigns": "Tanda Kecemasan (BEFAST)",
    "strokeMedications": "Ubat Strok",
    "homeCare": "Penjagaan Rumah",
    "rehabExercises": "Pemulihan & Senaman",
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN")

  const toggleLanguage = () => {
    setLanguage(prev => prev === "EN" ? "MY" : "EN")
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.EN] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
