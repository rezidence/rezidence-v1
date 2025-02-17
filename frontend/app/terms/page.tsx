"use client"

import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function TermsPage() {
  const router = useRouter()

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing or using Rezidence's services, including our website, mobile application, 3D scanning technology, and rental platform (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our Services.`
    },
    {
      title: "2. Service Description",
      content: `Rezidence provides a platform connecting property owners and potential renters through advanced 3D visualization technology. Our Services include:
      • Property listing and browsing capabilities
      • 3D property scanning and virtual tour creation
      • Rental application processing
      • Communication tools between owners and renters
      • Digital transaction processing`
    },
    {
      title: "3. User Accounts",
      content: `3.1 Account Creation: Users must provide accurate, current, and complete information during registration.
      3.2 Account Security: Users are responsible for maintaining the confidentiality of their account credentials.
      3.3 Account Types: We offer separate accounts for property owners and renters, each with specific features and responsibilities.`
    },
    {
      title: "4. Property Listings",
      content: `4.1 Accuracy: Property owners must provide accurate information about their properties.
      4.2 3D Scans: All 3D scans must be current and accurately represent the property.
      4.3 Content Rights: By uploading content, users grant Rezidence a license to use, modify, and display the content.`
    },
    {
      title: "5. 3D Scanning Technology",
      content: `5.1 Usage: The 3D scanning technology must be used in compliance with our guidelines.
      5.2 Restrictions: Users may not reverse engineer or attempt to extract the underlying technology.
      5.3 Quality Standards: Scans must meet our minimum quality requirements for listing.`
    },
    {
      title: "6. User Conduct",
      content: `Users agree not to:
      • Violate any laws or regulations
      • Impersonate others or provide false information
      • Interfere with the proper functioning of the Services
      • Harass or discriminate against other users
      • Circumvent or manipulate our fee structure`
    },
    {
      title: "7. Fees and Payments",
      content: `7.1 Service Fees: Property owners may be charged fees for listing services.
      7.2 Payment Processing: All payments are processed through secure, third-party payment processors.
      7.3 Refunds: Refund policies vary based on service type and circumstances.`
    },
    {
      title: "8. Intellectual Property",
      content: `8.1 Ownership: Rezidence retains all rights to our technology, platform, and brand.
      8.2 User Content: Users retain rights to their content while granting us necessary licenses.
      8.3 Restrictions: Users may not copy or reproduce our technology or content without permission.`
    },
    {
      title: "9. Liability and Disclaimers",
      content: `9.1 Service Availability: We strive for but do not guarantee continuous service availability.
      9.2 Property Information: We do not guarantee the accuracy of property listings or 3D scans.
      9.3 Limitation of Liability: Our liability is limited to the extent permitted by law.`
    },
    {
      title: "10. Termination",
      content: `We reserve the right to terminate or suspend accounts for violations of these terms or for any other reason at our discretion.`
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
                Terms of Service
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
                Questions about our Terms of Service?
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