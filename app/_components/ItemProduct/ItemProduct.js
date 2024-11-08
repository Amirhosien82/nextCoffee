"use client";
import Image from "next/image";
import styled from "./ItemProduct.module.css";
import Link from "next/link";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi2";
import { useApi } from "@/app/_context-api/ContextApi";

function ItemProduct({ product }) {
  const { images, name, price, discount, id } = product;
  const image = images?.at(0);
  const { insertCart } = useApi();
  const nameEdit = name.length < 24 ? name : name.slice(0, 21) + "...";
  return (
    <div className={styled.content}>
      <Link href={`/shop/${id}`} className={styled.contentLink}>
        <div className={styled.container_image}>
          <Image src={image} alt="image product" fill />
        </div>
        <h3 className={styled.name}>{nameEdit}</h3>
        <div className={styled.content_price}>
          <h3 className={discount > 0 ? styled.price : styled.discount}>
            {price},000 تومان
          </h3>
          {discount > 0 && (
            <h3 className={styled.discount}>{price - discount},000 تومان</h3>
          )}
        </div>
      </Link>
      <div className={styled.actions}>
        <div className={styled.container_action}>
          <button
            type="button"
            onClick={() => {
              const cart = {
                id: product.id,
                images: product.images,
                name: product.name,
                price: product.price,
                discount: product.discount,
                number:product.number,
                count: 1,
              };
              insertCart(cart);
            }}
          >
            <HiOutlineShoppingBag size={17} />
          </button>
          <h3>افزودن به سبد خرید</h3>
        </div>
        <div className={styled.container_action}>
          <button type="button">
            <HiOutlineHeart size={17} />
          </button>
          <h3>افزودن به علاقه مندی ها</h3>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
