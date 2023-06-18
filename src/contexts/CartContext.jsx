import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: (id) => {},
  removeFromCart: (id) => {}
});
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeFromCart = (item) => {
    const updatedCart = cart.filter((product) => product.name !== item.name);
    setCart(updatedCart);
  };
  const cartContext = { cart, addToCart, removeFromCart };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
