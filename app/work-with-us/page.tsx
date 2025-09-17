import type { Metadata } from "next"
import { DistributionHero } from "@/components/distribution/distribution-hero"
import { TradeValueProp } from "@/components/distribution/trade-value-prop"
import { PartnershipSteps } from "@/components/distribution/partnership-steps"
import { StockistForm } from "@/components/distribution/stockist-form"
import { PartnershipBenefits } from "@/components/distribution/partnership-benefits"
import { generateSEO } from "@/lib/seo"

export const metadata: Metadata = generateSEO({
  title: "Work With Us - Distribution & Partnerships",
  description:
    "Partner with InvisiRelief™ as a distributor, pharmacy, or healthcare provider. Learn about our partnership program, margins, support, and how to stock our innovative pain relief products.",
  keywords: ["partnership", "distribution", "pharmacy", "healthcare provider", "stockist", "wholesale"],
  url: "/work-with-us",
})

export default function WorkWithUsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto max-w-7xl text-center lg:text-left">
        <DistributionHero />
        <TradeValueProp />
        <PartnershipSteps />
        <PartnershipBenefits />
        <StockistForm />
      </div>
    </main>
  )
}
