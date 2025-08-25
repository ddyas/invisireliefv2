import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Stethoscope, Store, Globe } from "lucide-react"

const partnerTypes = [
  {
    icon: Globe,
    title: "Distributors",
    description: "Regional and national distribution opportunities with exclusive territory rights.",
    benefits: ["Exclusive territories", "Volume discounts", "Marketing co-op", "Dedicated support"],
    badge: "High Volume",
  },
  {
    icon: Store,
    title: "Pharmacies",
    description: "Perfect addition to your pain management and healthcare product range.",
    benefits: ["Professional margins", "Patient education materials", "Clinical support", "Fast reorders"],
    badge: "Retail Ready",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Clinics",
    description: "Offer patients a discreet, effective pain relief option for post-procedure care.",
    benefits: ["Clinical evidence", "Patient compliance", "Professional samples", "Continuing education"],
    badge: "Clinical Grade",
  },
  {
    icon: Building2,
    title: "Corporate Partners",
    description: "Large-scale partnerships for healthcare systems and corporate wellness programs.",
    benefits: ["Custom solutions", "Bulk pricing", "Implementation support", "Outcome tracking"],
    badge: "Enterprise",
  },
]

export function PartnershipBenefits() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Partnership Opportunities</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We work with various types of partners to ensure InvisiRelief™ reaches patients who need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partnerTypes.map((partner, index) => (
            <Card
              key={index}
              className="border-0 clinical-shadow hover:clinical-shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <partner.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className="bg-navy/10 text-navy border-navy/20">{partner.badge}</Badge>
                </div>

                <h3 className="text-xl font-bold text-navy mb-3">{partner.title}</h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">{partner.description}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-navy">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
