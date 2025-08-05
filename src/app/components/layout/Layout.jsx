import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main
        style={{
          width: "100%",
          height: "auto",
          marginTop: "100px",
          padding: "0px",
        }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
