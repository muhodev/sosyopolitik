import { createPortal } from "react-dom";

export function Portal(props) {
  return createPortal(props.children, document.body);
}
