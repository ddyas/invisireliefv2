import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Eye } from "lucide-react"

const benefits = [
  {
    icon: Eye,
    title: "100% Discreet Relief",
    description:
      "Looks and feels like regular chewing gum. Get the relief you need without drawing attention, anywhere and anytime.",
    features: ["No obvious medication", "Natural chewing motion", "Portable and convenient"],
  },
  {
    icon: Zap,
    title: "Fast-Acting Formula",
    description: "Advanced intraoral delivery system provides rapid pain relief directly where you need it most.",
    features: ["Relief in minutes", "Targeted delivery", "Long-lasting effect"],
  },
  {
    icon: Shield,
    title: "Clinically Aligned",
    description:
      "Developed with healthcare professionals using evidence-based formulation and rigorous quality standards.",
    features: ["TGA approved", "Clinical testing", "Professional grade"],
  },
]

export function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Why Choose InvisiRelief™?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the next generation of pain relief with our innovative medicated chewing gum technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card
                key={index}
                className="border-0 clinical-shadow hover:clinical-shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-4">{benefit.title}</h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{benefit.description}</p>

                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-muted-foreground flex items-center justify-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
