import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductPath {
  params: {
    path: string;
  };
}

export default async function ProductPage({ params }: ProductPath) {
  const { path } = await params;
  console.log(path);

  const response = await fetch(`${process.env.API_HOST}/api/product/${path}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.statusText}`);
  }

  const product = await response.json();
  console.log(product);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="relative w-full h-80 sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-100 rounded-xl overflow-hidden shadow-md">
        <Image
          src={product.imagePath}
          alt={product.name}
          fill
          className="object-contain p-6 sm:p-8"
        />
      </div>

      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          {product.name}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-800 font-semibold">
          {product.price} ₽
        </p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          {product.summary}
        </p>

        <div className="text-sm sm:text-base text-gray-600 space-y-1">
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Color:</strong> {product.color}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="bg-gray-800 text-white text-base sm:text-lg px-5 py-3 rounded-md hover:bg-gray-700 transition">
            Add to Cart
          </button>
          <button className="border border-gray-300 text-base sm:text-lg px-5 py-3 rounded-md hover:bg-gray-100 transition">
            Back to Catalog
          </button>
        </div>
      </div>
    </div>
  );
}
