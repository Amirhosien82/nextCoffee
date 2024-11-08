import supabase from "./supabase";

async function getAllWorks() {
  let { data: works, error } = await supabase.from("works").select("*");
  if (error) {
    console.error("error in loaded works");
  }

  return works;
}

export { getAllWorks };
