import FilterGroups from "@/app/_components/FilterStore/FilterGroups";
import FilterMony from "@/app/_components/FilterStore/FilterMony";
import { getGroups } from "@/app/_services/api_group";
import styled from "./page.module.css";
import { Suspense } from "react";
import Loading from "@/app/_components/Loading/Loading";
import ProductShop from "@/app/_components/ProductShop/ProductShop";

export const metadata = {
  title: "فروشگاه",
};

async function Page({ searchParams }) {
  const { page, group, name } = searchParams;

  const groups = await getGroups();

  return (
    <div className={styled.container_store}>
      <Suspense key={`${page}-${group}`} fallback={<Loading />}>
        <ProductShop group={group} page={page} search={name} />
      </Suspense>
      <div className={styled.filter}>
        <FilterGroups groups={groups} />
        <FilterMony />
      </div>
    </div>
  );
}

export default Page;
