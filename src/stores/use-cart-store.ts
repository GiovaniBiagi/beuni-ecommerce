import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Product } from "_/services/products/products.schema";

type Cart = Product;

type State = {
  cart: Array<
    {
      quantity: number;
    } & Cart
  >;
  total: number;
};

interface Action {
  addToCart: (cart: Cart) => void;
  removeFromCart: (cartId: number) => void;
  clearCart: () => void;
}

const initialValues = {
  cart: [],
  total: 0,
};

export const useCartStore = create<State & Action>()(
  persist(
    (set) => ({
      ...initialValues,
      addToCart: (cart) =>
        set((state) => {
          const productIndex = state.cart.findIndex((p) => p.id === cart.id);
          if (productIndex !== -1) {
            state.cart[productIndex].quantity += 1;
            return { ...state };
          }
          return { ...state, cart: [...state.cart, { ...cart, quantity: 1 }] };
        }),
      removeFromCart: (cartId) =>
        set((state) => {
          const newCart = state.cart.filter((p) => p.id !== cartId);
          return { ...state, cart: newCart };
        }),
      clearCart: () => set((state) => ({ ...state, cart: [] })),
    }),
    { name: "cart" }
  )
);

// {
//   ...state,
//   cart: [...state.cart, cart],
// }
