export function Avatar(props) {
  return (
    <div className="w-7 h-7 flex items-center justify-center rounded-full overflow-hidden">
      {props.src ? (
        <Image {...props} />
      ) : (
        <div className="bg-gray-50 w-full h-full">
          <img
            src="/avatar.jpg"
            alt="Default Sosyopolitik Profile Avatar Image"
          />
        </div>
      )}
    </div>
  );
}
