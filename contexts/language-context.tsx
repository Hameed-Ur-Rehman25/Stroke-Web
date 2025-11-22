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
    // Hero Section
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
    
    // WhatsApp CTA
    "whatsappAway": "We're just a WhatsApp message away.",
    "hereForYou": "Here for you, anytime, 24/7.",
    "completelyFree": "Completely FREE.",
    "whatsappUsNow": "WhatsApp Us Now",
    "noRegistration": "No registration required",
    "instantResponses": "Instant responses",
    "available247": "Available 24/7",
    
    // How It Works
    "howItWorks": "How it Works",
    "getStarted": "Get started in minutes and see the impact on your stroke caregiving journey.",
    "step1Title": "Start the Chat",
    "step1Desc": "Message FamCare247 on WhatsApp to get instant access to stroke-care support.\nNo apps. No accounts. Just chat and go.",
    "step2Title": "Choose What You Need",
    "step2Desc": "From emergency signs to medications, rehab, diet, financial aid and more –\njust tap a menu option or type any question.",
    "step3Title": "Get 24/7 Caregiver Support",
    "step3Desc": "FamCare247 guides you day and night with simple, accurate, caregiver-friendly advice.\nYour caregiving companion, always ready.",
    "readyToStart": "Ready to get started? It takes less than 30 seconds.",
    "startJourney": "Start Your Journey Now",
    
    // Stroke Risk Assessment
    "atRisk": "Are you at risk of stroke?",
    "answerQuestions": "Answer a few short questions to find out.",
    "takeAssessment": "Take Our Stroke Risk Assessment",
    "startAssessment": "Start Assessment",
    "fsrpNote": "*Adapted from the validated Framingham Stroke Risk Profile (FSRP), simplified for public use.",
    
    // Hospital Locator
    "hospitalLocator": "Stroke Hospital Locator",
    "findHospitals": "Find stroke-ready hospitals near you in Malaysia",
    "findNearYou": "Find stroke-ready hospitals near you.",
    "knowWhereToGo": "Know where to go in an emergency,",
    "everySecondCounts": "because in a stroke, every second counts.",
    "findNow": "Find Now",
    "emergency247": "24/7 Emergency Care",
    "emergency247Desc": "Round-the-clock stroke treatment facilities",
    "gpsNavigation": "GPS Navigation",
    "gpsNavigationDesc": "Direct navigation to the nearest hospital",
    "emergencyContacts": "Emergency Contacts",
    "emergencyContactsDesc": "Direct contact information for each hospital",
    "emergencyNote": "Emergency: Call 999 immediately if someone shows stroke symptoms",
    "befastNote": "Use BEFAST signs: Balance, Eyes, Face, Arms, Speech, Time",
    
    // Caregiver Empathy
    "notAlone": "You're Not Alone in This Journey",
    "challengingExperience": "Caring for a stroke survivor is one of life's most challenging experiences. We understand the sleepless nights, the difficult decisions, and the overwhelming responsibility you feel.",
    "emotionalSupport": "Emotional Support",
    "emotionalSupportDesc": "Caring for a stroke survivor can be emotionally overwhelming. You're not alone in feeling stressed, worried, or uncertain.",
    "familyGuidance": "Family Guidance",
    "familyGuidanceDesc": "Every family's journey is different. We provide personalized advice that fits your unique situation and cultural context.",
    "reliableInfo": "Reliable Information",
    "reliableInfoDesc": "Cut through the confusion with medically-reviewed, culturally-appropriate guidance you can trust.",
    "alwaysAvailable": "Always Available",
    "alwaysAvailableDesc": "Questions don't wait for office hours. Get support whenever you need it, day or night.",
    "everyFamilyDeserves": "Every Malaysian Family Deserves Support",
    "everyFamilyDeservesDesc": "Whether you're in Kuala Lumpur, Penang, Johor, or anywhere in Malaysia, FamCare247 understands your cultural context and provides guidance that makes sense for your family. We're here to help you navigate this journey with confidence and compassion.",
    
    // Testimonials
    "trustedBy": "Trusted by the stroke caregiving community",
    "realStories": "Real stories from caregivers and healthcare professionals.",
    
    // Security
    "privacyTrust": "Privacy you can trust.",
    "caringPersonal": "Caring for a loved one is personal – and so is your data.",
    "secure": "Secure",
    "secureDesc": "Your information stays encrypted on your device.",
    "privateByDesign": "Private by Design",
    "privateByDesignDesc": "No accounts. No tracking. No selling of data.",
    "yourDataSafe": "Your Data. Safe.",
    "yourDataSafeDesc": "Only you decide what gets shared.",
    "whatsappEncryption": "WhatsApp Encryption",
    "whatsappEncryptionDesc": "All conversations are protected by WhatsApp's end-to-end encryption, ensuring only you can read your messages.",
    "noDataStorage": "No Data Storage",
    "noDataStorageDesc": "We don't store your conversations or personal information on our servers. Your privacy remains fully under your control.",
    
    // About
    "aboutFamCare": "About FamCare247",
    "empoweringFamilies": "Empowering Malaysian families with expert stroke care guidance",
    "mission": "Mission",
    "missionText": "To make stroke caregiving easier, clearer, and better supported for every Malaysian family – anytime, anywhere. We believe every caregiver deserves guidance and every survivor deserves the best chance at recovery.",
    "whyWeBuilt": "Why We Built This",
    "whyWeBuiltText": "Stroke caregiving can feel overwhelming, confusing and lonely. After hospital discharge, many families struggle with medications, symptoms, appointments, rehab and knowing what to do in emergencies.\n\nWe built FamCare247 to give caregivers immediate, trustworthy answers through WhatsApp – the simplest and most familiar tool Malaysians already use every day.\n\nOur goal is to bring clarity, confidence and 24/7 support to every home caring for a stroke survivor.",
    "ourTeam": "Our Team",
    "madeForMalaysia": "Made for Malaysia",
    "madeForMalaysiaText": "FamCare247 is created by Malaysians, for Malaysians – and is free to use.\n\nOur mission is to strengthen stroke recovery and caregiving nationwide by providing clear, trustworthy, and clinically aligned support – available 24/7.",
    "proudlyMalaysian": "🇲🇾 Proudly Malaysian",
    "proudlyMalaysianText": "Built with deep understanding of Malaysian healthcare systems, cultural values, and family dynamics. We're committed to supporting every Malaysian family affected by stroke, completely free of charge.",
    
    // FAQ
    "frequentlyAsked": "Frequently Asked Questions",
    "faqSubtitle": "Everything you need to know about using FamCare247 – your 24/7 WhatsApp Stroke Care Companion.",
    "faqDataSecure": "Is my data secure?",
    "faqDataSecureAns": "Yes. Your information stays on your device and inside WhatsApp's end-to-end encrypted chat. No accounts. No tracking. No data stored on our servers.",
    "faqReplaceDoctor": "Does FamCare247 replace my doctor?",
    "faqReplaceDoctorAns": "No. FamCare247 provides guidance, education, and support – but it does not diagnose or replace medical professionals. Always follow your doctor's medical advice.",
    "faqNeedInternet": "Do I need internet to use FamCare247?",
    "faqNeedInternetAns": "Yes. Because FamCare247 runs on WhatsApp, an internet connection is required to chat and receive support.",
    "faqFree": "Is FamCare247 free to use?",
    "faqFreeAns": "Yes. The WhatsApp support is free to use. (Optional advanced features may be added later.)",
    "faqLanguages": "Which languages are supported?",
    "faqLanguagesAns": "Currently available in:\n• English\n• Bahasa Melayu\n(More languages coming soon.)",
    "faqTrustInfo": "Can I trust the medical information?",
    "faqTrustInfoAns": "Yes. All content is reviewed and adapted from credible, medically recognised stroke guidelines and clinical best practices.",
    "faqAskAnytime": "Can I ask questions anytime?",
    "faqAskAnytimeAns": "Yes. The AI assistant is available 24 hours a day, every day.",
    "faqEmergencies": "Can it help in emergencies?",
    "faqEmergenciesAns": "Yes – FamCare247 provides BEFAST steps and tells you what to do immediately, including helping you locate the nearest stroke-ready hospitals. But always call 999 if someone shows emergency symptoms.",
    "faqMadeFor": "Who is FamCare247 made for?",
    "faqMadeForAns": "• Family caregivers\n• Stroke survivors\n• Nurses & therapists\n• Anyone who wants fast, reliable stroke guidance",
    "stillHaveQuestions": "Still have questions?",
    "teamHere": "Our team is here to help. Reach out anytime.",
    "contactSupport": "Contact Support",
    
    // Footer
    "footerMission": "Empowering Malaysia's stroke caregivers with 24/7 support through WhatsApp.",
    "quickLinks": "QUICK LINKS",
    "support": "SUPPORT",
    "legalLinks": "LEGAL LINKS",
    "home": "Home",
    "howItWorksLink": "How It Works",
    "strokeRiskAssessmentLink": "Stroke Risk Assessment",
    "strokeHospitalLocatorLink": "Stroke Hospital Locator",
    "faqLink": "FAQ",
    "contactSupportLink": "Contact Support",
    "privacyPolicy": "Privacy Policy",
    "termsOfService": "Terms of Service",
    "medicalDisclaimer": "Medical Disclaimer",
    "copyright": "© 2025 FamCare247. All rights reserved.",
  },
  MY: {
    // Hero Section
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
    
    // WhatsApp CTA
    "whatsappAway": "Kami hanya satu mesej WhatsApp sahaja.",
    "hereForYou": "Di sini untuk anda, bila-bila masa, 24/7.",
    "completelyFree": "PERCUMA sepenuhnya.",
    "whatsappUsNow": "WhatsApp Kami Sekarang",
    "noRegistration": "Tiada pendaftaran diperlukan",
    "instantResponses": "Respons segera",
    "available247": "Tersedia 24/7",
    
    // How It Works
    "howItWorks": "Cara Ia Berfungsi",
    "getStarted": "Mula dalam beberapa minit dan lihat kesannya dalam perjalanan penjagaan strok anda.",
    "step1Title": "Mula Sembang",
    "step1Desc": "Hantar mesej kepada FamCare247 di WhatsApp untuk mendapatkan akses segera kepada sokongan penjagaan strok.\nTiada aplikasi. Tiada akaun. Hanya sembang dan teruskan.",
    "step2Title": "Pilih Apa Yang Anda Perlukan",
    "step2Desc": "Dari tanda kecemasan hingga ubat, pemulihan, diet, bantuan kewangan dan banyak lagi –\nhanya tekan pilihan menu atau taip sebarang soalan.",
    "step3Title": "Dapatkan Sokongan Penjaga 24/7",
    "step3Desc": "FamCare247 membimbing anda siang dan malam dengan nasihat yang mudah, tepat, dan mesra penjaga.\nRakan penjagaan anda, sentiasa bersedia.",
    "readyToStart": "Bersedia untuk bermula? Ia mengambil masa kurang daripada 30 saat.",
    "startJourney": "Mula Perjalanan Anda Sekarang",
    
    // Stroke Risk Assessment
    "atRisk": "Adakah anda berisiko strok?",
    "answerQuestions": "Jawab beberapa soalan pendek untuk mengetahui.",
    "takeAssessment": "Ambil Penilaian Risiko Strok Kami",
    "startAssessment": "Mula Penilaian",
    "fsrpNote": "*Diadaptasi daripada Profil Risiko Strok Framingham (FSRP) yang disahkan, dipermudahkan untuk kegunaan awam.",
    
    // Hospital Locator
    "hospitalLocator": "Pencari Hospital Strok",
    "findHospitals": "Cari hospital bersedia strok berhampiran anda di Malaysia",
    "findNearYou": "Cari hospital bersedia strok berhampiran anda.",
    "knowWhereToGo": "Tahu ke mana hendak pergi dalam kecemasan,",
    "everySecondCounts": "kerana dalam strok, setiap saat penting.",
    "findNow": "Cari Sekarang",
    "emergency247": "Penjagaan Kecemasan 24/7",
    "emergency247Desc": "Kemudahan rawatan strok sepanjang masa",
    "gpsNavigation": "Navigasi GPS",
    "gpsNavigationDesc": "Navigasi terus ke hospital terdekat",
    "emergencyContacts": "Kenalan Kecemasan",
    "emergencyContactsDesc": "Maklumat kenalan terus untuk setiap hospital",
    "emergencyNote": "Kecemasan: Panggil 999 dengan segera jika seseorang menunjukkan simptom strok",
    "befastNote": "Gunakan tanda BEFAST: Keseimbangan, Mata, Muka, Lengan, Pertuturan, Masa",
    
    // Caregiver Empathy
    "notAlone": "Anda Tidak Bersendirian dalam Perjalanan Ini",
    "challengingExperience": "Menjaga pesakit strok adalah salah satu pengalaman yang paling mencabar dalam hidup. Kami memahami malam tanpa tidur, keputusan sukar, dan tanggungjawab yang membebankan yang anda rasakan.",
    "emotionalSupport": "Sokongan Emosi",
    "emotionalSupportDesc": "Menjaga pesakit strok boleh menjadi sangat membebankan secara emosi. Anda tidak bersendirian dalam merasakan tekanan, kebimbangan, atau ketidakpastian.",
    "familyGuidance": "Panduan Keluarga",
    "familyGuidanceDesc": "Setiap perjalanan keluarga adalah berbeza. Kami menyediakan nasihat peribadi yang sesuai dengan situasi unik dan konteks budaya anda.",
    "reliableInfo": "Maklumat Boleh Dipercayai",
    "reliableInfoDesc": "Potong kekeliruan dengan panduan yang disemak secara perubatan dan sesuai dengan budaya yang boleh anda percayai.",
    "alwaysAvailable": "Sentiasa Tersedia",
    "alwaysAvailableDesc": "Soalan tidak menunggu waktu pejabat. Dapatkan sokongan bila-bila masa anda memerlukannya, siang atau malam.",
    "everyFamilyDeserves": "Setiap Keluarga Malaysia Layak Mendapat Sokongan",
    "everyFamilyDeservesDesc": "Sama ada anda berada di Kuala Lumpur, Penang, Johor, atau di mana-mana di Malaysia, FamCare247 memahami konteks budaya anda dan menyediakan panduan yang masuk akal untuk keluarga anda. Kami di sini untuk membantu anda menavigasi perjalanan ini dengan keyakinan dan belas kasihan.",
    
    // Testimonials
    "trustedBy": "Dipercayai oleh komuniti penjagaan strok",
    "realStories": "Kisah sebenar dari penjaga dan profesional penjagaan kesihatan.",
    
    // Security
    "privacyTrust": "Privasi yang boleh anda percayai.",
    "caringPersonal": "Menjaga orang tersayang adalah peribadi – dan begitu juga data anda.",
    "secure": "Selamat",
    "secureDesc": "Maklumat anda kekal disulitkan pada peranti anda.",
    "privateByDesign": "Peribadi Secara Reka Bentuk",
    "privateByDesignDesc": "Tiada akaun. Tiada penjejakan. Tiada penjualan data.",
    "yourDataSafe": "Data Anda. Selamat.",
    "yourDataSafeDesc": "Hanya anda yang memutuskan apa yang dikongsi.",
    "whatsappEncryption": "Penyulitan WhatsApp",
    "whatsappEncryptionDesc": "Semua perbualan dilindungi oleh penyulitan hujung-ke-hujung WhatsApp, memastikan hanya anda yang boleh membaca mesej anda.",
    "noDataStorage": "Tiada Penyimpanan Data",
    "noDataStorageDesc": "Kami tidak menyimpan perbualan atau maklumat peribadi anda di pelayan kami. Privasi anda kekal sepenuhnya di bawah kawalan anda.",
    
    // About
    "aboutFamCare": "Mengenai FamCare247",
    "empoweringFamilies": "Memperkasakan keluarga Malaysia dengan panduan penjagaan strok pakar",
    "mission": "Misi",
    "missionText": "Untuk menjadikan penjagaan strok lebih mudah, jelas, dan disokong dengan lebih baik untuk setiap keluarga Malaysia – bila-bila masa, di mana-mana. Kami percaya setiap penjaga layak mendapat panduan dan setiap pesakit strok layak mendapat peluang terbaik untuk pulih.",
    "whyWeBuilt": "Mengapa Kami Membina Ini",
    "whyWeBuiltText": "Penjagaan strok boleh terasa membebankan, mengelirukan dan sunyi. Selepas keluar dari hospital, ramai keluarga bergelut dengan ubat, simptom, temujanji, pemulihan dan mengetahui apa yang perlu dilakukan dalam kecemasan.\n\nKami membina FamCare247 untuk memberi penjaga jawapan segera dan boleh dipercayai melalui WhatsApp – alat yang paling mudah dan paling biasa digunakan oleh rakyat Malaysia setiap hari.\n\nMatlamat kami adalah untuk membawa kejelasan, keyakinan dan sokongan 24/7 kepada setiap rumah yang menjaga pesakit strok.",
    "ourTeam": "Pasukan Kami",
    "madeForMalaysia": "Dibuat untuk Malaysia",
    "madeForMalaysiaText": "FamCare247 dicipta oleh rakyat Malaysia, untuk rakyat Malaysia – dan percuma digunakan.\n\nMisi kami adalah untuk mengukuhkan pemulihan dan penjagaan strok di seluruh negara dengan menyediakan sokongan yang jelas, boleh dipercayai, dan selaras secara klinikal – tersedia 24/7.",
    "proudlyMalaysian": "🇲🇾 Bangga Malaysia",
    "proudlyMalaysianText": "Dibina dengan pemahaman mendalam tentang sistem penjagaan kesihatan Malaysia, nilai budaya, dan dinamik keluarga. Kami komited untuk menyokong setiap keluarga Malaysia yang terjejas oleh strok, sepenuhnya percuma.",
    
    // FAQ
    "frequentlyAsked": "Soalan Lazim",
    "faqSubtitle": "Semua yang anda perlu tahu tentang menggunakan FamCare247 – Rakan Penjagaan Strok WhatsApp 24/7 anda.",
    "faqDataSecure": "Adakah data saya selamat?",
    "faqDataSecureAns": "Ya. Maklumat anda kekal pada peranti anda dan di dalam sembang penyulitan hujung-ke-hujung WhatsApp. Tiada akaun. Tiada penjejakan. Tiada data disimpan di pelayan kami.",
    "faqReplaceDoctor": "Adakah FamCare247 menggantikan doktor saya?",
    "faqReplaceDoctorAns": "Tidak. FamCare247 menyediakan panduan, pendidikan, dan sokongan – tetapi ia tidak mendiagnosis atau menggantikan profesional perubatan. Sentiasa ikut nasihat perubatan doktor anda.",
    "faqNeedInternet": "Adakah saya memerlukan internet untuk menggunakan FamCare247?",
    "faqNeedInternetAns": "Ya. Kerana FamCare247 berjalan di WhatsApp, sambungan internet diperlukan untuk sembang dan menerima sokongan.",
    "faqFree": "Adakah FamCare247 percuma digunakan?",
    "faqFreeAns": "Ya. Sokongan WhatsApp adalah percuma digunakan. (Ciri-ciri lanjutan pilihan mungkin ditambah kemudian.)",
    "faqLanguages": "Bahasa manakah yang disokong?",
    "faqLanguagesAns": "Kini tersedia dalam:\n• Bahasa Inggeris\n• Bahasa Melayu\n(Lebih banyak bahasa akan datang tidak lama lagi.)",
    "faqTrustInfo": "Bolehkah saya mempercayai maklumat perubatan?",
    "faqTrustInfoAns": "Ya. Semua kandungan disemak dan diadaptasi daripada garis panduan strok yang boleh dipercayai dan diiktiraf secara perubatan serta amalan klinikal terbaik.",
    "faqAskAnytime": "Bolehkah saya bertanya bila-bila masa?",
    "faqAskAnytimeAns": "Ya. Pembantu AI tersedia 24 jam sehari, setiap hari.",
    "faqEmergencies": "Bolehkah ia membantu dalam kecemasan?",
    "faqEmergenciesAns": "Ya – FamCare247 menyediakan langkah BEFAST dan memberitahu anda apa yang perlu dilakukan dengan segera, termasuk membantu anda mencari hospital bersedia strok terdekat. Tetapi sentiasa panggil 999 jika seseorang menunjukkan simptom kecemasan.",
    "faqMadeFor": "Siapa FamCare247 dibuat untuk?",
    "faqMadeForAns": "• Penjaga keluarga\n• Pesakit strok\n• Jururawat & ahli terapi\n• Sesiapa yang mahukan panduan strok yang pantas dan boleh dipercayai",
    "stillHaveQuestions": "Masih ada soalan?",
    "teamHere": "Pasukan kami di sini untuk membantu. Hubungi kami bila-bila masa.",
    "contactSupport": "Hubungi Sokongan",
    
    // Footer
    "footerMission": "Memperkasakan penjaga strok Malaysia dengan sokongan 24/7 melalui WhatsApp.",
    "quickLinks": "PAUTAN PANTAS",
    "support": "SOKONGAN",
    "legalLinks": "PAUTAN UNDANG-UNDANG",
    "home": "Laman Utama",
    "howItWorksLink": "Cara Ia Berfungsi",
    "strokeRiskAssessmentLink": "Penilaian Risiko Strok",
    "strokeHospitalLocatorLink": "Pencari Hospital Strok",
    "faqLink": "Soalan Lazim",
    "contactSupportLink": "Hubungi Sokongan",
    "privacyPolicy": "Dasar Privasi",
    "termsOfService": "Terma Perkhidmatan",
    "medicalDisclaimer": "Penafian Perubatan",
    "copyright": "© 2025 FamCare247. Hak cipta terpelihara.",
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