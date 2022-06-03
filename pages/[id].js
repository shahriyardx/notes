import { useRouter } from "next/router";
import React from "react";
import Dashboard from "../components/Layouts/Dashboard";

const View = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Dashboard>
      <div className="prose prose-invert mx-auto">
        <h1>This is title</h1>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            explicabo quis eos. Ipsum ratione eveniet voluptatibus dolore!
            Dolorem laboriosam quam harum. Ea nisi fuga atque corrupti
            perspiciatis quidem, perferendis cumque.
          </p>

          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>At voluptatibus nobis doloremque nisi!</li>
            <li>Ullam, cum? Iusto, dicta veniam!</li>
            <li>Minima dolore enim odit minus.</li>
            <li>Unde numquam earum cupiditate tenetur.</li>
          </ul>
        </div>

        <div className="mt-5">
          <button className="px-7 py-3 bg-white text-black font-bold rounded-full text-lg">
            ✒ Edit Note
          </button>
        </div>
      </div>
    </Dashboard>
  );
};

View.requireAuth = true;
export default View;
