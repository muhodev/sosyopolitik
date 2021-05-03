import { Post } from 'components';

export function Posts(props) {
  return (
    <div className="grid">
      {props.data.map((post, index) => (
        <Post key={index} data={post} />
      ))}
    </div>
  );
}
