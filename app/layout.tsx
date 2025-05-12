import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatInput from "@/components/chat-input"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FamCare24/7 - Your Stroke Caregiving Assistant",
  description: "Supporting family caregivers of stroke patients with 24/7 resources and guidance",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col overflow-x-hidden`}>
        <Header />
        <main className="flex-1">{children}</main>
        <ChatInput />
        <Footer />
      </body>
    </html>
  )
}


import './globals.css'