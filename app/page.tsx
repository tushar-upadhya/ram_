import Faq from "@/components/faq/Faq";
import Hero from "@/components/hero/Hero";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <Faq />
    </div>
  );
};

export default HomePage;
