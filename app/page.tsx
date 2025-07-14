import Hero from "@/components/hero"
import Features from "@/components/features"
import ChatExample from "@/components/chat-example"
import Community from "@/components/community"
import Testimonials from "@/components/testimonials"
import Security from "@/components/security"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <ChatExample />
      <Community />
      <Testimonials />
      <Security />
    </div>
  )
}
