"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useCartStore from "@/store";

export default function ProductInfo({
  name,
  price,
  imagePath,
  summary,
  category,
  color,
}: Product) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleOrder = () => {
    const newOrder: CartItem = {
      item: { name, price, imagePath, summary, category, color },
      quantity: quantity,
    };
    addToCart(newOrder);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="relative w-full h-80 sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-100 rounded-xl overflow-hidden shadow-md">
        <Image
          src={imagePath}
          alt={name}
          fill
          className="object-contain p-6 sm:p-8"
        />
      </div>

      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{name}</h1>
        <p className="text-xl sm:text-2xl text-gray-800 font-semibold">
          {price} $
        </p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          {summary}
        </p>

        <div className="text-sm sm:text-base text-gray-600 space-y-1">
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>
            <strong>Color:</strong> {color}
          </p>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={handleDecrement}
            className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-200 text-lg"
          >
            −
          </button>
          <span className="text-lg font-medium">{quantity}</span>
          <button
            onClick={handleIncrement}
            className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-200 text-lg"
          >
            +
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={handleOrder}
            className="bg-gray-800 text-white text-base sm:text-lg px-5 py-3 rounded-md hover:bg-gray-700 transition"
          >
            Add to Cart
          </button>
          <Link
            href="/catalog"
            className="border border-gray-300 text-base sm:text-lg px-5 py-3 rounded-md hover:bg-gray-100 transition text-center"
          >
            Back to Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
