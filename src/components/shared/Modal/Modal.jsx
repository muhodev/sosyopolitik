import { Overlay } from "./Overlay";

export function Modal(props) {
  return (
    <Overlay>
      <div className="bg-white py-6 px-10 rounded-xl w-full md:w-6/12 lg:w-4/12 mt-20">
        {props.children}
      </div>
    </Overlay>
  );
}
