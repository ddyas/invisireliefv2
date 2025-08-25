import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Mail, Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Message Sent - InvisiRelief™",
  description: "Thank you for contacting InvisiRelief™. We've received your message and will respond soon.",
}

export default function ContactSuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-secondary/30 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 clinical-shadow-lg">
            <CardContent className="p-8 lg:p-12 text-center space-y-8">
              {/* Success icon */}
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>

              {/* Success message */}
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-navy">Message Sent Successfully!</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Thank you for contacting InvisiRelief™. We've received your message and our team will respond as soon
                  as possible.
                </p>
              </div>

              {/* What happens next */}
              <div className="bg-secondary/50 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-navy flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  What Happens Next?
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Our team will review your message within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>You'll receive a personalized response via email</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>For urgent matters, we'll prioritize your inquiry</span>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Need immediate assistance? Call us at</span>
                </div>
                <p className="text-primary font-medium text-lg">1800 RELIEF</p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/" scroll={true}>
                    Return to Homepage
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy hover:text-white bg-transparent"
                >
                  <Link href="/product-information" scroll={true}>
                    Learn More About InvisiRelief™
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
