import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Dashboard from "../../components/Layouts/Dashboard";

const View = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: note, isLoading } = useQuery("note", () =>
    fetch(`/api/note/${id}`).then((data) => data.json())
  );

  const deleteHandler = async () => {
    const message = await fetch(`/api/note/${id}`, {
      method: "DELETE",
    }).then((data) => data.json());
    if (message.error) {
      toast.error(message.error);
    } else {
      toast.success(message.message);
      router.push("/");
    }
  };

  return (
    <Dashboard>
      {note && (
        <div className="prose prose-invert mx-auto">
          <h1>{note.title}</h1>

          <div>{note.content}</div>

          <div className="mt-10 flex items-center gap-5">
            <Link href={`/${id}/edit`} passHref>
              <a className="px-7 py-3 bg-white text-black font-bold rounded-full text-lg no-underline">
                ✒ Edit Note
              </a>
            </Link>

            <button
              type="button"
              className="px-7 py-3 bg-red-500 text-black font-bold text-lg rounded-full"
              onClick={deleteHandler}
            >
              ⚠ Delete
            </button>
          </div>
        </div>
      )}
    </Dashboard>
  );
};

View.requireAuth = true;
export default View;
