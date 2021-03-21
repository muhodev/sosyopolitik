import DefaultAvatar from "./DefaultAvatar";

function Avatar(props) {
  return (
    <div className={props.size === "medium" ? "w-8" : "w-6"}>
      {props.src ? (
        <img src={props.src} alt="" className="w-full rounded-full" />
      ) : (
        <DefaultAvatar />
      )}
    </div>
  );
}

export default Avatar;
