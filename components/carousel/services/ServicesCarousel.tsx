import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Web & Mobile Development",
    description:
      "Do you want to optimize your website in a foreign language? Learn in which countries we will help you...",
    icon: "📱",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Motion & Branding Design",
    description:
      "Do you want to optimize your website in a foreign language? Learn in which countries we will help you...",
    icon: "🎨",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "International SEO Services",
    description:
      "Do you want to optimize your website in a foreign language? Learn in which countries we will help you...",
    icon: "🔍",
    gradient: "from-green-500 to-lime-500",
  },
];

const ServicesCarousel = () => {
  return (
    <div className="relative mx-auto max-w-5xl py-10">
      <h2 className="text-center text-3xl font-bold">
        We will provide awesome services
      </h2>
      <Carousel className="mt-6 w-full">
        <CarouselContent className="flex">
          {services.map((service, index) => (
            <CarouselItem
              key={index}
              className="basis-full px-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="relative flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:rounded-[50%] hover:shadow-2xl">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r text-3xl ${service.gradient} text-white`}
                >
                  {service.icon}
                </div>
                <h3 className="mt-4 text-center text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-center text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 transform" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 transform" />
      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
