import { Phone } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-secondary/30 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-navy leading-tight">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Whether you're a consumer with questions about InvisiRelief™ or interested in partnerships, our team is
              here to help.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Typical response time: Within 24 hours
            </div>
            <div className="inline-flex items-center gap-2 bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium">
              <Phone className="w-4 h-4" />
              1800 RELIEF
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
