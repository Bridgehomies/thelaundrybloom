"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Al-Mansouri",
    location: "Dubai Marina",
    rating: 5,
    text: "Exceptional service! They picked up my clothes on time and delivered them perfectly cleaned and pressed. The eco-friendly approach is exactly what Dubai needs.",
    image: "/placeholder.svg?height=60&width=60",
    service: "Wash & Fold",
  },
  {
    name: "Ahmed Hassan",
    location: "Downtown Dubai",
    rating: 5,
    text: "Professional dry cleaning service that saved my expensive suit. The team is reliable and the quality is outstanding. Highly recommend to everyone in Dubai.",
    image: "/placeholder.svg?height=60&width=60",
    service: "Dry Cleaning",
  },
  {
    name: "Maria Rodriguez",
    location: "Jumeirah",
    rating: 5,
    text: "As a busy working mom, this service is a lifesaver. Quick turnaround, excellent quality, and the convenience of home pickup and delivery is unmatched.",
    image: "/placeholder.svg?height=60&width=60",
    service: "Ironing Service",
  },
  {
    name: "Raj Patel",
    location: "Business Bay",
    rating: 5,
    text: "Impressed with their curtain cleaning service. They made my home curtains look brand new. Professional team and fair pricing. Will definitely use again.",
    image: "/placeholder.svg?height=60&width=60",
    service: "Curtain Cleaning",
  },
  {
    name: "Fatima Al-Zahra",
    location: "DIFC",
    rating: 5,
    text: "The attention to detail is remarkable. My delicate fabrics were handled with such care. This is the premium laundry service Dubai deserves.",
    image: "/placeholder.svg?height=60&width=60",
    service: "Delicate Care",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#005DAA]/5 to-[#00CFC1]/5">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">What Dubai Says About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers across Dubai who trust us with their laundry needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative">
            <Card className="shadow-xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#005DAA] to-[#00CFC1] p-8 text-white">
                  <Quote className="h-12 w-12 mb-4 opacity-80" />
                  <p className="text-xl md:text-2xl leading-relaxed mb-6">"{testimonials[currentIndex].text}"</p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        width={60}
                        height={60}
                        className="rounded-full border-2 border-white/20"
                      />
                      <div>
                        <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                        <p className="text-white/80">{testimonials[currentIndex].location}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="bg-white/20 px-3 py-1 rounded-full text-sm inline-block">
                        {testimonials[currentIndex].service}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#005DAA] scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#005DAA] mb-2">5000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#005DAA] mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#005DAA] mb-2">98%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#005DAA] mb-2">24-48h</div>
              <div className="text-gray-600">Turnaround Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
