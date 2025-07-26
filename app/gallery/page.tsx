import WorkGallery from "../components/Gallery"
import Contact from "../contact/page"


const images = [
  "/06.jpg",
  "/07.jpg",
  "/08.jpg",
  "/09.jpg",
  "/12.jpg",
  "/13.jpg",
  "/15.jpg",
  "/19.jpg",
  "/20.jpg",
  "/21.jpg",
  "/22.jpg",
  "/23.jpg",
  "/24.jpg",
  "/25.jpg",
  "/26.jpg",
  "/27.jpg",
  "/28.jpg",
  "/29.jpg",
  "/30.jpg",
  "/31.jpg",
  "/32.jpg",
  "/33.jpg",
  "/34.jpg",
  "/35.jpg",
]

export const metadata = {
  title: "Our Work Gallery | ScrapMasters",
  description:
    "View our portfolio of scrap buying, old furniture recycling, and restaurant dismantling projects across Delhi-NCR.",
  openGraph: {
    title: "Our Work Gallery | ScrapMasters",
    description:
      "View our portfolio of scrap buying, old furniture recycling, and restaurant dismantling projects across Delhi-NCR.",
    images: [
      {
        url: "/02.jpg",
        width: 1200,
        height: 630,
        alt: "ScrapMasters Work Gallery",
      },
    ],
  },
}

export default function GalleryPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-blue-600 font-bold text-center mb-4">Our Work Gallery</h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Browse through our portfolio showcasing our scrap buying, old furniture recycling, and restaurant dismantling
          projects across Delhi-NCR.
        </p>

        <WorkGallery images={images} />
      </div>

      <Contact />
    </div>
  )
}

