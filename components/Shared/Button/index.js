function Button(props) {
  return (
    <button
      className={`btn btn--${props.variant || "base"} btn--${
        props.size || "md"
      }`}
    >
      {props.children}
    </button>
  );
}

export default Button;
