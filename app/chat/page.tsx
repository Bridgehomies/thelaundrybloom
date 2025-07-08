// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function ChatRedirect() {
//   const [adminUrl, setAdminUrl] = useState("");
//   const [clientUrl, setClientUrl] = useState("");
//   const router = useRouter();

//   // useEffect(() => {
//   //   const stored = localStorage.getItem("laundryBooking");
//   //   if (!stored) {
//   //     alert("No booking data found.");
//   //     router.push("/");
//   //     return;
//   //   }

//   //   try {
//   //     const { formData, selectedServices, total } = JSON.parse(stored);

//   //     const services = selectedServices
//   //       .map(
//   //         (s: any) =>
//   //           "- " +
//   //           s.title +
//   //           " x" +
//   //           s.quantity +
//   //           " (" +
//   //           s.cleaningTypes.join(", ") +
//   //           ")"
//   //       )
//   //       .join("%0a");

//   //     // 🔥 Build clean WhatsApp message manually (like in the video)
//   //     const message =
//   //       "The Laundry Bloom - Booking Confirmed%0a%0a" +
//   //       "*Services:*%0a" +
//   //       services +
//   //       "%0a%0a" +
//   //       "*Address:* " +
//   //       formData.address +
//   //       "%0a" +
//   //       "*Pickup Date:* " +
//   //       formData.pickupDate +
//   //       "%0a" +
//   //       "*Pickup Time:* " +
//   //       formData.pickupTime +
//   //       "%0a" +
//   //       "*Phone:* " +
//   //       formData.phone +
//   //       "%0a" +
//   //       "*Email:* " +
//   //       formData.email +
//   //       "%0a" +
//   //       "*Payment Method:* " +
//   //       formData.paymentMethod +
//   //       "%0a" +
//   //       "*Instructions:* " +
//   //       (formData.specialInstructions || "None") +
//   //       "%0a" +
//   //       "*Total:* AED " +
//   //       total;

//   //     const adminNumber = "971525076196";
//   //     const clientNumber = formData.phone.replace(/\D/g, "");

//   //     const encodedMessage = encodeURIComponent(message);

//   //     setAdminUrl("https://wa.me/" + adminNumber + "?text=" + encodedMessage);
//   //     setClientUrl("https://wa.me/" + clientNumber + "?text=" + encodedMessage);
//   //   } catch (err) {
//   //     console.error("Error reading WhatsApp message:", err);
//   //     router.push("/");
//   //   }
//   // }, [router]);
//   useEffect(() => {
//   const stored = localStorage.getItem("laundryBooking")
//   if (!stored) {
//     alert("No booking data found.")
//     router.push("/")
//     return
//   }

//   try {
//     const { formData, selectedServices, total } = JSON.parse(stored)

//     const services = selectedServices
//       .map(
//         (s: any) =>
//           `- ${s.title} x${s.quantity} (${s.cleaningTypes.join(", ")})`
//       )
//       .join("\n") // ← use \n, not %0a

//     const message = 
//       `The Laundry Bloom - Booking Confirmed\n\n` +
//       `*Services:*\n${services}\n\n` +
//       `*Address:* ${formData.address}\n` +
//       `*Pickup Date:* ${formData.pickupDate}\n` +
//       `*Pickup Time:* ${formData.pickupTime}\n` +
//       `*Phone:* ${formData.phone}\n` +
//       `*Email:* ${formData.email}\n` +
//       `*Payment Method:* ${formData.paymentMethod}\n` +
//       `*Instructions:* ${formData.specialInstructions || "None"}\n` +
//       `*Total:* AED ${total}`

//     const encodedMessage = encodeURIComponent(message)
//     const adminNumber = "971525076196"
//     const clientNumber = formData.phone.replace(/\D/g, "")

//     setAdminUrl(`https://wa.me/${adminNumber}?text=${encodedMessage}`)
//     setClientUrl(`https://wa.me/${clientNumber}?text=${encodedMessage}`)

//   } catch (err) {
//     console.error("Error reading WhatsApp message:", err)
//     router.push("/")
//   }
// }, [router])


//   if (!adminUrl || !clientUrl)
//     return <div className="p-8">Preparing WhatsApp message...</div>;

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center p-4">
//       <h2 className="text-xl font-semibold">Booking Ready to Send</h2>
//       <p className="text-gray-600">
//         Click below to send the message via WhatsApp
//       </p>

//       <div className="flex flex-col gap-4 mt-6 w-full max-w-xs">
//         <a
//           href={adminUrl}
//           target="_blank"
//           className="w-full px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
//         >
//           Send to Admin
//         </a>
//         <a
//           href={clientUrl}
//           target="_blank"
//           className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
//         >
//           Send to Your WhatsApp
//         </a>
//       </div>
//     </div>
//   );
// }


"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ChatRedirect() {
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem("laundryBooking")
    if (!stored) {
      alert("No booking data found.")
      router.push("/")
      return
    }

    try {
      const { formData, selectedServices, total } = JSON.parse(stored)

      const services = selectedServices
        .map(
          (s: any) =>
            `- ${s.title} x${s.quantity} (${s.cleaningTypes.join(", ")})`
        )
        .join("\n")

      const message =
        `The Laundry Bloom - Booking Confirmed\n\n` +
        `*Services:*\n${services}\n\n` +
        `*Address:* ${formData.address}\n` +
        `*Pickup Date:* ${formData.pickupDate}\n` +
        `*Pickup Time:* ${formData.pickupTime}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Email:* ${formData.email}\n` +
        `*Payment Method:* ${formData.paymentMethod}\n` +
        `*Instructions:* ${formData.specialInstructions || "None"}\n` +
        `*Total:* AED ${total}`

      const encodedMessage = encodeURIComponent(message)
      const adminNumber = "971525076196"
      const adminUrl = `https://wa.me/${adminNumber}?text=${encodedMessage}`

      // 🚀 Automatically redirect to WhatsApp
      window.location.href = adminUrl

    } catch (err) {
      console.error("Error reading booking data:", err)
      router.push("/")
    }
  }, [router])

  return null // No UI
}
