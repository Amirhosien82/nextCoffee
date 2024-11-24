import supabase from "../_lib/supabase";

async function getGroups() {
  let { data: groups, error } = await supabase.from("groups").select("*");
  if (error) {
    console.error("error in loaded groups");
  }
  return groups;
}

async function getGroupName(id) {
  let { data: group, error } = await supabase
    .from("groups")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error) {
    console.error("error in loaded group name");
  }
  return group;
}

export { getGroups, getGroupName };
