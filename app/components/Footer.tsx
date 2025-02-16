"use client"

import Link from "next/link"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.05)_0%,transparent_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/about" 
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="relative">
                    About Us
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="relative">
                    Blog
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Renters
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/renters/how-it-works" 
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="relative">
                    How It Works
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/renters/safety" 
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="relative">
                    Safety
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/renters/faqs" 
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="relative">
                    FAQs
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Property Owners
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/owners/how-it-works" 
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="relative">
                    How It Works
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/waitlist" 
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="relative">
                    List Your Property
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Connect
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/connect/contact" 
                  className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <span className="relative">
                    Contact Us
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <div className="flex space-x-6 items-center">
                  <Link 
                    href="/waitlist" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                  >
                    <FaFacebook size={20} />
                  </Link>
                  <Link 
                    href="/waitlist" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                  >
                    <FaTwitter size={20} />
                  </Link>
                  <Link 
                    href="/waitlist" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                  >
                    <FaInstagram size={20} />
                  </Link>
                  <Link 
                    href="/waitlist" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                  >
                    <FaLinkedin size={20} />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Rezidence. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="relative">
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
              <Link 
                href="/terms" 
                className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="relative">
                  Terms of Service
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

