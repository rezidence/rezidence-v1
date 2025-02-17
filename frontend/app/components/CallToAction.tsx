"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Building2, ArrowRight, Sparkles, Shield, Target } from "lucide-react"

export default function CallToAction() {
  const router = useRouter()

  const benefits = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Showcase Your Property",
      description: "Create stunning 3D virtual tours that make your property stand out"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Reach Quality Tenants",
      description: "Connect with verified renters actively looking for properties like yours"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Efficient",
      description: "Save time with automated screening and secure digital transactions"
    }
  ]
  
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.15)_0%,transparent_100%)]" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
          }}
        />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm uppercase tracking-wider bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text font-medium">
              Property Owners
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text"
          >
            Transform Your Property Listings
            <br />
            With Immersive 3D Experiences
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            Join thousands of property owners who are revolutionizing their rental business
            with our cutting-edge 3D scanning and virtual tour technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => router.push('/waitlist')}
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-6 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 group"
            >
              <span className="relative z-10 flex items-center">
                Start Listing Your Property
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push('/owners/how-it-works')}
              className="text-gray-300 hover:text-white px-8 py-6 text-lg font-semibold"
            >
              See How It Works
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="relative z-10 bg-gray-800/50 backdrop-blur-xl rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300">
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
        />
      </div>
    </section>
  )
}

