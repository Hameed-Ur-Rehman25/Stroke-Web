"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { AlertCircle, Heart, Activity } from 'lucide-react';

export default function Community() {
  return (
    <section className="px-6 max-w-6xl mx-auto py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">Stroke Risk Assessment</h2>
        <p className="text-xl text-gray-600 mb-12">Understanding your personal risk factors is key to preventing stroke</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div 
          className="bg-white p-5 rounded-lg shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-100 p-2 rounded-full">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">High Blood Pressure</h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Risk Increase</p>
            <p className="text-2xl font-bold text-red-600">+150%</p>
          </div>
          <p className="text-sm text-gray-600 mt-2">Individuals with hypertension have 2.5x higher risk of stroke</p>
        </motion.div>
        
        <motion.div 
          className="bg-white p-5 rounded-lg shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <Activity className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Atrial Fibrillation</h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Risk Increase</p>
            <p className="text-2xl font-bold text-orange-600">+500%</p>
          </div>
          <p className="text-sm text-gray-600 mt-2">AFib increases stroke risk by 5x compared to those without</p>
        </motion.div>
        
        <motion.div 
          className="bg-white p-5 rounded-lg shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Heart className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Diabetes</h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Risk Increase</p>
            <p className="text-2xl font-bold text-yellow-600">+200%</p>
          </div>
          <p className="text-sm text-gray-600 mt-2">People with diabetes have 2-3x higher stroke risk</p>
        </motion.div>
      </div>
      
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-lg border border-indigo-100 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h3 className="text-xl font-medium mb-4 text-indigo-700">Risk by Age Group in Malaysia</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">Under 40 years</span>
              <span className="text-indigo-700 font-medium">5%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '5%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">40-60 years</span>
              <span className="text-indigo-700 font-medium">37%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '37%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">60-80 years</span>
              <span className="text-indigo-700 font-medium">48%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '48%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">Above 80 years</span>
              <span className="text-indigo-700 font-medium">10%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '10%' }}></div>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4">Source: Malaysian Stroke Registry data analysis 2020-2023</p>
      </motion.div>

      <motion.div 
        className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h3 className="text-2xl font-bold mb-3">Take Our Stroke Risk Assessment</h3>
        <p className="mb-6">Answer a few questions to get a personalized stroke risk profile and recommendations.</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium px-8 py-3 rounded-full transition-all">
            Start Assessment
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
