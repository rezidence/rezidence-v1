export type User = {
  id: string;
  name: string;
  email: string;
  image?: string;
  role: 'renter' | 'owner' | 'admin';
  ratings: Rating[];
  createdAt: Date;
  updatedAt: Date;
}

export type Rating = {
  id: string;
  rating: number;
  comment: string;
  fromUserId: string;
  toUserId: string;
  createdAt: Date;
} 