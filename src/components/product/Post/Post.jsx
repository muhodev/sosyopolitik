import { Card } from "components";

export function Post({ data }) {
  return (
    <Card>
      <div className="">
        <div className="flex">
          <div className="flex items-center w-8 mr-3">
            <img src={data.author.avatar} alt="" className="rounded-full" />
          </div>
          <div className="text-sm">
            <div className="flex items-center">
              <div className="font-medium">{data.author.displayName}</div>
            </div>
            <div className="flex">
              <div className="mr-2 text-gray-600">@{data.author.username}</div>
              <div className="text-gray-600">{data.date}</div>
            </div>
          </div>
        </div>
        <h1 className="mt-4 font-medium text-lg">{data.title}</h1>
        <p className="mt-2 mb-4 text-gray-700">{data.description}</p>
        <div className="border border-gray-300 rounded-xl overflow-hidden mt-5">
          <picture>
            <img src={data.cover} alt="" />
          </picture>
        </div>
      </div>
    </Card>
  );
}
