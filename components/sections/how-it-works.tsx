import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Chew Normally",
    description: "Simply chew like regular gum. The natural motion activates the soothing ingredient release.",
  },
  {
    number: "02",
    title: "Active Release",
    description: "Natural ingredients deliver soothing relief directly through your mouth for fast absorption.",
  },
  {
    number: "03",
    title: "Fast Relief",
    description: "Experience targeted throat and mouth relief within minutes, like throat lozenges but more discreet.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our innovative chewing gum makes throat relief as simple and discreet as chewing gum.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-navy rounded-full flex items-center justify-center">
                      <Play className="w-3 h-3 text-white fill-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-navy mb-4">{step.title}</h3>

                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow connector (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-2 transform translate-x-full">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Visual diagram placeholder */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <Image
              src="/images/chewing-gum-close-up.png"
              alt="Woman using InvisiRelief chewing gum for discreet throat relief"
              width={1200}
              height={600}
              className="w-full h-64 md:h-80 lg:h-96 rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
