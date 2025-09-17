"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, Send } from "lucide-react"
import { useRouter } from "next/navigation"

interface StockistFormData {
  businessName: string
  abnGst: string
  website: string
  contactName: string
  email: string
  phone: string
  businessType: string
  regions: string
  expectedVolumes: string
  currentProducts: string
  notes: string
  agreeToTerms: boolean
}

export function StockistForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<StockistFormData>({
    businessName: "",
    abnGst: "",
    website: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    regions: "",
    expectedVolumes: "",
    currentProducts: "",
    notes: "",
    agreeToTerms: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<StockistFormData>>({})

  const handleInputChange = (field: keyof StockistFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<StockistFormData> = {}

    if (!formData.businessName.trim()) newErrors.businessName = "Business name is required"
    if (!formData.contactName.trim()) newErrors.contactName = "Contact name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.businessType) newErrors.businessType = "Please select business type"
    if (!formData.regions.trim()) newErrors.regions = "Please specify regions of interest"
    if (!formData.expectedVolumes.trim()) newErrors.expectedVolumes = "Please provide expected volumes"
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      const response = await fetch("/api/stockist-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push("/work-with-us/success", { scroll: true })
      } else {
        throw new Error("Failed to send application")
      }
    } catch (error) {
      console.error("Error sending application:", error)
      // Handle error (you might want to show an error message to the user)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Apply for Partnership</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Complete the form below to start your partnership application. Our team will review your submission and
              contact you within 2-3 business days.
            </p>
          </div>

          <Card className="border-0 clinical-shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-navy">Stockist Enquiry Form</CardTitle>
              <p className="text-muted-foreground">
                Please provide detailed information about your business to help us create the best partnership for you.
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Business Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-navy border-b border-border pb-2">Business Information</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="businessName" className="text-navy font-medium">
                        Business Name *
                      </Label>
                      <Input
                        id="businessName"
                        type="text"
                        placeholder="Your business name"
                        value={formData.businessName}
                        onChange={(e) => handleInputChange("businessName", e.target.value)}
                        className={errors.businessName ? "border-red-500" : ""}
                        disabled={isLoading}
                      />
                      {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="abnGst" className="text-navy font-medium">
                        ABN / GST Number
                      </Label>
                      <Input
                        id="abnGst"
                        type="text"
                        placeholder="ABN or GST registration number"
                        value={formData.abnGst}
                        onChange={(e) => handleInputChange("abnGst", e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-navy font-medium">
                      Website
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://your-website.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-navy border-b border-border pb-2">Contact Information</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactName" className="text-navy font-medium">
                        Contact Name *
                      </Label>
                      <Input
                        id="contactName"
                        type="text"
                        placeholder="Primary contact person"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange("contactName", e.target.value)}
                        className={errors.contactName ? "border-red-500" : ""}
                        disabled={isLoading}
                      />
                      {errors.contactName && <p className="text-red-500 text-sm">{errors.contactName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-navy font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="contact@yourbusiness.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={errors.email ? "border-red-500" : ""}
                        disabled={isLoading}
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-navy font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+61 xxx xxx xxx"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={errors.phone ? "border-red-500" : ""}
                      disabled={isLoading}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>
                </div>

                {/* Business Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-navy border-b border-border pb-2">Business Details</h3>

                  <div className="space-y-2">
                    <Label htmlFor="businessType" className="text-navy font-medium">
                      Business Type *
                    </Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => handleInputChange("businessType", value)}
                      disabled={isLoading}
                    >
                      <SelectTrigger className={errors.businessType ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="distributor">Distributor</SelectItem>
                        <SelectItem value="pharmacy">Pharmacy</SelectItem>
                        <SelectItem value="clinic">Medical/Dental Clinic</SelectItem>
                        <SelectItem value="hospital">Hospital/Healthcare System</SelectItem>
                        <SelectItem value="retailer">Retail Store</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.businessType && <p className="text-red-500 text-sm">{errors.businessType}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="regions" className="text-navy font-medium">
                        Regions of Interest *
                      </Label>
                      <Input
                        id="regions"
                        type="text"
                        placeholder="e.g., NSW, VIC, QLD or specific cities"
                        value={formData.regions}
                        onChange={(e) => handleInputChange("regions", e.target.value)}
                        className={errors.regions ? "border-red-500" : ""}
                        disabled={isLoading}
                      />
                      {errors.regions && <p className="text-red-500 text-sm">{errors.regions}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="expectedVolumes" className="text-navy font-medium">
                        Expected Monthly Volumes *
                      </Label>
                      <Select
                        value={formData.expectedVolumes}
                        onValueChange={(value) => handleInputChange("expectedVolumes", value)}
                        disabled={isLoading}
                      >
                        <SelectTrigger className={errors.expectedVolumes ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select expected volumes" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50-100">50-100 units</SelectItem>
                          <SelectItem value="100-500">100-500 units</SelectItem>
                          <SelectItem value="500-1000">500-1,000 units</SelectItem>
                          <SelectItem value="1000-5000">1,000-5,000 units</SelectItem>
                          <SelectItem value="5000+">5,000+ units</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.expectedVolumes && <p className="text-red-500 text-sm">{errors.expectedVolumes}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentProducts" className="text-navy font-medium">
                      Current Pain Relief Products
                    </Label>
                    <Textarea
                      id="currentProducts"
                      placeholder="What pain relief products do you currently stock or recommend?"
                      rows={3}
                      value={formData.currentProducts}
                      onChange={(e) => handleInputChange("currentProducts", e.target.value)}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-navy font-medium">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Any additional information about your business or specific requirements..."
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Terms agreement */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                      disabled={isLoading}
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm text-muted-foreground leading-relaxed">
                      I agree to the terms and conditions and privacy policy. I understand that InvisiRelief™ will use
                      this information to assess my partnership application and may contact me regarding business
                      opportunities.
                    </Label>
                  </div>
                  {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-white"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Partnership Application
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Our partnerships team will review your application and contact you within 2-3 business days.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
