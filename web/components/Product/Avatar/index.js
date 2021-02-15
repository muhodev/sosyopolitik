import DefaultAvatar from "./DefaultAvatar";

function Avatar(props) {
  return (
    <div className={`s-avatar s-avatar--${props.size || "default"}`}>
      {props.src ? <img src={props.src} alt="" /> : <DefaultAvatar />}
    </div>
  );
}

export default Avatar;
