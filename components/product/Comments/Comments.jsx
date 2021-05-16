import { Comment, CommentEditor } from 'components';

export function Comments(props) {
  const onSubmit = text => {
    console.log(JSON.stringify(text));
  };
  return (
    <>
      <div className="font-medium">Yorumlar {props.data?.length}</div>
      <CommentEditor onSubmit={onSubmit} />
      {props.data?.docs?.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}
    </>
  );
}
