import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const SignIn = () => {
  return (
    <div className="flex  items-center justify-center flex-col w-screen h-screen bg-black">
      <Image src="/images/logo.jpg" width={300} height={300} alt="image" />
      <button
        onClick={() => {
          signIn();
        }}
        className="bg-white uppercase rounded-md text-black text-lg font-bold px-8 py-3"
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
