//Зачем: create() создаёт store.
import { create } from "zustand";
/* 
//Зачем: persist — “надстройка”, которая автоматически:
сохраняет store в localStorage
восстанавливает его при перезагрузке страницы
*/
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  qty: number;
};
//Мы описываем: что хранится и какие “команды” доступны.
type CartState = {
  //один массив, в котором все позиции корзины.
  items: CartItem[];
  //мы добавляем товар без qty, потому что qty мы выставим сами: если товара нет → qty = 1 / если уже есть → qty += 1
  add: (p: Omit<CartItem, "qty">) => void;
  //удалить позицию по id.
  remove: (id: string) => void;
  //удобно быстро показывать бейдж в хедере (“Cart: 3”).
  totalQty: () => number;
  //
  hydrated: boolean;
  //
  setHydrated: (v: boolean) => void;
};

/* 
Что такое set и get
set — изменить состояние (как dispatch, но проще)
get — прочитать текущее состояние прямо внутри стора (для totalQty и т.п.)
*/
//create<CartState>(...) создаёт store с типами
export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      //initial state
      items: [],
      //Это флаг готовности: “корзина уже восстановилась из localStorage”.
      //hydrated: false = ещё не успели прочитать storage hydrated: true = storage прочитан, state актуален
      hydrated: false,
      //
      setHydrated: (v) => set({ hydrated: v }),
      /* 
        Как работает add: (p) => {}  Берём текущее состояние state.items
        Ищем, есть ли этот товар уже в корзине Если есть:  делаем новый массив map  у нужного товара увеличиваем qty | Если нет: добавляем новый элемент в массив ставим qty: 1
        Почему мы всегда возвращаем новый массив?
        Потому что React/State библиотеки отслеживают изменения по ссылке. Это правило “immutable updates”, как в Redux.
    */
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

    //persist name - это ключ в localStorage.
    {
      name: "cart-v1",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);
