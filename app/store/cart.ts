import { create } from "zustand";

import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  qty: number;
};

type CartState = {
  items: CartItem[];

  add: (p: Omit<CartItem, "qty">) => void;

  remove: (id: string) => void;

  totalQty: () => number;

  hydrated: boolean;

  setHydrated: (v: boolean) => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      hydrated: false,

      setHydrated: (v) => set({ hydrated: v }),

      add: (p) => {
        set((state) => {
          const existing = state.items.find((i) => i.id === p.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === p.id ? { ...i, qty: i.qty + 1 } : i,
              ),
            };
          }
          return { items: [...state.items, { ...p, qty: 1 }] };
        });
      },
      remove: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      totalQty: () => get().items.reduce((sum, i) => sum + i.qty, 0),
    }),

    {
      name: "cart-v1",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);
