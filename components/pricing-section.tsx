"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calculator, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

// Data structure with all products
const allItems = [
  // HIS
  { name: "Men's Shirt/Top", category: "His", pressPrice: 3, wetDryPrice: 5 },
  { name: "T-Shirt", category: "His", pressPrice: 3, wetDryPrice: 5 },
  { name: "Polo Shirt", category: "His", pressPrice: 4, wetDryPrice: 6 },
  { name: "Jeans", category: "His", pressPrice: 5, wetDryPrice: 8 },
  { name: "2 Piece Suit", category: "His", pressPrice: 21, wetDryPrice: 27 },

  // HER
  { name: "Abaya Normal", category: "Her", pressPrice: 8, wetDryPrice: 13 },
  { name: "Saree Normal", category: "Her", pressPrice: 12, wetDryPrice: 18 },
  { name: "Gown Normal", category: "Her", pressPrice: 10, wetDryPrice: 15 },
  { name: "Shalwar Kameez (3 Pcs)", category: "Her", pressPrice: 15, wetDryPrice: 18 },

  // LINEN
  { name: "Shoe Cleaning", category: "Linen",  wetDryPrice: 30 },
  { name: "Curtain per meter", category: "Linen", wetDryPrice: 30 },
  { name: "Carpet per meter", category: "Linen", wetDryPrice: 30 },
  { name: "Bed Sheet - Single", category: "Linen", pressPrice: 7, wetDryPrice: 11 },
  { name: "Blanket Double", category: "Linen", pressPrice: 12, wetDryPrice: 31 },
  { name: "Comforter / Duvet Single", category: "Linen", pressPrice: 0, wetDryPrice: 27 },
  { name: "Pillow Case", category: "Linen", pressPrice: 3, wetDryPrice: 3 },
];

type LaundryItem = {
  name: string;
  method: "press" | "wetDry";
  quantity: number;
};

export function PricingCalculator() {
  const [selectedMethod, setSelectedMethod] = useState<"press" | "wetDry">("press");
  const [items, setItems] = useState<LaundryItem[]>([]);

  const updateQuantity = (itemName: string, method: "press" | "wetDry", change: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.name === itemName && i.method === method);
      if (!existing && change > 0) {
        return [...prev, { name: itemName, method, quantity: 1 }];
      }

      return prev
        .map((i) =>
          i.name === itemName && i.method === method
            ? { ...i, quantity: Math.max(0, i.quantity + change) }
            : i
        )
        .filter((i) => i.quantity > 0);
    });
  };

  const reset = () => {
    setItems([]);
    setSelectedMethod("press");
  };

  const getPrice = (itemName: string, method: "press" | "wetDry") => {
    const item = allItems.find((i) => i.name === itemName);
    return method === "press" ? item?.pressPrice || 0 : item?.wetDryPrice || 0;
  };

  const total = items.reduce(
    (sum, i) => sum + getPrice(i.name, i.method) * i.quantity,
    0
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <Calculator className="h-4 w-4 mr-2" />
            Instant Price Estimator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-900">
            Calculate Your Laundry Cost
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select multiple items from any category and method.
          </p>
        </div>

        {/* Calculator */}
        <Card className="max-w-6xl mx-auto shadow-xl border-none overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-teal-400 text-white">
            <CardTitle className="text-2xl text-center">
              Pricing Calculator
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 md:p-10 bg-white grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left: Item Selector */}
            <div>
              <div className="flex gap-3 mb-6">
                <Button
                  onClick={() => setSelectedMethod("press")}
                  className={selectedMethod === "press" ? "bg-blue-900 text-white hover:bg-blue-500" : "bg-white text-black border border-blue-500 hover:bg-white"}
                >
                  Press Only
                </Button>
                <Button
                  onClick={() => setSelectedMethod("wetDry")}
                  className={selectedMethod === "wetDry" ? "bg-blue-900 text-white hover:bg-blue-500" : "bg-white text-black border border-blue-500 hover:bg-white"}
                >
                  Wet/Dry Cleaning
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 max-h-[32rem] overflow-y-auto pr-2"
              >
                {allItems.map((item, index) => {
                  const price =
                    selectedMethod === "press" ? item.pressPrice : item.wetDryPrice;
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center border p-3 rounded-md hover:bg-gray-50"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.category}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600 font-semibold">AED {price}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.name, selectedMethod, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-6 text-center">
                          {
                            items.find(
                              (i) => i.name === item.name && i.method === selectedMethod
                            )?.quantity || 0
                          }
                        </span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.name, selectedMethod, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right: Summary */}
            <div className="sticky top-10">
              <h3 className="text-xl font-bold mb-4">Summary</h3>
              {items.length === 0 ? (
                <p className="text-gray-500 text-center py-20">No items selected.</p>
              ) : (
                <div className="space-y-3">
                  {items.map((i, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span>
                        {i.name} ({i.method === "press" ? "Press" : "Wet/Dry"}) x{i.quantity}
                      </span>
                      <span className="font-semibold">
                        AED {getPrice(i.name, i.method) * i.quantity}
                      </span>
                    </div>
                  ))}
                  <div className="border-t pt-4 mt-4 flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-blue-600">AED {total}</span>
                  </div>
                  <Button className="w-full bg-blue-600 text-white mt-6">Proceed to Booking</Button>
                  <Button variant="outline" className="w-full" onClick={reset}>
                    Reset Calculator
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">
                    * Prices may vary based on fabric type and condition.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
