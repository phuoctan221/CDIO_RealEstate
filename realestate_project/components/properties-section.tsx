"use client";

import { useState } from "react";
import { PropertyCard } from "./property-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Nhà mặt tiền Nguyễn Tất Thành",
    location: "Quận Liên Chiểu, Đà Nẵng",
    price: "20 Tỷ",
    beds: 5,
    baths: 4,
    sqft: "100 m²",
    image: "/images/property-1.jpg",
    status: "For Sale" as const,
    featured: true,
  },
  {
    id: 2,
    title: "Tòa căn hộ Nguyễn Văn Linh",
    location: "Quận Hải Châu, Đà Nẵng",
    price: "35 Tỷ",
    beds: 6,
    baths: 5,
    sqft: "200 m²",
    image: "/images/property-2.jpg",
    status: "For Sale" as const,
  },
  {
    id: 3,
    title: "Penthouse ven sông Hàn",
    location: "Quận Sơn Trà, Đà Nẵng",
    price: "28 Tỷ",
    beds: 3,
    baths: 3,
    sqft: "180 m²",
    image: "/images/property-3.jpg",
    status: "For Sale" as const,
    featured: true,
  },
  {
    id: 4,
    title: "Nhà phố khu Hoà Xuân",
    location: "Quận Cẩm Lệ, Đà Nẵng",
    price: "12 Tỷ",
    beds: 4,
    baths: 3,
    sqft: "120 m²",
    image: "/images/property-4.jpg",
    status: "For Sale" as const,
  },
  {
    id: 5,
    title: "Biệt thự biển Mỹ Khê",
    location: "Quận Ngũ Hành Sơn, Đà Nẵng",
    price: "55 Tỷ",
    beds: 5,
    baths: 4,
    sqft: "300 m²",
    image: "/images/property-5.jpg",
    status: "For Sale" as const,
  },
  {
    id: 6,
    title: "Căn hộ cho thuê An Thượng",
    location: "Quận Ngũ Hành Sơn, Đà Nẵng",
    price: "25 Triệu / tháng",
    beds: 3,
    baths: 2,
    sqft: "90 m²",
    image: "/images/property-6.jpg",
    status: "For Rent" as const,
  },
];

const filters = ["All", "For Sale", "For Rent", "Featured"];

export function PropertiesSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProperties = properties.filter((property) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return property.featured;
    return property.status === activeFilter;
  });

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
              Bất động sản nổi bật tại Đà Nẵng
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
            Xem tất cả bất động sản
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
