"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Building2, 
  DollarSign, 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Phone, 
  Mail,
  Calendar,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Home
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Property } from "@/types/property"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`/api/properties/${params.id}`)
        if (!response.ok) {
          throw new Error('Property not found')
        }
        const data = await response.json()
        setProperty(data)
      } catch (error) {
        console.error('Error fetching property:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperty()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-24">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-96 bg-gray-800/50 rounded-xl mb-8" />
            <div className="h-8 bg-gray-800/50 w-1/2 rounded mb-4" />
            <div className="h-4 bg-gray-800/50 w-1/4 rounded" />
          </div>
        </div>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-white mb-4">Property Not Found</h1>
            <p className="text-gray-400">The property you're looking for doesn't exist or has been removed.</p>
          </motion.div>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    )
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    )
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
          <div className="max-w-6xl mx-auto">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-purple-400" />
                <span className="text-sm uppercase tracking-wider bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text font-medium">
                  Property Details
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
                {property.title}
              </h1>
              <div className="flex items-center justify-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <p>
                  {property.location.address}, {property.location.city}, {property.location.state} {property.location.zipCode}
                </p>
              </div>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <div className="relative aspect-video bg-gray-800/50 rounded-xl overflow-hidden">
                {property.images.length > 0 ? (
                  <>
                    <Image
                      src={property.images[currentImageIndex]}
                      alt={`Property image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                    {property.images.length > 1 && (
                      <div className="absolute inset-0 flex items-center justify-between p-4">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={previousImage}
                          className="bg-black/50 hover:bg-black/70 border-white/10"
                        >
                          <ChevronLeft className="h-4 w-4 text-white" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={nextImage}
                          className="bg-black/50 hover:bg-black/70 border-white/10"
                        >
                          <ChevronRight className="h-4 w-4 text-white" />
                        </Button>
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
                      {currentImageIndex + 1} / {property.images.length}
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No images available
                  </div>
                )}
              </div>
            </motion.div>

            {/* Property Details Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center text-2xl font-bold text-white mb-6">
                    <DollarSign className="h-6 w-6 mr-1 text-purple-400" />
                    ${property.price.toLocaleString()}/month
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Bed className="h-5 w-5 mr-2 text-blue-400" />
                      <span>{property.features.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Bath className="h-5 w-5 mr-2 text-blue-400" />
                      <span>{property.features.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Square className="h-5 w-5 mr-2 text-blue-400" />
                      <span>{property.features.squareFeet} sqft</span>
                    </div>
                  </div>
                  <p className="text-gray-300">{property.description}</p>
                </motion.div>

                {property.amenities.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-8 border border-gray-700/50"
                  >
                    <h2 className="text-xl font-semibold text-white mb-6">Amenities</h2>
                    <div className="grid grid-cols-2 gap-4">
                      {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                          <span className="capitalize">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-8"
              >
                {/* Contact Card */}
                <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-semibold text-white mb-6">Contact Owner</h3>
                  <div className="space-y-4">
                    <Button className="w-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600" asChild>
                      <a href="tel:+1234567890">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Owner
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full flex items-center justify-center border-gray-700 hover:bg-gray-700/50" asChild>
                      <a href="mailto:owner@example.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Owner
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 