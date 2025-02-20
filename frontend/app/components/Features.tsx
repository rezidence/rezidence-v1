"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Building2, ArrowRight, Sparkles, Shield, Target, Users, Clock, Key } from "lucide-react"

export default function Features() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLElement>(null)

  // Parallax effect for background elements
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMousePosition({ x, y })
  }

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const features = [
    {
      icon: <Building2 className="w-6 h-6 text-purple-400" />,
      title: "Showcase Your Property",
      description: "Create stunning 3D virtual tours that make your property stand out"
    },
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: "Reach Quality Tenants",
      description: "Connect with verified renters actively looking for properties like yours"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Secure & Efficient",
      description: "Save time with automated screening and secure digital transactions"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Verified Renters",
      description: "Connect with pre-screened tenants who match your requirements"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: "Time-Saving",
      description: "Streamline showings and applications with virtual tours"
    },
    {
      icon: <Key className="w-6 h-6 text-blue-400" />,
      title: "Easy Management",
      description: "Handle all property-related tasks from one dashboard"
    }
  ]

  return (
    <section ref={ref} className="bg-black py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <motion.div 
                variants={iconVariants}
                className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 mx-auto bg-gray-900/50 rounded-2xl"
              >
                <div className="transform rotate-0">
                  {feature.icon}
                </div>
              </motion.div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3 text-center">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-300 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

