"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./product-card";

interface ProductProps {
  products: Product[];
}
export default function ProductSlider({ products }: ProductProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 16 },
      },
    },
  });

  return (
    <section className="w-full flex flex-col items-center py-16">
      <h2 className="text-2xl font-bold mb-8">Popular</h2>

      <div className="relative w-full max-w-6xl px-4">
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {products.map((product, index) => (
            <div key={index} className="keen-slider__slide">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Left arrow */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
