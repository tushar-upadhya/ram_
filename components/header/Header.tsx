"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const routes = [
  { name: "Process", path: "/process" },
  { name: "About", path: "/about" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Shouts", path: "/shouts" },
  { name: "Services", path: "/services" },
  { name: "FAQs", path: "/faqs" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border border-white/20 bg-white/30 shadow-lg backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto py-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Logo */}
          <Link href="/">
            <span className="text-xl font-bold">LOGO</span>
          </Link>

          {/* Book a Demo Button */}
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-white sm:w-fit md:order-last"
          >
            Book a Demo
          </Button>

          {/* Navigation  */}
          <nav className="scrollbar-hide mt-4 w-full overflow-x-auto whitespace-nowrap md:mt-0 md:w-auto">
            <div className="flex space-x-6 px-2">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className="group relative inline-block overflow-hidden px-3 py-2 text-sm font-medium transition"
                >
                  <span className="block transform transition-transform group-hover:-translate-y-full">
                    {route.name}
                  </span>
                  <span className="absolute left-0 top-full block transform text-primary transition-transform group-hover:-translate-y-full">
                    {route.name}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
