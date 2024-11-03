"use client";
import Image from "next/image";
import styled from "./ItemProduct.module.css";
import Link from "next/link";

function ItemProduct({ product }) {
  const { images, name, price, discount, id } = product;
  const image = images?.at(0);

  const nameEdit = name.length < 24 ? name : name.slice(0, 21) + "...";
  return (
    <Link href={`/shop/${id}`} className={styled.content}>
      <div className={styled.container_image}>
        <Image src={image} alt="image product" fill />
        <button type="button" className={styled.btn_add}>افزودن به سبد خرید</button>
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
  );
}

export default ItemProduct;
