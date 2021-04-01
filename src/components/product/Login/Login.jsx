import { useHistory } from "react-router-dom";
import { Modal } from "components";

export function Login(props) {
  const history = useHistory();
  return (
    <Modal title="Giriş Yapın" closeModal={() => history.goBack()}>
      <div className=""></div>
    </Modal>
  );
}
