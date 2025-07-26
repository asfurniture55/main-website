import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AS Furnitures - Your Trusted Scrap Buying Partner",
  description:
    "AS Furnitures is your go-to partner for scrap buying, old furniture buying & selling, and restaurant dismantling services in Delhi NCR, Noida, Gurugram. Get the best value for your scrap today!",
  keywords:
    "scrap buying, old furniture, office furniture, restaurant dismantling, old office furniture in delhi ncr, Old Furniture Buyer in Delhi NCR, Old Furniture Buyer in Delhi NCR, Office Dismantling and Buyers in Delhi NCR, Used Office DG Set Buyer In Delhi, Used Office Generator Buyer In Gurgaon, Old Office Ups Panel Buyers In Delhi, Dismantled Scrap Buyers In Delhi, Office Dismantling And Buyers, Office Dismantling And Buyers In Gurgaon, Showroom Dismantling And Buyers, Mall Showroom Dismantling And Buyers, Old Office Interior Dismantling And Buyers, Old Office Workstation Dismantling And Buyers, Sell Used Office Furniture In Gurgaon, Used Office Furniture Buyer In Delhi, Used Office Furniture Buyer In Gurgaon, Second Hand Office Furniture Buyers, Used Office Generator Buyer In Delhi,",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        {/* Sticky Contact Icons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
        <a
          href="https://wa.me/9639030355"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:9639030355"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'
import { MessageCircle, Phone } from "lucide-react"
