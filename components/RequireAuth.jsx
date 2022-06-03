import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const RequireAuth = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(session);

  if (status === "loading") {
    return <p>Loadng...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/login");
  }
  return children;
};

export default RequireAuth;
