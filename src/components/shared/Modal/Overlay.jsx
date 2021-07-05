export function Overlay(props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start">
      {props.children}
    </div>
  );
}
