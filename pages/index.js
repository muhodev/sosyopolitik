import axios from 'axios';
import { useQuery } from 'react-query';
import { Posts, AppLayout } from 'components';
import { API_URL } from 'consts';

const getPosts = () => axios.post(API_URL + '/feed').then(res => res?.data);

export default function Home(props) {
  const { data } = useQuery('posts', getPosts);

  return (
    <AppLayout>
      <div className="w-full flex justify-center">
        <div className="w-full  s-container mx-4 my-5">
          <Posts data={data?.docs} />
        </div>
      </div>
    </AppLayout>
  );
}
