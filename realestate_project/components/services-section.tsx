import { Home, Key, TrendingUp, FileText, Users, Shield } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Property Search",
    description:
      "Find your perfect property with our curated selection of premium homes and expert guidance.",
  },
  {
    icon: Key,
    title: "Property Buying",
    description:
      "Navigate the buying process with confidence. We handle everything from offers to closing.",
  },
  {
    icon: TrendingUp,
    title: "Property Selling",
    description:
      "Maximize your property's value with our strategic marketing and negotiation expertise.",
  },
  {
    icon: FileText,
    title: "Property Management",
    description:
      "Comprehensive management services for investors, ensuring optimal returns on your assets.",
  },
  {
    icon: Users,
    title: "Consultation",
    description:
      "Expert advice on market trends, investment opportunities, and real estate strategy.",
  },
  {
    icon: Shield,
    title: "Legal Support",
    description:
      "Full legal assistance for contracts, due diligence, and regulatory compliance.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            How We Can Help You
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From finding your dream home to managing your investment portfolio,
            our comprehensive services cover every aspect of real estate.
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
  )
}
