import { Portal, Overlay, Icon, Button } from "components";
import { Close } from "components/icons";

export function Modal(props) {
  return (
    <Portal>
      <Overlay closeModal={props.closeModal}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-4/12 bg-white rounded-md shadow-2xl py-4 px-5 z-50"
        >
          <header className="flex justify-between items-center mb-4">
            <h1>{props.title}</h1>
            <Button variant="icon" onClick={props.closeModal}>
              <Icon icon={<Close />} size="base" />
            </Button>
          </header>
          {props.children}
        </div>
      </Overlay>
    </Portal>
  );
}
