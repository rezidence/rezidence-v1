"use client"

import { Camera, Sparkles, Gamepad2, Share2, Building2, MessagesSquare } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: <Camera className="h-12 w-12 text-blue-500" />,
    title: "3D Property Scanning",
    description: "Simply scan your property with your phone's camera to create an immersive 3D model instantly.",
  },
  {
    icon: <Sparkles className="h-12 w-12 text-purple-500" />,
    title: "AI-Enhanced Listings",
    description: "Our AI automatically creates engaging descriptions and highlights key features of your property.",
  },
  {
    icon: <Gamepad2 className="h-12 w-12 text-green-500" />,
    title: "Gamified Virtual Tours",
    description: "Properties are transformed into interactive, game-like experiences that renters love to explore.",
  },
  {
    icon: <Building2 className="h-12 w-12 text-yellow-500" />,
    title: "Smart Property Details",
    description: "AI analyzes your space to automatically detect rooms, features, and amenities for accurate listings.",
  },
  {
    icon: <MessagesSquare className="h-12 w-12 text-pink-500" />,
    title: "Automated Q&A",
    description: "AI-powered system answers common questions about your property instantly, saving you time.",
  },
  {
    icon: <Share2 className="h-12 w-12 text-indigo-500" />,
    title: "Easy Sharing",
    description: "Share your interactive 3D listings across social media and real estate platforms with one click.",
  }
]

const containerVariants = {
  hidden: { 
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

const iconVariants = {
  hidden: { 
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    margin: "-10% 0px -10% 0px",
    amount: 0.3,
    once: false
  })

  return (
    <section ref={ref} id="features" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
          className="text-4xl font-bold text-center text-white mb-4"
        >
          Revolutionary Features
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
          className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
        >
          Transform your property listings with our AI-powered 3D scanning technology. Create immersive, 
          gamified experiences that make your properties stand out.
        </motion.p>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <motion.div 
                variants={iconVariants}
                className="flex items-center justify-center w-16 h-16 mb-6 mx-auto bg-gray-900/50 rounded-2xl"
              >
                <div className="transform rotate-0">
                  {feature.icon}
                </div>
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

