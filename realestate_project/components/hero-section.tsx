"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, FileText, Building2, MapPin, Map, Home, Compass, Banknote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function HeroSection() {
  const [street, setStreet] = useState("")

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/real-estate-hero.jpg"
          alt="Luxury modern home at dusk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-background/80 mb-4">
          Bất Động Sản Cao Cấp
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-background leading-tight text-balance mb-6">
          Tìm Kiếm Ngôi Nhà
          <br />
          <span className="italic">Mơ Ước Của Bạn</span>
        </h1>
        <p className="text-lg text-background/80 max-w-2xl mx-auto mb-12">
          Khám phá những bất động sản đặc biệt tại các vị trí đắc địa nhất.
          Chúng tôi sẽ đồng hành cùng bạn tìm kiếm ngôi nhà lý tưởng.
        </p>

        {/* Search Box */}
        <div className="max-w-5xl mx-auto bg-background rounded-lg shadow-2xl p-4 md:p-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Loại tin */}
            <Select>
              <SelectTrigger className="w-full h-12 bg-secondary border-0">
                <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Loại tin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sale">Bán</SelectItem>
                <SelectItem value="rent">Cho thuê</SelectItem>
                <SelectItem value="project">Dự án</SelectItem>
              </SelectContent>
            </Select>

            {/* Loại BĐS */}
            <Select>
              <SelectTrigger className="w-full h-12 bg-secondary border-0">
                <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Loại BĐS" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Căn hộ chung cư</SelectItem>
                <SelectItem value="house">Nhà riêng</SelectItem>
                <SelectItem value="villa">Biệt thự</SelectItem>
                <SelectItem value="townhouse">Nhà phố</SelectItem>
                <SelectItem value="land">Đất nền</SelectItem>
                <SelectItem value="shophouse">Shophouse</SelectItem>
                <SelectItem value="office">Văn phòng</SelectItem>
              </SelectContent>
            </Select>

            {/* Tỉnh thành */}
            <Select>
              <SelectTrigger className="w-full h-12 bg-secondary border-0">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Tỉnh thành" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hanoi">Hà Nội</SelectItem>
                <SelectItem value="hcm">TP. Hồ Chí Minh</SelectItem>
                <SelectItem value="danang">Đà Nẵng</SelectItem>
                <SelectItem value="haiphong">Hải Phòng</SelectItem>
                <SelectItem value="cantho">Cần Thơ</SelectItem>
                <SelectItem value="binhduong">Bình Dương</SelectItem>
                <SelectItem value="dongnai">Đồng Nai</SelectItem>
                <SelectItem value="khanhhoa">Khánh Hòa</SelectItem>
              </SelectContent>
            </Select>

            {/* Quận/Huyện */}
            <Select>
              <SelectTrigger className="w-full h-12 bg-secondary border-0">
                <Map className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Quận/Huyện" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="district1">Quận 1</SelectItem>
                <SelectItem value="district2">Quận 2</SelectItem>
                <SelectItem value="district3">Quận 3</SelectItem>
                <SelectItem value="district7">Quận 7</SelectItem>
                <SelectItem value="binhthanh">Bình Thạnh</SelectItem>
                <SelectItem value="thuduc">Thủ Đức</SelectItem>
                <SelectItem value="tanbinh">Tân Bình</SelectItem>
                <SelectItem value="phunhuan">Phú Nhuận</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Phường/Xã */}
            <Select>
              <SelectTrigger className="w-full h-12 bg-secondary border-0">
                <Home className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Phường/Xã" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ward1">Phường 1</SelectItem>
                <SelectItem value="ward2">Phường 2</SelectItem>
                <SelectItem value="ward3">Phường 3</SelectItem>
                <SelectItem value="ward4">Phường 4</SelectItem>
                <SelectItem value="ward5">Phường 5</SelectItem>
                <SelectItem value="ward6">Phường 6</SelectItem>
              </SelectContent>
            </Select>

            {/* Đường/Phố */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Đường/Phố"
                className="pl-10 h-12 bg-secondary border-0"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>

            {/* Hướng */}
            <Select>
              <SelectTrigger className="w-full h-12 bg-secondary border-0">
                <Compass className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Hướng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="east">Đông</SelectItem>
                <SelectItem value="west">Tây</SelectItem>
                <SelectItem value="south">Nam</SelectItem>
                <SelectItem value="north">Bắc</SelectItem>
                <SelectItem value="northeast">Đông Bắc</SelectItem>
                <SelectItem value="northwest">Tây Bắc</SelectItem>
                <SelectItem value="southeast">Đông Nam</SelectItem>
                <SelectItem value="southwest">Tây Nam</SelectItem>
              </SelectContent>
            </Select>

            {/* Mức giá */}
            <Select>
              <SelectTrigger className="w-full h-12 bg-secondary border-0">
                <Banknote className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Mức giá" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under500m">Dưới 500 triệu</SelectItem>
                <SelectItem value="500m-1b">500 triệu - 1 tỷ</SelectItem>
                <SelectItem value="1b-2b">1 - 2 tỷ</SelectItem>
                <SelectItem value="2b-5b">2 - 5 tỷ</SelectItem>
                <SelectItem value="5b-10b">5 - 10 tỷ</SelectItem>
                <SelectItem value="10b-20b">10 - 20 tỷ</SelectItem>
                <SelectItem value="over20b">Trên 20 tỷ</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <div className="mt-4">
            <Button size="lg" className="h-12 px-12 w-full sm:w-auto">
              <Search className="h-5 w-5 mr-2" />
              Tìm kiếm
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16">
          {[
            { value: "2,500+", label: "Tin đăng" },
            { value: "1,800+", label: "Khách hàng" },
            { value: "15+", label: "Năm kinh nghiệm" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-semibold text-background">
                {stat.value}
              </p>
              <p className="text-sm text-background/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
