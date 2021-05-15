import axios from 'axios';
import { QueryClient, useQuery, useQueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Posts, Profiles, Footer, AppLayout } from 'components';
import { API_URL } from 'consts';

const getPosts = () => axios.post(API_URL + '/feed').then(res => res?.data);

export default function Home(props) {
  const { data } = useQuery('posts', getPosts);

  const queryClient = useQueryClient();

  return (
    <AppLayout>
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
    </AppLayout>
  );
}
