import { Post } from 'components';
import style from './style.module.css';

export function HomeTopFeeds(props) {
  return (
    <div className={style.postsGrid}>
      {props.posts?.map((post, index) => (
        <Post key={index} data={post} />
      ))}
    </div>
  );
}
