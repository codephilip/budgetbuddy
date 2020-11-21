import Head from "next/head";
import { Container } from "semantic-ui-react";

import Header from "./Header";
import HeadContent from "./HeadContent";

function Layout({ children, user }) {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel="stylesheet" type="text/css" href="/static/styles.css" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
<<<<<<< HEAD
        <title>Budget Buddy</title>
      </Head>
      <Header user={user} />
      <Container style={{ paddingTop: "1em" }}>
=======
        <title>ReactReserve</title>
      </Head>
      <Header user={user} />
      <Container text style={{ paddingTop: "1em" }}>
>>>>>>> d10a14607b0a56bbb0d1729d89f9f42016b96df4
        {children}
      </Container>
    </>
  );
}

export default Layout;
