import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shirt, Sparkles, AnvilIcon as Iron, Sofa, ShoppingBag, Car } from "lucide-react"

const services = [
  {
    icon: Shirt,
    title: "Wash & Fold",
    titleAr: "غسيل وطي",
    description: "Professional washing, drying, and folding service for your everyday clothes.",
    features: ["Eco-friendly detergents", "Fabric softener included", "Same-day service available"],
    pricing: "From AED 15/kg",
    popular: true,
  },
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    titleAr: "التنظيف الجاف",
    description: "Specialized dry cleaning for delicate fabrics, suits, and formal wear.",
    features: ["Stain removal", "Professional pressing", "Garment protection"],
    pricing: "From AED 25/item",
  },
  {
    icon: Iron,
    title: "Ironing & Pressing",
    titleAr: "كي وضغط",
    description: "Professional ironing and pressing service for crisp, wrinkle-free clothes.",
    features: ["Steam pressing", "Crease setting", "Hanger service"],
    pricing: "From AED 8/item",
  },
  {
    icon: Sofa,
    title: "Curtain Cleaning",
    titleAr: "تنظيف الستائر",
    description: "Deep cleaning service for curtains, drapes, and window treatments.",
    features: ["Pickup & delivery", "Deep cleaning", "Fabric protection"],
    pricing: "From AED 50/panel",
  },
  {
    icon: ShoppingBag,
    title: "Shoe Cleaning",
    titleAr: "تنظيف الأحذية",
    description: "Professional shoe cleaning and restoration service.",
    features: ["Leather conditioning", "Suede cleaning", "Odor removal"],
    pricing: "From AED 30/pair",
  },
  {
    icon: Car,
    title: "Pickup & Delivery",
    titleAr: "الاستلام والتوصيل",
    description: "Free pickup and delivery service across Dubai.",
    features: ["Same-day pickup", "Scheduled delivery", "SMS notifications"],
    pricing: "Free service",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-pearl-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#aec0ce] to-[#233c57]">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Our <span className="text-blue-900">Premium</span> Services
            </h1>
            <p className="text-lg text-black/80 mb-8">
              Comprehensive laundry solutions designed for Dubai's lifestyle. From everyday wash & fold to specialized
              dry cleaning, we've got you covered.
            </p>
            <Button size="lg" className="bg-royal-blue hover:bg-royal-blue/90">
              Book Any Service Now
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden"
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-gold text-charcoal">Most Popular</Badge>
                )}
                <CardHeader>
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-turquoise/10 to-royal-blue/10 group-hover:from-turquoise/20 group-hover:to-royal-blue/20 transition-colors">
                    <service.icon className="h-8 w-8 text-royal-blue" />
                  </div>
                  <CardTitle className="text-xl text-charcoal">{service.title}</CardTitle>
                  <div className="text-sm text-turquoise font-medium">{service.titleAr}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-charcoal/70">{service.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-charcoal">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-charcoal/70 flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-turquoise mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-bold text-royal-blue">{service.pricing}</div>
                      <Button size="sm" className="bg-turquoise hover:bg-turquoise/90 text-white">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue to-turquoise text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Experience Premium Laundry Service?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers across Dubai. Book your first service today and discover the
            difference professional care makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-royal-blue hover:bg-white/90">
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-royal-blue"
            >
              Call Now: +971 XX XXX XXXX
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
