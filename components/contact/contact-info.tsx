import { Card, CardContent } from "@/components/ui/card"
import { Mail, Clock, MapPin } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@invisirelief.com", "partnerships@invisirelief.com"],
    note: "Response within 24 hours",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday - Sunday: Closed"],
    note: "AEST (Australian Eastern Standard Time)",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Adelaide, South Australia", "SaunLab Pty Ltd (ABN: 48 690 560 206)"],
    note: "Australia",
  },
]

export function ContactInfo() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-4 space-y-8">
      {/* Contact details */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navy">Contact Information</h2>

        <div className="space-y-4">
          {contactDetails.map((detail, index) => {
            const IconComponent = detail.icon
            return (
              <Card key={index} className="border-0 clinical-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-navy">{detail.title}</h3>
                      <div className="space-y-1">
                        {detail.details.map((item, itemIndex) => (
                          <p key={itemIndex} className="text-muted-foreground text-sm">
                            {item}
                          </p>
                        ))}
                      </div>
                      <p className="text-xs text-primary font-medium">{detail.note}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
