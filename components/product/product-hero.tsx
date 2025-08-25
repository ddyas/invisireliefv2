import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export function ProductHero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-secondary/30 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-navy leading-tight">
                InvisiRelief™
                <br />
                <span className="text-primary">Product Information</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Everything you need to know about our innovative medicated chewing gum for discreet, fast-acting
                intraoral pain relief.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Download className="mr-2 h-5 w-5" />
                Download Product Guide
              </Button>
              <Link href="/contact" scroll={true}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-navy text-navy hover:bg-navy hover:text-white bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Product Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12">
              <div className="aspect-square bg-white rounded-2xl clinical-shadow-lg flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="InvisiRelief™ Product Package"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
