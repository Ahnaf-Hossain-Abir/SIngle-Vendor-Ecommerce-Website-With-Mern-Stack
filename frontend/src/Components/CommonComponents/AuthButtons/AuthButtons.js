"use client"; // Add this directive to make it a Client Component

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const AuthButtons = () => {
  const router = useRouter();

  const handleLogin = async (provider) => {
    try {
      await signIn(provider, { redirect: false });
      router.push("/"); // Redirect to home
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      router.push("/"); // Redirect to home
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <button onClick={() => handleLogin("github")}>Login with GitHub</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AuthButtons;
