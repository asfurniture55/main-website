"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={200}
            height={200}
            className="w-20 h-20 md:w-20 md:h-20 rounded-full"
          />
          <span className="hidden md:block text-2xl font-bold text-gray-800 ml-2">AS Furniture</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-gray-800">
            Services
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800">
            About Us
          </Link>
          <Link href="/gallery" className="text-gray-600 hover:text-gray-800">
            Our Work Gallery
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-800">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center">
          <Phone className="w-5 h-5 text-gray-600 mr-2" />
          <span className="text-gray-800">+91 96390 30355</span>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-800">
              Services
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              About Us
            </Link>
            <Link href="/gallery" className="text-gray-600 hover:text-gray-800">
            Our Work Gallery
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-800">
            Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </nav>
          <div className="flex items-center px-4 py-2">
            <Phone className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-gray-800">+91 98765 43210</span>
          </div>
        </div>
      )}
    </header>
  )
}

