import RouterLink from "next/link";

export function Link(props) {
  return (
    <RouterLink href={props.href}>
      <a className={props.className}>{props.children}</a>
    </RouterLink>
  );
}
