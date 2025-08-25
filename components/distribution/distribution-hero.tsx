import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import Link from "next/link"

export function DistributionHero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-secondary/30 pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-10 sm:px-12 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                <Badge className="bg-primary/10 text-primary border-primary/20">Partnership Program</Badge>
                <Badge className="bg-navy/10 text-navy border-navy/20">Growing Market</Badge>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-navy leading-tight">
                Partner with
                <br />
                <span className="text-primary">InvisiRelief™</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Join our growing network of stockists and distributors bringing innovative pain relief solutions to
                customers across Australia.
              </p>
            </div>

            <div className="flex flex-col gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full lg:w-auto">
                <Download className="mr-2 h-5 w-5" />
                Download Partnership Pack
              </Button>
              <Link href="/contact" scroll={true}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-navy text-navy hover:bg-navy hover:text-white bg-transparent w-full lg:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Key stats */}
            <div className="flex items-center gap-8 pt-4 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">40%+</div>
                <div className="text-sm text-muted-foreground">Gross Margins</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">Fast</div>
                <div className="text-sm text-muted-foreground">Logistics</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-navy/10 to-navy/5 rounded-3xl p-8 lg:p-12">
              <div className="aspect-square bg-white rounded-2xl clinical-shadow-lg overflow-hidden">
                <img
                  src="/images/business-handshake.png"
                  alt="Business partnership handshake"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                Partnership Program
              </div>
              <div className="absolute -bottom-4 -left-4 bg-navy text-white px-4 py-2 rounded-full text-sm font-semibold">
                Proven Success
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
