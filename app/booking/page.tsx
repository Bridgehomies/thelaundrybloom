"use client"
import React, { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, MapPin, Phone, Mail } from "lucide-react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/navigation"

// Define types
type CleaningType = "Press only" | "Wet/dry cleaning"
type Service = {
  image: string
  title: string
  titleAr: string
  description: string
  features: string[]
  price: string
  category: "His" | "Her" | "Linen"
}
type SelectedService = {
  title: string
  prices: { [key in CleaningType]?: number }
  quantity: number
  cleaningTypes: CleaningType[]
}



export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const router = useRouter()
  const steps = [
    { number: 1, title: "Service Selection", titleAr: "اختيار الخدمة" },
    { number: 2, title: "Schedule & Location", titleAr: "الموعد والموقع" },
    { number: 3, title: "Contact Details", titleAr: "بيانات الاتصال" },
    { number: 4, title: "Confirmation", titleAr: "التأكيد" },
  ]

  // All available services
  const allServices: Service[] = [
    {
      image: "mens-shirt.jpg",
      title: "Men's Shirt/Top",
      titleAr: "قميص رجالي",
      description: "Cleaning for men's shirts and tops",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 3 / 5",
      category: "His",
    },
    {
      image: "tshirt.jpg",
      title: "T-Shirt",
      titleAr: "تي شيرت",
      description: "Casual t-shirt laundry service",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 3 / 5",
      category: "His",
    },
    {
      image: "polo-shirt.jpg",
      title: "Polo Shirt",
      titleAr: "قميص بولو",
      description: "Special care for polo shirts",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 4 / 6",
      category: "His",
    },
    {
      image: "trousers.jpg",
      title: "Men's Pants/Trouser",
      titleAr: "بنطال رجالي",
      description: "Laundry for men's pants or trousers",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 4 / 6",
      category: "His",
    },
    {
      image: "suit2.jpg",
      title: "2 Piece Suit",
      titleAr: "بدلة قطعتين",
      description: "2 piece suit cleaning",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 21 / 27",
      category: "His",
    },
    {
      image: "suit3.jpg",
      title: "3 Piece Suit",
      titleAr: "بدلة ثلاث قطع",
      description: "3 piece suit dry and wet clean",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 26 / 31",
      category: "His",
    },
    {
      image: "kandura.jpg",
      title: "Kandura",
      titleAr: "كندورة",
      description: "Traditional kandura laundry",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 10 / 13",
      category: "His",
    },
    {
      image: "gathra.jpg",
      title: "Gathra",
      titleAr: "غترة",
      description: "Cleaning for gathra headscarf",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 4 / 6",
      category: "His",
    },
    {
      image: "jacket.jpg",
      title: "Jacket/Coat",
      titleAr: "سترة / معطف",
      description: "Laundry service for jackets and coats",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 15 / 21",
      category: "His",
    },
    {
      image: "jeans.jpg",
      title: "Jeans",
      titleAr: "جينز",
      description: "Cleaning for denim jeans",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 5 / 8",
      category: "His",
    },
    {
      image: "pajama.jpg",
      title: "Pyjama Full Set",
      titleAr: "بيجامة طقم كامل",
      description: "Full pajama set service",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 8 / 11",
      category: "His",
    },
    {
      image: "shalwar-kameez.jpg",
      title: "Shalwar Kameez",
      titleAr: "شلوار قميص",
      description: "Traditional men's outfit cleaning",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 10 / 13",
      category: "His",
    },
    {
      image: "sherwani.jpg",
      title: "Sherwani",
      titleAr: "شيرواني",
      description: "Luxury sherwani dry cleaning",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 18 / 21",
      category: "His",
    },
    {
      image: "under-garments.jpg",
      title: "Under Garments",
      titleAr: "ملابس داخلية",
      description: "Washing for under garments",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 2 / 3",
      category: "His",
    },
    {
      image: "womens-shirt.jpg",
      title: "Women's Short Top/Shirt",
      titleAr: "قميص نسائي قصير",
      description: "Laundry service for women’s tops",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 3 / 5",
      category: "Her",
    },
    {
      image: "long-top.jpg",
      title: "Long Top",
      titleAr: "توب طويل",
      description: "Cleaning for long tops",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 6 / 8",
      category: "Her",
    },
    {
      image: "womens-bottom.jpg",
      title: "Women's Bottom",
      titleAr: "بنطال نسائي",
      description: "Service for women's pants and trousers",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 6 / 8",
      category: "Her",
    },
    {
      image: "long-bottom.jpg",
      title: "Women's Long Bottom",
      titleAr: "بنطال نسائي طويل",
      description: "Laundry for long bottoms",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 8 / 10",
      category: "Her",
    },
    {
      image: "abaya.jpg",
      title: "Abaya Normal",
      titleAr: "عباية عادية",
      description: "Standard abaya cleaning",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 8 / 13",
      category: "Her",
    },
    {
      image: "abaya-designed.jpg",
      title: "Abaya Designed",
      titleAr: "عباية مصممة",
      description: "Designer abaya dry cleaning",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 12 / 20",
      category: "Her",
    },
    {
      image: "gown.jpg",
      title: "Gown Normal",
      titleAr: "فستان عادي",
      description: "Cleaning for basic gowns",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 10 / 15",
      category: "Her",
    },
    {
      image: "gown-designer.jpg",
      title: "Gown Designer",
      titleAr: "فستان مصمم",
      description: "Special care for designer gowns",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 17 / 40",
      category: "Her",
    },
    {
      image: "gown-x.jpg",
      title: "Gown (XDesign)",
      titleAr: "فستان (تصميم خاص)",
      description: "Exclusive design gown cleaning",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 20 / 80",
      category: "Her",
    },
    {
      image: "jumpsuit.jpg",
      title: "Jump Suit",
      titleAr: "جمبسوت",
      description: "Laundry for jumpsuits",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 15 / 20",
      category: "Her",
    },
    {
      image: "saree.jpg",
      title: "Saree Normal",
      titleAr: "ساري عادي",
      description: "Traditional saree cleaning",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 12 / 18",
      category: "Her",
    },
    {
      image: "saree-starch.jpg",
      title: "Saree Normal with Starch",
      titleAr: "ساري بالنشا",
      description: "Saree with starch application",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 20 / 30",
      category: "Her",
    },
    {
      image: "saree-designed.jpg",
      title: "Saree Designed",
      titleAr: "ساري مصمم",
      description: "Designer saree dry cleaning",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 24 / 36",
      category: "Her",
    },
    {
      image: "shalwar-kameez-3pcs.jpg",
      title: "Shalwar Kameez (3 Pcs)",
      titleAr: "شلوار قميص (٣ قطع)",
      description: "Full 3-piece set cleaning",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 15 / 18",
      category: "Her",
    },
    {
      image: "bed-cover.jpg",
      title: "Shoe Cleaning",
      titleAr: "تنظيف الأحذية",
      description: "Both pair of Shoe cleaning",
      features: ["Wet/dry cleaning"],
      price: "- / AED 30",
      category: "Linen",
    },
    {
      image: "apron.jpg",
      title: "Apron",
      titleAr: "مريلة",
      description: "Apron laundry service",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 4 / 6",
      category: "Linen",
    },
    {
      image: "apron-large.jpg",
      title: "Apron Large",
      titleAr: "مريلة كبيرة",
      description: "Cleaning for large aprons",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 6 / 8",
      category: "Linen",
    },
    {
      image: "bed-cover.jpg",
      title: "Bed Cover",
      titleAr: "غطاء سرير",
      description: "Full bed cover cleaning",
      features: ["Wet/dry cleaning"],
      price: "- / AED 25",
      category: "Linen",
    },
    {
      image: "bed-single.jpg",
      title: "Bed Sheet - Single",
      titleAr: "ملاءة فردية",
      description: "Laundry for single bed sheet",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 7 / 11",
      category: "Linen",
    },
    {
      image: "pillow-case.jpg",
      title: "Pillow Case",
      titleAr: "غطاء وسادة",
      description: "Cleaning for pillow cases",
      features: ["Press only", "Wet/dry cleaning"],
      price: "AED 3 / 3",
      category: "Linen",
    },
    {
      image: "towel-small.jpg",
      title: "Towel Small",
      titleAr: "منشفة صغيرة",
      description: "Small towel laundry",
      features: ["Wet/dry cleaning"],
      price: "- / AED 3",
      category: "Linen",
    },
    {
      image: "towel-large.jpg",
      title: "Towel Large",
      titleAr: "منشفة كبيرة",
      description: "Large towel laundry",
      features: ["Wet/dry cleaning"],
      price: "- / AED 10",
      category: "Linen",
    },
  ]

  // Selected Services
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([])

  // Terms Agreement
  const [termsAccepted, setTermsAccepted] = useState(false)

  // Calculate total cost
  const getTotal = () => {
    return selectedServices.reduce((sum, s) => {
      const itemTotal = s.cleaningTypes.reduce((t, type) => {
        const price = s.prices[type] || 0
        return t + price * s.quantity
      }, 0)
      return sum + itemTotal
    }, 0)
  }

  // Handle checkbox toggle for services
  const handleCheckboxChange = (title: string, prices: { [key in CleaningType]?: number }) => {
    setSelectedServices((prev) => {
      const exists = prev.find((s) => s.title === title)
      if (exists) {
        return prev.filter((s) => s.title !== title)
      } else {
        return [
          ...prev,
          { title, prices, quantity: 1, cleaningTypes: ["Press only"] },
        ]
      }
    })
  }

  // Handle quantity change
  const handleQuantityChange = (title: string, quantity: number) => {
    setSelectedServices((prev) =>
      prev.map((s) => (s.title === title ? { ...s, quantity } : s))
    )
  }

  // Handle cleaning type checkboxes
  const handleCleaningTypeCheckbox = (
    title: string,
    type: CleaningType
  ) => {
    setSelectedServices((prev) =>
      prev.map((s) => {
        if (s.title !== title) return s
        const exists = s.cleaningTypes.includes(type)
        return {
          ...s,
          cleaningTypes: exists
            ? s.cleaningTypes.filter((t) => t !== type)
            : [...s.cleaningTypes, type],
        }
      })
    )
  }

  // Step Validation
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return selectedServices.length > 0
      case 2:
        return formData.pickupDate && formData.pickupTime && formData.address
      case 3:
        return formData.phone && formData.paymentMethod && termsAccepted
      default:
        return true
    }
  }

 

const saveBookingAndRedirect = () => {
  const dataToSave = {
    formData,
    selectedServices,
    total: getTotal(),
  }

  localStorage.setItem("laundryBooking", JSON.stringify(dataToSave))

  // Redirect to your /chat route (or /whatsapp)
  window.location.href = "/chat"
}


  const nextStep = () => {
    if (isStepValid() && currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Get tomorrow's date in YYYY-MM-DD format
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const defaultDate = tomorrow.toISOString().split("T")[0]

  // Update the formData state
  const [formData, setFormData] = useState({
    pickupDate: defaultDate,
    pickupTime: "",
    address: "",
    phone: "",
    email: "",
    specialInstructions: "",
    paymentMethod: "",
  })


  return (
    <div className="min-h-screen bg-pearl-white">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-white/15 to-[#233c57]">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Book Your <span className="text-blue-900">Laundry Service</span>
            </h1>
            <p className="text-lg text-black/70">
              Schedule your pickup in just a few simple steps
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b">
        <div className="container px-4">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 overflow-x-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      currentStep >= step.number
                        ? "bg-royal-blue border-royal-blue text-white"
                        : "border-charcoal/20 text-charcoal/50"
                    }`}
                  >
                    {step.number}
                  </div>
                  <div className="ml-2 hidden sm:block">
                    <div
                      className={`text-sm font-medium ${
                        currentStep >= step.number
                          ? "text-royal-blue"
                          : "text-charcoal/50"
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 h-0.5 mx-4 ${
                        currentStep > step.number
                          ? "bg-royal-blue"
                          : "bg-charcoal/20"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-royal-blue">
                  {steps[currentStep - 1].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Service Selection */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Select Services</Label>
                      <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto">
                        {["His", "Her", "Linen"].map((category) => (
                          <div key={category} className="border-t pt-4">
                            <h3 className="font-semibold capitalize mb-2">{category}</h3>
                            {allServices
                              .filter((service) => service.category === category)
                              .map((service) => {
                                const priceStrings = service.price
                                  .split("/")
                                  .map(
                                    (p) =>
                                      parseFloat(p.replace("AED", "").trim()) || 0
                                  )
                                const prices = {
                                  "Press only": priceStrings[0],
                                  "Wet/dry cleaning": priceStrings[1],
                                }
                                const isSelected = selectedServices.some(
                                  (s) => s.title === service.title
                                )
                                const selected = selectedServices.find(
                                  (s) => s.title === service.title
                                )

                                return (
                                  <div
                                    key={service.title}
                                    className={`mb-3 p-3 border rounded-md ${
                                      isSelected
                                        ? "bg-blue-50 border-blue-200"
                                        : "border-gray-200"
                                    }`}
                                  >
                                    <label className="flex justify-between items-center cursor-pointer">
                                      <span>{service.title}</span>
                                      <Checkbox
                                        checked={isSelected}
                                        onCheckedChange={() =>
                                          handleCheckboxChange(
                                            service.title,
                                            prices
                                          )
                                        }
                                      />
                                    </label>

                                    {isSelected && (
                                      <div className="ml-4 mt-2 space-y-2">
                                        <div className="flex items-center gap-2">
                                          <Label className="text-sm">Qty:</Label>
                                          <Input
                                            type="number"
                                            min={1}
                                            value={selected?.quantity || 1}
                                            onChange={(e) =>
                                              handleQuantityChange(
                                                service.title,
                                                parseInt(e.target.value) || 1
                                              )
                                            }
                                            className="w-16 text-sm"
                                          />
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm">
                                          {service.features.includes("Press only") && (
                                            <label className="flex items-center justify-between gap-2 flex-1">
                                              <span className="flex items-center gap-1">
                                                <Checkbox
                                                  checked={selected?.cleaningTypes.includes("Press only")}
                                                  onCheckedChange={() =>
                                                    handleCleaningTypeCheckbox(service.title, "Press only")
                                                  }
                                                />
                                                Press only
                                              </span>
                                              <span className="text-sm text-gray-600">AED {prices["Press only"]}</span>
                                            </label>
                                          )}
                                          {service.features.includes(
                                            "Wet/dry cleaning"
                                          ) && (
                                            <label className="flex items-center justify-between gap-2 flex-1">
                                              <span className="flex items-center gap-1">
                                                <Checkbox
                                                  checked={selected?.cleaningTypes.includes("Wet/dry cleaning")}
                                                  onCheckedChange={() =>
                                                    handleCleaningTypeCheckbox(service.title, "Wet/dry cleaning")
                                                  }
                                                />
                                                Wet/Dry cleaning
                                              </span>
                                              <span className="text-sm text-gray-600">AED {prices["Wet/dry cleaning"]}</span>
                                            </label>
                                          )}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )
                              })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Schedule & Location */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pickup-date">Pickup Date</Label>
                        <div className="relative">
                          <Input
                            id="pickup-date"
                            type="date"
                            className="pl-10"
                            min={defaultDate} // 👈 Sets tomorrow as the minimum
                            value={formData.pickupDate}
                            onChange={(e) =>
                              setFormData({ ...formData, pickupDate: e.target.value })
                            }
                          />

                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charcoal/50" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Pickup Time</Label>
                        <Select
                          value={formData.pickupTime}
                          onValueChange={(value) =>
                            setFormData({ ...formData, pickupTime: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              
                              "3:01 PM - 4:00 PM",
                              "4:01 PM - 5:00 PM",
                              "5:01 PM - 6:00 PM",
                              "6:01 PM - 7:00 PM",
                              "7:01 PM - 8:00 PM",
                              "8:01 PM - 9:00 PM",
                              "9:01 PM - 10:00 PM",
                            ].map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Pickup Address</Label>
                      <div className="relative">
                        <Textarea
                          id="address"
                          placeholder="Enter your full address in Dubai (Building, Street, Area)"
                          className="pl-10 min-h-[100px]"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              address: e.target.value,
                            })
                          }
                        />
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-charcoal/50" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="instructions">
                        Special Instructions (Optional)
                      </Label>
                      <Textarea
                        id="instructions"
                        placeholder="Any special instructions for pickup or cleaning..."
                        value={formData.specialInstructions}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            specialInstructions: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Input
                          id="phone"
                          placeholder="+971 XX XXX XXXX"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charcoal/50" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charcoal/50" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Payment Method</Label>
                      <Select
                        value={formData.paymentMethod}
                        onValueChange={(value) =>
                          setFormData({ ...formData, paymentMethod: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cash">Cash on Delivery</SelectItem>
                          <SelectItem value="card">Credit/Debit Card on Door</SelectItem>
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={termsAccepted}
                        onCheckedChange={(checked) =>
                          setTermsAccepted(!!checked)
                        }
                      />
                      <Label htmlFor="terms" className="text-sm text-charcoal/70">
                        I agree to the terms of service and privacy policy
                      </Label>
                    </div>
                  </div>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-br from-turquoise/10 to-royal-blue/10 rounded-lg">
                      <h3 className="text-lg font-semibold text-charcoal mb-4">
                        Booking Summary
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-charcoal/70">Service:</span>
                          <span className="font-medium text-charcoal">
                            {selectedServices.length > 0
                              ? `${selectedServices.length} item(s)`
                              : "Not selected"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-charcoal/70">Pickup Date:</span>
                          <span className="font-medium text-charcoal">
                            {formData.pickupDate || "-"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-charcoal/70">Pickup Time:</span>
                          <span className="font-medium text-charcoal">
                            {formData.pickupTime || "-"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-charcoal/70">Phone:</span>
                          <span className="font-medium text-charcoal">
                            {formData.phone || "-"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-charcoal/70">Pickup Address:</span>
                          <span className="font-medium text-charcoal">
                            {formData.address || "-"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-charcoal/70">Total Payment:</span>
                          <span className="font-medium text-charcoal">
                            AED {getTotal()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-green-800">
                          Free pickup and delivery included
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white"
                  >
                    Previous
                  </Button>
                  {currentStep < 4 ? (
                    <Button
                      onClick={nextStep}
                      className="bg-royal-blue hover:bg-royal-blue/90"
                      disabled={!isStepValid()}
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
  className="bg-green-600 hover:bg-green-700 text-white"
  onClick={() => {
    localStorage.setItem("laundryBooking", JSON.stringify({
      formData,
      selectedServices,
      total: getTotal()
    }))
    window.location.href = "/chat"
  }}
>
  Confirm Booking
</Button>



                  )}
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      <Footer />
      <WhatsAppButton />

      {/* Toast Container */}
    <ToastContainer />
    </div>
  )
}