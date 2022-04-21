import react from "react";
import Container from "../components/Container";
import Head from "next/head";
import UsersAvatar from "../components/UsersAvatar";
import fetch from "isomorphic-fetch";

const About = (props) => {
    console.log(props);
  return (
    <div>
      <Head>
        <title>Next.js - About</title>
      </Head>
      <Container>
        <h1>About</h1>
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original. Fue popularizado en los 60s con la creación de las
          hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
          recientemente con software de autoedición, como por ejemplo Aldus
          PageMaker, el cual incluye versiones de Lorem Ipsum.
        </p>
      </Container>
      <UsersAvatar user={props.users}/>
    </div>
  );
};

About.getInitialProps = async (ctx) => {
    const res = await fetch(`https://reqres.in/api/users`);
    const resJson = await res.json();
    return { users:resJson.data};
  };

export default About;
