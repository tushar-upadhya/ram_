"use client";

import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  PieChart,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const carouselData = [
  {
    id: 1,
    icon: <Lightbulb size={32} className="text-white" />,
    title: "Unique Idea Planner",
    description:
      "Build relationships and share your company values with well-crafted content tailored.",
    bgColor: "bg-gradient-to-r from-cyan-400 to-blue-600",
  },
  {
    id: 2,
    icon: <PieChart size={32} className="text-white" />,
    title: "Upfront & Competitive Price",
    description:
      "Build relationships and share your company values with well-crafted content tailored.",
    bgColor: "bg-gradient-to-r from-orange-400 to-red-500",
  },
  {
    id: 3,
    icon: <ShieldCheck size={32} className="text-white" />,
    title: "Justice & Defence Security",
    description:
      "Build relationships and share your company values with well-crafted content tailored.",
    bgColor: "bg-gradient-to-r from-green-400 to-lime-500",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="container relative mx-auto flex w-full items-center justify-center py-44">
      {/* Left Arrow */}
      <Button
        onClick={prevSlide}
        className="absolute left-0 rounded-full bg-gray-200 p-3 hover:bg-gray-300"
      >
        <ChevronLeft size={20} />
      </Button>

      {/* Carousel Items */}
      <div className="flex h-full gap-6 overflow-hidden">
        {carouselData.map((item, index) => (
          <div
            key={item.id}
            className={`flex w-64 flex-col items-center rounded-lg p-6 text-center shadow-lg transition-all duration-300 ${
              index === currentIndex ? "scale-105 opacity-100" : "opacity-50"
            }`}
          >
            {/* Icon */}
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-xl ${item.bgColor}`}
            >
              {item.icon}
            </div>

            {/* Title & Description */}
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <Button
        onClick={nextSlide}
        className="absolute right-0 rounded-full bg-gray-200 p-3 hover:bg-gray-300"
      >
        <ChevronRight size={20} />
      </Button>
    </div>
  );
};

export default Carousel;
