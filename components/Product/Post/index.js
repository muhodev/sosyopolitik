import { Avatar, Widget, PopupMenu } from "components";
import { MoreVertical } from "components/Icons";

function Post(props) {
  return (
    <Widget>
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center font-medium">
            <div className="flex items-center">
              <Avatar src={props.author.avatar} />
              <div className="ml-2 text-sm">{props.author.displayName}</div>
            </div>
            <div className="ml-2 text-xs">{props.date}</div>
          </div>
          <PopupMenu
            offsetY={-20}
            button={
              <div className="text-lg text-gray-800">
                <MoreVertical />
              </div>
            }
          >
            <div className="py-2">Listeye Ekle</div>
            <div className="py-2">
              {props.author.displayName} adlı kişiyi engelle
            </div>
            <div className="py-2">Gönderiyi Bildir</div>
          </PopupMenu>
        </div>
        <div className="font-medium text-sm md:text-base md:font-semibold pt-4 pb-2">
          {props.title}
        </div>
        <div className="text-gray-600 text-sm md:text-base pb-4">
          {props.description}
        </div>
      </div>
      <div className="w-full">
        <img src={props.cover} className="w-full rounded-xl" />
      </div>
    </Widget>
  );
}

export default Post;
