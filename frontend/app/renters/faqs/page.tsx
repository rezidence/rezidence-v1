"use client"

import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    category: "General",
    question: "What is Rezidence?",
    answer: "Rezidence is a revolutionary property rental platform that uses 3D scanning technology to create immersive virtual tours of rental properties. Our platform connects property owners with quality tenants while making the rental process more efficient and transparent."
  },
  {
    category: "General",
    question: "How does the 3D scanning work?",
    answer: "Property owners can use our mobile app to scan their properties in minutes. The app guides you through the process of capturing each room, and our AI technology automatically creates a professional, interactive 3D tour that potential renters can explore from anywhere."
  },
  {
    category: "For Renters",
    question: "How do I schedule a viewing?",
    answer: "You can explore properties through our immersive 3D tours anytime. If you're interested in a property, you can schedule an in-person viewing directly through our platform by selecting available time slots set by the property owner."
  },
  {
    category: "For Renters",
    question: "Is my information secure?",
    answer: "Yes, we take security seriously. All personal information is encrypted and stored securely. We verify the identity of all users and use bank-level security for all transactions on our platform."
  },
  {
    category: "For Owners",
    question: "How much does it cost to list a property?",
    answer: "Join our waitlist to be among the first to learn about our pricing plans. We're committed to providing competitive rates while delivering cutting-edge technology and features to maximize your rental potential."
  },
  {
    category: "For Owners",
    question: "What equipment do I need to create 3D tours?",
    answer: "All you need is a smartphone with our app installed. Our technology works with most modern smartphones, and we provide step-by-step guidance to ensure you capture high-quality 3D tours of your property."
  },
  {
    category: "Technical",
    question: "What devices are supported?",
    answer: "Our platform works on all modern web browsers. For property scanning, our mobile app supports recent iOS and Android devices. Specific device requirements will be provided when you join the waitlist."
  },
  {
    category: "Support",
    question: "How can I get help?",
    answer: "We offer multiple support channels including in-app chat, email support, and detailed help documentation. Property owners also get access to dedicated support for assistance with property scanning and listing optimization."
  }
]

export default function FAQPage() {
  const router = useRouter()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const categories = Array.from(new Set(faqs.map(faq => faq.category)))

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
                Have Questions?
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text"
            >
              Frequently Asked Questions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-12"
            >
              Find answers to common questions about our platform
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-semibold text-white mb-6">{category}</h2>
                <div className="space-y-4">
                  {faqs
                    .filter(faq => faq.category === category)
                    .map((faq, index) => {
                      const faqIndex = faqs.indexOf(faq)
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                          className="relative group"
                        >
                          <button
                            onClick={() => setOpenIndex(openIndex === faqIndex ? null : faqIndex)}
                            className="w-full relative z-10 bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300"
                          >
                            <div className="flex justify-between items-center">
                              <h3 className="text-left text-lg font-medium text-white">{faq.question}</h3>
                              <Plus
                                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                                  openIndex === faqIndex ? "rotate-45" : ""
                                }`}
                              />
                            </div>
                            {openIndex === faqIndex && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.2 }}
                                className="mt-4 text-gray-400 text-left"
                              >
                                {faq.answer}
                              </motion.p>
                            )}
                          </button>
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                        </motion.div>
                      )
                    })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">Still have questions?</p>
            <Button
              onClick={() => router.push("/connect/contact")}
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-6 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 group"
            >
              <span className="relative z-10">Contact Support</span>
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