import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import { Property } from '@/types/property'

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/rezidence'

// Property Schema Types
interface IPropertyFeatures {
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  propertyType: 'apartment' | 'house' | 'condo' | 'townhouse';
}

interface IPropertyLocation {
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

interface IPropertyDocument extends mongoose.Document {
  title: string;
  description: string;
  price: number;
  location: IPropertyLocation;
  features: IPropertyFeatures;
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
const PropertyModel = mongoose.models.Property as mongoose.Model<IPropertyDocument> || 
  mongoose.model<IPropertyDocument>('Property', propertySchema)

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

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase()

    const property = await PropertyModel.findById(params.id).lean()

    if (!property) {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      )
    }

    // Transform the data to ensure correct structure
    const transformedProperty = {
      ...property,
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
      amenities: property.amenities || []
    }

    return NextResponse.json(transformedProperty)
  } catch (error) {
    console.error('Error fetching property:', error)
    return NextResponse.json(
      { error: 'Error fetching property' },
      { status: 500 }
    )
  }
} 