import Image from "next/image";
import styled from "./HoverImg.module.css";

function HoverImg({ image }) {
  return (
    <div className={styled.container_img}>
      <Image src={image} fill alt="backgroung-img" />
    </div>
  );
}

export default HoverImg;
