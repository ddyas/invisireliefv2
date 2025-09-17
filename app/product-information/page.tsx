import type { Metadata } from "next"
import { StructuredData } from "@/components/seo/structured-data"
import { generateSEO, generateProductSchema } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Zap, Smartphone } from "lucide-react"
import Link from "next/link"
import { ScientificBasis } from "@/components/product/scientific-basis"
import { DevelopmentRoadmap } from "@/components/product/development-roadmap"

export const metadata: Metadata = generateSEO({
  title: "Product Information",
  description:
    "Learn about InvisiRelief™ medicated chewing gum - a pharmaceutical approach to discreet oral pain relief.",
  keywords: ["oral pain relief", "medicated chewing gum", "pharmaceutical approach"],
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
                    Pharmaceutical Approach
                    <br />
                    <span className="text-primary">To Oral Pain Relief</span>
                  </h1>
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                    InvisiRelief™ is a medicated chewing gum designed to deliver rapid, localised comfort for oral and
                    orthodontic discomfort. Now advancing into pilot production and flavour optimisation with global
                    partners.
                  </p>
                </div>
              </div>

              {/* Visual */}
              <div className="relative flex justify-center lg:block">
                <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12">
                  <div className="aspect-square bg-white rounded-2xl clinical-shadow-lg overflow-hidden">
                    <img
                      src="/images/invisirelief-dental-package.png"
                      alt="InvisiRelief™ Dental Chewing Gum Package - Pre-treatment Oral Comfort"
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
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">Why InvisiRelief™?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Developed with leading gum-technology experts for targeted, discreet, and convenient oral pain relief.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Pharmaceutical Approach</h3>
                <p className="text-muted-foreground">
                  Developed with leading gum-technology experts for clinical-grade relief.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Targeted Relief</h3>
                <p className="text-muted-foreground">
                  Direct application to the site of discomfort for localised treatment.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Discreet & Convenient</h3>
                <p className="text-muted-foreground">Looks like regular gum, no water or applicators required.</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-navy">No Systemic Overload</h3>
                <p className="text-muted-foreground">Local delivery reduces reliance on systemic medication.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Basis Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl">
            <ScientificBasis />
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="relative bg-gradient-to-b from-white to-secondary/30 pt-20 pb-20 lg:pt-24 lg:pb-32">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-6xl font-bold text-navy leading-tight">
                    Indications
                    <br />
                    <span className="text-primary">In Development</span>
                  </h2>
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Being developed for the reduction of discomfort associated with various oral conditions.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div>
                      <div className="font-semibold text-navy">Canker Sores / Oral Ulcers</div>
                      <div className="text-muted-foreground">Targeted relief for painful mouth sores</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <div className="font-semibold text-navy">Minor Cuts or Abrasions</div>
                      <div className="text-muted-foreground">Soothing treatment for mouth injuries</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <div className="font-semibold text-navy">Orthodontic & Retainer Irritation</div>
                      <div className="text-muted-foreground">Comfort for braces and retainer discomfort</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <div className="font-semibold text-navy">Toothache & Gum Discomfort</div>
                      <div className="text-muted-foreground">Including gingivitis-related pain relief</div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> InvisiRelief™ is in development and not yet approved by regulatory
                      authorities. It is intended to reduce discomfort, not replace professional medical or dental
                      treatment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="relative flex justify-center lg:block">
                <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12">
                  <div className="aspect-square bg-white rounded-2xl clinical-shadow-lg overflow-hidden">
                    <img
                      src="/images/invisirelief-oral-pain-package.png"
                      alt="InvisiRelief™ Oral Pain Medicated Gum - Fast Acting Pain Relief"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Roadmap Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl">
            <DevelopmentRoadmap />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Ready to Learn More?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our waitlist to be notified when InvisiRelief™ becomes available, or explore partnership
              opportunities with our growing network.
            </p>
            <div className="flex flex-col gap-3 md:flex-row md:gap-4 md:justify-center max-w-md mx-auto">
              <Link href="/contact" scroll={true}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 w-full lg:w-auto">
                  Join the Waitlist
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
