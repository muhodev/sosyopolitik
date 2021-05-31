import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

import { PostTitle, InlineDialog } from 'components';
import { MoreVertical } from 'components/icons';
import { useAuth } from 'providers';
import { API_URL } from 'consts';
import { useDebounceCallback } from 'hooks';

const like = payload =>
  axios.post(`${API_URL}/like`, payload).then(res => res.data);

export function Post({ data }) {
  const queryClient = useQueryClient();
  const mutation = useMutation(payload => like(payload));

  const { state } = useAuth();
  const { isLoggedIn, user } = state;

  const likeAsync = useDebounceCallback(
    payload => mutation.mutate(payload),
    500
  );

  const makeLike = () => {
    if (!isLoggedIn && !user) {
      alert('Lütfen giriş yapın');
      return;
    }
    queryClient.setQueryData('posts', oldData => ({
      ...oldData,
      docs: oldData.docs.map(doc => {
        if (doc._id === data._id) {
          return {
            ...doc,
            isLiked: !doc.isLiked,
            likes: data.isLiked ? doc.likes - 1 : doc.likes + 1
          };
        }
        return doc;
      })
    }));

    likeAsync({
      postId: data._id,
      userId: user._id,
      action: data.isLiked ? 'unlike' : 'like'
    });
  };

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
