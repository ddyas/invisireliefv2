import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Building2, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function ProductCTAs() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Need More Information?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our team is here to help with any questions about InvisiRelief™ or to discuss partnership opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Us */}
          <Card className="border-0 clinical-shadow hover:clinical-shadow-lg transition-all duration-300 group">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-navy">Contact Our Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Have questions about InvisiRelief™? Our team is ready to provide detailed information and support.
                </p>
              </div>

              <div className="space-y-3">
                <Link href="/contact" scroll={true}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact" scroll={true}>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Button>
                </Link>
              </div>

              <div className="text-xs text-muted-foreground">
                <p>Response time: Within 24 hours</p>
                <p>Available: Monday - Friday, 9AM - 5PM AEST</p>
              </div>
            </CardContent>
          </Card>

          {/* Work With Us */}
          <Card className="border-0 clinical-shadow hover:clinical-shadow-lg transition-all duration-300 group">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-navy/20 transition-colors">
                <Building2 className="w-8 h-8 text-navy" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-navy">Partner With Us</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Interested in stocking InvisiRelief™? Learn about our partnership opportunities and how we support our
                  distribution network.
                </p>
              </div>

              <div className="space-y-3">
                <Link href="/work-with-us" scroll={true}>
                  <Button className="w-full bg-navy hover:bg-navy/90 text-white">
                    Work With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/work-with-us" scroll={true}>
                  <Button
                    variant="outline"
                    className="w-full border-navy text-navy hover:bg-navy hover:text-white bg-transparent"
                  >
                    Download Partnership Info
                  </Button>
                </Link>
              </div>

              <div className="text-xs text-muted-foreground">
                <p>Partnership support available</p>
                <p>Competitive margins & marketing support</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
