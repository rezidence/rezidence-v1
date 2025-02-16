"use client"

import { motion } from "framer-motion"
import { Search, Headset, ClipboardCheck, Key, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
// import { Search, ClipboardCheck, Key } from "lucide-react"

const steps = [
  {
    icon: <Search className="h-12 w-12 text-purple-400" />,
    title: "Browse Properties",
    description: "Explore our extensive collection of rental properties with immersive 3D tours."
  },
  {
    icon: <Headset className="h-12 w-12 text-blue-400" />,
    title: "Virtual Tour",
    description: "Experience properties in stunning detail with our cutting-edge 3D technology."
  },
  {
    icon: <ClipboardCheck className="h-12 w-12 text-purple-400" />,
    title: "Easy Application",
    description: "Apply for your chosen property with our streamlined digital process."
  },
  {
    icon: <Key className="h-12 w-12 text-blue-400" />,
    title: "Move In",
    description: "Get approved and start your journey in your new home."
  }
]

export default function HowItWorksPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.15)_0%,transparent_100%)]" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>

        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-2 mb-4"
            >
              <span className="text-sm uppercase tracking-wider bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text font-medium">
                Simple Process
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text"
            >
              How Rezidence Works
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8"
            >
              Experience the future of property rentals with our seamless, technology-driven process.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative group"
              >
                <div className="relative z-10 bg-gray-800/50 backdrop-blur-xl rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <Button
              onClick={() => router.push('/waitlist')}
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-6 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 group"
            >
              <span className="relative z-10 flex items-center">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 