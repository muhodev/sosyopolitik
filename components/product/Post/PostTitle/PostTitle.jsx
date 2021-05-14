import { Link } from 'components';

export function PostTitle(props) {
  return (
    <h1 className="font-bold text-base">
      <Link href={'/post/' + props.slug}>{props.title}</Link>
    </h1>
  );
}
