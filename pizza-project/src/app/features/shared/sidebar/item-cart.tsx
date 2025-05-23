"use client";
import { Button } from "@/components/ui/button";
import useCartStore from "@/store/cart-store";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { useState } from "react";

export default function CartItem({ pizza, quantity }: CartItem) {
  const { removeFromCard } = useCartStore();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleIncrement = () => {
    const newOrder: CartItem = { pizza, quantity: quantity + 1 };
    addToCart(newOrder);
  };

  const handleDecrement = () => {
    const newOrder: CartItem = { pizza, quantity: quantity - 1 };
    addToCart(newOrder);
  };

  const removeItem = removeFromCard;

  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h3 className="text-sm font-medium text-white">{pizza.name}</h3>
        <p className="text-sm text-white/60">${pizza.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="rounded-r-none bg-amber-500"
              onClick={handleDecrement}
            >
              <MinusIcon className="w-4 h-4" />
            </Button>
            <span className="mx-3 min-w-8 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="rounded-l-none bg-amber-500"
              onClick={handleIncrement}
            >
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => removeItem(pizza.id)}
          className="bg-amber-500"
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Remove item</span>
        </Button>
      </div>
    </div>
  );
}
