"use client";
import Image from "next/image";
import { useApi } from "../_context-api/ContextApi";
import styled from "./page.module.css";
import Counter from "../_components/Counter/Counter";
import { HiOutlineTrash } from "react-icons/hi2";

function Page() {
  const { carts, changeCountCart, removeCart } = useApi();

  return (
    <div className={styled.container}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>محصول</th>
            <th>قیمت</th>
            <th>تعداد</th>
            <th>قیمت کل</th>
          </tr>
        </thead>
        {carts.map((cart) => {
          return (
            <tr key={cart.id}>
              <td>
                <button
                  className={styled.btnTrash}
                  type="button"
                  onClick={() => {
                    removeCart(cart);
                  }}
                >
                  <HiOutlineTrash size={25} />
                </button>
              </td>
              <td>
                <Image
                  src={cart.images.at(0)}
                  width={150}
                  height={150}
                  alt="image"
                  style={{ borderRadius: "15px" }}
                />
              </td>
              <td>{cart.name}</td>
              <td>{cart.price - cart.discount},000</td>
              <td>
                <Counter
                  number={cart.count}
                  maxCount={cart.number}
                  handler={(count) => {
                    if (count === 0) {
                      removeCart(cart);
                    } else {
                      changeCountCart(cart, count);
                    }
                  }}
                />
              </td>
              <td>{cart.count * (cart.price - cart.discount)},000</td>
            </tr>
          );
        })}
      </table>

      <div className={styled.container_sm}>
        {carts.map((cart) => {
          return (
            <div className={styled.container_cart_sm} key={cart.id}>
              <div className={styled.images_sm}>
                <Image
                  src={cart.images.at(0)}
                  width={100}
                  height={100}
                  alt="image"
                  style={{ borderRadius: "15px" }}
                />
                <button
                  className={styled.btnTrash}
                  type="button"
                  onClick={() => {
                    removeCart(cart);
                  }}
                >
                  <HiOutlineTrash size={25} />
                </button>
              </div>
              <div>
                <h3>محصول</h3>
                <h3>{cart.name}</h3>
              </div>
              <div>
                <h3>قیمت</h3>
                <h3>{cart.price - cart.discount},000</h3>
              </div>
              <div>
                <h3>تعداد</h3>
                <Counter
                  number={cart.count}
                  maxCount={cart.number}
                  handler={(count) => {
                    if (count === 0) {
                      removeCart(cart);
                    } else {
                      changeCountCart(cart, count);
                    }
                  }}
                />
              </div>
              <div>
                <h3>قیمت کل</h3>
                <h3>{cart.count * (cart.price - cart.discount)},000</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
