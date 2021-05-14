import { useField } from 'formik';
import cn from 'classnames';
import style from './style.module.css';
export function Input({
  autoFocus,
  label,
  name,
  type = 'text',
  placeholder,
  ...rest
}) {
  const [field, meta] = useField({ name, type });
  return (
    <div
      className={cn({ [style.error]: meta.error && meta.touched }, 'w-full')}
    >
      {label && (
        <label className="text-sm font-medium c-text-secondary pb-1 flex">
          {label}
        </label>
      )}
      <input
        autoFocus={autoFocus}
        name={field.name}
        type={type}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        placeholder={placeholder}
        className={cn(style.input, 'border w-full py-2 px-4 rounded-md')}
        {...rest}
      />
      {meta.error && meta.touched && (
        <div className="errorMessage text-sm pt-1">{meta.error}</div>
      )}
    </div>
  );
}
