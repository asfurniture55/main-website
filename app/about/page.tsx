import Image from "next/image"
import { CheckCircle } from "lucide-react"
import Carousel from "@/components/carousel"

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          About ScrapMasters
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, ScrapMasters has grown from a small local
              operation to a trusted name in the scrap buying and furniture
              recycling industry. Our journey began with a simple mission: to
              provide fair, efficient, and environmentally responsible solutions
              for scrap management and furniture recycling.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've expanded our services to include old
              furniture buying and selling, office furniture solutions, and
              restaurant dismantling services. Through it all, we've maintained
              our commitment to customer satisfaction, environmental
              stewardship, and community engagement.
            </p>
          </div>
          <div>
            <Carousel baseWidth={600} autoplay={true} loop={true} />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600 mb-4">
            At ScrapMasters, we envision a future where waste is minimized,
            resources are efficiently recycled, and the lifecycle of materials
            and furniture is extended. We strive to be at the forefront of
            sustainable practices in our industry, setting new standards for
            responsible scrap management and furniture recycling.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose ScrapMasters?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Expertise and Experience
                </h3>
                <p className="text-gray-600">
                  With years of industry experience, our team has the knowledge
                  and skills to handle all your scrap and furniture needs
                  efficiently.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Competitive Pricing
                </h3>
                <p className="text-gray-600">
                  We offer fair and transparent pricing for all our services,
                  ensuring you get the best value for your scrap and old
                  furniture.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Environmental Responsibility
                </h3>
                <p className="text-gray-600">
                  Our eco-friendly practices ensure that materials are recycled
                  or disposed of in an environmentally responsible manner.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Customer-Centric Approach
                </h3>
                <p className="text-gray-600">
                  We prioritize customer satisfaction and strive to build
                  long-lasting relationships with our clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Our Commitment to Sustainability
          </h2>
          <p className="text-gray-600 mb-4">
            At ScrapMasters, sustainability is at the core of everything we do.
            We're committed to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Maximizing recycling and minimizing waste sent to landfills</li>
            <li>Promoting the reuse and refurbishment of furniture</li>
            <li>Educating our community about responsible waste management</li>
            <li>
              Continuously improving our processes to reduce our environmental
              impact
            </li>
          </ul>
          <p className="text-gray-600">
            By choosing ScrapMasters, you're not just getting top-notch service
            – you're also contributing to a more sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}

