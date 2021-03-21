function Button(props) {
  return (
    <button className="bg-transparent text-sm font-medium">
      {props.children}
    </button>
  );
}

export { Button };
