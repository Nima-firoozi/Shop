"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      basket: [],
      addPro: (data) => {
        const temp = get().basket.find((item) => item.id === data.id);
        if (temp) {
          return false;
        } else {
          set((state) => ({
            basket: [...state.basket, { ...data, count: 1 }],
          }));
          return true;
        }
      },
      del: (id) => {
        window.confirm("آیا مطمئن هستید؟") &&
          set((state) => ({
            basket: state.basket.filter((item) => item.id !== id),
          }));
      },

      plus: (id) => {
        const target = get().basket.findIndex((item) => item.id === id);
        if (get().basket[target].count + 1 > get().basket[target].n) {
          return false;
        } else {
          set((state) => ({
            basket: state.basket.map((item) =>
              item.id === id ? { ...item, count: item.count + 1 } : item
            ),
          }));
          return true;
        }
      },

      minus: (id) => {
        const target = get().basket.findIndex((item) => item.id === id);
        if (get().basket[target].count === 1) {
          get().del(id);
        } else {
          set((state) => ({
            basket: state.basket.map((item) =>
              item.id === id ? { ...item, count: item.count - 1 } : item
            ),
          }));
        }
      },
    }),
    {
      name: "basket-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useStore;
