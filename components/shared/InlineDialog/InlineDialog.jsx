import { useState } from 'react';

import { Button } from 'components';

import style from './style.module.css';

export function InlineDialog(props) {
  const [isOpen, setOpen] = useState(false);

  const close = () => setOpen(false);

  const toggle = () => setOpen(old => !old);
  return (
    <div className="relative">
      {isOpen && (
        <div
          className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0"
          onClick={close}
        ></div>
      )}
      <div onClick={toggle} className="cursor-pointer">
        {props.trigger}
      </div>
      {isOpen && <div className={style.content}>{props.children}</div>}
    </div>
  );
}
