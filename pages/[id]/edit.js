import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Dashboard from "../../components/Layouts/Dashboard";
import Meta from "../../components/Meta";

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: note,
    isLoading,
    refetch,
  } = useQuery(["noteEdit", id], () =>
    fetch(`/api/note/${id}`).then((data) => data.json())
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!note) return;
    reset(note);
  }, [note, reset]);

  const onSubmit = async (data) => {
    const message = await fetch(`/api/note/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((data) => data.json());
    if (message.error) {
      toast.error(message.error);
    } else {
      toast.success(message.message);
    }
  };

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
      <Meta>{note?.title}</Meta>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              {...register("title", {
                required: {
                  value: true,
                  message: "Title is required",
                },
              })}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              rows="10"
              {...register("content", {
                required: {
                  value: true,
                  message: "Content is required",
                },
              })}
            />

            <p className="text-red-500">{errors.content?.message}</p>
          </div>

          <div className="mt-5 flex items-center gap-2 flex-wrap">
            <button
              type="submit"
              className="px-5 py-2 bg-zinc-600 text-white font-semibold rounded-full no-underline"
            >
              🚀 Update Note
            </button>

            <button
              type="button"
              className="px-5 py-2 bg-red-500 text-black font-semibold rounded-full"
              onClick={deleteHandler}
            >
              ⚠ Delete
            </button>
          </div>
        </div>
      </form>
    </Dashboard>
  );
};

Edit.requireAuth = true;
export default Edit;
