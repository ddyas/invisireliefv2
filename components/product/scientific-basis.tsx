import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle, Award, Users } from "lucide-react"

const scientificPoints = [
  {
    icon: CheckCircle,
    title: "Established Drug Delivery System",
    description:
      "Medicated chewing gum is already used for nicotine replacement (FDA/TGA approved), caffeine delivery in clinical trials, and vitamin/supplement absorption.",
  },
  {
    icon: Award,
    title: "Buccal Absorption Advantages",
    description:
      "Bypasses first-pass metabolism, improving bioavailability and onset of action while reducing hepatic load and polypharmacy risks.",
  },
  {
    icon: Users,
    title: "High Patient Compliance",
    description: "Discreet, portable, and socially acceptable delivery method that patients actually want to use.",
  },
  {
    icon: BookOpen,
    title: "European Pharmacopoeia Recognition",
    description:
      "MCG is recognized for both local and systemic administration, with nicotine gum as a proven commercial example.",
  },
]

export function ScientificBasis() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Clinical Validation
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Scientific Basis</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Medicated chewing gum is a well-established, clinically validated drug-delivery platform with evidence
            showing it bypasses first-pass metabolism for fast and effective relief.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {scientificPoints.map((point, index) => (
            <Card key={index} className="border-0 clinical-shadow hover:clinical-shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-navy">{point.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Evidence Section */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-navy">The Evidence</h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Studies show MCG formulations improve bioavailability, patient compliance, and onset of action for local
                and systemic treatments (Jette Jacobsen et al., American Journal of Drug Delivery, 2004; Sadeq et al.,
                IJDDT, 2022). The European Pharmacopoeia recognises MCG for local and systemic administration, and
                nicotine gum is a proven commercial example (Khatiwara et al., Journal of Applied Pharmaceutical
                Research, 2021).
              </p>
              <p className="text-sm text-primary font-medium">
                Notable example: Nicotine gum uses a chew-and-park protocol to deliver active ingredients via the mouth
                lining.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
