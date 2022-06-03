import React from "react";
import { useForm } from "react-hook-form";
import Dashboard from "../components/Layouts/Dashboard";

const Create = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Dashboard>
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

          <div className="mt-5">
            <button className="px-7 py-3 bg-white text-black font-bold text-lg">
              🚀 Create Note
            </button>
          </div>
        </div>
      </form>
    </Dashboard>
  );
};

Create.requireAuth = true;
export default Create;
