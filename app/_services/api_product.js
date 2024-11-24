import { notFound } from "next/navigation";
import supabase from "../_lib/supabase";

async function getProducts(page = 1, group = 0, search) {
  const end = page * 9;
  const start = end - 9;

  if (Number(group) === 0) {
    let query = supabase
      .from("products")
      .select("*", { count: true })
      .range(start, end - 1);
    if (search) {
      query = query.ilike("name", `%${search}%`);
    }

    let { data: products, error } = await query;

    if (error) {
      console.error("error in loaded products");
    }
    return products;
  } else {
    let query = supabase
      .from("products")
      .select("*", { count: true })
      .range(start, end - 1)
      .eq("group", Number(group));
    if (search) {
      query = query.ilike("name", `%${search}%`);
    }
    let { data: products, error } = await query;

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

async function getProductSearch(text) {
  let { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("name", text)
    .single();

  if (error) {
    console.error("error in loaded product");
    notFound();
  }
  return product;
}

export { getProducts, getProduct, getProductSearch };
