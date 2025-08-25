import type { Metadata } from "next"
import { StructuredData } from "@/components/seo/structured-data"
import { generateSEO, generateProductSchema } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Zap, Smartphone } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = generateSEO({
  title: "Product Information",
  description:
    "Learn about InvisiRelief™ chewing gum - natural ingredients, benefits, and safety information for discreet throat relief.",
  keywords: ["natural ingredients", "throat relief", "chewing gum", "Strepsils alternative"],
  url: "/product-information",
})

export default function ProductInformationPage() {
  return (
    <>
      <StructuredData data={generateProductSchema()} />
      <main className="min-h-screen px-8 sm:px-10 lg:px-4">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-white to-secondary/30 pt-20 pb-20 lg:pt-24 lg:pb-32">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-navy leading-tight">
                    Natural Throat Relief
                    <br />
                    <span className="text-primary">In Chewing Gum Form</span>
                  </h1>
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Like Strepsils, but completely discreet. InvisiRelief™ delivers natural throat-soothing ingredients
                    through an innovative chewing gum format.
                  </p>
                </div>
              </div>

              {/* Visual */}
              <div className="relative flex justify-center lg:block">
                <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12">
                  <div className="aspect-square bg-white rounded-2xl clinical-shadow-lg overflow-hidden">
                    <img
                      src="/images/invisirelief-dental-package.png"
                      alt="InvisiRelief™ Dental Chewing Gum Package"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">Why Choose InvisiRelief™?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                All the benefits of throat lozenges, with the convenience and discretion of chewing gum.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Completely Discreet</h3>
                <p className="text-muted-foreground">
                  No one knows you're treating throat discomfort. Perfect for meetings, social situations, or anywhere
                  you need relief.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Fast Acting</h3>
                <p className="text-muted-foreground">
                  Natural ingredients are released as you chew, providing relief within minutes - faster than waiting
                  for lozenges to dissolve.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Convenient</h3>
                <p className="text-muted-foreground">
                  No water needed, no messy wrappers, no waiting. Just chew and get relief wherever you are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="relative bg-gradient-to-b from-white to-secondary/30 pt-20 pb-20 lg:pt-24 lg:pb-32">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-6xl font-bold text-navy leading-tight">
                    Natural Ingredients You Can Trust
                  </h2>
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                    InvisiRelief™ contains the same types of natural, soothing ingredients found in quality throat
                    lozenges.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    {/* Placeholder for icon */}
                    <div>
                      <div className="font-semibold text-navy">Natural Menthol</div>
                      <div className="text-muted-foreground">Provides cooling, soothing relief</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    {/* Placeholder for icon */}
                    <div>
                      <div className="font-semibold text-navy">Eucalyptus Extract</div>
                      <div className="text-muted-foreground">Natural throat-soothing properties</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    {/* Placeholder for icon */}
                    <div>
                      <div className="font-semibold text-navy">Honey Extract</div>
                      <div className="text-muted-foreground">Natural sweetener with soothing benefits</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    {/* Placeholder for icon */}
                    <div>
                      <div className="font-semibold text-navy">No Artificial Sweeteners</div>
                      <div className="text-muted-foreground">Naturally sweetened for better taste</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="relative flex justify-center lg:block">
                <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12">
                  <div className="aspect-square bg-white rounded-2xl clinical-shadow-lg overflow-hidden">
                    <img
                      src="/images/invisirelief-watermelon-package.png"
                      alt="InvisiRelief™ Watermelon Chewing Gum Package"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Ready to Try InvisiRelief™?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get in touch to learn more about our natural throat relief chewing gum or explore partnership
              opportunities.
            </p>
            <div className="flex flex-col gap-3 md:flex-row md:gap-4 md:justify-center max-w-md mx-auto">
              <Link href="/contact" scroll={true}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 w-full lg:w-auto">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/work-with-us" scroll={true}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-navy text-navy hover:bg-navy hover:text-white bg-transparent px-8 w-full lg:w-auto"
                >
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
