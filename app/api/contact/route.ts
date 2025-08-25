import { type NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  purpose: string
  message: string
}

// Email routing based on purpose
const getRecipientEmail = (purpose: string): string => {
  switch (purpose) {
    case "consumer":
      return "support@invisirelief.com"
    case "healthcare":
    case "trade":
      return "partnerships@invisirelief.com"
    case "media":
      return "media@invisirelief.com"
    case "support":
      return "technical@invisirelief.com"
    default:
      return "info@invisirelief.com"
  }
}

// Get purpose display name
const getPurposeDisplayName = (purpose: string): string => {
  switch (purpose) {
    case "consumer":
      return "Consumer - Product Questions"
    case "healthcare":
      return "Healthcare Professional"
    case "trade":
      return "Trade/Partnership Inquiry"
    case "media":
      return "Media Inquiry"
    case "support":
      return "Technical Support"
    default:
      return "Other"
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Basic validation
    if (!body.name || !body.email || !body.purpose || !body.message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Get recipient based on purpose
    const recipientEmail = getRecipientEmail(body.purpose)
    const purposeDisplayName = getPurposeDisplayName(body.purpose)

    // TODO: Implement actual email sending logic here
    // This would typically use a service like Resend, Postmark, or similar
    // For now, we'll just log the form data and simulate success

    console.log("Contact form submission:", {
      ...body,
      recipientEmail,
      purposeDisplayName,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real implementation, you would:
    // 1. Send email to the appropriate recipient
    // 2. Send confirmation email to the user
    // 3. Store the submission in a database
    // 4. Handle any errors appropriately

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
        recipientEmail,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
