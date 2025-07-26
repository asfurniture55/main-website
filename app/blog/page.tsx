import fs from "fs"
import path from "path"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

interface BlogPost {
  id: number
  image: string
  title: string
  slug: string
  date: string
  excerpt: string
  content: string
}

export const metadata = {
  title: "Our Service Stories | ScrapMasters",
  description: "Read about our recent scrap buying, furniture collection, and dismantling projects across Delhi-NCR.",
}

export default function BlogPage() {
  // Read blog data from JSON file
  const blogData = JSON.parse(fs.readFileSync(path.join(process.cwd(), "public", "blogs.json"), "utf8")) as BlogPost[]

  // Sort blogs by date (newest first)
  const sortedBlogs = [...blogData].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  // Extract location from title for display
  const getLocation = (title: string): string => {
    const locationKeywords = ["Delhi", "Noida", "Gurgaon", "Greater Noida", "Faridabad", "Ghaziabad", "NCR"]
    for (const keyword of locationKeywords) {
      if (title.includes(keyword)) return keyword
    }
    return "Delhi-NCR"
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Service Stories</h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Read about our recent projects and client experiences across Delhi-NCR. These stories showcase our work and
          commitment to quality service.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedBlogs.map((post) => {
            const location = getLocation(post.title)
            const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })

            return (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={`${post.image}`}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-3 py-1 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{location}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <time dateTime={post.date}>{formattedDate}</time>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">{post.title}</h2>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="text-blue-600 font-medium">Read Full Story</div>
                </div>
              </Link>
            )
          })}
        </div>

        {sortedBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No service stories found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
