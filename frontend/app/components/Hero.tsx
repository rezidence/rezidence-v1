"use client"

import { motion, useAnimationFrame } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { useRef, useState, ReactNode, useEffect } from "react"

interface FloatingElementProps {
  children: ReactNode
  delay?: number
}

const FloatingElement = ({ children, delay = 0 }: FloatingElementProps) => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, -5, 5, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// House animation component
const AnimatedHouse = () => {
  const [scanPosition, setScanPosition] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setScanPosition(prev => (prev >= 100 ? 0 : prev + 1))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-lg mx-auto h-[500px]">
      {/* House Frame */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="relative w-full h-full">
          {/* Main House Structure */}
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-lg border border-white/20 shadow-2xl" />
          
          {/* Roof Structure */}
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[90%]">
            {/* Main Roof */}
            <div className="relative h-[120px]">
              {/* Left Roof Panel */}
              <div 
                className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-purple-500/30 to-blue-500/20 backdrop-blur-sm"
                style={{ 
                  clipPath: 'polygon(0 100%, 50% 0, 50% 100%)',
                  transform: 'perspective(500px) rotateX(5deg)'
                }}
              />
              {/* Right Roof Panel */}
              <div 
                className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tl from-purple-500/30 to-blue-500/20 backdrop-blur-sm"
                style={{ 
                  clipPath: 'polygon(50% 0, 100% 100%, 50% 100%)',
                  transform: 'perspective(500px) rotateX(5deg)'
                }}
              />
              {/* Roof Ridge */}
              <div 
                className="absolute left-1/2 w-[2px] h-full bg-white/20"
                style={{ transform: 'perspective(500px) rotateX(5deg)' }}
              />
              {/* Roof Base */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20" />
            </div>
          </div>
          
          {/* Chimney */}
          <div className="absolute top-[10%] right-[25%] w-[30px] h-[100px] bg-gradient-to-b from-gray-500/30 to-gray-700/30 backdrop-blur-sm rounded-t-lg">
            {/* Chimney Top */}
            <div className="absolute -top-2 -left-2 right-2 h-4 bg-gray-600/30 rounded-lg" />
            <div className="absolute -top-1 -right-2 w-4 h-4 bg-gray-600/30 rounded-lg" />
          </div>

          {/* Front Door */}
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[60px] h-[100px] bg-gradient-to-b from-blue-600/30 to-blue-800/30 backdrop-blur-sm rounded-t-xl border border-white/20">
            {/* Door Frame */}
            <div className="absolute inset-2 border border-white/10 rounded-t-lg" />
            {/* Door Handle */}
            <div className="absolute right-3 top-1/2 w-2 h-2 rounded-full bg-yellow-500/50" />
          </div>

          {/* Windows */}
          {/* Left Window */}
          <div className="absolute bottom-[35%] left-[25%] w-[70px] h-[70px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-md rounded-lg border border-white/20">
            {/* Window Frame */}
            <div className="absolute inset-0 grid grid-cols-2 gap-1 p-2">
              <div className="bg-white/10 rounded" />
              <div className="bg-white/10 rounded" />
              <div className="bg-white/10 rounded" />
              <div className="bg-white/10 rounded" />
            </div>
          </div>
          
          {/* Right Window */}
          <div className="absolute bottom-[35%] right-[25%] w-[70px] h-[70px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-md rounded-lg border border-white/20">
            {/* Window Frame */}
            <div className="absolute inset-0 grid grid-cols-2 gap-1 p-2">
              <div className="bg-white/10 rounded" />
              <div className="bg-white/10 rounded" />
              <div className="bg-white/10 rounded" />
              <div className="bg-white/10 rounded" />
            </div>
          </div>

          {/* Attic Window */}
          <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[50px] h-[50px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-md rounded-full border border-white/20">
            <div className="absolute inset-2 rounded-full bg-white/10" />
            {/* Window Cross */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-[1px] bg-white/20" />
              <div className="h-full w-[1px] bg-white/20" />
            </div>
          </div>

          {/* Front Yard Elements */}
          <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[90%] h-[10px] bg-gradient-to-r from-green-800/20 via-green-600/20 to-green-800/20 backdrop-blur-sm rounded-full" />
          
          {/* Glowing Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent rounded-lg filter blur-xl" />
        </div>
      </motion.div>

      {/* Scanning Effect */}
      <motion.div 
        className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        style={{
          top: `${scanPosition}%`,
          opacity: scanPosition > 95 ? 0 : 0.8,
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
        }}
      />

      {/* Measurement Points */}
      {[
        { position: 20, value: "4.50" },
        { position: 40, value: "3.75" },
        { position: 60, value: "5.20" },
        { position: 80, value: "4.80" }
      ].map((point, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: scanPosition > point.position ? 1 : 0,
            opacity: scanPosition > point.position ? 1 : 0
          }}
          className="absolute w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
          style={{
            left: `${25 + index * 15}%`,
            top: `${point.position}%`
          }}
        >
          <div className="absolute left-3 top-[-8px] text-xs text-blue-300 whitespace-nowrap font-mono">
            {point.value}m
          </div>
          <div className="absolute h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
        </motion.div>
      ))}

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '30px 30px'
        }}
      />
    </div>
  )
}

export default function Hero() {
  const router = useRouter()
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

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative overflow-hidden bg-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <FloatingElement key={i} delay={i * 2}>
              <div 
                className="absolute rounded-full bg-purple-500/10 backdrop-blur-3xl"
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  left: `${20 + i * 30}%`,
                  top: `${20 + i * 20}%`,
                }}
              />
            </FloatingElement>
          ))}
          
          {[...Array(3)].map((_, i) => (
            <FloatingElement key={i} delay={i * 2 + 1}>
              <div 
                className="absolute rounded-full bg-blue-500/10 backdrop-blur-3xl"
                style={{
                  width: `${120 + i * 40}px`,
                  height: `${120 + i * 40}px`,
                  right: `${15 + i * 25}%`,
                  top: `${30 + i * 15}%`,
                }}
              />
            </FloatingElement>
          ))}
        </div>

        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <span className="text-sm uppercase tracking-wider bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text font-medium">
                  The Future of Property Rentals
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text"
              >
                Experience
                <br />
                Properties in 3D
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 text-xl max-w-xl mb-12"
              >
                Step into the future of property viewing with immersive 
                3D experiences and AI-powered insights.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Button
                  onClick={() => router.push('/waitlist')}
                  className="group relative overflow-hidden rounded-full bg-white px-8 py-6 text-lg font-semibold text-black transition-transform hover:scale-105"
                >
                  <span className="relative z-10">Join Waitlist</span>
                  <motion.div
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 z-0"
                  />
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => router.push('/about')}
                  className="text-white group px-8 py-6 text-lg font-semibold flex items-center gap-2"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:block"
            >
              <AnimatedHouse />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}