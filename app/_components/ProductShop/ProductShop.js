import ItemProduct from "@/app/_components/ItemProduct/ItemProduct";
import Pagination from "@/app/_components/Pagination/Pagination";
import { getProducts } from "@/app/_services/api_product";
import styled from "./ProductShop.module.css";

async function ProductShop({ page, group, search }) {
  const products = await getProducts(page, group, search);
  return (
    <div className={styled.container_pagination}>
      <div className={styled.products}>
        {products.map((item) => (
          <ItemProduct key={item.id} product={item} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default ProductShop;
