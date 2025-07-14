"use client"

import Link from "next/link"
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
          <Button variant="ghost" size="icon" className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-md h-10 w-10 hover:from-indigo-200 hover:to-purple-200 transition-all duration-300" onClick={toggleSidebar}>
            <Menu className="h-5 w-5 text-indigo-700" />
            <span className="sr-only">Menu</span>
          </Button>
          <Link href="/" className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
            FamCare24/7
          </Link>
        </div>
      </header>

      <SidebarMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  )
}
