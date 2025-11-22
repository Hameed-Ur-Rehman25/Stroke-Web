import Hero from "@/components/hero"
import WhatsAppCTA from "@/components/whatsapp-cta"
import HowItWorks from "@/components/how-it-works"
import Community from "@/components/community"
import HospitalLocator from "@/components/hospital-locator"
import CaregiverEmpathy from "@/components/caregiver-empathy"
import Testimonials from "@/components/testimonials"
import Security from "@/components/security"
import AboutFamCare from "@/components/about-famcare"
import FAQ from "@/components/faq"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhatsAppCTA />
      <HowItWorks />
      <Community />
      <HospitalLocator />
      <CaregiverEmpathy />
      <Testimonials />
      <Security />
      <AboutFamCare />
      <FAQ />
    </div>
  )
}
