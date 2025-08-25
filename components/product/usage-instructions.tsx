import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertCircle, CheckCircle2 } from "lucide-react"

const steps = [
  {
    step: 1,
    title: "Remove from Package",
    description: "Take one piece from the sealed package. Keep remaining pieces sealed for freshness.",
    duration: "5 seconds",
    tips: ["Check expiry date", "Store in cool, dry place"],
  },
  {
    step: 2,
    title: "Begin Chewing",
    description: "Chew slowly and deliberately to activate the medication release system.",
    duration: "First 2 minutes",
    tips: ["Chew gently", "Don't bite hard", "Allow saliva to mix"],
  },
  {
    step: 3,
    title: "Position for Relief",
    description: "Move the gum to the area where you need pain relief using your tongue.",
    duration: "2-5 minutes",
    tips: ["Target specific areas", "Hold in position", "Continue gentle chewing"],
  },
  {
    step: 4,
    title: "Maintain Contact",
    description: "Keep the gum in contact with the affected area for optimal medication absorption.",
    duration: "10-15 minutes",
    tips: ["Avoid swallowing", "Minimal chewing", "Let medication absorb"],
  },
  {
    step: 5,
    title: "Dispose Safely",
    description: "Remove and dispose of the gum responsibly after the recommended time.",
    duration: "After 15-20 minutes",
    tips: ["Wrap in tissue", "Don't swallow", "Wash hands after"],
  },
]

const dosageInfo = [
  {
    category: "Standard Dosage",
    recommendation: "1 piece every 4-6 hours as needed",
    maxDaily: "Maximum 6 pieces per day",
    notes: "Do not exceed recommended dosage",
  },
  {
    category: "First Time Use",
    recommendation: "Start with 1 piece to assess tolerance",
    maxDaily: "Maximum 3 pieces on first day",
    notes: "Monitor for any adverse reactions",
  },
  {
    category: "Maintenance Use",
    recommendation: "Use as needed for pain management",
    maxDaily: "Adjust based on pain levels",
    notes: "Consult healthcare provider for long-term use",
  },
]

export function UsageInstructions() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Usage Instructions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Follow these simple steps to get the most effective pain relief from InvisiRelief™.
          </p>
        </div>

        {/* Step-by-step instructions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy mb-8 text-center">How to Use</h3>

          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 clinical-shadow">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    {/* Step number */}
                    <div className="text-center md:text-left">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto md:mx-0 mb-2">
                        {step.step}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.duration}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 text-center md:text-left">
                      <h4 className="text-lg font-semibold text-navy mb-2">{step.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>

                    {/* Tips */}
                    <div className="text-center md:text-left">
                      <h5 className="text-xs font-semibold text-navy uppercase tracking-wide mb-2">Tips:</h5>
                      <ul className="space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dosage Information */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-navy mb-8 text-center">Dosage Guidelines</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {dosageInfo.map((info, index) => (
              <Card key={index} className="border-0 clinical-shadow">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-navy mb-4">{info.category}</h4>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-primary">{info.recommendation}</p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">{info.maxDaily}</p>
                    </div>

                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground italic">{info.notes}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Important warning */}
          <Card className="mt-8 border-orange-200 bg-orange-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-orange-900">Important Dosage Warning</h4>
                  <p className="text-sm text-orange-800 leading-relaxed">
                    Never exceed the recommended daily dosage. If pain persists or worsens, consult your healthcare
                    provider immediately. This product is not suitable for children under 18 years of age.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
