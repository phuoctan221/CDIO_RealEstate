"use client";

import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Địa Chỉ",
    value: "123 Luxury Lane, Beverly Hills, CA 90210",
  },
  {
    icon: Phone,
    label: "Điện Thoại",
    value: "(123) 456-7890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@havenproperties.com",
  },
  {
    icon: Clock,
    label: "Giờ Làm Việc",
    value: "Thứ 2 - Thứ 7: 9:00 - 19:00",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Gửi biểu mẫu:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Thông Tin Liên Hệ */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              Liên Hệ
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6">
              Sẵn Sàng Tìm
              <br />
              <span className="italic">Ngôi Nhà Mơ Ước?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Liên hệ với đội ngũ chuyên gia của chúng tôi ngay hôm nay. Chúng
              tôi sẵn sàng hỗ trợ bạn chinh phục thị trường bất động sản và tìm
              ra tài sản phù hợp nhất.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Liên Hệ */}
          <div className="bg-card p-8 md:p-10 rounded-lg border border-border">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
              Gửi Tin Nhắn Cho Chúng Tôi
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Tên</Label>
                  <Input
                    id="firstName"
                    placeholder="Nguyễn"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Họ</Label>
                  <Input
                    id="lastName"
                    placeholder="Văn A"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Số Điện Thoại</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0123 456 789"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest">Bạn Quan Tâm Đến</Label>
                <Select
                  value={formData.interest}
                  onValueChange={(value) =>
                    setFormData({ ...formData, interest: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn một mục" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buying">Mua Bất Động Sản</SelectItem>
                    <SelectItem value="selling">Bán Bất Động Sản</SelectItem>
                    <SelectItem value="renting">Thuê Bất Động Sản</SelectItem>
                    <SelectItem value="investment">Tư Vấn Đầu Tư</SelectItem>
                    <SelectItem value="other">Khác</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Nội Dung</Label>
                <Textarea
                  id="message"
                  placeholder="Hãy chia sẻ về ngôi nhà mơ ước của bạn..."
                  className="min-h-32"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Gửi Tin Nhắn
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
