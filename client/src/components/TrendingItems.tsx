import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TrendingItems = () => {
  return (
    <div className="flex items-center max-lg:flex-col max-lg:gap-8 sm:px-4 sm:pl-6">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="relative w-11/12 md:w-3/4 lg:w-1/2 min-h-80"
      >
        <div className="absolute z-20 mx-2 -translate-y-1/2 top-1/2">
          <CarouselPrevious />
        </div>
        <div className="absolute right-0 z-20 mx-2 -translate-y-1/2 top-1/2">
          <CarouselNext />
        </div>
        <CarouselContent>
          <CarouselItem>
            <img
              src="/1.png"
              alt="trending"
              className="object-cover w-full rounded-2xl h-96"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/2.png"
              alt="trending"
              className="object-cover w-full rounded-2xl h-96"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/3.png"
              alt="trending"
              className="object-cover w-full rounded-2xl h-96"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="flex flex-col items-center gap-8 lg:items-end lg:w-1/2 lg:pr-16 max-lg:py-6">
        <h1 className="text-5xl font-bold xl:text-6xl">Trending Items</h1>
        <p className="w-4/5 text-center lg:text-end">
          Discover the latest trends in fashion with our exclusive collection.
          Whether you're looking for casual elegance or bold statements, we have
          something for everyone.
        </p>
        <a
          href="/#products"
          className="px-4 py-2 text-sm rounded-lg cursor-pointer bg-btn-green"
        >
          Explore more
        </a>
      </div>
    </div>
  );
};

export default TrendingItems;
