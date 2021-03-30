export function User({ data }) {
  return (
    <div className="flex items-center">
      <div className="flex items-center w-8 mr-3">
        <img src={data.avatar} alt="" className="rounded-full" />
      </div>
      <div className="text-sm">
        <div className="flex items-center">
          <div className="font-medium">{data.displayName}</div>
        </div>
        <div className="flex">
          <div className="mr-2 text-gray-600">@{data.username}</div>
        </div>
      </div>
    </div>
  );
}
