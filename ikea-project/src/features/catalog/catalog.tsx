"use client";

import { useSearchParams } from "next/navigation";
import ProductCard from "./catalog-item-card";

interface ProductProps {
  products: Product[];
}

export default function Catalog({ products }: ProductProps) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "Show all";

  const filteredItems =
    category === "Show all"
      ? products
      : products.filter((item) => item.category === category);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredItems.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </div>
  );
}
