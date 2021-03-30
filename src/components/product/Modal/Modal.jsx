import { Portal, Overlay } from "components";

export function Modal(props) {
  return (
    <Portal>
      <Overlay>{props.children}</Overlay>
    </Portal>
  );
}
