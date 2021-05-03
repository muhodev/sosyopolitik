import { useRouter } from "next/router";
import { Portal, Overlay, Icon, Button } from "components";
import { Close } from "components/icons";

export function Modal(props) {
  const router = useRouter();
  const closeModal = () => router.push(router.pathname);
  return (
    <Overlay closeModal={closeModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-4/12 bg-white rounded-md shadow-2xl py-4 px-5 z-50"
      >
        <header className="flex justify-between items-center mb-4">
          <h1>{props.title}</h1>
          <Button variant="icon" onClick={closeModal}>
            <Icon icon={<Close />} size="base" />
          </Button>
        </header>
        {props.children}
      </div>
    </Overlay>
  );
}
