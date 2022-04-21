import React from "react";
import Navigation from "./Navigation";
import Head from "next/head";

const Container = (props) => (
  <div>
    <Head>
      <title>Next.js Project</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"
      />
    </Head>
    <Navigation />
    <div className="container p-4">
      {/* pasarle componentes */}
      {props.children}
    </div>
  </div>
);

export default Container;
