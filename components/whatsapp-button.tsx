"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "971525076196" // Replace with actual WhatsApp number
    const message = "Hi! I'd like to book a laundry service."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse hover:animate-none hover:scale-110 group"
        size="icon"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>

      {/* Tooltip for mobile */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-charcoal text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap sm:hidden">
        Chat with us!
      </div>
    </div>
  )
}
