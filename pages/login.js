import React from "react";
import { BsGithub } from "react-icons/bs";
import { signIn } from "next-auth/react";
import Meta from "../components/Meta";

const login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Meta>Login</Meta>
      <button
        onClick={() =>
          signIn("github", {
            callbackUrl: "/",
          })
        }
        className="px-7 py-3 text-lg rounded-full bg-zinc-600 text-white flex items-center gap-2 hover:bg-zinc-500 transition-all"
      >
        <BsGithub />
        <span>Login</span>
      </button>
    </div>
  );
};

export default login;
