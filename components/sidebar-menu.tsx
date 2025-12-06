"use client"

import { X, Info, HelpCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface SidebarMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
  const router = useRouter()

  const scrollToSection = (id: string) => {
    onClose()
    // Small delay to ensure sidebar closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        // If on a different page, navigate to home first
        router.push(`/#${id}`)
      }
    }, 100)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20" onClick={onClose} />

      {/* Sidebar */}
      <div className="relative w-80 bg-gray-200 h-full flex flex-col">
        <div className="p-4 flex justify-end">
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-md">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        
        <div className="px-4 py-2 space-y-2">
          <Link href="/stroke" onClick={onClose}>
            <Button
              variant="ghost"
              className="w-full bg-white rounded-full py-6 flex items-center justify-start px-6 gap-2"
            >
              <Info className="h-5 w-5 text-indigo-600" />
              <span className="text-lg font-medium">What is Stroke?</span>
            </Button>
          </Link>

          <Button
            variant="ghost"
            onClick={() => scrollToSection('about')}
            className="w-full bg-white rounded-full py-6 flex items-center justify-start px-6 gap-2"
          >
            <Users className="h-5 w-5 text-indigo-600" />
            <span className="text-lg font-medium">About</span>
          </Button>

          <Button
            variant="ghost"
            onClick={() => scrollToSection('faq')}
            className="w-full bg-white rounded-full py-6 flex items-center justify-start px-6 gap-2"
          >
            <HelpCircle className="h-5 w-5 text-indigo-600" />
            <span className="text-lg font-medium">FAQ</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
