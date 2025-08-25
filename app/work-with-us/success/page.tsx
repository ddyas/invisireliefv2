import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Download, Calendar, Mail } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Partnership Application Received - InvisiRelief™",
  description:
    "Thank you for your interest in partnering with InvisiRelief™. We've received your application and will be in touch soon.",
}

export default function PartnershipSuccessPage() {
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
                <h1 className="text-3xl lg:text-4xl font-bold text-navy">Partnership Application Received!</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Thank you for your interest in partnering with InvisiRelief™. We've received your application and our
                  partnerships team will review it carefully.
                </p>
              </div>

              {/* What happens next */}
              <div className="bg-secondary/50 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-navy flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Next Steps
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Our partnerships team will review your application within 2-3 business days</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>We'll schedule a call to discuss partnership opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>You'll receive detailed partnership materials and pricing information</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>We'll work together to create a customized partnership plan</span>
                  </div>
                </div>
              </div>

              {/* Download section */}
              <div className="border-t border-border pt-6 space-y-4">
                <h4 className="font-semibold text-navy">While You Wait</h4>
                <p className="text-sm text-muted-foreground">
                  Download our partnership overview to learn more about InvisiRelief™ and our distribution program.
                </p>
                <Button className="bg-navy hover:bg-navy/90 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Partnership Overview
                </Button>
              </div>

              {/* Contact info */}
              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Questions about your application?</span>
                </div>
                <p className="text-primary font-medium">partnerships@invisirelief.com</p>
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
                    Learn More About Our Products
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
