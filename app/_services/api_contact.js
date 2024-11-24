const { default: supabase } = require("../_lib/supabase");

async function getContact() {
  let { data: contact, error } = await supabase
    .from("contact")
    .select("*")
    .single();

  if (error) {
    console.error("error in loaded contact");
  }

  return contact;
}

export  {getContact};
