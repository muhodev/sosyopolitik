import { Header, Auth } from "components";

export function AppLayout(props) {
  return (
    <main>
      <Header />
      <div>{props.children}</div>
      <Auth />
    </main>
  );
}
