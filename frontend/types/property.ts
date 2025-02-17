export interface Property {
  id: string;
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
  createdAt: Date;
  updatedAt: Date;
  ownerId: string;
}

export type PropertyCreate = Omit<Property, 'id' | 'createdAt' | 'updatedAt' | 'ownerId'>; 