import { Avatar, FollowButton, Widget } from "components";

function SuggestProfiles(props) {
  return (
    <Widget>
      <div className="font-medium mb-5 text-lg">Profiller</div>
      <div>
        <SuggestProfile
          avatar="https://miro.medium.com/fit/c/20/20/2*R5QaBg0eYwqBd31pXSh_qw.jpeg"
          displayname="Jessica Wildfire"
          username="@jessica"
        />
        <SuggestProfile
          avatar="https://pbs.twimg.com/profile_images/1370286414143832065/hzSUCDtW_400x400.jpg"
          displayname="Büşra Köksal"
          username="@hbusraakoksal"
        />
        <SuggestProfile
          avatar="https://pbs.twimg.com/profile_images/849700875555786752/Mf2TSlBn_400x400.jpg"
          displayname="Interesting Engineering"
          username="@intengineering"
        />
        <SuggestProfile
          avatar="https://pbs.twimg.com/profile_images/533394438639214592/gcAwPM3n_400x400.jpeg"
          displayname="YasNiger™"
          username="@yasniger"
        />
      </div>
    </Widget>
  );
}

function SuggestProfile(props) {
  return (
    <div className="grid grid-cols-3 mb-6 gap-2">
      <div className="flex items-center col-span-2">
        <div className="s-suggest-profile__avatar mr-2">
          <Avatar size="medium" src={props.avatar} />
        </div>
        <div className="s-suggest-profile__meta truncate">
          <div className="text-sm font-medium truncate">
            {props.displayname}
          </div>
          <div className="text-gray-600 text-sm truncate">{props.username}</div>
        </div>
      </div>
      <div className="flex items-center">
        <FollowButton />
      </div>
    </div>
  );
}

export default SuggestProfiles;
