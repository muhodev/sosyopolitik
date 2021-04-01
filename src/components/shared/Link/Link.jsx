import { Link as RouterLink } from "react-router-dom";

export function Link(props) {
  return (
    <RouterLink to={props.href} className={props.className}>
      {props.children}
    </RouterLink>
  );
}
