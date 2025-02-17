"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Building2, Users, Shield, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


 
const benefits = [
  {
    icon: <Building2 className="h-12 w-12 text-purple-400" />,
    title: "Early Access",
    description: "Be among the first to explore and list properties on our platform."
  },
  {
    icon: <Users className="h-12 w-12 text-blue-400" />,
    title: "Priority Support",
    description: "Get dedicated assistance and personalized onboarding when we launch."
  },
  {
    icon: <Shield className="h-12 w-12 text-purple-400" />,
    title: "Exclusive Benefits",
    description: "Enjoy special perks and features available only to waitlist members."
  }
]

type UserType = 'owner' | 'renter' | null

export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [userType, setUserType] = useState<UserType>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userType || !email) return
    
    setLoading(true)
    setError(null)

    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/waitlist`;
    const payload = { email, userType };
    console.log(url);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });


      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to join waitlist');
      }
      
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to join waitlist');
    } finally {
      setLoading(false);
    }
  }

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
                Coming Soon
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text"
            >
              Join the Waitlist
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-12"
            >
              Be the first to experience the future of rental property management
            </motion.p>

            {!submitted ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto space-y-6"
              >
                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-500 rounded-lg p-3 text-sm">
                    {error}
                  </div>
                )}
                <div className="flex justify-center gap-4">
                  <Button
                    type="button"
                    onClick={() => setUserType('owner')}
                    className={`relative overflow-hidden rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      userType === 'owner'
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'bg-gray-800/50 text-gray-400 hover:text-white'
                    }`}
                  >
                    Property Owner
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setUserType('renter')}
                    className={`relative overflow-hidden rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      userType === 'renter'
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'bg-gray-800/50 text-gray-400 hover:text-white'
                    }`}
                  >
                    Renter
                  </Button>
                </div>

                <div className="flex gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400"
                  />
                  <Button
                    type="submit"
                    disabled={loading || !userType}
                    className="relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 text-white transition-all duration-300 hover:scale-105 group disabled:opacity-50 disabled:hover:scale-100"
                  >
                    <span className="relative z-10 flex items-center">
                      {loading ? "Joining..." : (
                        <>
                          Join Now
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-8 border border-gray-700/50 max-w-md mx-auto"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
                <p className="text-gray-400">
                  Thank you for joining our waitlist. We'll notify you when we launch.
                </p>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative group"
              >
                <div className="relative z-10 bg-gray-800/50 backdrop-blur-xl rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
} 