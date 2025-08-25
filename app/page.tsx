import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Safety } from "@/components/sections/safety"
import { StructuredData } from "@/components/seo/structured-data"
import { generateProductSchema } from "@/lib/seo"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <>
      <StructuredData data={generateProductSchema()} />
      <main className="min-h-screen px-8 sm:px-10 lg:px-4">
        <div className="container mx-auto max-w-7xl text-center lg:text-left">
          <Hero />
          <HowItWorks />
          <Safety />

          <section className="py-16 bg-primary/5">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-navy mb-6">Ready to Learn More?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover how InvisiRelief™ can provide the discreet throat relief you need, just like throat lozenges
                but in chewing gum form.
              </p>
              <div className="flex flex-col gap-3 md:flex-row md:gap-4 md:justify-center max-w-md mx-auto">
                <Link href="/product-information" scroll={true}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 w-full lg:w-auto">
                    View Product Details
                  </Button>
                </Link>
                <Link href="/contact" scroll={true}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-navy text-navy hover:bg-navy hover:text-white bg-transparent px-6 w-full lg:w-auto"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
