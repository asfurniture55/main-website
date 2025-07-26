import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  SofaIcon as Couch,
  Building2,
  Hammer,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Carousel from "@/components/carousel";
import Contact from "./contact/page";



export default function Home() {

  const featuredImages = ["/02.jpg", "/05.jpg", "/09.jpg", "/15.jpg", "/21.jpg", "/28.jpg"]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Your Trusted Partner in Scrap Management in Delhi-NCR
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We buy all types of scrap, old furniture, and offer restaurant
                dismantling services across Delhi-NCR.
              </p>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Get a Free Quote
              </Link>
            </div>
            <div className="flex h-[600px] lg:items-center justify-center py-4 mx-auto w-full lg:w-1/2">
              <Carousel
                baseWidth={600}
                autoplay={true}
                loop={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-semibold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cursor-pointer">
              <Truck className="w-16 h-16 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Scrap Buying</h3>
              <p className="text-gray-600">
                We buy all types of scrap materials at competitive prices across
                Delhi-NCR.
              </p>
            </div>
            <div className="cursor-pointer">
              <Couch className="w-16 h-16 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Old Furniture</h3>
              <p className="text-gray-600">
                Buy and sell old furniture for homes and offices in Delhi-NCR.
              </p>
            </div>
            <div className="cursor-pointer">
              <Building2 className="w-16 h-16 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Office Furniture</h3>
              <p className="text-gray-600">
                Specialized in buying and selling old office furniture in
                Delhi-NCR.
              </p>
            </div>
            <div className="cursor-pointer">
              <Hammer className="w-16 h-16 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">
                Restaurant Dismantling
              </h3>
              <p className="text-gray-600">
                Professional restaurant dismantling services in Delhi-NCR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <Image
                src="/32.jpg?height=400&width=600"
                alt="About ScrapMasters"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h2 className="text-4xl text-blue-600 font-bold mb-4">About ScrapMasters</h2>
              <p className="text-gray-600 mb-6">
                With years of experience in the industry, ScrapMasters is your
                go-to partner for all your scrap management needs. We pride
                ourselves on offering fair prices, excellent customer service,
                and environmentally responsible practices.
              </p>
              <Link
                href="/about"
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                Learn More <span className="hover:translate-x-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Gallery Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Work</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Take a look at some of our recent projects across Delhi-NCR
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {featuredImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`ScrapMasters work sample ${index + 1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              View Full Gallery
              <span className="hover:translate-x-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "ScrapMasters offered the best price for my scrap metal. Their
                team was professional and efficient."
              </p>
              <p className="font-semibold">- John D.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "I used their restaurant dismantling service, and they did an
                excellent job. Highly recommended!"
              </p>
              <p className="font-semibold">- Sarah M.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Great experience selling my old office furniture to
                ScrapMasters. Fair prices and quick service."
              </p>
              <p className="font-semibold">- Michael R.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Turn Your Scrap into Cash?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact us today for a free quote and experience our top-notch
            service.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Contact />

      {/* Sticky Contact Icons */}
      {/* <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
        <a
          href="https://wa.me/9639030355"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:+919639030355"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          <Phone className="w-6 h-6" /> 
        </a>
      </div>*/}
    </div>
  );
}
