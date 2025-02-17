"use client"

import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function PrivacyPage() {
  const router = useRouter()

  const sections = [
    {
      title: "1. Information We Collect",
      content: `1.1 Personal Information:
      • Contact information (name, email, phone number)
      • Identity verification documents
      • Payment information
      • Property information and 3D scans
      
      1.2 Automatically Collected Information:
      • Device information and IP addresses
      • Usage data and interaction with our Services
      • Location data (with permission)
      • 3D scanning data and metadata`
    },
    {
      title: "2. How We Use Your Information",
      content: `We use collected information to:
      • Provide and improve our Services
      • Process rental applications and transactions
      • Generate and optimize 3D property tours
      • Verify user identities and prevent fraud
      • Communicate with users about our Services
      • Analyze platform usage and trends
      • Comply with legal obligations`
    },
    {
      title: "3. Information Sharing",
      content: `3.1 With Other Users:
      • Property information shared with potential renters
      • Limited renter information shared with property owners
      
      3.2 With Service Providers:
      • Payment processors
      • Identity verification services
      • Cloud storage providers
      • Analytics services
      
      3.3 Legal Requirements:
      We may disclose information when required by law or to protect rights and safety.`
    },
    {
      title: "4. Data Security",
      content: `We implement industry-standard security measures including:
      • Encryption of sensitive data
      • Regular security assessments
      • Access controls and monitoring
      • Secure data storage and transmission
      • Regular security updates and patches`
    },
    {
      title: "5. 3D Scan Privacy",
      content: `5.1 Collection: Our 3D scanning technology captures spatial data and images of properties.
      
      5.2 Usage: Scans are used to create virtual tours and property analyses.
      
      5.3 Protection: We implement measures to protect privacy in 3D scans:
      • Automatic blurring of personal items
      • Restricted access to raw scan data
      • Secure storage of 3D models`
    },
    {
      title: "6. User Rights",
      content: `You have the right to:
      • Access your personal information
      • Correct inaccurate data
      • Request deletion of your data
      • Opt-out of marketing communications
      • Export your data
      • Withdraw consent for data processing`
    },
    {
      title: "7. Data Retention",
      content: `We retain personal information for as long as necessary to:
      • Provide our Services
      • Comply with legal obligations
      • Resolve disputes
      • Enforce our agreements
      
      Users can request deletion of their data, subject to legal requirements.`
    },
    {
      title: "8. Cookies and Tracking",
      content: `We use cookies and similar technologies to:
      • Improve user experience
      • Analyze platform usage
      • Personalize content
      • Remember user preferences
      
      Users can control cookie settings through their browser.`
    },
    {
      title: "9. Children's Privacy",
      content: `Our Services are not intended for children under 18. We do not knowingly collect information from children under 18.`
    },
    {
      title: "10. International Data Transfers",
      content: `We may transfer data internationally. All transfers comply with applicable data protection laws and implement appropriate safeguards.`
    }
  ]

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
                Privacy Policy
              </h1>
              <p className="text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-8 border border-gray-700/50"
            >
              <ScrollArea className="h-[60vh] pr-4">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="mb-8"
                  >
                    <h2 className="text-xl font-semibold text-white mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-400 whitespace-pre-line">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </ScrollArea>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-400 mb-4">
                Questions about our Privacy Policy?
              </p>
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
    </div>
  )
} 