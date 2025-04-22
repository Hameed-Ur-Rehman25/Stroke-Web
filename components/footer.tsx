import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-4 px-6 bg-gradient-to-r from-indigo-50 via-white to-purple-50 border-t border-indigo-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">StrokeAI</h3>
            <p className="text-sm text-gray-600">The future of stroke health assistance</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-indigo-700">Company</h4>
              <Link href="/about-us" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">About Us</Link>
              <Link href="/team" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Our Team</Link>
              <Link href="/careers" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Careers</Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-indigo-700">Resources</h4>
              <Link href="/blog" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Blog</Link>
              <Link href="/research" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Research</Link>
              <Link href="/faq" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">FAQ</Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-indigo-700">Legal</h4>
              <Link href="/terms-of-use" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Terms of Use</Link>
              <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Privacy Policy</Link>
              <Link href="/cookie-policy" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Cookie Policy</Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-indigo-700">Contact</h4>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Contact Us</Link>
              <Link href="/support" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Support</Link>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <span>Eng</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-indigo-100 pt-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div className="text-sm text-gray-600">© 2025 StrokeAI.ai All Rights Reserved.</div>
          
          <div className="flex gap-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
              </svg>
            </a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.79.217-2.428.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.636-.416 1.361-.464 2.428C2.013 8.945 2 9.286 2 12c0 2.714.013 3.055.06 4.121.05 1.066.217 1.79.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.909 4.909 0 0 0 1.771 1.154c.636.248 1.361.416 2.428.464 1.066.05 1.407.06 4.121.06s3.055-.013 4.121-.06c1.066-.05 1.79-.217 2.428-.465a4.91 4.91 0 0 0 1.771-1.154 4.909 4.909 0 0 0 1.154-1.771c.248-.636.416-1.361.464-2.428.05-1.066.06-1.407.06-4.121s-.013-3.055-.06-4.121c-.05-1.066-.217-1.79-.465-2.428a4.91 4.91 0 0 0-1.154-1.771 4.909 4.909 0 0 0-1.771-1.154c-.636-.248-1.361-.416-2.428-.464C15.055 2.013 14.714 2 12 2m0 1.8c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.464.182.8.399 1.15.748.35.35.566.686.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.977-.207 1.505-.344 1.858a3.12 3.12 0 0 1-.748 1.15c-.35.35-.686.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.977-.045-1.504-.207-1.858-.344a3.116 3.116 0 0 1-1.15-.748 3.12 3.12 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.464.399-.8.748-1.15.35-.35.686-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058m0 3.06a5.14 5.14 0 1 0 0 10.28 5.14 5.14 0 0 0 0-10.28zm0 8.47a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66zm6.538-8.67a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
              </svg>
            </a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
