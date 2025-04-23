"use client";

import Image from "next/image";
import { useState } from "react";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import useCartStore from "@/store/cart-store";
import CartItem from "../sidebar/item-cart";

export default function PizzaCard({
  id,
  category,
  name,
  price,
  image,
  description,
}: Pizza) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(28);
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
    console.log(quantity);
    const newOrder: CartItem = {
      pizza: { id, category, name, price, image, description },
      quantity: quantity,
    };
    addToCart(newOrder);
  };

  const sizes = [22, 28, 33];

  return (
    <div className="bg-gradient-to-b from-black to-orange-950 text-white rounded-3xl p-6 w-72 shadow-xl flex flex-col items-center">
      <div className="w-32 h-32 mb-4">
        <Image
          src={`http://localhost:3000${image}`}
          alt="Italian Pizza"
          width={128}
          height={128}
          className="rounded-full object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-300 text-center mt-1 mb-4">
        {description}
      </p>

      <div className="flex space-x-4 mb-4">
        {sizes.map((s) => (
          <button
            key={s}
            onClick={() => setSize(s)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border transition ${
              size === s
                ? "bg-orange-500 text-white"
                : "border-gray-500 text-white"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <button className="border border-orange-400 text-orange-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
        + Ingredients
      </button>

      <div className="flex items-center justify-between w-full mb-4 px-4">
        <span className="text-2xl font-bold">
          {price}
          <span className="text-sm align-top">$</span>
        </span>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleDecrement}
            className="p-1 rounded-full bg-gray-700 text-white w-8 h-8"
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={handleIncrement}
            className="p-1 rounded-full bg-orange-500 text-white w-8 h-8"
          >
            +
          </button>
        </div>
      </div>

      <button
        className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-full font-semibold w-full"
        onClick={handleOrder}
      >
        Order Now
      </button>
    </div>
  );
}
