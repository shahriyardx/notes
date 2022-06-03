import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="py-10 flex items-center justify-center">
      <div className="flex gap-3 items-center">
        <BiLoaderAlt className="text-2xl animate-spin" />
        <span className="text-lg font-semibold">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
