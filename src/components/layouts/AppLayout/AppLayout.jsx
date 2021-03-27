export function AppLayout(props) {
  return (
    <main>
      <header></header>
      <div>{props.children}</div>
    </main>
  );
}
