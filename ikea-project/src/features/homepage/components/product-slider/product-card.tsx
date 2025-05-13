import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductCard({ name, price, imagePath }: Product) {
  return (
    <div className="flex-shrink-0 w-[220px] bg-white rounded-2xl shadow-md p-4 mr-4">
      <div className="w-full h-36 relative mb-4">
        <Image
          src={imagePath}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <h3 className="font-semibold text-sm mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-4">From {price} $</p>
      <button className="text-sm font-semibold text-yellow-600 flex items-center gap-1">
        <Link href={`product/${name}`}>
          Learn more <ArrowRight className="w-4 h-4" />
        </Link>
      </button>
    </div>
  );
}
