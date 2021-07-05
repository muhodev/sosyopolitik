export function Input({ placeholder, onChange, value, type, ...rest }) {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
      className="w-full py-2 px-3 border-2 border-gray-500 outline-none rounded-lg placeholder-gray-500"
      {...rest}
    />
  );
}
