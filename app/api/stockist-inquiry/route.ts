import { type NextRequest, NextResponse } from "next/server"

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

// Get business type display name
const getBusinessTypeDisplayName = (businessType: string): string => {
  switch (businessType) {
    case "distributor":
      return "Distributor"
    case "pharmacy":
      return "Pharmacy"
    case "clinic":
      return "Medical/Dental Clinic"
    case "hospital":
      return "Hospital/Healthcare System"
    case "retailer":
      return "Retail Store"
    default:
      return "Other"
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: StockistFormData = await request.json()

    // Basic validation
    const requiredFields = [
      "businessName",
      "contactName",
      "email",
      "phone",
      "businessType",
      "regions",
      "expectedVolumes",
    ]
    for (const field of requiredFields) {
      if (!body[field as keyof StockistFormData]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Terms agreement validation
    if (!body.agreeToTerms) {
      return NextResponse.json({ error: "You must agree to the terms and conditions" }, { status: 400 })
    }

    const businessTypeDisplayName = getBusinessTypeDisplayName(body.businessType)

    // TODO: Implement actual email sending logic here
    // This would typically use a service like Resend, Postmark, or similar
    // For now, we'll just log the form data and simulate success

    console.log("Stockist inquiry submission:", {
      ...body,
      businessTypeDisplayName,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real implementation, you would:
    // 1. Send detailed email to partnerships team
    // 2. Send confirmation email to the applicant
    // 3. Store the submission in a database
    // 4. Create a lead in CRM system
    // 5. Handle any errors appropriately

    return NextResponse.json(
      {
        success: true,
        message: "Partnership application submitted successfully",
        businessType: businessTypeDisplayName,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing stockist inquiry:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
