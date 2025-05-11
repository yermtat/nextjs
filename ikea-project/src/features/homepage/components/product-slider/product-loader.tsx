import { getData } from "../../../shared/services/data-service";
import ProductSlider from "./product-slider";

export default async function ProductLoader() {
  const products = await getData();

  return (
    <div>
      <div className="container mx-auto px-4">
        <ProductSlider products={products} />
      </div>
    </div>
  );
}
