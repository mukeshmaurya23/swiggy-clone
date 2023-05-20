import { createContext, useState } from "react";

const cartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.card.info.id !== product.id));
    setCount((prevCount) => prevCount - 1);
  };
  //how to remove cart from cartItem

  return (
    <cartContext.Provider
      value={{ cart, addToCart, removeFromCart, setCart, count }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default cartContext;
