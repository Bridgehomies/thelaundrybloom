"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { TestimonialIllustration } from "@/components/illustrations/TestimonialIllustration"

const testimonials = [
  {
    name: "Ahmed Al-Mansouri",
    nameAr: "أحمد المنصوري",
    location: "Dubai Marina",
    role: "Business Executive",
    rating: 5,
    text: "Exceptional service! The Laundry Bloom transformed my weekly laundry routine. The quality is outstanding, and their same-day delivery saved me countless times during busy work weeks.",
    textAr:
      "خدمة استثنائية! فريش دبي غيّر روتين الغسيل الأسبوعي. الجودة ممتازة والتسليم في نفس اليوم أنقذني مرات لا تحصى.",
    avatar: "AM",
    gradient: "from-blue-500 to-teal-400",
    verified: true,
  },
  {
    name: "Sarah Johnson",
    nameAr: "سارة جونسون",
    location: "JBR",
    role: "Marketing Director",
    rating: 5,
    text: "As an expat in Dubai, finding reliable services was challenging. The Laundry Bloom exceeded every expectation with their professionalism and attention to detail. Highly recommended!",
    textAr: "كمقيمة في دبي، كان العثور على خدمات موثوقة تحدياً. فريش دبي فاق كل التوقعات بمهنيتهم واهتمامهم بالتفاصيل.",
    avatar: "SJ",
    gradient: "from-indigo-500 to-purple-500",
    verified: true,
  },
  {
    name: "Mohammed Hassan",
    nameAr: "محمد حسن",
    location: "Downtown Dubai",
    role: "Entrepreneur",
    rating: 5,
    text: "Game-changing service! The convenience of same-day pickup and delivery fits perfectly with my busy lifestyle. Their dry cleaning service is absolutely premium quality.",
    textAr: "خدمة تغيّر قواعد اللعبة! راحة الاستلام والتسليم في نفس اليوم تناسب أسلوب حياتي المزدحم تماماً.",
    avatar: "MH",
    gradient: "from-yellow-400 to-orange-500",
    verified: true,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isRTL] = useState(false) // Replace with real detection logic if needed

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-[#aec0ce] to-[#233c57]"></div>
      <div className="container relative z-10 px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-teal-100 backdrop-blur-sm px-6 py-2 text-blue-700 font-medium mb-6 border border-blue-200">
            <Heart className="h-4 w-4 mr-2" />
            <span className="text-sm">شهادات العملاء</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900 mb-2">What Our</span>
            <span className="block bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600 bg-clip-text text-transparent">
              CUSTOMERS SAY
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real customers who trust The Laundry Bloom with their laundry needs.
            <span className="font-semibold text-blue-600"> Join our family of satisfied customers.</span>
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          {/* Testimonial Card */}
          <Card className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-700">
            <CardContent className="relative z-10 p-8 lg:p-12">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-3 gap-8 items-center"
              >
                {/* Customer Info */}
                <div className="text-center lg:text-left">
                  {/* Avatar */}
                  <div className="relative inline-block mb-6">
                    <div
                      className={`w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-r ${testimonials[currentIndex].gradient} rounded-full flex items-center justify-center text-white font-bold text-2xl lg:text-3xl shadow-2xl`}
                    >
                      {testimonials[currentIndex].avatar}
                    </div>
                    {/* Verified Badge */}
                    {testimonials[currentIndex].verified && (
                      <div className="absolute -bottom-2 -right-2 rtl:-left-2 rtl:-right-auto w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{testimonials[currentIndex].name}</h3>
                    <div className="text-base text-teal-600 font-medium">{testimonials[currentIndex].nameAr}</div>
                    <div className="text-sm text-gray-500">{testimonials[currentIndex].role}</div>
                    <div className="text-sm text-gray-400">📍 {testimonials[currentIndex].location}</div>
                  </div>
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start mt-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 mx-0.5" />
                    ))}
                  </div>
                </div>
                {/* Testimonial Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Quote Icon */}
                  <div className="flex justify-center lg:justify-start">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${testimonials[currentIndex].gradient} opacity-10 rounded-full`}
                    >
                      <Quote className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  {/* Main Quote */}
                  <blockquote className="text-lg lg:text-xl text-gray-800 leading-relaxed italic text-center lg:text-left">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  {/* Arabic Quote */}
                  <blockquote
                    dir="rtl"
                    className="text-base text-teal-600 leading-relaxed italic text-center lg:text-right"
                  >
                    "{testimonials[currentIndex].textAr}"
                  </blockquote>
                </div>
              </motion.div>
            </CardContent>
          </Card>
          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-6 rtl:space-x-reverse">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {/* Dots */}
            <div className="flex space-x-3 rtl:space-x-reverse">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 h-3 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 item-center pt-12 border-t border-gray-200">
            {[
              { icon: "⭐", label: "4.8 Rating", value: "Google Reviews" },
              { icon: "✅", label: "Verified", value: "1000+ Reviews" },
              { icon: "🚀", label: "Growing Fast", value: "Join Today" },
            ].map((item, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-sm font-semibold text-blue-600 group-hover:text-blue-900 transition-colors">
                  {item.label}
                </div>
                <div className="text-xs text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}