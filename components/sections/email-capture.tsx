"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export function EmailCapture() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
  }

  if (isSubmitted) {
    return (
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-10 sm:px-12 lg:px-4">
          <Card className="max-w-2xl mx-auto border-0 clinical-shadow">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-navy">Thank You!</h3>
              <p className="text-muted-foreground">
                We'll keep you updated on InvisiRelief™ availability and important news.
              </p>
              <Button
                variant="ghost"
                onClick={() => setIsSubmitted(false)}
                className="w-full lg:w-auto text-primary hover:bg-primary/10"
              >
                Subscribe Another Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-10 sm:px-12 lg:px-4">
        <Card className="max-w-2xl mx-auto border-0 clinical-shadow">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Mail className="w-8 h-8 text-primary" />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-navy">Stay Informed</h3>
              <p className="text-muted-foreground leading-relaxed">
                Be the first to know about InvisiRelief™ availability, updates, and important news about discreet pain
                relief.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-3 md:flex-row md:gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-white"
                >
                  {isLoading ? "Subscribing..." : "Notify Me"}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
