"use server";

import { cookies } from "next/headers";
import { createClient } from "../../utils/supabase/server";

export async function addTweet(formData: FormData) {
  console.log("hello");
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase
    .from("users")
    .insert([{ firstname: "someValue", lastname: "otherValue", link_id: null }])
    .select();
  if (data) {
    console.log(data);
  } else {
    console.log(error);
  }
}
