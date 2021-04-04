import cn from "classnames";
import style from "./style.module.css";

export function Button({
  onClick,
  variant,
  disabled,
  children,
  type,
  isQuiet,
  ...rest
}) {
  return (
    <button
      className={cn(style.button, style[variant], { [style.quiet]: isQuiet })}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
