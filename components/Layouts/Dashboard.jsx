import React from "react";
import Header from "../Header";

const Dashboard = ({ children }) => {
  return (
    <div className="bg-zinc-800">
      <Header />

      <div className="p-4 max-w-6xl min-h-[calc(100vh-64px)] mx-auto pb-20 pt-10">
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
