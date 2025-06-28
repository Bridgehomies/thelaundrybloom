import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shirt, AnvilIcon as Iron, Sparkles, Home, ShoppingBag, Sofa } from "lucide-react"

const services = [
  {
    icon: Shirt,
    title: "Wash & Fold",
    description: "Professional washing and folding service for your everyday clothes",
    price: "From AED 15",
    features: ["Eco-friendly detergents", "Fabric softener included", "24-48 hour turnaround"],
  },
  {
    icon: Iron,
    title: "Ironing Service",
    description: "Crisp, professional ironing for shirts, dresses, and formal wear",
    price: "From AED 8",
    features: ["Steam pressing", "Starch available", "Hanger delivery"],
  },
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    description: "Specialized cleaning for delicate fabrics and formal wear",
    price: "From AED 25",
    features: ["Delicate fabric care", "Stain removal", "Professional pressing"],
  },
  {
    icon: Home,
    title: "Curtain Cleaning",
    description: "Deep cleaning service for curtains and drapes",
    price: "From AED 40",
    features: ["Pickup & delivery", "Deep sanitization", "Fabric protection"],
  },
  {
    icon: ShoppingBag,
    title: "Shoe Care",
    description: "Professional cleaning and restoration for all types of footwear",
    price: "From AED 20",
    features: ["Leather conditioning", "Suede cleaning", "Odor removal"],
  },
  {
    icon: Sofa,
    title: "Sofa Cleaning",
    description: "Deep cleaning service for sofas, chairs, and upholstery",
    price: "From AED 80",
    features: ["Steam cleaning", "Stain protection", "Fabric sanitization"],
  },
]

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Our Premium Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From everyday laundry to specialized cleaning, we offer comprehensive services to keep your belongings fresh
            and pristine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 flex flex-col"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#005DAA] to-[#00CFC1] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#2C2C2C]">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center flex-1 flex flex-col">
                <div className="text-2xl font-bold text-[#005DAA] mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6 text-sm text-gray-600 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[#00CFC1] rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-[#005DAA] text-[#005DAA] hover:bg-[#005DAA] hover:text-white mt-auto"
                >
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#005DAA] hover:bg-[#004080] text-white px-8 py-3">View All Services</Button>
        </div>
      </div>
    </section>
  )
}
