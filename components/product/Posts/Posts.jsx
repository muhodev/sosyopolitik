import { Post } from 'components';

export function Posts(props) {
  return (
    <div className="grid gap-x-9 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
      {props.data?.map((post, index) => (
        <Post key={index} data={post} />
      ))}
    </div>
  );
}
