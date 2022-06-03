import React from "react";
import { BiPlus, BiLogInCircle } from "react-icons/bi";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-zinc-900 h-16 flex items-center px-4">
      <Link href="/" passHref>
        <a className="px-4 bg-zinc-900 text-zinc-400 hover:text-blue-400">
          <span className="text-2xl font-bold">NOTES</span>
        </a>
      </Link>

      <div className="ml-auto flex gap-3 items-center">
        <Link href="/create" passHref>
          <a className="px-5 py-2 bg-zinc-700 text-white rounded-full flex justify-center items-center gap-2">
            <BiPlus className="text-xl" />
            <span className="hidden sm:block">New Note</span>
          </a>
        </Link>
        <button
          onClick={signOut}
          className="px-5 py-2 bg-red-500 text-white rounded-full flex justify-center items-center gap-2"
        >
          <BiLogInCircle className="text-xl" />
          <span className="hidden sm:block">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
