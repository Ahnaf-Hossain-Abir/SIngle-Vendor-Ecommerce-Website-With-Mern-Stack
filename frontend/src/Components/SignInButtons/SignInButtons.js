// src/components/SignInButtons.js
"use client";

import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const SignInButtons = () => {

  const handleSignIn = async (provider) => {
    try {
      await signIn(provider, { callbackUrl: '/navbar/user' });
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => handleSignIn('google')}
        className="font-normal text-base border rounded py-4 px-[86px] flex items-center gap-3"
      >
        <FcGoogle className="w-6 h-6" />
        Sign in with Google
      </button>
      <button
        type="button"
        onClick={() => handleSignIn('github')}
        className="font-normal text-base border rounded py-4 px-[86px] flex items-center gap-3 mt-4"
      >
        <FaGithub className="w-6 h-6" />
        Sign in with GitHub
      </button>
    </div>
  );
};

export default SignInButtons;
