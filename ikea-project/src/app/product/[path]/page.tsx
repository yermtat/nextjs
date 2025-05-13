import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProductInfo from "@/features/product-page/product-info";

interface ProductPath {
  params: {
    path: string;
  };
}

export default async function ProductPage({ params }: ProductPath) {
  const { path } = await params;

  const response = await fetch(`${process.env.API_HOST}/api/product/${path}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.statusText}`);
  }

  const product = await response.json();

  return (
    <div>
      <ProductInfo {...product} />
    </div>
  );
}
