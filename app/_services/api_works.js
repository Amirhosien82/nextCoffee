import supabase from "./supabase";

async function getAllWorks() {
  let { data: works, error } = await supabase.from("works").select("*");
  if (error) {
  }

  return works;
}

export { getAllWorks };
