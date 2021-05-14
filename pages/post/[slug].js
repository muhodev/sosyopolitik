import axios from 'axios';
import { useRouter } from 'next/router';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Posts, Profiles, Footer } from 'components';
import { API_URL } from 'consts';

const getPost = postSlug =>
  axios.get(API_URL + `/posts/${postSlug}`).then(res => res?.data);

export default function Slug(props) {
  const { query } = useRouter();
  const { data } = useQuery(['post', query?.slug], context =>
    getPost(context.queryKey[1])
  );
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-9/12 my-5">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="c-bg-secondary border rounded-md py-4 px-5">
                <h1 className="text-xl font-bold mb-5">{data?.doc?.title}</h1>
                <p className="mt-4">{data?.doc?.content}</p>
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
    </>
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
