const { default: supabase } = require("./supabase");

async function getEspresso() {
  let { data, error } = await supabase.from("espresso").select("*");
  if (error) {
    console.error("error in loaded espresso");
  }
  return data;
}

async function getIceCream() {
  let { data, error } = await supabase.from("iceCream").select("*");
  if (error) {
    console.error("error in loaded iceCream");
  }
  return data;
}

async function getSamuti() {
  let { data, error } = await supabase.from("samuti").select("*");
  if (error) {
    console.error("error in loaded samuti");
  }
  return data;
}

async function getStylishBar() {
  let { data, error } = await supabase.from("stylishBar").select("*");
  if (error) {
    console.error("error in loaded stylishBar");
  }
  return data;
}

export { getEspresso, getIceCream, getSamuti, getStylishBar };
