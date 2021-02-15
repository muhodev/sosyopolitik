import { Filter } from "components/Icons";

function PostsHeader(props) {
  return (
    <div className="s-posts__header">
      <div className="s-posts__title">Taze Çıkanlar</div>
      <div className="s-icon s-icon--default">
        <Filter />
      </div>
    </div>
  );
}

export default PostsHeader;
