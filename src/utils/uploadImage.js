import { supabase } from "./supabaseClient";

export async function uploadImage(file) {
  const fileName = `${crypto.randomUUID()}-${file.name}`;
  
  
  const { data, error } = await supabase.storage
    .from("images") 
    .upload(fileName, file, { contentType: file.type });

  if (error) throw new Error("Image upload failed: " + error.message);


  const { data: urlData } = supabase.storage.from("images").getPublicUrl(fileName);
  const imageUrl = urlData.publicUrl;

  return imageUrl;
}
