"use client";

import Image from "next/image";
import { useState } from "react";
import styled from "./ImagesProduct.module.css";
function ImagesProduct({ images }) {
  const [image, setImage] = useState(images.at(0));

  const imagesSmall = images.filter((img) => img !== image);

  return (
    <div className={styled.container}>
      <div className={styled.container_image}>
        <Image src={image} fill alt="" />
      </div>
      {images.length > 0 && (
        <div className={styled.container_smallImage}>
          {imagesSmall.map((item, index) => (
            <button
              key={index}
              className={styled.image_small}
              onClick={() => setImage(item)}
            >
              <Image src={item} fill alt="image" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImagesProduct;
