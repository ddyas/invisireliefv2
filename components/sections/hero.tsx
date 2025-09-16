import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-secondary/30 pt-20 pb-20 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-0 sm:px-4 lg:px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left px-4 lg:px-0">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-navy leading-tight">
                Discreet Relief.
                <br />
                <span className="text-primary">Reimagined.</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Discreet pharmaceutical gum for targeted oral pain relief. A medicated chewing gum designed to deliver
                rapid, localised comfort for oral and orthodontic discomfort through a unique chew-and-park delivery
                system.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-center lg:flex-row lg:gap-4 lg:justify-start">
              <Link href="/product-information" scroll={true}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full lg:w-auto">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Join the Waitlist
                </Button>
              </Link>
              <Link href="/work-with-us" scroll={true}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-navy text-navy hover:bg-navy hover:text-white bg-transparent w-full lg:w-auto"
                >
                  For Clinicians & Partners
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">100%</div>
                <div className="text-sm text-muted-foreground">Natural</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">2-5</div>
                <div className="text-sm text-muted-foreground">Minutes</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">Discreet</div>
                <div className="text-sm text-muted-foreground">Relief</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:block px-4 lg:px-0">
            <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12">
              <div className="aspect-square bg-white rounded-2xl clinical-shadow-lg overflow-hidden">
                <img
                  src="/images/hero-woman-smiling.png"
                  alt="Woman smiling showing relief from InvisiRelief™ Chewing Gum"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                New Formula
              </div>
              <div className="absolute -bottom-4 -left-4 bg-navy text-white px-4 py-2 rounded-full text-sm font-semibold">
                Natural Relief
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
