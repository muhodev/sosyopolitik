import cn from "classnames";

import style from "./style.module.css";

export function Button({ onClick, variant, children, ...rest }) {
  return (
    <button
      onClick={onClick}
      className={cn(style.button, style[variant])}
      {...rest}
    >
      {children}
    </button>
  );
}
