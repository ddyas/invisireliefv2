import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Calendar, Target, Rocket } from "lucide-react"

const roadmapStages = [
  {
    stage: "Proof of Concept",
    progress: "Completed",
    icon: CheckCircle,
    status: "completed",
    description: "Initial formulation and feasibility studies completed successfully.",
  },
  {
    stage: "Pilot Production & Flavour Finalisation",
    progress: "Current",
    icon: Clock,
    status: "current",
    description: "Optimizing manufacturing processes and finalizing taste profiles.",
  },
  {
    stage: "Stability & Sensory Validation",
    progress: "Next",
    icon: Calendar,
    status: "next",
    description: "Comprehensive testing for shelf-life and consumer acceptance.",
  },
  {
    stage: "Regulatory & Clinical Validation (AU/US/EU)",
    progress: "Planned",
    icon: Target,
    status: "planned",
    description: "Regulatory submissions and clinical trials across key markets.",
  },
  {
    stage: "Pilot Launch",
    progress: "Future",
    icon: Rocket,
    status: "future",
    description: "Limited market release and commercial scale-up preparation.",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800 border-green-200"
    case "current":
      return "bg-primary/10 text-primary border-primary/20"
    case "next":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "planned":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "future":
      return "bg-gray-100 text-gray-600 border-gray-200"
    default:
      return "bg-gray-100 text-gray-600 border-gray-200"
  }
}

export function DevelopmentRoadmap() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Development Timeline
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Development Roadmap</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our systematic approach to bringing InvisiRelief™ to market, ensuring safety, efficacy, and regulatory
            compliance at every stage.
          </p>
        </div>

        <div className="space-y-6">
          {roadmapStages.map((stage, index) => (
            <Card key={index} className="border-0 clinical-shadow hover:clinical-shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl flex-shrink-0">
                    <stage.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-navy">{stage.stage}</h3>
                      <Badge className={`text-xs ${getStatusColor(stage.status)}`}>{stage.progress}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{stage.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Us Section */}
        <Card className="mt-12 border-primary/20 bg-primary/5">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-navy">About Us</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                SaunLab Pty Ltd (ABN: 48 690 560 206) — Adelaide, South Australia. We are developing next-generation
                pharmaceutical delivery systems that merge clinical rigour with consumer usability, starting with
                InvisiRelief™.
              </p>
              <p className="text-sm text-primary font-medium">
                Interested in collaboration?{" "}
                <a href="mailto:hello@invisirelief.com" className="underline hover:no-underline">
                  Contact us
                </a>
                .
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
