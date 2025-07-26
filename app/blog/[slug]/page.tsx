import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowLeft, MapPin, Share2 } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  image: string
  slug: string
  date: string
  excerpt: string
  content: string
}

// Generate metadata for the blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blogData = JSON.parse(fs.readFileSync(path.join(process.cwd(), "public", "blogs.json"), "utf8")) as BlogPost[]
  const post = blogData.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Service Story Not Found | ScrapMasters",
      description: "The requested service story could not be found.",
    }
  }

  return {
    title: `${post.title} | ScrapMasters Service Stories`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  }
}

// Extract location from title for display
const getLocation = (title: string): string => {
  const locationKeywords = ["Delhi", "Noida", "Gurgaon", "Greater Noida", "Faridabad", "Ghaziabad", "NCR"]
  for (const keyword of locationKeywords) {
    if (title.includes(keyword)) return keyword
  }
  return "Delhi-NCR"
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Read blog data from JSON file
  const blogData = JSON.parse(fs.readFileSync(path.join(process.cwd(), "public", "blogs.json"), "utf8")) as BlogPost[]
  const post = blogData.find((p) => p.slug === params.slug)

  // If post not found, return 404
  if (!post) {
    notFound()
  }

  // Format the date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Get location
  const location = getLocation(post.title)

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all service stories
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {location}
              </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-500 text-sm flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formattedDate}
              </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-500 text-sm">Project ID: {post.id}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600">{post.excerpt}</p>
          </header>

          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={`${post.image}`}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Need similar services?</h2>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors inline-block"
              >
                Contact Us for a Quote
              </Link>
            </div>

            <div className="mt-4 sm:mt-0">
              <h2 className="text-lg font-bold mb-2 flex items-center">
                <Share2 className="w-4 h-4 mr-2" />
                Share this story
              </h2>
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </button>
                <button className="bg-blue-400 text-white p-2 rounded-md hover:bg-blue-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </button>
                <button className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
                <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/services" className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
              <h3 className="font-semibold">Scrap Buying</h3>
              <p className="text-sm text-gray-600">All types of scrap materials</p>
            </Link>
            <Link href="/services" className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
              <h3 className="font-semibold">Old Furniture Buying</h3>
              <p className="text-sm text-gray-600">Home and office furniture</p>
            </Link>
            <Link href="/services" className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
              <h3 className="font-semibold">Restaurant Dismantling</h3>
              <p className="text-sm text-gray-600">Professional dismantling services</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
