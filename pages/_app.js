import "../styles/globals.css";
import RequireAuth from "../components/RequireAuth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          {Component.requireAuth ? (
            <RequireAuth>
              <Component {...pageProps} />
            </RequireAuth>
          ) : (
            <Component {...pageProps} />
          )}
        </QueryClientProvider>
      </SessionProvider>
      <Toaster />
    </>
  );
}

export default MyApp;
