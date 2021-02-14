import Head from "next/head";

import { Sidebar } from "components";

function AppLayout(props) {
  return (
    <>
      <Head>
        <title>Sosyopolitik</title>
      </Head>
      <main className="s-layout">
        <div className="s-layout__grid container">
          <Sidebar />
          {props.children}
          <aside></aside>
        </div>
      </main>
    </>
  );
}

export default AppLayout;
