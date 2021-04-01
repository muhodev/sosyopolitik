import cn from "classnames";
import style from "./style.module.css";

export function Input({ type, onClick, value, placeholder, autoFocus, label }) {
  return (
    <div>
      {label && <label className={style.label}>{label}</label>}
      <input
        type={type}
        className={cn(style.input)}
        onClick={onClick}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
    </div>
  );
}
