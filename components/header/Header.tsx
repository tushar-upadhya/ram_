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
            className={` top-0 left-0 w-full z-50 transition-all duration-300
            ${
                isScrolled
                    ? "backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <Link href="/">
                    <span className="text-xl font-bold">LOGO</span>
                </Link>

                {/* Navigation - Scrollable X-Axis */}
                <nav className="flex-1 mx-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <div className="flex space-x-6">
                        {routes.map((route) => (
                            <Link
                                key={route.path}
                                href={route.path}
                                className="text-sm font-medium hover:text-primary transition"
                            >
                                {route.name}
                            </Link>
                        ))}
                    </div>
                </nav>

                {/* Book a Demo Button */}
                <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                    Book a Demo
                </Button>
            </div>
        </header>
    );
};

export default Header;
