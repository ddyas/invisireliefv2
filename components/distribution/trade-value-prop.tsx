import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Package, Headphones, Truck, Target, TrendingUp } from "lucide-react"

const valueProps = [
  {
    icon: DollarSign,
    title: "Attractive Margins",
    description: "Competitive wholesale pricing with healthy profit margins for all partner types.",
    details: ["40%+ gross margins", "Volume-based pricing tiers", "No hidden fees", "Transparent pricing structure"],
  },
  {
    icon: Package,
    title: "Low MOQ Requirements",
    description: "Flexible minimum order quantities designed to suit businesses of all sizes.",
    details: ["Starting from 50 units", "Mixed product orders", "Flexible reorder terms", "No long-term commitments"],
  },
  {
    icon: Target,
    title: "Marketing Support",
    description: "Comprehensive marketing materials and point-of-sale support to drive sales.",
    details: [
      "Professional POS materials",
      "Digital marketing assets",
      "Training resources",
      "Co-marketing opportunities",
    ],
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Dedicated account management and technical support for all partners.",
    details: ["Personal account manager", "24/7 technical support", "Training programs", "Regular check-ins"],
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description: "Fast, reliable delivery with flexible logistics options across Australia.",
    details: ["2-3 day delivery", "Free shipping on orders $500+", "Flexible delivery options", "Real-time tracking"],
  },
  {
    icon: TrendingUp,
    title: "Growing Market",
    description: "Enter a rapidly expanding market with proven consumer demand and clinical backing.",
    details: ["Increasing market demand", "Clinical validation", "Media coverage", "Patient testimonials"],
  },
]

export function TradeValueProp() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Why Partner with InvisiRelief™?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide everything you need to successfully introduce and sell InvisiRelief™ to your customers and
            patients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <Card
              key={index}
              className="border-0 clinical-shadow hover:clinical-shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <prop.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-navy mb-3">{prop.title}</h3>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{prop.description}</p>

                <ul className="space-y-2">
                  {prop.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
