import type { Metadata } from "next"
import { generateSEO } from "@/lib/seo"

export const metadata: Metadata = generateSEO({
  title: "Terms of Service",
  description: "InvisiRelief™ Terms of Service - Terms and conditions for using our products and services.",
  url: "/terms-of-service",
})

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-navy mb-8">Terms of Service</h1>

            <p className="text-muted-foreground mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-navy mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using InvisiRelief™ products and services, you accept and agree to be bound by the
                  terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy mb-4">Medical Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  InvisiRelief™ products are intended for use as directed. Always consult with a healthcare professional
                  before using any medication or pain relief product.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at legal@invisirelief.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
