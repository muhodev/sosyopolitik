export function Overlay(props) {
  return (
    <div
      onClick={props.closeModal}
      className="fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-30 flex justify-center items-center z-50"
    >
      {props.children}
    </div>
  );
}
