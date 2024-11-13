import Loading from "@/app/_components/Loading/Loading";
import { getGroupName } from "@/app/_services/api_group";
import { getProduct } from "@/app/_services/api_product";
import { Suspense } from "react";

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
    <Suspense fallback={<Loading />}>
      <div></div>;
    </Suspense>
  );
}

export default Page;
