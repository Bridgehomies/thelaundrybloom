"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Users, Clock, Shield, Leaf, Award, MapPin, Heart } from "lucide-react"
import { HappyFaceIcon, StarIcon, TrophyIcon } from "@/components/icons"

const features = [
  { icon: Users, title: "1,000+ Happy Customers", titleAr: "أكثر من 1000 عميل سعيد", description: "Trusted by families across Dubai", stat: "1000+", gradient: "from-blue-500 to-teal-400" },
  { icon: Clock, title: "Same Day Delivery", titleAr: "التسليم في نفس اليوم", description: "Quick turnaround for urgent needs", stat: "24hrs", gradient: "from-indigo-500 to-purple-500" },
  { icon: Shield, title: "100% Safe & Secure", titleAr: "آمن ومضمون 100%", description: "Your clothes are in safe hands", stat: "100%", gradient: "from-purple-500 to-pink-500" },
  { icon: Leaf, title: "Eco-Friendly Products", titleAr: "منتجات صديقة للبيئة", description: "Gentle on fabrics, kind to nature", stat: "Green", gradient: "from-green-400 to-emerald-500" },
  { icon: Award, title: "Premium Quality", titleAr: "جودة ممتازة", description: "Professional-grade cleaning standards", stat: "5★", gradient: "from-yellow-400 to-orange-500" },
  { icon: MapPin, title: "Most of Dubai Areas", titleAr: "جميع مناطق دبي", description: "Free pickup & delivery citywide", stat: "Dubai", gradient: "from-cyan-400 to-blue-500" },
]

const stats = [
  { number: "1000+", label: "Happy Customers", icon: <HappyFaceIcon /> },
  { number: "99%", label: "Satisfaction Rate", icon: <StarIcon /> },
  { number: "4.8★", label: "Average Rating", icon: <TrophyIcon /> },
]

export function WhyChooseUsSection() {
  const [isArabic, setIsArabic] = useState(false)

  return (
    <section dir={isArabic ? "rtl" : "ltr"} className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-teal-50 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-300 via-blue-300 to-teal-300 opacity-20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-teal-300 via-blue-300 to-indigo-300 opacity-20 blur-3xl rounded-full animate-pulse delay-2000" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/80 text-blue-700 font-medium shadow border border-blue-300">
            <Heart className="h-4 w-4 mr-2" />
            <span className="text-sm">{isArabic ? "لماذا نحن الأفضل" : "Why We're the Best"}</span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 mb-2 bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            {isArabic ? "اختر " : "Why Choose "} 
          </h3>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mt-6 mb-4 bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            {isArabic ? "اختر الغسيل الأمثل" : "The Laundry Bloom"}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            {isArabic
              ? "خدمة غسيل موثوقة مع جودة عالية وراحة تامة."
              : "Premium laundry service trusted by families across Dubai."}
          </p>
          <div className="mt-4">
            <button
              onClick={() => setIsArabic(!isArabic)}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:brightness-110 transition"
            >
              {isArabic ? "Switch to English" : "التبديل إلى العربية"}
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative p-6 rounded-3xl shadow-xl backdrop-blur-xl bg-white/60 border border-white/30 cursor-pointer"
            >
              <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 shadow-inner transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{isArabic ? feature.titleAr : feature.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
              <span className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                {feature.stat}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
              className="bg-white/70 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-blue-300 cursor-pointer"
            >
              <div className="flex justify-center items-center text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
