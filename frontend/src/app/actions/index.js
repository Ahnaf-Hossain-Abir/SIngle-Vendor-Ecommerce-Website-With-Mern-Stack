"use server"

import { signIn } from "@/auth";

export async function doSocialLogin(formData) {
    const action = formData.get("action");
    await signIn(action, {redirectTo: "/navbar/user"} );
    console.log(action);
}

export async function doLogout() {

}