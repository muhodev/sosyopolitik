import axios from 'axios';
import { useQuery } from 'react-query';
import { Posts, AppLayout } from 'components';
import { API_URL } from 'consts';
import { useRouter } from 'next/router';

const getPosts = () => axios.post(API_URL + '/feed').then(res => res?.data);

export default function Home(props) {
  const { data } = useQuery('posts', getPosts);

  const router = useRouter();

  const onPageChangeHandler = index => {
    if (index.selected === 0) {
      router.push('/');
    } else {
      router.push(`?page=${index.selected + 1}`);
    }
  };

  return (
    <AppLayout>
      <div className="w-full flex justify-center">
        <div className="w-full  s-container mx-4 my-5">
          <Posts
            data={data?.docs}
            initialPage={props.page - 1}
            onPageChange={index => onPageChangeHandler(index)}
          />
        </div>
      </div>
    </AppLayout>
  );
}

export async function getServerSideProps({ query }) {
  return {
    props: {
      page: query.page || 1
    }
  };
}
