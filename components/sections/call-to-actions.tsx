import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Building2, ArrowRight } from "lucide-react"

export function CallToActions() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-10 sm:px-12 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Ready to Experience InvisiRelief™?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you're seeking relief or looking to partner with us, we're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* For Consumers */}
          <Card className="border-0 clinical-shadow hover:clinical-shadow-lg transition-all duration-300 group">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <Users className="w-8 h-8 text-primary" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-navy">For Consumers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn more about InvisiRelief™, how it works, and find answers to your questions about discreet pain
                  relief.
                </p>
              </div>

              <div className="space-y-3">
                <Button className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-white">
                  Product Information
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full lg:w-auto border-navy text-navy hover:bg-navy hover:text-white bg-transparent"
                >
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* For Stockists/Distributors */}
          <Card className="border-0 clinical-shadow hover:clinical-shadow-lg transition-all duration-300 group">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-navy/20 transition-colors">
                <Building2 className="w-8 h-8 text-navy" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-navy">For Stockists & Distributors</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Partner with InvisiRelief™ to bring innovative pain relief solutions to your customers and patients.
                </p>
              </div>

              <div className="space-y-3">
                <Button className="w-full lg:w-auto bg-navy hover:bg-navy/90 text-white">
                  Work With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full lg:w-auto border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  Download Info Pack
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
