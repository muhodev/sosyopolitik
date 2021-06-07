import { PostTitle } from 'components';

export function Post({ data }) {
  return (
    <div className="c-bg-secondary w-full">
      <div
        className="w-full bg-top h-56 md:h-40 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${data.cover})` }}
      >
        <img className="hidden" src={data.cover} alt="" />
      </div>
      <div className="pt-2">
        <div
          className={`c-bg-${data.category?.color} c-text-white rounded inline-flex text-xs px-2 py-1`}
        >
          {data.category.title}
        </div>
      </div>
      <div className="pt-4">
        <PostTitle title={data.title} slug={data.slug} />
      </div>
    </div>
  );
}
