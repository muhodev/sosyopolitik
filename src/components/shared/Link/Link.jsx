import { Link as RouterLink } from "react-router-dom";

export function Link(props) {
  return <RouterLink to={props.href}>{props.children}</RouterLink>;
}
