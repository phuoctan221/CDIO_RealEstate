import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

const features = [
  "Exclusive access to off-market properties",
  "Personalized property matching service",
  "Expert market analysis and guidance",
  "Seamless buying and selling experience",
]

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
                alt="Modern luxury interior"
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
                Client Satisfaction
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              About Haven
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6">
              We Turn Your
              <br />
              <span className="italic">Dreams Into Reality</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over 15 years of experience in luxury real estate, Haven Properties
              has built a reputation for excellence and integrity. We understand that
              finding the perfect home is more than a transaction—it&apos;s about finding
              where your next chapter begins.
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
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
