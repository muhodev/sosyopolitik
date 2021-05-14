import axios from 'axios';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Posts, Profiles, Footer } from 'components';

const getPosts = () =>
  axios.post('http://localhost:3001/api/v1/feed').then(res => res?.data);

export default function Home(props) {
  const { data } = useQuery('posts', getPosts);
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-9/12 my-5">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <Posts data={data?.docs} />
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

export async function getServerSideProps(context) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('posts', getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      posts: []
    }
  };
}
