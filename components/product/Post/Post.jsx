import { Cover, PostTitle } from 'components';
import { Like, Comment, MoreVertical, Bookmark, Share } from 'components/icons';
import style from './style.module.css';

export function Post({ data }) {
  return (
    <div className="c-bg-secondary w-full bg-white rounded-md border py-4 px-5">
      <div className="flex justify-between">
        <div className="">
          <div>
            <PostTitle title={data.title} />
          </div>
          <div className="text-sm flex mt-3">
            <address className="not-italic">{data.author.displayName}</address>
            <time className="ml-2">{data.date}</time>
          </div>

          {data.description && (
            <p className="mt-3 text-sm c-text-secondary">{data.description}</p>
          )}

          <div className="flex justify-between items-center mt-6 text-xl">
            <div className="grid gap-6 grid-cols-3  w-auto">
              <div>
                <Like />
              </div>
              <div>
                <Comment />
              </div>
              <div>
                <Bookmark />
              </div>
            </div>
          </div>
        </div>
        <div className="text-lg ml-2">
          <MoreVertical />
        </div>
      </div>
    </div>
  );
}
