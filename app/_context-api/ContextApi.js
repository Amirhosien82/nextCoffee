"use client";
import { createContext, useContext, useState } from "react";

const ContextProvider = createContext();

function ContextApi({ children }) {
  const [carts, setCarts] = useState(localStorage.getItem("carts") || []);

  //function carts
  
  function clearCarts() {
    setCarts([]);
    localStorage.setItem("carts", JSON.stringify([]));
  }
  function insertCart(cart) {
    setCarts((oldCarts) => {
      if (oldCarts.some((item) => item.id === cart.id)) {
        return oldCarts;
      }
      const newCarts = [...oldCarts, cart];
      localStorage.setItem("carts", JSON.stringify(newCarts));
      return newCarts;
    });
  }

  function removeCart(cart) {
    setCarts((oldCarts) => {
      const newCarts = oldCarts.filter((item) => item.id !== cart.id);
      localStorage.setItem("carts", JSON.stringify(newCarts));
      return newCarts;
    });
  }

  function plusCountCart(cart) {
    setCarts((oldCarts) => {
      const newCarts = oldCarts.map((item) => {
        if (item.id === cart.id) {
          const newCart = { ...cart, count: cart.count + 1 };

          return newCart;
        }
        return item;
      });
      localStorage.setItem("carts", JSON.stringify(newCarts));
      return newCarts;
    });
  }

  function minusCountCart(cart) {
    setCarts((oldCarts) => {
      const newCarts = oldCarts.map((item) => {
        if (item.id === cart.id) {
          const newCart = { ...cart, count: cart.count - 1 };

          return newCart;
        }
        return item;
      });
      localStorage.setItem("carts", JSON.stringify(newCarts));
      return newCarts;
    });
  }


  return (
    <ContextProvider.Provider
      value={{
        carts,
        clearCarts,
        insertCart,
        removeCart,
        plusCountCart,
        minusCountCart,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

function useApi() {
  const data = useContext(ContextProvider);
  return data;
}

export { useApi };
export default ContextApi;
