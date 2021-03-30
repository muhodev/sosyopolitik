export function Card(props) {
  return (
    <div className="w-full bg-white rounded-md border py-4 px-5">
      {props.children}
    </div>
  );
}
