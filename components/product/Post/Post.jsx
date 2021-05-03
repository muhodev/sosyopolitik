import { Cover, PostTitle } from 'components';
import style from './style.module.css';

export function Post({ data }) {
  return (
    <div className="grid grid-cols-3 gap-6 py-5">
      <div>
        <Cover data={data.cover} />
      </div>
      <div className="col-span-2">
        <PostTitle title={data.title} />
        <div className="text-sm flex font-medium">
          <address className="not-italic">{data.author.displayName}</address>
          <time className="ml-2">{data.date}</time>
        </div>
        {data.description && (
          <p className="mt-2 text-sm c-text-secondary">{data.description}</p>
        )}
      </div>
    </div>
  );
}
