import "../styles/globals.css";
import RequireAuth from "../components/RequireAuth";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {Component.requireAuth ? (
        <RequireAuth>
          <Component {...pageProps} />
        </RequireAuth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

export default MyApp;
