import react from "react";
import Container from "../components/Container";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import Users from "../components/Users";

const Index = (props) => {
  return (
    <div>
      <Head>
        <title>Next.js - Home</title>
      </Head>
      <Container>
        <h1>Users</h1>
        <Users users={props.data}/>
      </Container>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return { data: data };
};

export default Index;
