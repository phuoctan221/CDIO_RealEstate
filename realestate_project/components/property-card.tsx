"use client"

import Image from "next/image"
import { Heart, Bed, Bath, Square, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface PropertyCardProps {
  property: {
    id: number
    title: string
    location: string
    price: string
    beds: number
    baths: number
    sqft: string
    image: string
    status: "For Sale" | "For Rent" | "Sold"
    featured?: boolean
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge
            variant={property.status === "Sold" ? "secondary" : "default"}
            className={
              property.status === "For Sale"
                ? "bg-accent text-accent-foreground"
                : property.status === "For Rent"
                  ? "bg-foreground text-background"
                  : ""
            }
          >
            {property.status}
          </Badge>
          {property.featured && (
            <Badge variant="secondary" className="bg-background/90 text-foreground">
              Featured
            </Badge>
          )}
        </div>
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 p-2 rounded-full bg-background/90 hover:bg-background transition-colors"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isFavorite ? "fill-accent text-accent" : "text-muted-foreground"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p className="font-serif text-2xl font-semibold text-foreground">
              {property.price}
            </p>
            <h3 className="text-base font-medium text-foreground mt-1 line-clamp-1">
              {property.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1 text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 shrink-0" />
          <span className="text-sm truncate">{property.location}</span>
        </div>

        <div className="flex items-center gap-4 pb-4 border-b border-border">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Bed className="h-4 w-4" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Bath className="h-4 w-4" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Square className="h-4 w-4" />
            <span>{property.sqft}</span>
          </div>
        </div>

        <div className="pt-4">
          <Button variant="outline" className="w-full bg-transparent">
            View Details
          </Button>
        </div>
      </div>
    </div>
  )
}
