import Dashboard from "../components/Layouts/Dashboard";
import Note from "../components/Note";
import { useQuery } from "react-query";
import Loading from "../components/Loading";
import Link from "next/link";

const Home = () => {
  const { data: notes, isLoading } = useQuery("notes", () =>
    fetch("/api/note").then((data) => data.json())
  );

  return (
    <Dashboard>
      {isLoading && <Loading />}
      {notes?.length < 1 && (
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-4xl text-zinc-300 text-center font-semibold">
            You have no note
          </h1>

          <Link href="/create" passHref>
            <a className="px-7 py-3 font-semibold bg-white text-black rounded-full">
              🧾 Create One
            </a>
          </Link>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </Dashboard>
  );
};

Home.requireAuth = true;
export default Home;
