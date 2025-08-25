import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Safety } from "@/components/sections/safety"
import { StructuredData } from "@/components/seo/structured-data"
import { generateProductSchema } from "@/lib/seo"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <StructuredData data={generateProductSchema()} />
      <main className="min-h-screen">
        <Hero />
        <HowItWorks />
        <Safety />

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Ready to Learn More?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how InvisiRelief™ can provide the discreet throat relief you need, just like throat lozenges but
              in chewing gum form.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link
                href="/product-information"
                scroll={true}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                View Product Details
              </Link>
              <Link
                href="/contact"
                scroll={true}
                className="border border-navy text-navy hover:bg-navy hover:text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
