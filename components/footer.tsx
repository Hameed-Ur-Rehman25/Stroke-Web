import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-4 px-6 bg-slate-800 border-t border-slate-600">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-lg text-blue-400">FamCare24/7</h3>
            <p className="text-sm text-slate-300">Supporting stroke caregivers 24/7</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-blue-400">Company</h4>
              <Link href="/about-us" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">About Us</Link>
              <Link href="/team" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Our Team</Link>
              <Link href="/careers" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Careers</Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-blue-400">Resources</h4>
              <Link href="/blog" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Blog</Link>
              <Link href="/research" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Research</Link>
              <Link href="/faq" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">FAQ</Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-blue-400">Support</h4>
              <Link href="/contact" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Contact</Link>
              <Link href="/help" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Help Center</Link>
              <Link href="/feedback" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Feedback</Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-blue-400">Legal</h4>
              <Link href="/privacy" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-slate-600 text-center">
          <p className="text-sm text-slate-400">&copy; 2024 FamCare24/7. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
