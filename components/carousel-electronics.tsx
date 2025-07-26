"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

const images = [
  "/electronics1.jpg",
  "/electronics2.jpg",
  "/electronics3.jpg",
  "/electronics4.jpg",
  "/electronics5.jpg",
  "/electronics6.jpg",
  "/electronics7.jpg",
  "/electronics8.jpg",
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };
const AUTOPLAY_DELAY = 3000;

export default function CarouselElectronics({ baseWidth = 300, autoplay = true, loop = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, AUTOPLAY_DELAY);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full h-[300px]">
      <motion.div
        className="flex w-full h-full"
        drag="x"
        style={{ x }}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={SPRING_OPTIONS}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </motion.div>
    </div>
  );
}