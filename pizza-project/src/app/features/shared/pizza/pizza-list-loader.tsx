import { getPizzas } from "../../main/services/pizza-service";
import PizzaList from "./pizza-list";

export default async function PizzaLoader() {
  const pizzas = await getPizzas();

  return (
    <div>
      <div className="container mx-auto px-4">
        <PizzaList pizzas={pizzas} />
      </div>
    </div>
  );
}
