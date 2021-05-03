import { Card, User, FollowButton } from "components";

export function Profiles(props) {
  return (
    <Card>
      <div className="font-medium">Profiller</div>
      <div className="grid gap-5 mt-5">
        {props.data.map((user, index) => (
          <div key={index} className="flex justify-between">
            <User data={user} />
            <div>
              <FollowButton />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
