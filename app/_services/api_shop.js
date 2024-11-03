import supabase from "./supabase";

async function getProducts(page = 1) {
  const end = page * 9;
  const start = end - 9;

  let { data: products, error } = await supabase
    .from("products")
    .select("*", { count: true })
    .range(start, end - 1);

  if (error) {
    console.error("error in loaded products");
    throw new error("error in loaded products");
  }
  return products;
}

export { getProducts };
