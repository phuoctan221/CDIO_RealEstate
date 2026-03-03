"use client";

import Image from "next/image";
import { Heart, Bed, Bath, Square, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    price: number | string;
    bedrooms?: number;
    bathrooms?: number;
    area?: number;
    province?: string;
    district?: string;
    listing_type?: string;
    image_url?: string;
    is_featured?: number;
  };
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const priceNumber = Number(property.price);
  const areaNumber = Number(property.area);

  // FORMAT GIÁ
  const formatPrice = (price: number) => {
    if (!price) return "Liên hệ";

    if (price >= 1_000_000_000) {
      const ty = price / 1_000_000_000;
      return `${parseFloat(ty.toFixed(2))} tỷ`;
    }

    if (price >= 1_000_000) {
      const trieu = price / 1_000_000;
      return `${parseFloat(trieu.toFixed(0))} triệu`;
    }

    return new Intl.NumberFormat("vi-VN").format(price) + " VND";
  };

  const listingLabel =
    property.listing_type === "Cho thuê" ? "Cho thuê" : "Đang bán";

  // ===== FETCH CHI TIẾT =====
  const handleOpenDetail = async () => {
    try {
      setLoading(true);
      setOpen(true);

      const res = await fetch(
        `http://localhost:5000/properties/${property.id}`
      );

      if (!res.ok) {
        throw new Error("Không lấy được dữ liệu");
      }

      const data = await res.json();
      console.log("DETAIL:", data); // debug
      setDetail(data);
    } catch (error) {
      console.error("Lỗi lấy chi tiết:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.image_url || "/images/property-2.jpg"}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-accent text-accent-foreground">
              {listingLabel}
            </Badge>

            {property.is_featured === 1 && (
              <Badge
                variant="secondary"
                className="bg-background/90 text-foreground"
              >
                Nổi bật
              </Badge>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/90 hover:bg-background transition-colors"
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
          <p className="font-serif text-2xl font-semibold text-foreground">
            {formatPrice(priceNumber)}
          </p>

          <h3 className="text-base font-medium text-foreground mt-1 line-clamp-1">
            {property.title}
          </h3>

          <div className="flex items-center gap-1 text-muted-foreground mb-4 mt-2">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="text-sm truncate">
              {property.district || ""}, {property.province || ""}
            </span>
          </div>

          <div className="flex items-center gap-4 pb-4 border-b border-border">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Bed className="h-4 w-4" />
              <span>
                {property.bedrooms ?? "Chưa cập nhật"}{" "}
                {property.bedrooms ? "Phòng ngủ" : ""}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Bath className="h-4 w-4" />
              <span>
                {property.bathrooms ?? "Chưa cập nhật"}{" "}
                {property.bathrooms ? "Phòng tắm" : ""}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Square className="h-4 w-4" />
              <span>
                {areaNumber ? `${areaNumber} m²` : "Chưa cập nhật"}
              </span>
            </div>
          </div>

          <div className="pt-4">
            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={handleOpenDetail}
            >
              Xem chi tiết
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          {loading && <p>Đang tải...</p>}

          {!loading && detail && (
            <>
              <DialogHeader>
                <DialogTitle>{detail.title}</DialogTitle>
              </DialogHeader>

              {detail.image_url && (
                <Image
                  src={detail.image_url}
                  alt={detail.title}
                  width={800}
                  height={500}
                  className="rounded-lg object-cover mb-4"
                />
              )}

              <p className="text-red-500 font-semibold text-lg">
                {formatPrice(Number(detail.price))}
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <strong>Diện tích:</strong> {detail.area} m²
                </p>
                <p>
                  <strong>Phòng ngủ:</strong> {detail.bedrooms}
                </p>
                <p>
                  <strong>Phòng tắm:</strong> {detail.bathrooms}
                </p>
                <p>
                  <strong>Địa chỉ:</strong> {detail.district}, {detail.province}
                </p>
              </div>

              <div className="mt-4">
                <p className="font-semibold">Mô tả:</p>
                <p className="text-muted-foreground">
                  {detail.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}