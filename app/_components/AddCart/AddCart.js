"use client";

import { useApi } from "@/app/_lib/ContextApi";
import styled from "./AddCart.module.css"


function AddCart({ id, product }) {
  const { carts, removeCart, insertCart } = useApi();

  const thereIs = carts.some((item) => item.id === id);

  return (
    <div>

    <button
      type="button"
      className={styled.btn}
      onClick={() => {
          thereIs ? removeCart(product) : insertCart(product);
        }}
        >
      {!thereIs ? " افزودن به سبد خرید" : "حذف از سبد خرید"}
    </button>
        </div>
  );
}

export default AddCart;
