import { notFound } from "next/navigation";
import supabase from "./supabase";

async function getProducts(page = 1, group = 0) {
  const end = page * 9;
  const start = end - 9;

  if (Number(group) === 0) {
    let { data: products, error } = await supabase
      .from("products")
      .select("*", { count: true })
      .range(start, end - 1);

    if (error) {
      console.error("error in loaded products");
    }
    return products;
  } else {
    let { data: products, error } = await supabase
      .from("products")
      .select("*", { count: true })
      .range(start, end - 1)
      .eq("group", Number(group));

    if (error) {
      console.error("error in loaded products");
    }
    return products;
  }
}

async function getProduct(id) {
  let { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error) {
    console.error("error in loaded product");
    notFound();
  }
  return product;
}

export { getProducts, getProduct };
