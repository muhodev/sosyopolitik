import { Widget, Flex } from "components";
import { Filter } from "components/Icons";

function PostsHeader() {
  return (
    <Widget>
      <Flex alignItems="center" justifyContent="space-between">
        <div className="s-posts__title">Taze Çıkanlar</div>
        <div className="s-icon s-icon--default">
          <Filter />
        </div>
      </Flex>
    </Widget>
  );
}

export default PostsHeader;
