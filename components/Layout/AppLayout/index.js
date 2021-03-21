import Head from "next/head";

import { Header } from "components";

function AppLayout(props) {
  return (
    <>
      <Head>
        <title>Sosyopolitik | Oku, üret, paylaş.</title>
      </Head>
      <main className="bg-gray-50 text-gray-900">
        <Header />
        <div className="container mx-auto">{props.children}</div>
      </main>
    </>
  );
}

export default AppLayout;
