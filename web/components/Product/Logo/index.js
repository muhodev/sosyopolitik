function Logo(props) {
  return (
    <span className={`s-logo s-logo--${props.variant || "main"}`}>
      Sosyopolitik
    </span>
  );
}

export default Logo;
