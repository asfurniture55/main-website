import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">ScrapMasters</h3>
            <p className="text-gray-400">
              Your trusted partner for scrap buying, old furniture, and restaurant dismantling services in Delhi-NCR.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Scrap Buying All Types
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                Old Furniture Buying & Selling
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                Old Office Furniture Buying & Selling
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                Restaurant Dismantling Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Scrap Buying Services in Delhi NCR
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} ScrapMasters. All rights reserved. Designed and Developed by  
          <Link 
            href="https://portfolio-bilal.onrender.com/" 
            className="underline"
            target="_blank"
          >
              Bilal Sadiq
          </Link>
        </div>
      </div>
    </footer>
  )
}

