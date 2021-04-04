import { useEffect } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { useAuth } from "context";

export default function Logout(props) {
  const history = useHistory();
  const { setUser } = useAuth();
  useEffect(() => {
    Auth.signOut().then(
      (res) => {
        setUser(null);
        history.push("/");
      },
      (err) => alert(err.message)
    );
  }, []);
  return null;
}
