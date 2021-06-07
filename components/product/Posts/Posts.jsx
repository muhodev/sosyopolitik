import { Post, Pagination } from 'components';

export function Posts(props) {
  return (
    <>
      <div className="grid gap-x-9 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
        {props.data?.map((post, index) => (
          <Post key={index} data={post} />
        ))}
      </div>
      <div className="my-10 flex items-center justify-center">
        <Pagination
          onPageChange={props.onPageChange}
          initialPage={props.initialPage}
        />
      </div>
    </>
  );
}
