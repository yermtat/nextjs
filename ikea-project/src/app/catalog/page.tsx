import FilterButton from "@/features/catalog/filter-button";
import CatalogLoader from "@/features/catalog/catalog-loader";

export default function Catalog() {
  return (
    <div className=" text-black">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="flex justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10 mt-10">
              Catalog
            </h1>
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
