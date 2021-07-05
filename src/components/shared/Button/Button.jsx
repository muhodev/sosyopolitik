import cn from "classnames";

import style from "./style.module.css";

export function Button({ onClick, variant, children, size, ...rest }) {
  return (
    <button
      onClick={onClick}
      className={cn(style.button, style[variant], style[size])}
      {...rest}
    >
      {children}
    </button>
  );
}
