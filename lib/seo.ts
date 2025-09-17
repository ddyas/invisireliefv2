import type { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article" | "product"
  publishedTime?: string
  modifiedTime?: string
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
}: SEOProps): Metadata {
  const baseUrl = "https://invisirelief.com"
  const defaultTitle = "InvisiRelief™ - Discreet Relief. Reimagined."
  const defaultDescription =
    "Premium discreet medicated chewing gum for intraoral pain relief. Clinical-grade, fast-acting relief that fits your lifestyle."
  const defaultImage = "/images/invisirelief-logo-clean.png"

  const seoTitle = title ? `${title} - InvisiRelief™` : defaultTitle
  const seoDescription = description || defaultDescription
  const seoImage = image || defaultImage
  const seoUrl = url ? `${baseUrl}${url}` : baseUrl

  const defaultKeywords = ["pain relief", "medicated chewing gum", "discreet relief", "intraoral", "clinical"]
  const allKeywords = [...defaultKeywords, ...keywords]

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: allKeywords,
    authors: [{ name: "InvisiRelief" }],
    creator: "InvisiRelief",
    publisher: "InvisiRelief",
    robots: "index, follow",
    openGraph: {
      type,
      locale: "en_AU",
      url: seoUrl,
      siteName: "InvisiRelief™",
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: title || "InvisiRelief™ Logo",
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
      creator: "@invisirelief",
    },
    alternates: {
      canonical: seoUrl,
    },
  }
}

// Schema.org structured data generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InvisiRelief™",
    description:
      "Premium discreet medicated chewing gum for intraoral pain relief. Clinical-grade, fast-acting relief that fits your lifestyle.",
    url: "https://invisirelief.com",
    logo: "https://invisirelief.com/images/invisirelief-logo-clean.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61-1800-735433",
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: "AU",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Adelaide",
      addressRegion: "SA",
      postalCode: "",
      addressCountry: "AU",
    },
    sameAs: ["https://linkedin.com/company/invisirelief", "https://twitter.com/invisirelief"],
  }
}

export function generateProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "InvisiRelief™ Throat Relief Chewing Gum",
    description: "Premium discreet chewing gum for throat relief, like throat lozenges but more convenient.",
    brand: {
      "@type": "Brand",
      name: "InvisiRelief™",
    },
    manufacturer: {
      "@type": "Organization",
      name: "InvisiRelief™",
    },
    category: "Throat Relief Product",
    audience: {
      "@type": "PeopleAudience",
      suggestedMinAge: 18,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "AUD",
      seller: {
        "@type": "Organization",
        name: "InvisiRelief™",
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Natural Ingredients",
        value: "Yes",
      },
      {
        "@type": "PropertyValue",
        name: "Delivery Method",
        value: "Chewing Gum",
      },
      {
        "@type": "PropertyValue",
        name: "Form",
        value: "Chewing Gum",
      },
    ],
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
