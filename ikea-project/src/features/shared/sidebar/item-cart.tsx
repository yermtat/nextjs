"use client";

import { Button } from "@/components/ui/button";
import useCartStore from "@/store";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";

export default function CartItem({ item, quantity }: CartItem) {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCard = useCartStore((state) => state.removeFromCard);

  const handleIncrement = () => {
    addToCart({ item, quantity: quantity + 1 });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      addToCart({ item, quantity: quantity - 1 });
    } else {
      removeFromCard(item.name);
    }
  };

  const handleRemove = () => {
    removeFromCard(item.name);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-6 border-b border-gray-300">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden relative">
          <img
            src={item.imagePath}
            alt={item.name}
            className="w-full h-full object-contain p-2"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-200">{item.name}</h3>
          <p className="text-gray-600 text-base">{item.price.toFixed(2)} $</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDecrement}
            className="w-10 h-10 text-xl hover:bg-gray-200"
          >
            <MinusIcon className="w-5 h-5" />
          </Button>
          <span className="px-4 text-lg">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleIncrement}
            className="w-10 h-10 text-xl hover:bg-gray-200"
          >
            <PlusIcon className="w-5 h-5" />
          </Button>
        </div>

        <Button
          variant="destructive"
          onClick={handleRemove}
          className="flex items-center gap-2 px-4 py-2"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
