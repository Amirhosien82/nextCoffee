"use client";
import Image from "next/image";
import { useApi } from "@/app/_context-api/ContextApi";
import styled from "./page.module.css";
import Counter from "@/app/_components/Counter/Counter";
import { HiOutlineTrash } from "react-icons/hi2";
import Link from "next/link";
import Empity from "../_components/Empity/Empity";

// export const metadata = { title: "سبد خرید" };

function Page() {
  const { carts, changeCountCart, removeCart } = useApi();

  if (carts.length === 0) {
    return (
      <div className={styled.container}>
        <Empity text="سبد خرید شما در حال حاضر خالی است." />
      </div>
    );
  }

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
                <Link href={`shop/${cart.id}`}>
                  <Image
                    src={cart.images.at(0)}
                    width={150}
                    height={150}
                    alt="image"
                    style={{ borderRadius: "15px" }}
                  />
                </Link>
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
