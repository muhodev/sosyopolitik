import Head from "next/head";

import { Header } from "components";

function AppLayout(props) {
  return (
    <>
      <Head>
        <title>Sosyopolitik</title>
      </Head>
      <main className="s-layout">
        <Header />
        <div className="s-layout__grid container">{props.children}</div>
      </main>
    </>
  );
}

export default AppLayout;
