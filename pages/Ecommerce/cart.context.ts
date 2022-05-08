import { createContext } from "react";

export type CartItem = {
  id: number;
  title: string;
  poster_uri: string;
  quantity: number;
  price: number;
};

export type Cart = {
  items: CartItem[];
};

export const CartContext = createContext<{
  cart: Cart;
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
}>({
  cart: { items: [] },
  addItem: () => {},
  removeItem: () => {},
});
