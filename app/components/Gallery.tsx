"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface WorkGalleryProps {
  images: string[]
}

export default function WorkGallery({ images }: WorkGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const galleryRef = useRef<HTMLDivElement>(null)

  // Function to open the lightbox
  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image)
    setCurrentIndex(index)
    document.body.style.overflow = "hidden" // Prevent scrolling when lightbox is open
  }

  // Function to close the lightbox
  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto" // Re-enable scrolling
  }

  // Navigate to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setSelectedImage(images[(currentIndex + 1) % images.length])
  }

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    setSelectedImage(images[(currentIndex - 1 + images.length) % images.length])
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return

      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, currentIndex])

  // Animation for gallery items
  const galleryItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <div className="relative">
      <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image}
            className=" aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300"
            variants={galleryItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={index % 8} // Stagger animation in groups of 8
            whileHover={{ scale: 1.03 }}
            onClick={() => openLightbox(image, index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`ScrapMasters work sample ${index + 1}`}
              width={500}
              height={500}
              className="z-1 object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`ScrapMasters work sample ${currentIndex + 1}`}
                fill
                className="z-1 object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                {currentIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

