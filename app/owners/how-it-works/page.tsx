"use client";

import { motion } from "framer-motion";
import { UserPlus, Smartphone, ClipboardList, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const steps = [
  {
    icon: <UserPlus className="h-12 w-12 text-purple-400" />,
    title: "Quick Registration",
    description: "Create your account in minutes. We only ask for essential information to get you started.",
    details: [
      "Simple sign-up process",
      "Verify your identity",
      "Set up your profile"
    ]
  },
  {
    icon: <Smartphone className="h-12 w-12 text-blue-400" />,
    title: "Scan Your Property",
    description: "Use our mobile app to create an immersive 3D tour of your property in less than 10 minutes.",
    details: [
      "Download our user-friendly app",
      "Follow the guided scanning process",
      "Capture each room with ease"
    ]
  },
  {
    icon: <ClipboardList className="h-12 w-12 text-purple-400" />,
    title: "Property Details",
    description: "Answer a few basic questions about your property to help us create the perfect listing.",
    details: [
      "Basic property information",
      "Amenities and features",
      "Pricing and availability"
    ]
  },
  {
    icon: <Sparkles className="h-12 w-12 text-blue-400" />,
    title: "AI-Powered Listing",
    description: "Our AI creates a stunning, unique listing page that showcases your property's best features.",
    details: [
      "Professional description generation",
      "Automated highlight detection",
      "SEO-optimized content"
    ]
  }
];

export default function OwnersHowItWorksPage() {
  const router = useRouter();

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
                For Property Owners
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text"
            >
              List Your Property in Minutes
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8"
            >
              Transform your property listing with our revolutionary 3D scanning technology
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid gap-8"
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
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors duration-300">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700/50 text-gray-300 text-sm font-medium">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Button
              onClick={() => router.push("/waitlist")}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}