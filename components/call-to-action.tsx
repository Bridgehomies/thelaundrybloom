"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle, Mail } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

// Extend window type to include gtag if using Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function CallToAction({ formData }: { formData: any }) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handle form submission (simulate booking)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  // Pre-fill WhatsApp message with user data
  const handleWhatsAppClick = () => {
    const { service, date, time, address, phone } = formData

    const defaultMessage = encodeURIComponent(`
Hi The Laundry Bloom,

I'd like to book a pickup:
Service: ${service || 'Not selected'}
Date: ${date || 'Not selected'}
Time: ${time || 'Not selected'}
Address: ${address || 'Not provided'}
Phone: ${phone || 'Not provided'}

Thank you!
    `)

    const whatsappLink = `https://wa.me/971501234567?text=${defaultMessage}`

    // Track WhatsApp button click
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "CTA",
        event_label: "Book via WhatsApp",
        value: 1,
      })
    }

    window.open(whatsappLink, "_blank")
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-400 text-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for Fresh, Clean Clothes?</h2>
          

          {/* Booking Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto mb-12">
              <Input
                type="text"
                id="service"
                placeholder="Service Type"
                className="bg-white text-gray-900 border-0"
                value={formData?.service || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log("Update service", e.target.value)}
              />
              <Input
                type="text"
                id="date"
                placeholder="Pickup Date"
                className="bg-white text-gray-900 border-0"
                value={formData?.date || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log("Update date", e.target.value)}
              />
              <Input
                type="text"
                id="time"
                placeholder="Preferred Time"
                className="bg-white text-gray-900 border-0"
                value={formData?.time || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log("Update time", e.target.value)}
              />
              <Textarea
                id="address"
                placeholder="Enter your full address including building name, apartment number, and area"
                className="bg-white text-gray-900 border-0 min-h-[80px]"
                value={formData?.address || ""}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => console.log("Update address", e.target.value)}
              />
              <Input
                type="tel"
                id="phone"
                placeholder="+971 XX XXX XXXX"
                className="bg-white text-gray-900 border-0"
                value={formData?.phone || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log("Update phone", e.target.value)}
              />
              <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Schedule Pickup
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-lg mb-12 inline-block text-left"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Your Booking Is Ready!</h3>
              <p className="text-sm text-white/80">
                Click below to send your details directly to our team via WhatsApp.
              </p>
            </motion.div>
          )}

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
          >
            {/* WhatsApp Card - Entirely Clickable */}
            <div
              onClick={handleWhatsAppClick}
              role="button"
              tabIndex={0}
              aria-label="Chat with us on WhatsApp"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleWhatsAppClick()
              }}
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              <MessageCircle className="h-8 w-8 mb-3 text-white" />
              <h4 className="font-semibold mb-2">WhatsApp</h4>
              <p className="text-sm opacity-90">Quick & Easy</p>
              <div className="mt-3 inline-flex items-center justify-center px-4 py-1.5 border border-white text-white text-sm font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors">
                Chat Now
              </div>
            </div>

            {/* Other Cards */}
            {/* Call Us */}
            <div
              onClick={() => window.open("tel:+9714XXXXXXX", "_blank")}
              role="button"
              tabIndex={0}
              aria-label="Call us"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") window.open("tel:+9714XXXXXXX", "_blank")
              }}
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              <Phone className="h-8 w-8 mb-3 text-white" />
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-sm opacity-90">+971 4 XXX XXXX</p>
              <div className="mt-3 inline-flex items-center justify-center px-4 py-1.5 border border-white text-white text-sm font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors">
                Call Now
              </div>
            </div>

            {/* Email */}
            <div
              onClick={() => window.open("mailto:info@cleandubai.ae", "_blank")}
              role="button"
              tabIndex={0}
              aria-label="Send us an email"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") window.open("mailto:info@cleandubai.ae", "_blank")
              }}
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="h-8 w-8 mb-3 text-white" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-sm opacity-90">info@cleandubai.ae</p>
              <div className="mt-3 inline-flex items-center justify-center px-4 py-1.5 border border-white text-white text-sm font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors">
                Email Us
              </div>
            </div>

          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-12 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Book Your Pickup Now
            </Button>
            <p className="text-sm opacity-80">
              Free pickup and delivery • Same day service available • Satisfaction guaranteed
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}