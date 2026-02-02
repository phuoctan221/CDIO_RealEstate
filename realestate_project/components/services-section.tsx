import { Home, Key, TrendingUp, FileText, Users, Shield } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Tìm kiếm bất động sản",
    description:
      "Tìm ngôi nhà phù hợp nhất với bạn thông qua danh sách bất động sản chọn lọc và sự tư vấn chuyên nghiệp.",
  },
  {
    icon: Key,
    title: "Mua bán bất động sản",
    description:
      "Tự tin trong suốt quá trình mua bán. Chúng tôi hỗ trợ từ đàm phán, ký kết đến hoàn tất giao dịch.",
  },
  {
    icon: TrendingUp,
    title: "Bán bất động sản",
    description:
      "Tối đa hóa giá trị bất động sản của bạn với chiến lược tiếp thị và kỹ năng thương lượng hiệu quả.",
  },
  {
    icon: FileText,
    title: "Quản lý bất động sản",
    description:
      "Dịch vụ quản lý toàn diện dành cho nhà đầu tư, đảm bảo hiệu quả và lợi nhuận tối ưu.",
  },
  {
    icon: Users,
    title: "Tư vấn đầu tư",
    description:
      "Tư vấn chuyên sâu về xu hướng thị trường, cơ hội đầu tư và chiến lược bất động sản.",
  },
  {
    icon: Shield,
    title: "Hỗ trợ pháp lý",
    description:
      "Hỗ trợ pháp lý đầy đủ cho hợp đồng, thẩm định hồ sơ và tuân thủ quy định pháp luật.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Dịch vụ của chúng tôi
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Chúng tôi hỗ trợ bạn như thế nào
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Từ việc tìm kiếm ngôi nhà mơ ước đến quản lý danh mục đầu tư, các
            dịch vụ toàn diện của chúng tôi bao phủ mọi khía cạnh trong lĩnh vực
            bất động sản.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <service.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
