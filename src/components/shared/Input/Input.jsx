import cn from "classnames";
import style from "./style.module.css";

export function Input({
  type,
  onClick,
  placeholder,
  autoFocus,
  label,
  ...rest
}) {
  console.log();
  return (
    <div className={style.inputContainer}>
      {label && (
        <label
          className={cn(style.label, { [style.top]: rest.value.length > 0 })}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={cn(style.input)}
        onClick={onClick}
        autoFocus={autoFocus}
        {...rest}
      />
    </div>
  );
}
