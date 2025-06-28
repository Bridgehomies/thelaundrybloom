"use client"

import Image from "next/image";
import { useState } from "react"
import { Crown, Zap } from "lucide-react"
import { LaundryIllustration } from "@/components/illustrations/LaundryIllustration"

type Service = {
  image: string;
  title: string;
  titleAr: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
  category: "His" | "Her" | "Linen";
};

// Use this array and add `category: "His" | "Her" | "Linen"` to each item manually in your list.
const allServices: Service[] = [
  {
    image: "/services/mens-shirt.png", title: "Men's Shirt/Top", titleAr: "قميص رجالي", description: "Cleaning for men's shirts and tops", features: ["Press only", "Wet/dry cleaning"], price: "AED 3 / 5",
    category: "His"
  },
  {
    image: "/services/shirt.png", title: "T-Shirt", titleAr: "تي شيرت", description: "Casual t-shirt laundry service", features: ["Press only", "Wet/dry cleaning"], price: "AED 3 / 5",
    category: "His"
  },
  {
    image: "/services/polo-shirt.png", title: "Polo Shirt", titleAr: "قميص بولو", description: "Special care for polo shirts", features: ["Press only", "Wet/dry cleaning"], price: "AED 4 / 6",
    category: "His"
  },
  {
    image: "/services/trousers.png", title: "Men's Pants/Trouser", titleAr: "بنطال رجالي", description: "Laundry for men's pants or trousers", features: ["Press only", "Wet/dry cleaning"], price: "AED 4 / 6",
    category: "His"
  },
  {
    image: "/services/suit.png", title: "2 Piece Suit", titleAr: "بدلة قطعتين", description: "2 piece suit cleaning", features: ["Press only", "Wet/dry cleaning"], price: "AED 21 / 27",
    category: "His"
  },
  {
    image: "/services/suit3.png", title: "3 Piece Suit", titleAr: "بدلة ثلاث قطع", description: "3 piece suit dry and wet clean", features: ["Press only", "Wet/dry cleaning"], price: "AED 26 / 31",
    category: "His"
  },
  {
    image: "/services/kandura.png", title: "Kandura", titleAr: "كندورة", description: "Traditional kandura laundry", features: ["Press only", "Wet/dry cleaning"], price: "AED 10 / 13",
    category: "His"
  },
  {
    image: "/services/gathra.png", title: "Gathra", titleAr: "غترة", description: "Cleaning for gathra headscarf", features: ["Press only", "Wet/dry cleaning"], price: "AED 4 / 6",
    category: "His"
  },
  {
    image: "/services/jacket.png", title: "Jacket/Coat", titleAr: "سترة / معطف", description: "Laundry service for jackets and coats", features: ["Press only", "Wet/dry cleaning"], price: "AED 15 / 21",
    category: "His"
  },
  {
    image: "/services/jeans.png", title: "Jeans", titleAr: "جينز", description: "Cleaning for denim jeans", features: ["Press only", "Wet/dry cleaning"], price: "AED 5 / 8",
    category: "His"
  },
  {
    image: "/services/pajama.png", title: "Pyjama Full Set", titleAr: "بيجامة طقم كامل", description: "Full pajama set service", features: ["Press only", "Wet/dry cleaning"], price: "AED 8 / 11",
    category: "His"
  },
  {
    image: "/services/shalwar kameez.png", title: "Shalwar Kameez", titleAr: "شلوار قميص", description: "Traditional men's outfit cleaning", features: ["Press only", "Wet/dry cleaning"], price: "AED 10 / 13",
    category: "His"
  },
  {
    image: "/services/sherwani.png", title: "Sherwani", titleAr: "شيرواني", description: "Luxury sherwani dry cleaning", features: ["Press only", "Wet/dry cleaning"], price: "AED 18 / 21",
    category: "His"
  },
  {
    image: "/services/mens-undergarment.png", title: "Under Garments", titleAr: "ملابس داخلية", description: "Washing for under garments", features: ["Press only", "Wet/dry cleaning"], price: "AED 2 / 3",
    category: "His"
  },

  // HER (Women's Clothing)
  {
    image: "/services/women shirt.png", title: "Women's Short Top/Shirt", titleAr: "قميص نسائي قصير", description: "Laundry service for women’s tops", features: ["Press only", "Wet/dry cleaning"], price: "AED 3 / 5",
    category: "Her"
  },
  {
    image: "/services/long top.png", title: "Long Top", titleAr: "توب طويل", description: "Cleaning for long tops", features: ["Press only", "Wet/dry cleaning"], price: "AED 6 / 8",
    category: "Her"
  },
  {
    image: "/services/womens-bottom.png", title: "Women's Bottom", titleAr: "بنطال نسائي", description: "Service for women's pants and trousers", features: ["Press only", "Wet/dry cleaning"], price: "AED 6 / 8",
    category: "Her"
  },
  {
    image: "/services/women long bottom.png", title: "Women's Long Bottom", titleAr: "بنطال نسائي طويل", description: "Laundry for long bottoms", features: ["Press only", "Wet/dry cleaning"], price: "AED 8 / 10",
    category: "Her"
  },
  {
    image: "/services/abaya1.png", title: "Abaya Normal", titleAr: "عباية عادية", description: "Standard abaya cleaning", features: ["Press only", "Wet/dry cleaning"], price: "AED 8 / 13",
    category: "Her"
  },
  {
    image: "/services/abaya-designed.png", title: "Abaya Designed", titleAr: "عباية مصممة", description: "Designer abaya dry cleaning", features: ["Press only", "Wet/dry cleaning"], price: "AED 12 / 20",
    category: "Her"
  },
  {
    image: "/services/gown.png", title: "Gown Normal", titleAr: "فستان عادي", description: "Cleaning for basic gowns", features: ["Press only", "Wet/dry cleaning"], price: "AED 10 / 15",
    category: "Her"
  },
  {
    image: "/services/Gown Designer.png", title: "Gown Designer", titleAr: "فستان مصمم", description: "Special care for designer gowns", features: ["Press only", "Wet/dry cleaning"], price: "AED 17 / 40",
    category: "Her"
  },
  {
    image: "/services/gown-x.png", title: "Gown (XDesign)", titleAr: "فستان (تصميم خاص)", description: "Exclusive design gown cleaning", features: ["Press only", "Wet/dry cleaning"], price: "AED 20 / 80",
    category: "Her"
  },
  {
    image: "/services/jumpsuit.png", title: "Jump Suit", titleAr: "جمبسوت", description: "Laundry for jumpsuits", features: ["Press only", "Wet/dry cleaning"], price: "AED 15 / 20",
    category: "Her"
  },
  {
    image: "/services/saree.png", title: "Saree Normal", titleAr: "ساري عادي", description: "Traditional saree cleaning", features: ["Press only", "Wet/dry cleaning"], price: "AED 12 / 18",
    category: "Her"
  },
  {
    image: "/services/saree-starch.png", title: "Saree Normal with Starch", titleAr: "ساري بالنشا", description: "Saree with starch application", features: ["Press only", "Wet/dry cleaning"], price: "AED 20 / 30",
    category: "Her"
  },
  {
    image: "/services/saree-d.png", title: "Saree Designed", titleAr: "ساري مصمم", description: "Designer saree dry cleaning", features: ["Press only", "Wet/dry cleaning"], price: "AED 24 / 36",
    category: "Her"
  },
  {
    image: "/services/shalwar-kameez-3pcs.png", title: "Shalwar Kameez (3 Pcs)", titleAr: "شلوار قميص (٣ قطع)", description: "Full 3-piece set cleaning", features: ["Press only", "Wet/dry cleaning"], price: "AED 15 / 18",
    category: "Her"
  },

  // Linen / General
  {
    image: "/services/shoe-cleaning.png", title: "Shoe Cleaning", titleAr: "غطاء سرير", description: "Both pair of Shoe cleaning", features: ["Wet/dry cleaning"], price: "- / AED 30",
    category: "Linen"
  },
  {
    image: "/services/carpet-cleaning.png", title: "Carpet Cleaning", titleAr: "غطاء سرير", description: "Per meter cleaning of Carpet", features: ["Wet/dry cleaning"], price: "- / AED 30",
    category: "Linen"
  },
  {
    image: "/services/curtain-cleaning.png", title: "Curtain Cleaning", titleAr: "غطاء سرير", description: "Per meter cleaning of Curtain", features: ["Wet/dry cleaning"], price: "- / AED 30",
    category: "Linen"
  },
  {
    image: "/services/apron.png", title: "Apron", titleAr: "مريلة", description: "Apron laundry service", features: ["Press only", "Wet/dry cleaning"], price: "AED 4 / 6",
    category: "Linen"
  },
  {
    image: "/services/apron-long.png", title: "Apron Large", titleAr: "مريلة كبيرة", description: "Cleaning for large aprons", features: ["Press only", "Wet/dry cleaning"], price: "AED 6 / 8",
    category: "Linen"
  },
  {
    image: "/services/bed cover.png", title: "Bed Cover", titleAr: "غطاء سرير", description: "Full bed cover cleaning", features: ["Wet/dry cleaning"], price: "- / AED 25",
    category: "Linen"
  },
  {
    image: "/services/Bed-Sheet-Single.png", title: "Bed Sheet - Single", titleAr: "ملاءة فردية", description: "Laundry for single bed sheet", features: ["Press only", "Wet/dry cleaning"], price: "AED 7 / 11",
    category: "Linen"
  },
  {
    image: "/services/bed-double.png", title: "Bed Sheet - Double", titleAr: "ملاءة مزدوجة", description: "Laundry for double bed sheet", features: ["Press only", "Wet/dry cleaning"], price: "AED 8 / 12",
    category: "Linen"
  },
  {
    image: "/services/bed-king.png", title: "Bed Sheet - King", titleAr: "ملاءة كينج", description: "Laundry for king-size sheet", features: ["Press only", "Wet/dry cleaning"], price: "AED 10 / 13",
    category: "Linen"
  },
  {
    image: "/services/blanket.png", title: "Blanket Small", titleAr: "بطانية صغيرة", description: "Cleaning for small blankets", features: ["Press only", "Wet/dry cleaning"], price: "AED 8 / 11",
    category: "Linen"
  },
  {
    image: "/services/blanket-single.png", title: "Blanket Single", titleAr: "بطانية فردية", description: "Single size blanket cleaning", features: ["Press only", "Wet/dry cleaning"], price: "AED 9 / 17",
    category: "Linen"
  },
  {
    image: "/services/blanket-double.png", title: "Blanket Double", titleAr: "بطانية مزدوجة", description: "Double blanket cleaning", features: ["Press only", "Wet/dry cleaning"], price: "AED 12 / 31",
    category: "Linen"
  },
  {
    image: "/services/comforter.png", title: "Comforter / Duvet Single", titleAr: "لحاف فردي", description: "Single comforter or duvet", features: ["Wet/dry cleaning"], price: "- / AED 27",
    category: "Linen"
  },
  {
    image: "/services/comforter-double.png", title: "Comforter/Duvet Double", titleAr: "لحاف مزدوج", description: "Double size comforter", features: ["Wet/dry cleaning"], price: "- / AED 37",
    category: "Linen"
  },
  {
    image: "/services/comforter-king.png", title: "Comforter/Duvet King", titleAr: "لحاف كينج", description: "King size comforter", features: ["Wet/dry cleaning"], price: "- / AED 42",
    category: "Linen"
  },
  {
    image: "/services/duvet-case-single.png", title: "Duvet Cover Single", titleAr: "غطاء لحاف فردي", description: "Single duvet cover service", features: ["Press only", "Wet/dry cleaning"], price: "AED 10 / 13",
    category: "Linen"
  },
  {
    image: "/services/duvet-case-double.png", title: "Duvet Cover - Double", titleAr: "غطاء لحاف مزدوج", description: "Double duvet cover", features: ["Press only", "Wet/dry cleaning"], price: "AED 16 / 21",
    category: "Linen"
  },
  {
    image: "/services/duvet-case-king.png", title: "Duvet Cover Premium", titleAr: "غطاء لحاف فاخر", description: "Luxury duvet cover cleaning", features: ["Wet/dry cleaning"], price: "- / AED 25",
    category: "Linen"
  },
  {
    image: "/services/pillow case.png", title: "Pillow Case", titleAr: "غطاء وسادة", description: "Cleaning for pillow cases", features: ["Press only", "Wet/dry cleaning"], price: "AED 3 / 3",
    category: "Linen"
  },
  {
    image: "/services/towel.png", title: "Towel Small", titleAr: "منشفة صغيرة", description: "Small towel laundry", features: ["Wet/dry cleaning"], price: "- / AED 3",
    category: "Linen"
  },
  {
    image: "/services/towel-large.png", title: "Towel Large", titleAr: "منشفة كبيرة", description: "Large towel laundry", features: ["Wet/dry cleaning"], price: "- / AED 10",
    category: "Linen"
  },
  {
    image: "/services/sleepingbag.png", title: "Sleeping Bag Medium", titleAr: "كيس نوم متوسط", description: "Medium-size sleeping bag wash", features: ["Wet/dry cleaning"], price: "- / AED 30",
    category: "Linen"
  },
];

export function ServicesSection() {
  const [selectedTab, setSelectedTab] = useState<"His" | "Her" | "Linen">("His")

  const filteredServices = allServices.filter(service => service.category === selectedTab)

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-900">Our Services</h2>
          <p className="text-gray-600 mt-2">Choose a category to explore our premium offerings</p>

          {/* Tabs */}
          <div className="mt-6 flex justify-center gap-4">
            {["His", "Her", "Linen"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab as "His" | "Her" | "Linen")}
                className={`px-5 py-2 rounded-full font-semibold border ${
                  selectedTab === tab ? "bg-blue-900 text-white" : "bg-white text-black border-blue-900"
                } transition-all duration-300`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-40 bg-gray-100 flex justify-center items-center">
                <img
                  src={`/images/${service.image}`}
                  alt={service.title}
                  className="h-[158px] w-[500px] object-contain"
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2 bg-white text-yellow-500 font-bold text-xs px-3 py-1 rounded-full shadow">
                  {service.price}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-sm text-gray-400 mb-1">{service.titleAr}</p>
                <p className="text-sm text-gray-600">{service.description}</p>

                <ul className="mt-3 space-y-1 text-sm text-gray-500">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Zap className="h-3 w-3 text-turquoise mr-2" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
