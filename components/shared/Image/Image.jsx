export function Image(props) {
  return (
    <img className="w-full flex items-center" src={props.src} alt={props.alt} />
  );
}
