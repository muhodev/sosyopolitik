export function Widget(props) {
  return (
    <div className="border border-gray-100 bg-white py-3 px-4 md:py-5 md:px-6 cursor-pointer rounded-md overflow-hidden">
      {props.children}
    </div>
  );
}
