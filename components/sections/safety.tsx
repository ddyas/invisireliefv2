import { Button } from "@/components/ui/button"
import { CheckCircle, ExternalLink, Leaf, Award, Users } from "lucide-react"
import Link from "next/link"

const safetyHighlights = [
  "Natural ingredients",
  "Quality tested formulation",
  "No artificial sweeteners",
  "Gluten-free formulation",
  "Quality assured manufacturing",
  "Trusted by consumers",
]

export function Safety() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-10 sm:px-12 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">
            Safety & Quality
            <br />
            <span className="text-primary">You Can Trust</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            InvisiRelief™ is crafted with care using quality ingredients, similar to trusted throat lozenges and
            soothers you know and love.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-105 transition-all duration-300 shadow-lg">
              <Leaf className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Natural Ingredients</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Carefully selected natural ingredients for gentle, effective relief
            </p>
          </div>

          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-105 transition-all duration-300 shadow-lg">
              <Award className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Quality Tested</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Rigorous quality testing ensures consistent, reliable results
            </p>
          </div>

          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-105 transition-all duration-300 shadow-lg">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Consumer Trusted</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Developed with consumer needs in mind for discreet, convenient relief
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyHighlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-4 p-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="text-navy font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/product-information" scroll={true}>
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white bg-transparent w-full lg:w-auto"
              >
                View Full Product Information
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="ghost" className="text-primary hover:bg-primary/10 w-full lg:w-auto">
              Download Product Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
