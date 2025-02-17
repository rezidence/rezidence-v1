"use client"

import { useEffect, useState } from "react"
import { Bed, Bath, Square, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface PropertyFeatures {
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  propertyType: 'apartment' | 'house' | 'condo' | 'townhouse';
}

interface PropertyLocation {
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: PropertyLocation;
  features: PropertyFeatures;
  amenities: string[];
  images: string[];
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
  ownerId: string;
}

interface PropertyGridProps {
  searchTerm: string
}

export default function PropertyGrid({ searchTerm }: PropertyGridProps) {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties')
        const data = await response.json()
        console.log('Fetched properties:', data)
        setProperties(data)
      } catch (error) {
        console.error('Error fetching properties:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  const filteredProperties = properties.filter((property: Property) =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  console.log('Filtered properties:', filteredProperties)

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-4" />
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProperties.map((property: Property) => (
        <div key={property.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
          <div className="relative h-48">
            <img
              src={Array.isArray(property.images) && property.images.length > 0 
                ? property.images[0] 
                : "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format"}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-sm font-semibold">
              ${property.price.toLocaleString()}/mo
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
            
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              {property.location && (property.location.address || property.location.city) 
                ? `${property.location.address}${property.location.city ? `, ${property.location.city}` : ''}${property.location.state ? `, ${property.location.state}` : ''} ${property.location.zipCode || ''}`
                : "Location not specified"}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                {property.features?.bedrooms > 0 
                  ? `${property.features.bedrooms} Beds`
                  : "N/A Beds"}
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                {property.features?.bathrooms > 0
                  ? `${property.features.bathrooms} Baths`
                  : "N/A Baths"}
              </div>
              <div className="flex items-center">
                <Square className="h-4 w-4 mr-1" />
                {property.features?.squareFeet > 0
                  ? `${property.features.squareFeet.toLocaleString()} sqft`
                  : "N/A sqft"}
              </div>
            </div>

            <Button 
              className="w-full"
              onClick={() => router.push(`/properties/${property.id}`)}
            >
              View Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
} 