import { useLocation } from "react-router-dom";
import { Signup, Login, VerifySignup } from "components";
import { checkUrlSearchParam } from "utils";

export function Auth(props) {
  const params = useLocation();

  if (checkUrlSearchParam(params.search, "signup")) {
    return <Signup />;
  }

  if (checkUrlSearchParam(params.search, "login")) {
    return <Login />;
  }
  if (checkUrlSearchParam(params.search, "confirm-signup")) {
    return <VerifySignup />;
  }
  return null;
}
