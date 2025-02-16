"use client"

import { motion } from "framer-motion"
import { Building2 } from "lucide-react"
import PropertyForm from "@/app/components/properties/PropertyForm"

export default function CreatePropertyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.15)_0%,transparent_100%)]" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>

        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center space-x-2 mb-4"
              >
                <Building2 className="h-6 w-6 text-purple-400" />
                <span className="text-sm uppercase tracking-wider bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text font-medium">
                  List Your Property
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text"
              >
                Create Your Property Listing
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-400"
              >
                Fill in the details below to list your property
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-8 border border-gray-700/50"
            >
              <PropertyForm />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 