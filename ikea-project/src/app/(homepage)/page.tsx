import FeatureCards from "@/features/homepage/components/feature-cards/feature-cards";
import HeroBanner from "@/features/homepage/components/hero/hero";
import ProductSlider from "@/features/homepage/components/product-slider/product-slider";
import ProductLoader from "@/features/homepage/components/product-slider/product-loader";

import React from "react";

export default function page() {
  return (
    <div>
      <HeroBanner />
      <FeatureCards />
      <ProductLoader />
    </div>
  );
}
