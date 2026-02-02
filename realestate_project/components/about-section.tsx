import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "Tiếp cận độc quyền các bất động sản chưa niêm yết",
  "Dịch vụ tư vấn và ghép nối bất động sản theo nhu cầu",
  "Phân tích thị trường và định hướng chuyên sâu",
  "Trải nghiệm mua bán bất động sản nhanh chóng, thuận tiện",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/property-3.jpg"
                alt="Không gian nội thất sang trọng hiện đại"
                fill
                className="object-cover"
              />
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-card p-6 rounded-lg shadow-xl border border-border">
              <p className="font-serif text-4xl font-semibold text-foreground">
                98%
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Khách hàng hài lòng
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              Giới thiệu Haven
            </p>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6">
              Chúng tôi biến
              <br />
              <span className="italic">ước mơ của bạn thành hiện thực</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Với hơn 15 năm kinh nghiệm trong lĩnh vực bất động sản cao cấp,
              Haven Properties đã xây dựng uy tín vững chắc dựa trên sự chuyên
              nghiệp và minh bạch. Chúng tôi hiểu rằng việc tìm kiếm một ngôi
              nhà hoàn hảo không chỉ là một giao dịch, mà còn là nơi khởi đầu
              cho hành trình mới của bạn.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button size="lg">
              Tìm hiểu thêm về chúng tôi
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
