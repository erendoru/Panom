import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title> Kardeşler Pano A.Ş</title>
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
