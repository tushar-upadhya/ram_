"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const DigitalPresence = () => {
  const [counts, setCounts] = useState<Record<string, number>>({});
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        SEO_Analysis: Math.min((prev.SEO_Analysis || 0) + 1, 92),
        SEO_Audit: Math.min((prev.SEO_Audit || 0) + 1, 59),
        Optimization: Math.min((prev.Optimization || 0) + 1, 95),
      }));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-cover bg-center">
      {/* Wave Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/wave.svg')" }}
      ></div>

      <div className="container relative z-10 mx-auto flex flex-col items-center px-6 py-12 md:flex-row md:py-24">
        {/* Left Side Image with Play Button */}
        <div className="relative flex w-full justify-center md:w-1/2">
          <div className="relative h-80 w-80 md:h-96 md:w-96">
            <Image
              src="/image.png"
              alt="Digital Presence"
              layout="fill"
              className="rounded-full object-cover shadow-lg"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute inset-0 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg"
            >
              ▶
            </motion.button>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="mt-8 w-full md:mt-0 md:w-1/2 md:pl-12">
          <h4 className="text-lg font-semibold text-orange-500">About Us</h4>
          <h2 className="mt-2 text-4xl font-bold">
            Expand Your Digital Presence
          </h2>
          <p className="mt-4 text-gray-600">
            With over 25 years of experience, we have crafted thousands of
            strategic discovery processes that enable us to peel back the
            layers, allowing us to understand, connect, represent, and dominate
            your market.
          </p>

          {/* Progress Bars with Count Animations */}
          <div className="mt-6">
            {[
              {
                label: "SEO Analysis",
                percent: 92,
                gradient: "bg-gradient-to-r from-blue-400 to-blue-700",
                key: "SEO_Analysis",
              },
              {
                label: "SEO Audit",
                percent: 59,
                gradient: "bg-gradient-to-r from-orange-400 to-orange-700",
                key: "SEO_Audit",
              },
              {
                label: "Optimization",
                percent: 95,
                gradient: "bg-gradient-to-r from-green-400 to-green-700",
                key: "Optimization",
              },
            ].map(({ label, percent, gradient, key }, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between py-4 text-sm font-semibold">
                  <span>{label}</span>
                  <motion.span
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                  >
                    {counts[key] || 0}%
                  </motion.span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <motion.div
                    className={`h-2 rounded-full ${gradient}`}
                    initial={{ width: "0%" }}
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.95 }}>
            <Button className="mt-6 flex items-center gap-2 rounded-full bg-orange-500 px-10 py-7 text-white shadow-lg">
              Start a Project <ArrowRight size={20} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalPresence;
