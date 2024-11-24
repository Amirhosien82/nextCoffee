import supabase from "../_lib/supabase";

async function getAllWorks() {
  let { data: works, error } = await supabase.from("works").select("*");
  if (error) {
    console.error("error in loaded works");
  }

  return works;
}

export { getAllWorks };
