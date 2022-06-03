import React from "react";
import Link from "next/link";

const Note = ({ className }) => {
  return (
    <Link href="/something">
      <a
        className={` p-4 bg-zinc-700 hover:bg-zinc-600 rounded-md ${className}`}
      >
        <h1 className="truncate text-xl font-semibold text-zinc-200">
          The title might be big but thats not a big deal
        </h1>

        <p className="text-sm text-zinc-400 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          repudiandae, delectus voluptate hic vel aut repellat dolorem? Cum vel
          sequi vitae aliquid? Totam veniam, adipisci magni ipsa quas numquam
          illum?
        </p>

        <p className="text-xs mt-3 text-yellow-300">Updated 1 hours ago</p>
      </a>
    </Link>
  );
};

export default Note;
