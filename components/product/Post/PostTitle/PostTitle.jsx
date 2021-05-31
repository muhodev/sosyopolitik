import { Link } from 'components';

export function PostTitle(props) {
  return (
    <h1 className="font-bold text-lg">
      <Link href={'/post/' + props.slug}>{props.title}</Link>
    </h1>
  );
}
