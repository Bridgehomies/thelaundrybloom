import { NextRequest } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)



export async function POST(request: NextRequest) {
  const body = await request.json()

  const { formData, selectedServices, total } = body

  console.log("Received booking data:", { formData, selectedServices, total })

  try {

const data = await resend.emails.send({
  from: "Laundry Bloom <onboarding@resend.dev>",
  to: ["thelaundrybloom@gmail.com"],
  subject: `New Booking Confirmation #${new Date().getTime()}`,
  html: `
    <h2>New Booking Received!</h2>
    <p><strong>Pickup Date:</strong> ${formData.pickupDate}</p>
    <p><strong>Pickup Time:</strong> ${formData.pickupTime}</p>
    <p><strong>Address:</strong> ${formData.address}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Email:</strong> ${formData.email}</p>

    <h3>Selected Services:</h3>
    <ul>
      ${selectedServices.map((s: any) => `
        <li>${s.title} x ${s.quantity} - ${s.cleaningTypes.join(", ")}</li>
      `).join("")}
    </ul>

    <p><strong>Total Amount:</strong> AED ${total}</p>
  `,
})

    console.log("✅ Email sent successfully:", data)

    return Response.json({ success: true })
  } catch (error) {
    console.error("❌ Failed to send email:", error)
    return Response.json({ 
      success: false, 
      error: typeof error === "object" && error !== null && "message" in error 
        ? (error as { message: string }).message 
        : String(error) 
    })
  }
}