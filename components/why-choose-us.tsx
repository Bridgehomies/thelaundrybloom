"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Leaf, Award, Users, MapPin } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "24-48 Hour Service",
    description: "Quick turnaround without compromising quality",
    stat: "98%",
    statLabel: "On-time delivery",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Your clothes are protected with comprehensive insurance",
    stat: "100%",
    statLabel: "Coverage guarantee",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Biodegradable detergents and sustainable practices",
    stat: "0%",
    statLabel: "Harmful chemicals",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Professional cleaning with satisfaction guarantee",
    stat: "4.9/5",
    statLabel: "Customer rating",
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description: "Serving Dubai families and businesses since 2020",
    stat: "5000+",
    statLabel: "Happy customers",
  },
  {
    icon: MapPin,
    title: "All Emirates Coverage",
    description: "Free pickup and delivery across Dubai and UAE",
    stat: "7",
    statLabel: "Emirates covered",
  },
]

export function WhyChooseUs() {
  const [counters, setCounters] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    const animateCounters = () => {
      features.forEach((feature, index) => {
        const target = feature.stat.includes("%")
          ? Number.parseInt(feature.stat)
          : feature.stat.includes("/")
            ? Number.parseFloat(feature.stat)
            : Number.parseInt(feature.stat.replace("+", ""))

        let current = 0
        const increment = target / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }

          setCounters((prev) => ({
            ...prev,
            [index]: feature.stat.includes("/") ? current.toFixed(1) : Math.floor(current),
          }))
        }, 30)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("why-choose-us")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-[#005DAA]/5 to-[#00CFC1]/5">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Why Dubai Chooses Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with Dubai's most trusted laundry service. Quality, reliability, and care in every
            wash.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white flex flex-col"
            >
              <CardContent className="p-8 text-center flex flex-col h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#005DAA] to-[#00CFC1] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-bold text-[#005DAA] mb-1">
                    {feature.stat.includes("/")
                      ? `${counters[index] || 0}/5`
                      : feature.stat.includes("%")
                        ? `${counters[index] || 0}%`
                        : `${counters[index] || 0}${feature.stat.includes("+") ? "+" : ""}`}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{feature.statLabel}</div>
                </div>

                <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dubai Cultural Element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#E0C097]/20 to-[#E0C097]/10 border border-[#E0C097]/30">
            <span className="text-2xl mr-3">🏙️</span>
            <span className="text-[#2C2C2C] font-medium">
              Proudly serving the vibrant community of Dubai with excellence and care
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
