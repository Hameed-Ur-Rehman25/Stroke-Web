import Hero from "@/components/hero"
import Features from "@/components/features"
import ChatExample from "@/components/chat-example"
import Community from "@/components/community"
import Testimonials from "@/components/testimonials"
import Security from "@/components/security"
import ComplianceSection from "@/components/compliance-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <Features />
      <ComplianceSection />
      <ChatExample />
      <Community />
      <Testimonials />
      <Security />
    </div>
  )
}
