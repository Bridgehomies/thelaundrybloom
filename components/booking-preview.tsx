"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import Link from "next/link";

// Mocked service list (replace with your real data)
// Define Service Type
type Service = {
  image: string;
  title: string;
  titleAr: string;
  description: string;
  features: string[];
  price: string;
  category: "His" | "Her" | "Linen";
};

// Full list of services copied inline
const allServices: Service[] = [
  {
    image: "mens-shirt.jpg", 
    title: "Men's Shirt/Top", 
    titleAr: "قميص رجالي", 
    description: "Cleaning for men's shirts and tops", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 3 / 5",
    category: "His"
  },
  {
    image: "tshirt.jpg", 
    title: "T-Shirt", 
    titleAr: "تي شيرت", 
    description: "Casual t-shirt laundry service", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 3 / 5",
    category: "His"
  },
  {
    image: "polo-shirt.jpg", 
    title: "Polo Shirt", 
    titleAr: "قميص بولو", 
    description: "Special care for polo shirts", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 4 / 6",
    category: "His"
  },
  {
    image: "trousers.jpg", 
    title: "Men's Pants/Trouser", 
    titleAr: "بنطال رجالي", 
    description: "Laundry for men's pants or trousers", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 4 / 6",
    category: "His"
  },
  {
    image: "suit2.jpg", 
    title: "2 Piece Suit", 
    titleAr: "بدلة قطعتين", 
    description: "2 piece suit cleaning", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 21 / 27",
    category: "His"
  },
  {
    image: "suit3.jpg", 
    title: "3 Piece Suit", 
    titleAr: "بدلة ثلاث قطع", 
    description: "3 piece suit dry and wet clean", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 26 / 31",
    category: "His"
  },
  {
    image: "kandura.jpg", 
    title: "Kandura", 
    titleAr: "كندورة", 
    description: "Traditional kandura laundry", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 10 / 13",
    category: "His"
  },
  {
    image: "gathra.jpg", 
    title: "Gathra", 
    titleAr: "غترة", 
    description: "Cleaning for gathra headscarf", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 4 / 6",
    category: "His"
  },
  {
    image: "jacket.jpg", 
    title: "Jacket/Coat", 
    titleAr: "سترة / معطف", 
    description: "Laundry service for jackets and coats", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 15 / 21",
    category: "His"
  },
  {
    image: "jeans.jpg", 
    title: "Jeans", 
    titleAr: "جينز", 
    description: "Cleaning for denim jeans", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 5 / 8",
    category: "His"
  },
  {
    image: "pajama.jpg", 
    title: "Pyjama Full Set", 
    titleAr: "بيجامة طقم كامل", 
    description: "Full pajama set service", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 8 / 11",
    category: "His"
  },
  {
    image: "shalwar-kameez.jpg", 
    title: "Shalwar Kameez", 
    titleAr: "شلوار قميص", 
    description: "Traditional men's outfit cleaning", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 10 / 13",
    category: "His"
  },
  {
    image: "sherwani.jpg", 
    title: "Sherwani", 
    titleAr: "شيرواني", 
    description: "Luxury sherwani dry cleaning", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 18 / 21",
    category: "His"
  },
  {
    image: "under-garments.jpg", 
    title: "Under Garments", 
    titleAr: "ملابس داخلية", 
    description: "Washing for under garments", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 2 / 3",
    category: "His"
  },
  // HER (Women's Clothing)
  {
    image: "womens-shirt.jpg", 
    title: "Women's Short Top/Shirt", 
    titleAr: "قميص نسائي قصير", 
    description: "Laundry service for women’s tops", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 3 / 5",
    category: "Her"
  },
  {
    image: "long-top.jpg", 
    title: "Long Top", 
    titleAr: "توب طويل", 
    description: "Cleaning for long tops", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 6 / 8",
    category: "Her"
  },
  {
    image: "womens-bottom.jpg", 
    title: "Women's Bottom", 
    titleAr: "بنطال نسائي", 
    description: "Service for women's pants and trousers", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 6 / 8",
    category: "Her"
  },
  {
    image: "long-bottom.jpg", 
    title: "Women's Long Bottom", 
    titleAr: "بنطال نسائي طويل", 
    description: "Laundry for long bottoms", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 8 / 10",
    category: "Her"
  },
  {
    image: "abaya.jpg", 
    title: "Abaya Normal", 
    titleAr: "عباية عادية", 
    description: "Standard abaya cleaning", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 8 / 13",
    category: "Her"
  },
  {
    image: "abaya-designed.jpg", 
    title: "Abaya Designed", 
    titleAr: "عباية مصممة", 
    description: "Designer abaya dry cleaning", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 12 / 20",
    category: "Her"
  },
  {
    image: "gown.jpg", 
    title: "Gown Normal", 
    titleAr: "فستان عادي", 
    description: "Cleaning for basic gowns", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 10 / 15",
    category: "Her"
  },
  {
    image: "gown-designer.jpg", 
    title: "Gown Designer", 
    titleAr: "فستان مصمم", 
    description: "Special care for designer gowns", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 17 / 40",
    category: "Her"
  },
  {
    image: "gown-x.jpg", 
    title: "Gown (XDesign)", 
    titleAr: "فستان (تصميم خاص)", 
    description: "Exclusive design gown cleaning", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 20 / 80",
    category: "Her"
  },
  {
    image: "jumpsuit.jpg", 
    title: "Jump Suit", 
    titleAr: "جمبسوت", 
    description: "Laundry for jumpsuits", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 15 / 20",
    category: "Her"
  },
  {
    image: "saree.jpg", 
    title: "Saree Normal", 
    titleAr: "ساري عادي", 
    description: "Traditional saree cleaning", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 12 / 18",
    category: "Her"
  },
  {
    image: "saree-starch.jpg", 
    title: "Saree Normal with Starch", 
    titleAr: "ساري بالنشا", 
    description: "Saree with starch application", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 20 / 30",
    category: "Her"
  },
  {
    image: "saree-designed.jpg", 
    title: "Saree Designed", 
    titleAr: "ساري مصمم", 
    description: "Designer saree dry cleaning", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 24 / 36",
    category: "Her"
  },
  {
    image: "shalwar-kameez-3pcs.jpg", 
    title: "Shalwar Kameez (3 Pcs)", 
    titleAr: "شلوار قميص (٣ قطع)", 
    description: "Full 3-piece set cleaning", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 15 / 18",
    category: "Her"
  },
  // Linen / General
  {
    image: "bed-cover.jpg", 
    title: "Shoe Cleaning", 
    titleAr: "غطاء سرير", 
    description: "Both pair of Shoe cleaning", 
    features: ["Wet/dry cleaning"], 
    price: "- / AED 30",
    category: "Linen"
  },
  {
    image: "bed-cover.jpg", 
    title: "Carpet Cleaning", 
    titleAr: "غطاء سرير", 
    description: "Per meter cleaning of Carpet", 
    features: ["Wet/dry cleaning"], 
    price: "- / AED 30",
    category: "Linen"
  },
  {
    image: "bed-cover.jpg", 
    title: "Curtain Cleaning", 
    titleAr: "غطاء سرير", 
    description: "Per meter cleaning of Curtain", 
    features: ["Wet/dry cleaning"], 
    price: "- / AED 30",
    category: "Linen"
  },
  {
    image: "apron.jpg", 
    title: "Apron", 
    titleAr: "مريلة", 
    description: "Apron laundry service", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 4 / 6",
    category: "Linen"
  },
  {
    image: "apron-large.jpg", 
    title: "Apron Large", 
    titleAr: "مريلة كبيرة", 
    description: "Cleaning for large aprons", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 6 / 8",
    category: "Linen"
  },
  {
    image: "bed-cover.jpg", 
    title: "Bed Cover", 
    titleAr: "غطاء سرير", 
    description: "Full bed cover cleaning", 
    features: ["Wet/dry cleaning"], 
    price: "- / AED 25",
    category: "Linen"
  },
  {
    image: "bed-single.jpg", 
    title: "Bed Sheet - Single", 
    titleAr: "ملاءة فردية", 
    description: "Laundry for single bed sheet", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 7 / 11",
    category: "Linen"
  },
  {
    image: "bed-double.jpg", 
    title: "Bed Sheet - Double", 
    titleAr: "ملاءة مزدوجة", 
    description: "Laundry for double bed sheet", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 8 / 12",
    category: "Linen"
  },
  {
    image: "bed-king.jpg", 
    title: "Bed Sheet - King", 
    titleAr: "ملاءة كينج", 
    description: "Laundry for king-size sheet", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 10 / 13",
    category: "Linen"
  },
  {
    image: "blanket-small.jpg", 
    title: "Blanket Small", 
    titleAr: "بطانية صغيرة", 
    description: "Cleaning for small blankets", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 8 / 11",
    category: "Linen"
  },
  {
    image: "blanket-single.jpg", 
    title: "Blanket Single", 
    titleAr: "بطانية فردية", 
    description: "Single size blanket cleaning", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 9 / 17",
    category: "Linen"
  },
  {
    image: "blanket-double.jpg", 
    title: "Blanket Double", 
    titleAr: "بطانية مزدوجة", 
    description: "Double blanket cleaning", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 12 / 31",
    category: "Linen"
  },
  {
    image: "comforter-single.jpg", 
    title: "Comforter / Duvet Single", 
    titleAr: "لحاف فردي", 
    description: "Single comforter or duvet", 
    features: ["Wet/dry cleaning"], 
    price: "- / AED 27",
    category: "Linen"
  },
  {
    image: "comforter-double.jpg", 
    title: "Comforter/Duvet Double", 
    titleAr: "لحاف مزدوج", 
    description: "Double size comforter", 
    features: ["Wet/dry cleaning"], 
    price: "- / AED 37",
    category: "Linen"
  },
  {
    image: "comforter-king.jpg", 
    title: "Comforter/Duvet King", 
    titleAr: "لحاف كينج", 
    description: "King size comforter", 
    features: ["Wet/dry cleaning"], 
    price: "- / AED 42",
    category: "Linen"
  },
  {
    image: "duvet-cover-single.jpg", 
    title: "Duvet Cover Single", 
    titleAr: "غطاء لحاف فردي", 
    description: "Single duvet cover service", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 10 / 13",
    category: "Linen"
  },
  {
    image: "duvet-cover-double.jpg", 
    title: "Duvet Cover - Double", 
    titleAr: "غطاء لحاف مزدوج", 
    description: "Double duvet cover", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 16 / 21",
    category: "Linen"
  },
  {
    image: "duvet-cover-premium.jpg", 
    title: "Duvet Cover Premium", 
    titleAr: "غطاء لحاف فاخر", 
    description: "Luxury duvet cover cleaning", 
    features: ["Wet/dry cleaning"], 
    price: "- / AED 25",
    category: "Linen"
  },
  {
    image: "pillow-case.jpg", 
    title: "Pillow Case", 
    titleAr: "غطاء وسادة", 
    description: "Cleaning for pillow cases", 
    features: ["Press only", "Wet/dry cleaning"], 
    price: "AED 3 / 3",
    category: "Linen"
  },
  {
    image: "towel-small.jpg", 
    title: "Towel Small", 
    titleAr: "منشفة صغيرة", 
    description: "Small towel laundry", 
    features: ["Wet/dry cleaning"], 
    price: "- / AED 3",
    category: "Linen"
  },
  {
    image: "towel-large.jpg", 
    title: "Towel Large", 
    titleAr: "منشفة كبيرة", 
    description: "Large towel laundry", 
    features: ["Wet/dry cleaning"], 
    price: "- / AED 10",
    category: "Linen"
  },
  {
    image: "sleeping-bag.jpg", 
    title: "Sleeping Bag Medium", 
    titleAr: "كيس نوم متوسط", 
    description: "Medium-size sleeping bag wash", 
    features: ["Wet/dry cleaning"], 
    price: "- / AED 30",
    category: "Linen"
  },
];

type CleaningType = "Press only" | "Wet/dry cleaning"

type SelectedService = {
  title: string
  prices: { [key in CleaningType]?: number }
  quantity: number
  cleaningTypes: CleaningType[]
}

export function BookingPreview() {
  
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([])
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    address: "",
    phone: "",
    notes: "",
  });
  const [showSuccess, setShowSuccess] = useState(false)

  const handleCheckboxChange = (title: string, prices: { [key in CleaningType]?: number }) => {
    setSelectedServices(prev => {
      const exists = prev.find(s => s.title === title)
      if (exists) {
        return prev.filter(s => s.title !== title)
      } else {
        return [...prev, { title, prices, quantity: 1, cleaningTypes: ["Press only"] }]
      }
    })
  }

  const handleQuantityChange = (title: string, quantity: number) => {
    setSelectedServices(prev =>
      prev.map(s => s.title === title ? { ...s, quantity } : s)
    )
  }

  const handleCleaningTypeCheckbox = (title: string, type: CleaningType) => {
    setSelectedServices(prev =>
      prev.map(s => {
        if (s.title !== title) return s
        const exists = s.cleaningTypes.includes(type)
        return {
          ...s,
          cleaningTypes: exists
            ? s.cleaningTypes.filter(t => t !== type)
            : [...s.cleaningTypes, type]
        }
      })
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const getTotal = () => selectedServices.reduce((sum, s) => {
    const itemTotal = s.cleaningTypes.reduce((t, type) => {
      const price = s.prices[type] || 0
      return t + price * s.quantity
    }, 0)
    return sum + itemTotal
  }, 0)

  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container max-w-6xl mx-auto px-4">
        {showSuccess && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}>
            <div className="bg-white p-8 rounded-xl shadow-xl text-center">
              <h3 className="text-xl font-bold mb-2">Booking Confirmed</h3>
              <p className="text-gray-600 mb-4">Your request has been sent successfully!</p>
              <Button onClick={() => setShowSuccess(false)}>Close</Button>
            </div>
          </motion.div>
        )}

        {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 ">Book Your Service</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule your pickup in just a few clicks. We'll handle the rest with care and professionalism.
            </p>
          </div>

        {/* How It Works + Service Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-8">
            <Card className="border-l-4 border-l-teal-400 shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How It Works</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Schedule Pickup", description: "Choose your preferred date and time" },
                    { step: "2", title: "We Collect", description: "Our team picks up from your location" },
                    { step: "3", title: "Professional Clean", description: "Expert cleaning with premium care" },
                    { step: "4", title: "Fresh Delivery", description: "Clean clothes delivered to your door" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full bg-${item.step === '1' ? 'blue-600' : item.step === '2' ? 'teal-400' : item.step === '3' ? 'blue-600' : 'teal-400'} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-0 rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {["Dubai Academic City", "Dubai outsource Zone", "Dubailand Residence Complex", "The Villas", "Liwan", "Dubai Silicon Oasis", "Warsan", "Sheikh Zayed Road"].map(area => (
                    <div key={area} className="flex items-center">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-2" />
                      {area}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">And many more areas across Dubai</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <form  className="grid lg:grid-cols-2 gap-10">
          {/* New Aesthetic Booking Section */}
        <Card className="col-span-full rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 bg-gradient-to-tr from-blue-600 via-indigo-500 to-teal-400 text-white transition-transform duration-300 hover:scale-[1.01]">
                {/* Text Section */}
                <div className="text-center md:text-left max-w-xl z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
                    Ready to Book Your Laundry?
                  </h2>
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    Experience premium care with just a few clicks. Schedule your pickup today and let us do the rest.
                  </p>
                  <Link href="/booking">
                    <Button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-50 transition-all duration-300">
                      Book Now
                    </Button>
                  </Link>
                </div>

                {/* Decorative Illustration / Shape */}
                <div className="hidden md:block absolute right-10 bottom-0 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </Card>
        </form>
      </div>
    </section>
  )
}
