import Loading from "@/app/_components/Loading/Loading";
import { getGroupName } from "@/app/_services/api_group";
import { getProduct } from "@/app/_services/api_product";
import { Suspense } from "react";
import styled from "./page.module.css";
import ImagesProduct from "@/app/_components/ImagesProduct/ImagesProduct";
import AddCart from "@/app/_components/AddCart/AddCart";
import Comments from "@/app/_components/Comments/Comments";

export async function generateMetadata({ params }) {
  const { productId: id } = params;
  const { name } = await getProduct(id);

  return { title: name };
}

async function Page({ params }) {
  const { productId: id } = params;
  const {
    name,
    price,
    discount,
    number,
    group: idGroup,
    images,
    comments,
    caption,
    line_caption,
  } = await getProduct(id);

  const { name: group } = await getGroupName(idGroup);

  return (
    <div className={styled.container}>
      <div className={styled.product}>
        <div className={styled.container_images}>
          <ImagesProduct images={images} />
        </div>
        <div className={styled.container_discription}>
          <h3 className={styled.name}>{name}</h3>
          {!discount ? (
            <h3 className={styled.discount}>{price},000 تومان</h3>
          ) : (
            <>
              <h3 className={styled.price}>{price},000 تومان</h3>
              <h3 className={styled.discount}>{price - discount},000 تومان</h3>
            </>
          )}
          <p className={styled.line_caption}>{line_caption}</p>
          <AddCart
            id={id}
            product={{ name, price, number, discount, images, id, count: 1 }}
          />
          <p className={styled.group}>
            دسته: <span>{group}</span>
          </p>
        </div>
      </div>
      <Comments comments={comments} caption={caption} id={id} />
    </div>
  );
}

export default Page;
