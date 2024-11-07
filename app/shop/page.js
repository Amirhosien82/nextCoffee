import FilterGroups from "../_components/FilterStore/FilterGroups";
import FilterMony from "../_components/FilterStore/FilterMony";
import ItemProduct from "../_components/ItemProduct/ItemProduct";
import Pagination from "../_components/Pagination/Pagination";
import { getGroups } from "../_services/api_group";
import { getProducts } from "../_services/api_product";
import styled from "./page.module.css";

export const metadata = {
  title: "فروشگاه",
};

async function Page({ searchParams }) {
  const { page, group } = searchParams;
  await getProducts(page);

  const [products, groups] = await Promise.all([
    getProducts(page, group),
    getGroups(),
  ]);

  return (
    <div className={styled.container_store}>
      <div className={styled.container_pagination} >
        <div className={styled.products}>
          {products.map((item) => (
            <ItemProduct key={item.id} product={item} />
          ))}
        </div>
        <Pagination />
      </div>
      <div className={styled.filter}>
        <FilterGroups groups={groups} />
        <FilterMony />
      </div>
    </div>
  );
}

export default Page;
