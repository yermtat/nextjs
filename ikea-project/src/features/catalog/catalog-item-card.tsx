// components/ProductCard.tsx
import useCartStore from "@/store";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  name,
  price,
  imagePath,
  summary,
  category,
  color,
}: Product) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleOrder = () => {
    const newOrder: CartItem = {
      item: { name, price, imagePath, summary, category, color },
      quantity: 1,
    };
    addToCart(newOrder);
  };
  return (
    <div className="border rounded-xl shadow-sm bg-white flex flex-col overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative w-full h-48">
        <Image src={imagePath} alt={name} fill className="object-contain p-4" />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h3 className="text-base font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{price} $</p>
        <div className="mt-auto flex gap-2">
          <button className="flex-1 border border-gray-300 text-sm px-3 py-1.5 rounded-md hover:bg-gray-100 transition">
            <Link href={`product/${name}`}>More</Link>
          </button>

          <button
            className="flex-1 bg-gray-800 text-white text-sm px-3 py-1.5 rounded-md hover:bg-gray-700 transition0"
            onClick={handleOrder}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
