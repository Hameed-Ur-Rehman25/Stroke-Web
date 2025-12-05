"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import SidebarMenu from "./sidebar-menu"

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <header className="py-4 px-6 flex items-center justify-between bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="bg-gradient-to-r from-teal-100 to-emerald-100 rounded-md h-10 w-10 hover:from-teal-200 hover:to-emerald-200 transition-all duration-300" onClick={toggleSidebar}>
            <Menu className="h-5 w-5 text-teal-700" />
            <span className="sr-only">Menu</span>
          </Button>
          <Link href="/" className="flex items-center">
            <Image
              src="/wide-no-bg-logo.png"
              alt="FamCare247"
              width={150}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>
      </header>

      <SidebarMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  )
}
