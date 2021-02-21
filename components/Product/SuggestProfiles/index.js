import { Avatar, FollowButton, Widget } from "components";

function SuggestProfiles(props) {
  return (
    <Widget>
      <div className="s-suggest-profiles__title mb-4 t-title-30">Profiller</div>
      <div>
        <SuggestProfile
          avatar="https://miro.medium.com/fit/c/20/20/2*R5QaBg0eYwqBd31pXSh_qw.jpeg"
          displayname="Jessica Wildfire"
          username="@jessica"
        />
        <SuggestProfile
          avatar="https://pbs.twimg.com/profile_images/1361437673710379008/F06e-KEY_bigger.jpg"
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
    <div className="s-suggest-profile mb-5 justify-content-between">
      <div className="d-flex align-items-center">
        <div className="s-suggest-profile__avatar mr-2">
          <Avatar size="medium" src={props.avatar} />
        </div>
        <div className="s-suggest-profile__meta">
          <div className="s-suggest-profile__displayname t-title-40">
            {props.displayname}
          </div>
          <div className="s-suggest-profile__username t-caption-10 t-color-secondary">
            {props.username}
          </div>
        </div>
      </div>
      <FollowButton />
    </div>
  );
}

export default SuggestProfiles;
