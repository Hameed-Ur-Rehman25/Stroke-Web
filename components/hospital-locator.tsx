"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MapPin, Clock, Phone } from "lucide-react"

export default function HospitalLocator() {
  return (
    <section id="hospital-locator" className="px-6 py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Stroke Hospital Locator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find stroke-ready hospitals near you in Malaysia
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              {/* Map Placeholder - In real implementation, this would be an interactive map */}
              <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-xl h-96 overflow-hidden">
                {/* Malaysia Map Outline */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-64">
                    {/* Simplified Malaysia shape */}
                    <div className="absolute inset-0 bg-green-200 opacity-30" style={{
                      clipPath: "polygon(20% 10%, 80% 15%, 85% 40%, 75% 70%, 60% 85%, 40% 80%, 25% 60%, 15% 30%)"
                    }}></div>
                    
                    {/* Hospital Markers */}
                    <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg">
                      <div className="absolute -top-1 -left-1 w-6 h-6 bg-red-500 rounded-full opacity-30 animate-ping"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg">
                      <div className="absolute -top-1 -left-1 w-6 h-6 bg-red-500 rounded-full opacity-30 animate-ping"></div>
                    </div>
                    <div className="absolute top-3/4 left-2/5 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg">
                      <div className="absolute -top-1 -left-1 w-6 h-6 bg-red-500 rounded-full opacity-30 animate-ping"></div>
                    </div>
                    <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg">
                      <div className="absolute -top-1 -left-1 w-6 h-6 bg-red-500 rounded-full opacity-30 animate-ping"></div>
                    </div>
                    <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg">
                      <div className="absolute -top-1 -left-1 w-6 h-6 bg-red-500 rounded-full opacity-30 animate-ping"></div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Stroke-Ready Hospitals</span>
                  </div>
                </div>

                {/* Location Button */}
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-md hover:shadow-lg transition-all">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </button>
                </div>
              </div>

              {/* Map Info */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Interactive map showing stroke-ready hospitals across Malaysia
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Find stroke-ready hospitals near you.
              </h3>
              <p className="text-xl text-gray-600 mb-2">
                Know where to go in an emergency,
              </p>
              <p className="text-xl font-semibold text-red-600">
                because in a stroke, every second counts.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">24/7 Emergency Care</h4>
                  <p className="text-gray-600">Round-the-clock stroke treatment facilities</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">GPS Navigation</h4>
                  <p className="text-gray-600">Direct navigation to the nearest hospital</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Emergency Contacts</h4>
                  <p className="text-gray-600">Direct contact information for each hospital</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
              >
                <MapPin className="h-6 w-6" />
                Find Now
              </Button>
            </motion.div>

            {/* Emergency Note */}
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
              <div className="flex items-start gap-3">
                <div className="bg-red-500 text-white p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-red-800">
                    Emergency: Call 999 immediately if someone shows stroke symptoms
                  </p>
                  <p className="text-xs text-red-600 mt-1">
                    Use BEFAST signs: Balance, Eyes, Face, Arms, Speech, Time
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
