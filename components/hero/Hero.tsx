"use client";

import image from "@/public/next.svg";
import { motion } from "framer-motion";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative flex h-screen w-full items-center overflow-hidden bg-[#0E0B1E]">
      {/* Background Elements */}
      <motion.div
        className="absolute left-10 top-10 h-6 w-6 rounded-full bg-red-500"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.div
        className="absolute right-20 top-32 h-4 w-4 rounded-full bg-blue-500"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      {/* Hero Content */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-6 md:flex-row">
        {/* Image Section */}
        <motion.div
          className="relative w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={image}
            alt="Hero Image"
            width={500}
            height={600}
            className="rounded-lg"
          />
          {/* Project Card */}
          <div className="absolute left-10 top-20 rounded-lg bg-white p-4 shadow-lg">
            <p className="text-sm font-bold">Project Z</p>
            <p className="text-xs">Back End Development</p>
            <p className="text-xs text-gray-500">October 2020</p>
          </div>
          {/* Rating Section */}
          <div className="absolute bottom-10 left-10 flex items-center rounded-lg bg-white p-4 shadow-lg">
            <div className="flex -space-x-2">
              <Image
                src="/avatar1.png"
                width={30}
                height={30}
                className="rounded-full"
                alt="Client"
              />
              <Image
                src="/avatar2.png"
                width={30}
                height={30}
                className="rounded-full"
                alt="Client"
              />
            </div>
            <p className="ml-2 text-sm font-bold">4.8 (8,090)</p>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full text-white md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold">
            We are Digital Marketing{" "}
            <span className="italic text-red-500">Solutions</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Beat your competition with the finest Digital Marketing Agency in
            USA.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="rounded-lg bg-red-500 px-6 py-3 font-bold text-white">
              Start a Project!
            </button>
            <button className="rounded-full border border-white px-4 py-3">
              ▶
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 h-20 w-full rounded-t-full bg-gradient-to-r from-blue-500 via-orange-500 to-blue-700"></div>
    </section>
  );
};

export default Hero;
