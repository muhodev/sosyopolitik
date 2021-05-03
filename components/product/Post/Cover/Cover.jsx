export function Cover(props) {
  return (
    <div className="rounded-xl relative h-24 w-full">
      <div
        className="w-full h-full rounded-xl bg-left bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${props.data})` }}
      ></div>
      <img
        className="h-full w-full opacity-0 absolute inset-0 z-0"
        src={props.data}
        alt=""
      />
    </div>
  );
}
