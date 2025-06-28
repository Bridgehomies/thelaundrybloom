import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-[#233c57] text-white pl-4 pr-4 sm:pl-8 sm:pr-8 lg:pl-16 lg:pr-16">
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/images/logo.jpg" // Path to the image in the public folder
                alt="The Laundry Bloom Logo" // Alt text for accessibility
                className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-cover shadow-lg"
              />
              <span className="text-lg sm:text-xl font-bold text-blue-900">
                The Laundry Bloom
              </span>
            </Link>
            <p className="text-black">
              Dubai's premier laundry service, delivering fresh, clean clothes to your doorstep with professional care
              and eco-friendly practices.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-900 hover:text-turquoise transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="" className="text-blue-900 hover:text-turquoise transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-900">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-black hover:text-blue-900 transition-colors">
                Home
              </Link>
              <Link href="/services" className="block text-black hover:text-blue-900 transition-colors">
                Services
              </Link>
              <Link href="/pricing" className="block text-black hover:text-blue-900 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="block text-black hover:text-blue-900 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-black hover:text-blue-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-900">Services</h3>
            <div className="space-y-2">
              <div className="text-black hover:text-blue-900">Wash & Fold</div>
              <div className="text-black hover:text-blue-900">Dry Cleaning</div>
              <div className="text-black hover:text-blue-900">Ironing</div>
              <div className="text-black hover:text-blue-900">Curtain Cleaning</div>
              <div className="text-black hover:text-blue-900">Shoe Cleaning</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-900">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-8 w-8 text-blue-900" />
                <span className="text-black text-sm">T02, Spain cluster, International City Warsan, Dubai, UAE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-900" />
                <span className="text-black text-sm">+971 52 507 6196</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-900" />
                <span className="text-black text-sm">thelaundrbloom@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/50 mt-12 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} The Laundry Bloom. All rights reserved. <br></br> Made with ❤️ by <a
              href="https://www.bridgehomies.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-turquoise hover:underline"
            >
              Bridge Homies
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
