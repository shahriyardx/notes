import React from "react";
import { BiChevronLeft, BiMenu } from "react-icons/bi";
import Note from "../Note";

const Dashboard = ({ children }) => {
  return (
    <div className="bg-zinc-700">
      <div className="bg-zinc-900 h-16 flex items-center px-4">
        <div className="h-16 px-4 bg-zinc-900 flex items-center justify-between text-zinc-400">
          <span className="text-2xl font-bold">NOTES</span>
          <BiChevronLeft className="text-3xl text-red-400 cursor-pointer md:hidden" />
        </div>

        <div className="ml-auto">
          <button className="px-5 py-2 bg-red-500 text-white rounded-full">
            Logout
          </button>
        </div>
      </div>

      <div className="p-4 max-w-6xl mx-auto">{children}</div>
    </div>
  );
};

export default Dashboard;
