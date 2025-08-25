import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const faqs = [
  {
    question: "How quickly does InvisiRelief™ work?",
    answer:
      "Most users experience pain relief within 2-5 minutes of proper use. The advanced intraoral delivery system allows for rapid absorption through the oral mucosa, providing faster relief than traditional oral medications that must be digested.",
  },
  {
    question: "How long does the pain relief last?",
    answer:
      "Pain relief typically lasts 4-6 hours, depending on individual factors such as the severity of pain, metabolism, and proper usage technique. For optimal results, follow the recommended usage instructions and dosage guidelines.",
  },
  {
    question: "Is it safe to use InvisiRelief™ daily?",
    answer:
      "InvisiRelief™ is designed for regular use when needed, following the recommended dosage guidelines. However, for long-term daily use, we recommend consulting with your healthcare provider to ensure it's appropriate for your specific situation and to monitor for any potential interactions with other medications.",
  },
  {
    question: "Can I use InvisiRelief™ with other medications?",
    answer:
      "While InvisiRelief™ is generally safe, it's important to consult with your healthcare provider or pharmacist before combining it with other medications. They can assess potential interactions and provide personalized advice based on your complete medical profile.",
  },
  {
    question: "What makes InvisiRelief™ different from regular pain relievers?",
    answer:
      "InvisiRelief™ offers several unique advantages: (1) Discreet delivery that looks like regular chewing gum, (2) Targeted intraoral application for localized relief, (3) Faster onset of action compared to swallowed medications, (4) No need for water or obvious medication-taking behavior, and (5) Pharmaceutical-grade quality with TGA approval.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "InvisiRelief™ is generally well-tolerated. Some users may experience mild, temporary oral irritation or altered taste sensation. Jaw fatigue from extended chewing is possible. Serious side effects are rare but if you experience any unusual symptoms, discontinue use and consult your healthcare provider.",
  },
  {
    question: "How should I store InvisiRelief™?",
    answer:
      "Store InvisiRelief™ in a cool, dry place away from direct sunlight and heat. Keep the package sealed when not in use to maintain freshness and potency. Do not store in extremely hot environments (like a car dashboard) as this may affect the medication's effectiveness.",
  },
  {
    question: "Can I swallow InvisiRelief™?",
    answer:
      "InvisiRelief™ is designed for intraoral use and should not be swallowed. The medication is formulated for absorption through the oral mucosa. Swallowing small amounts accidentally is generally not harmful, but the product will be less effective and may cause mild gastrointestinal upset.",
  },
  {
    question: "Is InvisiRelief™ suitable for dental pain?",
    answer:
      "Yes, InvisiRelief™ is particularly effective for dental and oral pain due to its targeted intraoral delivery system. It's ideal for post-dental procedure discomfort, tooth pain, and oral surgery recovery. However, persistent dental pain should always be evaluated by a dental professional.",
  },
  {
    question: "Where can I purchase InvisiRelief™?",
    answer:
      "InvisiRelief™ is available through select pharmacies, dental clinics, and authorized healthcare providers. Contact us for information about availability in your area or to find the nearest stockist. We're continuously expanding our distribution network.",
  },
]

export function ProductFAQ() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about InvisiRelief™ and how it can help with your pain management needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-0">
                <Card className="clinical-shadow">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                    <span className="font-semibold text-navy pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
