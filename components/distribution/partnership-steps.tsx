import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileText, MessageSquare, Handshake, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Submit Application",
    description: "Complete our partnership application form with your business details and requirements.",
    timeline: "5 minutes",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "Our partnerships team will contact you to discuss your needs and answer questions.",
    timeline: "2-3 business days",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Partnership Agreement",
    description: "Review and sign our partnership agreement with customized terms for your business.",
    timeline: "1 week",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "Receive your first order, marketing materials, and ongoing support to ensure success.",
    timeline: "Ongoing",
  },
]

export function PartnershipSteps() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">How to Partner with Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our streamlined partnership process gets you up and running quickly with full support every step of the way.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-0 clinical-shadow hover:clinical-shadow-lg transition-all duration-300 group h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    {/* Step number and icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                        {step.number}
                      </div>
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>

                    {/* Timeline */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs text-primary font-medium">{step.timeline}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow connector (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
