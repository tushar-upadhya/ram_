import Carousel from "@/components/carousel/Carousel";
import ImageCarousel from "@/components/carousel/image-carousel/ImageCarousel";
import ServicesCarousel from "@/components/carousel/services/ServicesCarousel";
import DigitalPresence from "@/components/digital/DigitalPresence";
import Faq from "@/components/faq/Faq";
import Hero from "@/components/hero/Hero";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <Carousel />
      <DigitalPresence />
      <ImageCarousel />
      <ServicesCarousel />
      <Faq />
    </div>
  );
};

export default HomePage;
