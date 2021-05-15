import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import cn from 'classnames';

import { PostTitle, InlineDialog } from 'components';
import { Like, Comment, MoreVertical, Bookmark } from 'components/icons';
import { useAuth } from 'providers';
import { API_URL } from 'consts';
import { useDebounceCallback } from 'hooks';

const like = payload =>
  axios.post(`${API_URL}/like`, payload).then(res => res.data);

export function Post({ data }) {
  const queryClient = useQueryClient();

  const mutation = useMutation(payload => like(payload));
  const { state } = useAuth();

  const likeAsync = useDebounceCallback(
    payload => mutation.mutate(payload),
    500
  );

  const { isLoggedIn, user } = state;
  return (
    <div className="c-bg-secondary w-full bg-white rounded-md border py-4 px-5">
      <div className="flex justify-between">
        <div className="">
          <div>
            <PostTitle title={data.title} slug={data.slug} />
          </div>
          <div className="text-sm flex mt-3">
            <address className="not-italic">{data.author.displayName}</address>
            <time className="ml-2">{data.date}</time>
          </div>

          {data.description && (
            <p className="mt-3 text-sm c-text-secondary">{data.description}</p>
          )}

          <div className="flex justify-between items-center mt-6 text-xl">
            <div className="grid gap-7 grid-cols-3  w-auto">
              <div
                className={cn('cursor-pointer', { liked: data.isLiked })}
                onClick={() => {
                  if (!isLoggedIn && !user) {
                    alert('Lütfen giriş yapın');
                    return;
                  }
                  queryClient.setQueryData('posts', oldData => ({
                    ...oldData,
                    docs: oldData.docs.map(doc => {
                      if (doc._id === data._id) {
                        return { ...doc, isLiked: !doc.isLiked };
                      }
                      return doc;
                    })
                  }));

                  likeAsync({
                    postId: data._id,
                    userId: user._id,
                    action: data.isLiked ? 'unlike' : 'like'
                  });
                }}
              >
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
        <div>
          <InlineDialog
            trigger={
              <div className="text-lg ml-2">
                <MoreVertical />
              </div>
            }
          >
            <div>Gönderiyi Bildir</div>
          </InlineDialog>
        </div>
      </div>
    </div>
  );
}
