import React from "react";
import Link from "next/link";
import moment from "moment";

const Note = ({ note }) => {
  return (
    <Link href={`/${note._id}`}>
      <a className="p-4 bg-zinc-700 hover:bg-zinc-600 rounded-md">
        <h1 className="truncate text-xl font-semibold text-zinc-200">
          {note.title}
        </h1>

        <p className="text-sm text-zinc-400 mt-2">
          {note.content.slice(0, 100)}...
        </p>

        <p className="text-xs mt-3 text-yellow-300">
          {moment(note.updatedAt).fromNow()}
        </p>
      </a>
    </Link>
  );
};

export default Note;
