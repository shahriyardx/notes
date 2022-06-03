import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-zinc-900 h-16 flex items-center px-4">
      <Link href="/" passHref>
        <a className="h-16 px-4 bg-zinc-900 flex items-center justify-between text-zinc-400 hover:text-blue-400">
          <span className="text-2xl font-bold">NOTES</span>
          <BiChevronLeft className="text-3xl text-red-400 cursor-pointer md:hidden" />
        </a>
      </Link>

      <div className="ml-auto flex gap-3 items-center">
        <Link href="/create" passHref>
          <a className="px-5 py-2 bg-white text-black rounded-full">
            🧾 New Note
          </a>
        </Link>
        <button
          onClick={signOut}
          className="px-5 py-2 bg-red-500 text-white rounded-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
