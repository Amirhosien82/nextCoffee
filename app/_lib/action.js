"use server";

import { revalidatePath } from "next/cache";
import supabase from "./supabase";
import { signIn } from "../auth";

export async function addComment(formData) {
  const id = formData.get("id");
  const name = formData.get("name");
  const comment = formData.get("comment");
  const comments = JSON.parse(formData.get("comments"));

  const newComments = [...comments, { name, comment }];

  const { data, error } = await supabase
    .from("products")
    .update({ comments: newComments })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error.message);
    throw new Error("could not add comment to product");
  }

  revalidatePath(`/shop/${id}`);
}

export async function actionSignIn() {
  await signIn("google", { redirectTo: "/" });
}
