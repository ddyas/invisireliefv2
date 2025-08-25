import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Shield, Users, Zap, Heart } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Rapid Pain Relief",
    description: "Advanced intraoral delivery provides relief in minutes, not hours.",
    useCases: ["Dental procedures", "Oral surgery recovery", "Chronic mouth pain", "Emergency relief"],
  },
  {
    icon: MapPin,
    title: "Targeted Application",
    description: "Direct application to affected areas for maximum effectiveness.",
    useCases: ["Localized pain", "Post-procedure care", "Specific problem areas", "Precision treatment"],
  },
  {
    icon: Clock,
    title: "Long-Lasting Effect",
    description: "Extended relief that fits your daily routine and lifestyle.",
    useCases: ["All-day comfort", "Work meetings", "Social events", "Travel situations"],
  },
  {
    icon: Users,
    title: "Socially Acceptable",
    description: "Looks and feels like regular chewing gum - no one will know.",
    useCases: ["Professional settings", "Public spaces", "Social gatherings", "Confidential treatment"],
  },
  {
    icon: Shield,
    title: "Safe & Reliable",
    description: "Clinically tested with pharmaceutical-grade quality standards.",
    useCases: ["Daily use", "Long-term treatment", "Sensitive patients", "Professional confidence"],
  },
  {
    icon: Heart,
    title: "Patient-Centered",
    description: "Designed with real patient needs and preferences in mind.",
    useCases: ["Quality of life", "Treatment compliance", "Patient satisfaction", "Holistic care"],
  },
]

export function ProductBenefits() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Benefits & Use Cases</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            InvisiRelief™ addresses real-world challenges faced by patients seeking effective, discreet pain relief
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-0 clinical-shadow hover:clinical-shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-navy mb-3">{benefit.title}</h3>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{benefit.description}</p>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-navy uppercase tracking-wide">Ideal For:</h4>
                  <ul className="space-y-1">
                    {benefit.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                        {useCase}
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
