"use client"

import { X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SidebarMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
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
        
        <div className="px-4 py-2">
          <Link href="/stroke" onClick={onClose}>
            <Button
              variant="ghost"
              className="w-full bg-white rounded-full py-6 flex items-center justify-start px-6 gap-2"
            >
              <Info className="h-5 w-5 text-indigo-600" />
              <span className="text-lg font-medium">What is Stroke?</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
