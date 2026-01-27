"use client"

import { useState } from "react"
import { PropertyCard } from "./property-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    location: "Beverly Hills, CA",
    price: "$4,250,000",
    beds: 5,
    baths: 4,
    sqft: "4,500 sqft",
    image: "/images/property-1.jpg",
    status: "For Sale" as const,
    featured: true,
  },
  {
    id: 2,
    title: "Mediterranean Estate",
    location: "Malibu, CA",
    price: "$6,800,000",
    beds: 6,
    baths: 5,
    sqft: "6,200 sqft",
    image: "/images/property-2.jpg",
    status: "For Sale" as const,
  },
  {
    id: 3,
    title: "Downtown Penthouse",
    location: "Los Angeles, CA",
    price: "$3,950,000",
    beds: 3,
    baths: 3,
    sqft: "2,800 sqft",
    image: "/images/property-3.jpg",
    status: "For Sale" as const,
    featured: true,
  },
  {
    id: 4,
    title: "Classic Brownstone",
    location: "Brooklyn, NY",
    price: "$2,750,000",
    beds: 4,
    baths: 3,
    sqft: "3,200 sqft",
    image: "/images/property-4.jpg",
    status: "For Sale" as const,
  },
  {
    id: 5,
    title: "Modern Farmhouse",
    location: "Napa Valley, CA",
    price: "$5,500,000",
    beds: 5,
    baths: 4,
    sqft: "5,100 sqft",
    image: "/images/property-5.jpg",
    status: "For Sale" as const,
  },
  {
    id: 6,
    title: "Oceanfront Condo",
    location: "Miami Beach, FL",
    price: "$2,200,000",
    beds: 3,
    baths: 2,
    sqft: "1,900 sqft",
    image: "/images/property-6.jpg",
    status: "For Rent" as const,
  },
]

const filters = ["All", "For Sale", "For Rent", "Featured"]

export function PropertiesSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProperties = properties.filter((property) => {
    if (activeFilter === "All") return true
    if (activeFilter === "Featured") return property.featured
    return property.status === activeFilter
  })

  return (
    <section id="properties" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-2">
              Our Portfolio
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
              Featured Properties
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Properties
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
