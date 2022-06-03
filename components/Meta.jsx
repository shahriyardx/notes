import Head from "next/head";
import React from "react";

const Meta = ({ children }) => {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  );
};

export default Meta;
