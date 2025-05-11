import FilterButton from "@/features/catalog/filter-button";
import CatalogLoader from "@/features/catalog/catalog-loader";

export default function Catalog() {
  return (
    <div className=" text-black">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="flex justify-center">
            <h1 className="m-5 text-5xl">Catalog</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <FilterButton name="Show all" defaultActive={true} />
            <FilterButton name="sofa" />
            <FilterButton name="armchair" />
            <FilterButton name="chair" />
          </div>
        </div>
      </div>
      <CatalogLoader />
    </div>
  );
}
