import React from "react";
import Link from "next/link";

const Note = ({ note }) => {
  return (
    <Link href="/something">
      <a className="p-4 bg-zinc-700 hover:bg-zinc-600 rounded-md">
        <h1 className="truncate text-xl font-semibold text-zinc-200">
          {note.title}
        </h1>

        <p className="text-sm text-zinc-400 mt-2">
          {note.content.slice(0, 100)}...
        </p>

        <p className="text-xs mt-3 text-yellow-300">Updated 1 hours ago</p>
      </a>
    </Link>
  );
};

export default Note;
