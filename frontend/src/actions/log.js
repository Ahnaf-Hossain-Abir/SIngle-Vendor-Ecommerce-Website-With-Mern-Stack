import { revalidatePath } from "next/cache.js";
import { signIn, signOut } from "next-auth/react";

export const login = async(provider)=>{
    await signIn(provider, {redirectTo: "/"});
    revalidatePath("/")
  }
  export const logout = async()=>{
    await signOut(provider, {redirectTo: "/"});
    revalidatePath("/")
  }
  