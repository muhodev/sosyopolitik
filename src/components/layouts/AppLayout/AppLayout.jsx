import { Header } from "components";

export function AppLayout(props) {
  return (
    <main>
      <Header />
      <div>{props.children}</div>
    </main>
  );
}
