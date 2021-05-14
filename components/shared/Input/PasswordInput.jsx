import { useState } from 'react';
import { useField } from 'formik';
import cn from 'classnames';
import style from './style.module.css';

import { Show as ShowIcon, Hide as HideIcon } from 'components/icons';

export function PasswordInput({
  name,
  placeholder,
  label,
  autoFocus,
  ...rest
}) {
  const [isShown, setIsShown] = useState(false);

  const [field, meta] = useField({ name });
  return (
    <div
      className={cn({ [style.error]: meta.error && meta.touched }, 'w-full')}
    >
      {label && (
        <label className="text-sm font-medium c-text-secondary pb-1 flex">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          autoFocus={autoFocus}
          name={field.name}
          type={isShown ? 'text' : 'password'}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          placeholder={placeholder}
          className={cn(style.input, 'border w-full py-2 px-4 rounded-md')}
          {...rest}
        />
        <div
          className="absolute mr-4 right-0 c-text-secondary text-xl cursor-pointer"
          onClick={() => setIsShown(oldState => !oldState)}
        >
          {isShown ? <HideIcon /> : <ShowIcon />}
        </div>
      </div>
      {meta.error && meta.touched && (
        <div className="errorMessage text-sm pt-1">{meta.error}</div>
      )}
    </div>
  );
}
