import ItemProduct from "../_components/ItemProduct/ItemProduct";
import { getProducts } from "../_services/api_shop";
import styled from "./page.module.css";
async function Page({ searchParams }) {
  const { page } = searchParams;
  const products = await getProducts(page);

  return (
    <div className={styled.container_store}>
      <div className={styled.products}>
        {products.map((item) => (
          <ItemProduct key={item.id} product={item} />
        ))}
      </div>
      <div className={styled.filter}></div>
    </div>
  );
}

export default Page;
