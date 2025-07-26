import Image from "next/image"
import { Truck, SofaIcon as Couch, Building2, Hammer, Recycle, DollarSign, Clock, ThumbsUp } from "lucide-react"
import Carousel from "@/components/carousel"
import Contact from "@/components/contact";
import CarouselElectronics from "@/components/carousel-electronics";

export default function Services() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Truck className="w-8 h-8 mr-2 text-blue-600" />
              Scrap Buying (All Types)
            </h2>
            <p className="text-gray-600 mb-4">
              We purchase all types of scrap materials, including metals,
              plastics, paper, and electronics. Our team ensures accurate
              weighing and offers competitive prices based on current market
              rates.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Ferrous and non-ferrous metals</li>
              <li>Electronic waste (e-waste)</li>
              <li>Plastic and rubber materials</li>
              <li>Paper and cardboard</li>
            </ul>
          </div>
          <div>
            <Carousel baseWidth={600} autoplay={true} loop={true} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="order-2 md:order-1">
            <Carousel baseWidth={600} autoplay={true} loop={true} />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Couch className="w-8 h-8 mr-2 text-blue-600" />
              Old Furniture Buying & Selling
            </h2>
            <p className="text-gray-600 mb-4">
              We specialize in buying and selling old furniture for homes.
              Whether you're looking to declutter or find unique pieces, our
              service caters to all your needs.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Fair evaluation of your old furniture</li>
              <li>Wide range of pre-owned furniture for sale</li>
              <li>Pickup and delivery services available</li>
              <li>Refurbishment options for select pieces</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Building2 className="w-8 h-8 mr-2 text-blue-600" />
              Old Office Furniture Buying & Selling
            </h2>
            <p className="text-gray-600 mb-4">
              Our office furniture service helps businesses upgrade their spaces
              or liquidate old inventory. We offer competitive prices for used
              office furniture and provide a wide selection of pre-owned items.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Bulk purchase of office furniture</li>
              <li>Quality pre-owned office equipment for sale</li>
              <li>Space planning and layout assistance</li>
              <li>Environmentally responsible disposal options</li>
            </ul>
          </div>
          <div>
            <Carousel baseWidth={600} autoplay={true} loop={true} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="order-2 md:order-1">
            <CarouselElectronics baseWidth={600} autoplay={true} loop={true} />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Hammer className="w-8 h-8 mr-2 text-blue-600" />
              Old Electronics Scrap Buying and Selling
            </h2>
            <p className="text-gray-600 mb-4">
              We specialize in buying and selling old electronics scrap,
              offering reliable and eco-friendly solutions for disposing of
              outdated or unused devices.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Purchase of old computers, laptops, and mobile phones</li>
              <li>Safe handling and recycling of electronic waste</li>
              <li>Competitive pricing for bulk electronics scrap</li>
              <li>Environmentally responsible disposal methods</li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Recycle className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">
                Eco-Friendly Practices
              </h3>
              <p className="text-gray-600">
                We prioritize sustainable and environmentally responsible
                methods in all our services.
              </p>
            </div>
            <div className="text-center">
              <DollarSign className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">
                Competitive Pricing
              </h3>
              <p className="text-gray-600">
                Get the best value for your scrap and old furniture with our
                fair and transparent pricing.
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Efficient Service</h3>
              <p className="text-gray-600">
                Our experienced team ensures quick and hassle-free transactions
                and services.
              </p>
            </div>
            <div className="text-center">
              <ThumbsUp className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                We're committed to providing excellent customer service and
                building long-term relationships.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
}

