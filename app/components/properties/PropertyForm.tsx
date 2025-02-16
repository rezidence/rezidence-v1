"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Building2, DollarSign, Bed, Bath, Square, MapPin, Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { PropertyCreate } from '@/types/property'

interface PropertyFormData {
  title: string
  description: string
  price: string
  address: string
  city: string
  state: string
  zipCode: string
  propertyType: string
  bedrooms: string
  bathrooms: string
  squareFeet: string
  images: FileList | null
}

export default function PropertyForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<PropertyFormData>({
    title: "",
    description: "",
    price: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    squareFeet: "",
    images: null
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // For now, we'll use placeholder image URLs since we haven't implemented image upload
      const placeholderImages = [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format"
      ]

      const propertyData = {
        title: formData.title,
        description: formData.description,
        price: Number(formData.price),
        location: {
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode
        },
        features: {
          bedrooms: Number(formData.bedrooms),
          bathrooms: Number(formData.bathrooms),
          squareFeet: Number(formData.squareFeet),
          propertyType: formData.propertyType as 'apartment' | 'house' | 'condo' | 'townhouse'
        },
        amenities: [],
        images: placeholderImages,
        available: true
      }

      const response = await fetch('/api/properties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(propertyData),
      })

      if (!response.ok) throw new Error('Failed to create property')

      toast({
        title: "Success",
        description: "Property listing created successfully",
      })
    } catch (error) {
      console.error('Error creating property:', error)
      toast({
        title: "Error",
        description: "Failed to create property listing",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, images: e.target.files }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-white">Property Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400"
            placeholder="Enter property title"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price" className="text-white">Monthly Rent</Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
              className="pl-10 bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400"
              placeholder="Enter monthly rent"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-white">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="min-h-[150px] bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400"
          placeholder="Describe your property..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="address" className="text-white">Street Address</Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400"
            placeholder="Enter street address"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="city" className="text-white">City</Label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400"
            placeholder="Enter city"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state" className="text-white">State</Label>
          <Input
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400"
            placeholder="Enter state"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="zipCode" className="text-white">ZIP Code</Label>
          <Input
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
            className="bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400"
            placeholder="Enter ZIP code"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2">
          <Label htmlFor="propertyType" className="text-white flex items-center gap-2">
            <Building2 className="h-4 w-4 text-gray-400" />
            Property Type
          </Label>
          <Select
            value={formData.propertyType}
            onValueChange={(value) => handleSelectChange("propertyType", value)}
            required
          >
            <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
              <SelectValue placeholder="Choose type" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="apartment" className="text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 cursor-pointer">Apartment</SelectItem>
              <SelectItem value="house" className="text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 cursor-pointer">Single Family Home</SelectItem>
              <SelectItem value="condo" className="text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 cursor-pointer">Condominium</SelectItem>
              <SelectItem value="townhouse" className="text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 cursor-pointer">Townhouse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bedrooms" className="text-white flex items-center gap-2">
            <Bed className="h-4 w-4 text-gray-400" />
            Bedrooms
          </Label>
          <Select
            value={formData.bedrooms}
            onValueChange={(value) => handleSelectChange("bedrooms", value)}
            required
          >
            <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
              <SelectValue placeholder="# of bedrooms" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="0" className="text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 cursor-pointer">Studio</SelectItem>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SelectItem 
                  key={num} 
                  value={num.toString()}
                  className="text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 cursor-pointer"
                >
                  {num} {num === 1 ? "Bedroom" : "Bedrooms"}
                </SelectItem>
              ))}
              <SelectItem value="7" className="text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 cursor-pointer">7+ Bedrooms</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bathrooms" className="text-white flex items-center gap-2">
            <Bath className="h-4 w-4 text-gray-400" />
            Bathrooms
          </Label>
          <Select
            value={formData.bathrooms}
            onValueChange={(value) => handleSelectChange("bathrooms", value)}
            required
          >
            <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
              <SelectValue placeholder="# of bathrooms" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((num) => (
                <SelectItem 
                  key={num} 
                  value={num.toString()}
                  className="text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 cursor-pointer"
                >
                  {num} {num === 1 ? "Bathroom" : "Bathrooms"}
                </SelectItem>
              ))}
              <SelectItem value="6" className="text-white hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 cursor-pointer">6+ Bathrooms</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="squareFeet" className="text-white flex items-center gap-2">
            <Square className="h-4 w-4 text-gray-400" />
            Square Footage
          </Label>
          <Input
            id="squareFeet"
            name="squareFeet"
            type="number"
            value={formData.squareFeet}
            onChange={handleChange}
            min="100"
            max="100000"
            required
            className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
            placeholder="e.g. 1500"
          />
          <p className="text-xs text-gray-400">Enter total square feet</p>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="images" className="text-white">Property Images</Label>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="images"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-700/30 hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">
                PNG, JPG or WEBP (MAX. 800x400px)
              </p>
            </div>
            <input
              id="images"
              name="images"
              type="file"
              className="hidden"
              multiple
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-6 transition-all duration-300 hover:scale-105 group"
      >
        <span className="relative z-10">
          {loading ? "Creating Listing..." : "Create Property Listing"}
        </span>
      </Button>
    </form>
  )
}

async function uploadImages(images: File[]): Promise<string[]> {
  // Implement your image upload logic here
  // This could use cloud storage like AWS S3 or similar
  return ['placeholder-url']
} 