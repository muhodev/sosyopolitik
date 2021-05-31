import axios from 'axios';
import { useRouter } from 'next/router';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Profiles, Footer, Comments } from 'components';
import { API_URL } from 'consts';
import { AppLayout } from 'components';

const getPost = postSlug =>
  axios.get(`${API_URL}/posts/${postSlug}`).then(res => res?.data);

const getComments = postId =>
  axios.get(`${API_URL}/posts/${postId}/comments`).then(res => res?.data);

export default function Slug(props) {
  const { query } = useRouter();
  const { data } = useQuery(['post', query?.slug], context =>
    getPost(context.queryKey[1])
  );

  const { data: comments } = useQuery(['comments', data.doc?._id], context =>
    getComments(context.queryKey[1])
  );

  return (
    <AppLayout>
      <div className="w-full flex justify-center">
        <div className="w-9/12 my-5">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="c-bg-secondary">
                <h1 className="text-xl font-bold mb-5">{data?.doc?.title}</h1>
                <p className="mt-4">{data?.doc?.content}</p>
                <Comments data={comments} />
              </div>
            </div>
            <div>
              <div className="grid gap-3">
                <div>
                  <Profiles data={[]} />
                </div>
                <div>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export async function getServerSideProps({ query }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['post', query?.slug], context =>
    getPost(context.queryKey[1])
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}
