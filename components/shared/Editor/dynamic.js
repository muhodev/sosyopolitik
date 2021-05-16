import dynamic from 'next/dynamic';

const DynamicCommentEditor = dynamic(
  () => import('./CommentEditor/CommentEditor'),
  { ssr: false }
);

export function CommentEditor(props) {
  return <DynamicCommentEditor {...props} />;
}
