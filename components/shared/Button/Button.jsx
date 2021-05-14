import cn from 'classnames';
import style from './style.module.css';
import { Spinner } from 'components';

export function Button({
  onClick,
  variant,
  disabled,
  children,
  type,
  isLoading,
  size,
  ...rest
}) {
  return (
    <button
      className={cn(
        style.button,
        style[variant],
        style[size],
        'flex items-center justify-center'
      )}
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
      {...rest}
    >
      <span>{children} </span>
      {isLoading && (
        <div className="flex items-center justify-center ml-2">
          <Spinner />
        </div>
      )}
    </button>
  );
}
