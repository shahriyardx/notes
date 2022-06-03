import Dashboard from "../components/Layouts/Dashboard";
import Note from "../components/Note";
import { useQuery } from "react-query";

const Home = () => {
  const { data: notes, isLoading } = useQuery("notes", () =>
    fetch("/api/note").then((data) => data.json())
  );

  return (
    <Dashboard>
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
