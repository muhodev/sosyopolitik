import axios from 'axios';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Posts, AppLayout } from 'components';
import { API_URL } from 'consts';
import { useRouter } from 'next/router';

const getPosts = page =>
  axios.post(API_URL + '/feed', { page }).then(res => res?.data);

export default function Home(props) {
  const router = useRouter();
  const { data } = useQuery(['posts', router.query.page || 1], context =>
    getPosts(context.queryKey[1])
  );

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
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['posts', query.page || 1], context =>
    getPosts(context.queryKey[1])
  );
  return {
    props: {
      page: query.page || 1,
      dehydratedState: dehydrate(queryClient)
    }
  };
}
