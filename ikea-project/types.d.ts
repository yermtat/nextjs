type Product = {
  name: string;
  price: number;
  imagePath: string;
  summary: string;
  category: string;
  color: string;
};

type CartItem = {
  item: Product;
  quantity: number;
};
