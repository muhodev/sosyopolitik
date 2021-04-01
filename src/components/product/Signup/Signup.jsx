import { useHistory } from "react-router-dom";
import { Modal } from "components";

export function Signup(props) {
  const history = useHistory();
  return <Modal closeModal={() => history.goBack()}></Modal>;
}
