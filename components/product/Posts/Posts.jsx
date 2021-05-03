import { Post } from "components";

export function Posts(props) {
  return (
    <div className="grid gap-3">
      {props.data.map((post, index) => (
        <Post key={index} data={post} />
      ))}
    </div>
  );
}
