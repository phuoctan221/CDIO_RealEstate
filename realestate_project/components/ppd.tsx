"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PropertyCard } from "./property-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const filters = ["Tất cả", "Bán", "Cho thuê", "Nổi bật"];

export function PropertiesSection2() {
  const [properties, setProperties] = useState<any[]>([]);
  const [activeFilter, setActiveFilter] = useState("Tất cả");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data);

        // ✅ ĐẢM BẢO luôn là array
        if (Array.isArray(data)) {
          setProperties(data);
        } else if (Array.isArray(data.data)) {
          setProperties(data.data);
        } else {
          setProperties([]);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi fetch:", err);
        setProperties([]);
        setLoading(false);
      });
  }, []);

  // ✅ Không bao giờ crash nữa
  const filteredProperties = Array.isArray(properties)
    ? properties.filter((property) => {
        if (activeFilter === "Tất cả") return true;

        if (activeFilter === "Nổi bật") return property.is_featured === 1;

        if (activeFilter === "Cho thuê")
          return property.listing_type === "Cho thuê";

        if (activeFilter === "Bán") return property.listing_type === "Bán";

        return true;
      })
    : [];

  return (
    <section id="properties" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
        {loading && (
          <div className="text-center py-10">Đang tải dữ liệu...</div>
        )}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
        
      </div>
    </section>
  );
}
