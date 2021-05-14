import RouterLink from 'next/link';
import cn from 'classnames';

export function Link(props) {
  return (
    <RouterLink href={props.href}>
      <a
        className={cn(
          'flex c-text-hover-link hover:underline',
          props.className
        )}
      >
        {props.children}
      </a>
    </RouterLink>
  );
}
