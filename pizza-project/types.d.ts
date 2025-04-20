type Pizza = {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

type CartItem = {
  pizza: Pizza;
  quantity: number;
};
