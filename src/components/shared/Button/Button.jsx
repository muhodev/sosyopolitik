import cn from "classnames";
import style from "./style.module.css";

export function Button({ onClick, variant, children, ...rest }) {
  return (
    <button
      className={cn(style.button, style[variant])}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
