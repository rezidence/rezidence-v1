import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import type { Property } from '@/types/property'

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/rezidence'

// MongoDB Document Interface
interface MongoProperty {
  _id: mongoose.Types.ObjectId;
  title: string;
  description: string;
  price: number;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    propertyType: 'apartment' | 'house' | 'condo' | 'townhouse';
  };
  amenities: string[];
  images: string[];
  available: boolean;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Property Schema
const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: {
    address: String,
    city: String,
    state: String,
    zipCode: String
  },
  features: {
    bedrooms: Number,
    bathrooms: Number,
    squareFeet: Number,
    propertyType: {
      type: String,
      enum: ['apartment', 'house', 'condo', 'townhouse']
    }
  },
  amenities: [String],
  images: [String],
  available: { type: Boolean, default: true },
  ownerId: { type: String, required: true },
}, {
  timestamps: true
})

// Get or create the model
const PropertyModel = mongoose.models.Property || mongoose.model('Property', propertySchema)

// Connect to MongoDB
async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_URI)
      console.log('Connected to MongoDB')
    }
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}

export async function GET() {
  try {
    await connectToDatabase()

    const properties = await PropertyModel.find().lean() as unknown as (MongoProperty & { _id: { toString(): string } })[]

    // Transform the data to ensure correct structure
    const transformedProperties = properties.map(property => ({
      id: property._id.toString(),
      title: property.title || '',
      description: property.description || '',
      price: property.price || 0,
      features: {
        bedrooms: property.features?.bedrooms || 0,
        bathrooms: property.features?.bathrooms || 0,
        squareFeet: property.features?.squareFeet || 0,
        propertyType: property.features?.propertyType || 'apartment'
      },
      images: property.images || [],
      location: property.location || {
        address: '',
        city: '',
        state: '',
        zipCode: ''
      },
      amenities: property.amenities || [],
      available: property.available || false,
      createdAt: property.createdAt || new Date(),
      updatedAt: property.updatedAt || new Date(),
      ownerId: property.ownerId || ''
    }))

    console.log('Sending properties:', transformedProperties)
    return NextResponse.json(transformedProperties)
  } catch (error) {
    console.error('Error fetching properties:', error)
    return NextResponse.json(
      { error: 'Error fetching properties' },
      { status: 500 }
    )
  }
} 