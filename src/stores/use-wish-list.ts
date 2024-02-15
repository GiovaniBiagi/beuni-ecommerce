import { create } from "zustand";

import { persist } from "zustand/middleware";
import { Product } from "_/services/products/products.schema";

type Wish = Product;

type State = {
  wishes: Wish[];
};

interface Action {
  addWish: (wish: Wish) => void;
  removeWish: (wishId: number) => void;
  clearWishes: () => void;
}

const initialValues = {
  wishes: [],
};

export const useWishListStore = create<State & Action>()(
  persist(
    (set) => ({
      ...initialValues,
      addWish: (wish) =>
        set((state) => ({
          ...state,
          wishes: [...state.wishes, wish],
        })),
      removeWish: (wishId) =>
        set((state) => ({
          ...state,
          wishes: state.wishes.filter((w) => w.id !== wishId),
        })),
      clearWishes: () => set((state) => ({ ...state, wishes: [] })),
    }),
    { name: "wish-list-store" }
  )
);
