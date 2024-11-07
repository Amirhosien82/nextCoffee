import { getGroupName } from "@/app/_services/api_group";
import { getProduct } from "@/app/_services/api_product";

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

  return <div></div>;
}

export default Page;
