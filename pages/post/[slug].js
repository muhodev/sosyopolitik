import axios from 'axios';
import { useRouter } from 'next/router';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { API_URL } from 'consts';
import { AppLayout } from 'components';

const getPost = postSlug =>
  axios.get(`${API_URL}/posts/${postSlug}`).then(res => res?.data);

export default function Slug(props) {
  const { query } = useRouter();
  const { data } = useQuery(['post', query?.slug], context =>
    getPost(context.queryKey[1])
  );

  return (
    <AppLayout>
      <div className="w-full flex justify-center">
        <div className="w-full s-container my-5">
          <div className="col-span-2">
            <div className="c-bg-secondary">
              <h1 className="text-xl font-bold mb-5">{data?.doc?.title}</h1>
              <p>{data?.doc.description}</p>
              <div
                className="w-full bg-top h-64 bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${data?.doc.cover})` }}
              >
                <img className="hidden" src={data?.doc.cover} alt="" />
              </div>

              <p className="mt-4">{data?.doc?.content}</p>
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
