import { ChartNoAxesColumnIncreasingIcon } from "lucide-react";
import { getData } from "../shared/services/data-service";
import Catalog from "./catalog";

export default async function CatalogLoader() {
  const products = await getData();

  return (
    <div>
      <div className="container mx-auto px-4">
        <Catalog products={products} />
      </div>
    </div>
  );
}
