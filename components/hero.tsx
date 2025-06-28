"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Clock, Star } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAFAFA] via-white to-[#F0F8FF]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-[#005DAA]" />
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-[#00CFC1]" />
        <div className="absolute bottom-32 left-40 w-20 h-20 rounded-full bg-[#E0C097]" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#E0C097]/20 text-[#2C2C2C] text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2 text-[#E0C097]" />
              Dubai's Premium Laundry Service
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mb-6 leading-tight">
              Fresh Clothes,
              <span className="text-[#005DAA]"> Delivered</span>
              <br />
              <span className="text-[#00CFC1]">to Your Door</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Experience Dubai's most trusted laundry service. Professional cleaning, eco-friendly products, and
              doorstep delivery across all Emirates.
            </p>

            {/* Quick Booking Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 max-w-md mx-auto lg:mx-0">
              <h3 className="font-semibold text-[#2C2C2C] mb-4 text-left">Quick Booking</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-[#00CFC1] flex-shrink-0" />
                  <Input placeholder="Enter your location" className="border-gray-200" />
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-[#00CFC1] flex-shrink-0" />
                  <Input type="date" className="border-gray-200" />
                </div>
                <Button className="w-full bg-[#005DAA] hover:bg-[#004080] text-white">Get Instant Quote</Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Same Day Service
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Eco-Friendly
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Insured
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Professional laundry service in Dubai"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#00CFC1] rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#2C2C2C]">24-48 Hours</p>
                  <p className="text-sm text-gray-600">Turnaround Time</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#E0C097] rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#2C2C2C]">4.9/5 Rating</p>
                  <p className="text-sm text-gray-600">1000+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
