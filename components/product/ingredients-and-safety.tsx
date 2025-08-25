import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Info } from "lucide-react"

const ingredients = [
  {
    name: "Active Pharmaceutical Ingredient",
    description: "Clinically proven pain relief compound delivered through advanced gum base technology.",
    safety: "TGA approved for intraoral use",
    concentration: "Therapeutic dose",
  },
  {
    name: "Pharmaceutical Grade Gum Base",
    description: "Specially formulated carrier system designed for controlled medication release.",
    safety: "Food-grade, biocompatible",
    concentration: "Optimized matrix",
  },
  {
    name: "Natural Flavoring System",
    description: "Pleasant mint flavor that masks medication taste while maintaining effectiveness.",
    safety: "Natural extracts, allergen-free",
    concentration: "Balanced profile",
  },
  {
    name: "Stabilizing Agents",
    description: "Ensures consistent medication potency and shelf stability.",
    safety: "Pharmaceutical excipients",
    concentration: "Minimal effective amount",
  },
]

const safetyInfo = [
  {
    category: "General Safety",
    items: [
      "Suitable for adults 18 years and older",
      "Not recommended during pregnancy or breastfeeding",
      "Consult healthcare provider before use if taking other medications",
      "Do not exceed recommended daily dosage",
    ],
  },
  {
    category: "Contraindications",
    items: [
      "Known allergy to any ingredient",
      "Severe liver or kidney impairment",
      "Active oral infections or open wounds",
      "Concurrent use of specific medications (consult pharmacist)",
    ],
  },
  {
    category: "Side Effects",
    items: [
      "Mild oral irritation (rare, usually temporary)",
      "Altered taste sensation (temporary)",
      "Jaw fatigue from extended chewing",
      "Gastrointestinal upset if swallowed in large quantities",
    ],
  },
]

export function IngredientsAndSafety() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Ingredients & Safety</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transparency and safety are our priorities. Here's everything you need to know about what's in
            InvisiRelief™.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Ingredients */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                Active Ingredients
              </h3>

              <div className="space-y-4">
                {ingredients.map((ingredient, index) => (
                  <Card key={index} className="border-0 clinical-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-navy">{ingredient.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          {ingredient.concentration}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{ingredient.description}</p>
                      <p className="text-xs text-primary font-medium">{ingredient.safety}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Safety Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-primary" />
                Safety Information
              </h3>

              <Accordion type="single" collapsible className="space-y-4">
                {safetyInfo.map((section, index) => (
                  <AccordionItem key={index} value={`safety-${index}`} className="border-0">
                    <Card className="clinical-shadow">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <span className="font-semibold text-navy">{section.category}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Important Notice */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h4 className="font-semibold text-navy">Important Notice</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This information is for educational purposes only and does not replace professional medical
                      advice. Always consult with your healthcare provider before starting any new medication or
                      treatment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
