import Image from "next/image";
import Link from "next/link";
import bg from "./bg.jpg";
import FeatureCards from "../feature-cards/feature-cards";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background image */}
      <Image
        src={bg}
        alt="Living room background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-screen-xl mx-auto px-4 py-10 h-full flex flex-col justify-center">
        <div className="max-w-xl space-y-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Furniture for Every Home & Style
          </h1>
          <p className="text-lg md:text-xl">
            Discover modern, comfortable, and timeless furniture to match your
            space.
          </p>
          <Link
            href="/catalog"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black text-sm md:text-base font-semibold px-6 py-3 rounded-lg shadow transition duration-200"
          >
            Browse Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
