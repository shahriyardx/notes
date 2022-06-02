import React from "react";

const Note = ({ className, ...props }) => {
  return (
    <div
      className={` p-4 bg-zinc-600 hover:bg-zinc-500 cursor-pointer rounded-md ${className}`}
      {...props}
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
    </div>
  );
};

export default Note;
