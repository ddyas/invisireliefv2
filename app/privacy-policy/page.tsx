import type { Metadata } from "next"
import { generateSEO } from "@/lib/seo"

export const metadata: Metadata = generateSEO({
  title: "Privacy Policy",
  description: "InvisiRelief™ Privacy Policy - How we collect, use, and protect your personal information.",
  url: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-navy mb-8">Privacy Policy</h1>

            <p className="text-muted-foreground mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-navy mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, make a
                  purchase, request information, or contact us for support.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, process
                  transactions, and communicate with you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at privacy@invisirelief.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
