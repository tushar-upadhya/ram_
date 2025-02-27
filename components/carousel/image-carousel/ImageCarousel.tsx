"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
];

const ImageCarousel = () => {
  return (
    <div className="container relative mx-auto mt-4 w-full overflow-hidden bg-gradient-to-r from-red-100 to-blue-100 py-10">
      {/* Left Blur Effect */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent" />

      {/* Right Blur Effect */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />

      <motion.div
        className="animate-loop-scroll flex w-max space-x-12"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex h-16 w-36 flex-shrink-0 items-center justify-center"
          >
            <Image
              src={logo}
              alt="Company Logo"
              width={120}
              height={50}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
