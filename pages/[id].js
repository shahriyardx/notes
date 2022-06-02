import { useRouter } from "next/router";
import React from "react";
import Dashboard from "../components/Layouts/Dashboard";

const View = () => {
  const router = useRouter();
  const { id } = router.query;
  return <Dashboard>Hello {id}</Dashboard>;
};

export default View;
