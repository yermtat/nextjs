import { create } from "zustand";

type CartStore = {
  cart: CartItem[];
  addToCart: (newItem: CartItem) => void;
  removeFromCard: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};

const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (newItem) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.pizza.id === newItem.pizza.id
      );
      const updatedCart = state.cart.slice();

      if (existingItemIndex != -1) {
        updatedCart[existingItemIndex] = Object.assign(
          {},
          updatedCart[existingItemIndex]
        );
        updatedCart[existingItemIndex].quantity = newItem.quantity;
      } else {
        updatedCart.push(Object.assign({}, newItem, { quantity: 1 }));
      }

      return { cart: updatedCart };
    }),

  removeFromCard: (id) =>
    set((state) => {
      const updatedCart = state.cart.slice();

      updatedCart.filter((item) => item.pizza.id != id);

      return { cart: updatedCart };
    }),

  updateQuantity: (id, quantity) =>
    set((state) => {
      const updatedCart = state.cart.slice();
      const updatingItemIndex = updatedCart.findIndex(
        (item) => item.pizza.id === id
      );

      if (updatingItemIndex != -1) {
        updatedCart[updatingItemIndex] = Object.assign(
          {},
          updatedCart[updatingItemIndex]
        );
        updatedCart[updatingItemIndex].quantity = quantity;
      }

      return { cart: updatedCart };
    }),

  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
