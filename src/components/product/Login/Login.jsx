import { useHistory } from "react-router-dom";
import { Modal, Input, Button, Link } from "components";

export function Login(props) {
  const history = useHistory();
  return (
    <Modal title="Giriş Yapın" closeModal={() => history.goBack()}>
      <div className="">
        <div className="mb-5">
          <Input
            placeholder="Kullanıcı adınızı girin"
            label="Kullanıcı Adı"
            autoFocus={true}
          />
        </div>
        <div>
          <Input placeholder="Şifrenizi girin" label="Şifre" />
        </div>
        <div className="mt-5 mb-2">
          <Button variant="primary">Giriş Yap</Button>
        </div>
        <div className="text-sm">
          <span className="text-gray-600">Hesabınız yok mu?</span>
          <Link href="/?signup=true"> Kayıt Olun</Link>
        </div>
      </div>
    </Modal>
  );
}
