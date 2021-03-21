import { Widget, Flex } from "components";
import { Filter } from "components/Icons";

function PostsHeader() {
  return (
    <Widget>
      <div className="flex items-center justify-between text-base md:text-lg">
        <div className="font-medium">Taze Çıkanlar</div>
        <div className="text-gray-800">
          <Filter />
        </div>
      </div>
    </Widget>
  );
}

export default PostsHeader;
