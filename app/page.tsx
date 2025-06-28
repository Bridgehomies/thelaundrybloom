"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import {VisualStorytellingBlock} from "@/components/story"
import { PricingCalculator } from "@/components/pricing-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BookingPreview } from "@/components/booking-preview"

import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    address: "",
    phone: "",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <div className="min-h-screen bg-pearl-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingCalculator />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <BookingPreview />
        
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
