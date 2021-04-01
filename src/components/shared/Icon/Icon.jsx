import cn from "classnames";
import style from "./style.module.css";

export function Icon({ size, icon, ...rest }) {
  return (
    <span className={cn(style.icon, style[size])} {...rest}>
      {icon}
    </span>
  );
}
