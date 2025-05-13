import { create } from "zustand";

type CartStore = {
  cart: CartItem[];
  addToCart: (newItem: CartItem) => void;
  removeFromCard: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  clearCart: () => void;
};

const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (newItem) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.item.name === newItem.item.name
      );
      const updatedCart = state.cart.slice();

      if (existingItemIndex != -1) {
        updatedCart[existingItemIndex] = Object.assign(
          {},
          updatedCart[existingItemIndex]
        );
        updatedCart[existingItemIndex].quantity = newItem.quantity;
      } else {
        updatedCart.push(
          Object.assign({}, newItem, { quantity: newItem.quantity })
        );
      }

      return { cart: updatedCart };
    }),

  removeFromCard: (name) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.item.name != name);

      return { cart: updatedCart };
    }),

  updateQuantity: (name, quantity) =>
    set((state) => {
      const updatedCart = state.cart.slice();
      const updatingItemIndex = updatedCart.findIndex(
        (item) => item.item.name === name
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
