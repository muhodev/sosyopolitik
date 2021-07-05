import { Header } from "components";

export function AppLayout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
