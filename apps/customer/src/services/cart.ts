import { supabase } from "./supabase";

export async function getCart(userId: string) {
  const { data, error } = await supabase
    .from("cart")
    .select("*")
    .eq("user_id", userId);

  if (error) throw error;

  return data;
}

export async function addToCart(item: any) {
  const { data, error } = await supabase
    .from("cart")
    .insert(item)
    .select();

  if (error) throw error;

  return data;
}