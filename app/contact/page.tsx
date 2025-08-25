import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { generateSEO } from "@/lib/seo"

export const metadata: Metadata = generateSEO({
  title: "Contact Us",
  description:
    "Get in touch with the InvisiRelief™ team. Whether you're a consumer with questions or interested in partnerships, we're here to help.",
  keywords: ["contact", "support", "customer service", "partnerships"],
  url: "/contact",
})

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-12 py-20 lg:py-32 px-6 sm:px-8 lg:px-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </main>
  )
}
