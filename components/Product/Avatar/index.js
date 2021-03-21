import DefaultAvatar from "./DefaultAvatar";

function Avatar(props) {
  let size = 6;

  if (props.size === "medium") {
    size = 8;
  }
  return (
    <div className={`w-${size}`}>
      {props.src ? (
        <img src={props.src} alt="" className="w-full w rounded-full" />
      ) : (
        <DefaultAvatar />
      )}
    </div>
  );
}

export default Avatar;
