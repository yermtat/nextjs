import ButtonMenu from "@/app/features/shared/menuButton";
import PizzaLoader from "@/app/features/shared/pizza/pizza-list-loader";

export default function Menu() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="flex justify-center">
            <h1 className="m-5 text-5xl">Menu</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <ButtonMenu name="Show all" defaultActive={true} />
            <ButtonMenu name="Meat" />
            <ButtonMenu name="Vegetarian" />
            <ButtonMenu name="Sea product" />
            <ButtonMenu name="Mushroom" />
          </div>
        </div>
      </div>
      <PizzaLoader />
    </div>
  );
}
