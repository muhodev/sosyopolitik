import { Link, Button } from "components";

export function ButtonLink(props) {
  return (
    <Link href={props.href}>
      <Button variant={props.variant}>{props.children}</Button>
    </Link>
  );
}
