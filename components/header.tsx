"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe, X } from "lucide-react"


export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState("en")

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <header
      className={`sticky top-0 z-50 w-full  transition-colors duration-500 ${
        scrolled
          ? "bg-pearl-white/95 backdrop-blur supports-[backdrop-filter]:bg-pearl-white/60 "
          : "bg-white/15"
      }`}
    >

      <div className="container flex h-16 sm:h-20 items-center justify-between px-8 ">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.jpg" // Path to the image in the public folder
            alt="The Laundry Bloom Logo" // Alt text for accessibility
            className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-cover shadow-lg"
          />
          <span className="text-lg sm:text-xl font-bold text-charcoal ">
            
          </span>
        </Link>

        {/* Desktop Navigation */}
        

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <Link href="/booking">
            <Button className="bg-royal-blue hover:bg-royal-blue/90 text-white shadow-lg hover:shadow-xl transition-all">
              {language === "en" ? "Book Now" : "احجز الآن"}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-2 md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="text-charcoal hover:text-royal-blue p-2"
          >
            <Globe className="h-4 w-4" />
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-royal-blue/10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-white">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-royal-blue to-turquoise"></div>
                    <span className="text-lg font-bold text-charcoal">The Laundry Bloom</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                

                {/* Bottom Actions */}
                <div className="pt-6 border-t space-y-4">
                  <Link href="/booking">
                    <Button className="bg-royal-blue hover:bg-royal-blue/90 text-white shadow-lg hover:shadow-xl transition-all">
                      {language === "en" ? "Book Now" : "احجز الآن"}
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
