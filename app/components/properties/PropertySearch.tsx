"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface PropertySearchProps {
  onSearch: (term: string) => void
}

export default function PropertySearch({ onSearch }: PropertySearchProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search properties..."
            onChange={(e) => onSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <Select>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-1000">$0 - $1,000</SelectItem>
            <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
            <SelectItem value="2000+">$2,000+</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Bedrooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Bedroom</SelectItem>
            <SelectItem value="2">2 Bedrooms</SelectItem>
            <SelectItem value="3">3+ Bedrooms</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
} 