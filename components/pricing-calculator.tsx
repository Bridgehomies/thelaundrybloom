"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Calculator, Plus, Minus } from "lucide-react"

const serviceItems = {
  "wash-fold": [
    { name: "T-Shirts", price: 8 },
    { name: "Shirts", price: 12 },
    { name: "Pants", price: 15 },
    { name: "Dresses", price: 20 },
    { name: "Jeans", price: 18 },
    { name: "Underwear (per piece)", price: 3 },
  ],
  ironing: [
    { name: "Shirts", price: 8 },
    { name: "T-Shirts", price: 5 },
    { name: "Pants", price: 10 },
    { name: "Dresses", price: 15 },
    { name: "Suits", price: 25 },
  ],
  "dry-cleaning": [
    { name: "Suits", price: 45 },
    { name: "Dresses", price: 35 },
    { name: "Coats", price: 50 },
    { name: "Ties", price: 15 },
    { name: "Curtains (per panel)", price: 40 },
  ],
}

export function PricingCalculator() {
  const [selectedService, setSelectedService] = useState("")
  const [items, setItems] = useState<{ [key: string]: number }>({})
  const [total, setTotal] = useState(0)

  const updateQuantity = (itemName: string, price: number, change: number) => {
    const newQuantity = Math.max(0, (items[itemName] || 0) + change)
    const newItems = { ...items, [itemName]: newQuantity }
    if (newQuantity === 0) delete newItems[itemName]

    setItems(newItems)

    // Calculate new total
    const newTotal = Object.entries(newItems).reduce((sum, [name, qty]) => {
      const item = serviceItems[selectedService as keyof typeof serviceItems]?.find((i) => i.name === name)
      return sum + (item ? item.price * qty : 0)
    }, 0)
    setTotal(newTotal)
  }

  const resetCalculator = () => {
    setItems({})
    setTotal(0)
    setSelectedService("")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#FAFAFA] to-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#E0C097]/20 text-[#2C2C2C] text-sm font-medium mb-4">
            <Calculator className="h-4 w-4 mr-2 text-[#E0C097]" />
            Pricing Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Calculate Your Laundry Cost</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your laundry needs. Transparent pricing with no hidden fees.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-[#005DAA] to-[#00CFC1] text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Pricing Calculator</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Service Selection */}
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="service" className="text-base font-medium text-[#2C2C2C]">
                      Select Service Type
                    </Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wash-fold">Wash & Fold</SelectItem>
                        <SelectItem value="ironing">Ironing Service</SelectItem>
                        <SelectItem value="dry-cleaning">Dry Cleaning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Items Selection */}
                  {selectedService && (
                    <div className="space-y-4">
                      <Label className="text-base font-medium text-[#2C2C2C]">Select Items</Label>
                      <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                        {serviceItems[selectedService as keyof typeof serviceItems]?.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-1">
                              <span className="font-medium text-[#2C2C2C]">{item.name}</span>
                              <span className="text-[#005DAA] font-semibold ml-2">AED {item.price}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-8 w-8 flex-shrink-0"
                                onClick={() => updateQuantity(item.name, item.price, -1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">{items[item.name] || 0}</span>
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-8 w-8 flex-shrink-0"
                                onClick={() => updateQuantity(item.name, item.price, 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Summary */}
                <div className="lg:border-l lg:pl-8">
                  <div className="sticky top-4">
                    <h3 className="text-xl font-bold text-[#2C2C2C] mb-4">Order Summary</h3>

                    {Object.keys(items).length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Select items to see your estimate</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          {Object.entries(items).map(([itemName, quantity]) => {
                            const item = serviceItems[selectedService as keyof typeof serviceItems]?.find(
                              (i) => i.name === itemName,
                            )
                            return (
                              <div key={itemName} className="flex justify-between text-sm">
                                <span className="flex-1">
                                  {itemName} x{quantity}
                                </span>
                                <span className="font-medium">AED {item ? item.price * quantity : 0}</span>
                              </div>
                            )
                          })}
                        </div>

                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center text-lg font-bold text-[#2C2C2C]">
                            <span>Total Estimate:</span>
                            <span className="text-[#005DAA]">AED {total}</span>
                          </div>
                        </div>

                        <div className="space-y-3 pt-4">
                          <Button className="w-full bg-[#005DAA] hover:bg-[#004080] text-white">
                            Proceed to Booking
                          </Button>
                          <Button variant="outline" className="w-full" onClick={resetCalculator}>
                            Reset Calculator
                          </Button>
                        </div>

                        <div className="text-xs text-gray-500 pt-2">
                          * Prices may vary based on fabric type and condition
                          <br />* Free pickup and delivery within Dubai
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
