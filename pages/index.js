import Dashboard from "../components/Layouts/Dashboard";
import Note from "../components/Note";

const Home = () => {
  return (
    <Dashboard>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </Dashboard>
  );
};

export default Home;
