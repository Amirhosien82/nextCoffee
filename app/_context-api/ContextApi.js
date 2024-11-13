"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ContextProvider = createContext();

function ContextApi({ children }) {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    setCarts(JSON.parse(localStorage.getItem("carts")) || []);
  }, []);

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

  function changeCountCart(cart, count) {
    setCarts((oldCarts) => {
      const newCarts = oldCarts.map((item) => {
        if (item.id === cart.id) {
          const newCart = { ...cart, count: count };

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
        changeCountCart,
        // minusCountCart,
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
