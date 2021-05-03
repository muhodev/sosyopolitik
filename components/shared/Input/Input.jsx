import cn from "classnames";
import style from "./style.module.css";

export function Input({
  type,
  onClick,
  placeholder,
  autoFocus,
  label,
  hasError,
  errorMessage,
  ...rest
}) {
  return (
    <>
      <div
        className={cn(style.inputContainer, {
          [style.error]: hasError,
        })}
      >
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
      {errorMessage && hasError && (
        <div className={cn(style.errorMessage)}>{errorMessage}</div>
      )}
    </>
  );
}
