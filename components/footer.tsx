"use client"

import Link from "next/link"

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand + Mission Statement */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">FamCare247</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Empowering Malaysia's stroke caregivers with 24/7 support through WhatsApp.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-sm text-gray-400 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-sm text-gray-400 hover:text-white transition-colors text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('stroke-risk-assessment')}
                  className="text-sm text-gray-400 hover:text-white transition-colors text-left"
                >
                  Stroke Risk Assessment
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('hospital-locator')}
                  className="text-sm text-gray-400 hover:text-white transition-colors text-left"
                >
                  Stroke Hospital Locator
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-sm text-gray-400 hover:text-white transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a
                  href="mailto:hello@whitecoat.com.my"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/medical-disclaimer" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © 2025 FamCare247. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}