import { useHistory } from "react-router-dom";
import { Modal, Input, Button, Link } from "components";

export function Signup(props) {
  const history = useHistory();
  return (
    <Modal
      closeModal={() => history.goBack()}
      title="Daha fazlası için kaydolun"
    >
      <div className="">
        <div className="mb-5">
          <Input
            placeholder="Email adresini girin"
            label="Email"
            autoFocus={true}
          />
        </div>
        <div className="mb-5">
          <Input
            placeholder="Bir kullanıcı adı belirleyin"
            label="Kullanıcı Adı"
          />
        </div>
        <div>
          <Input placeholder="Şifre oluşturun" label="Şifre" />
        </div>
        <div className="mt-5 mb-2">
          <Button variant="primary">Kayıt ol</Button>
        </div>
        <div className="text-sm">
          <span className="text-gray-600">Hesabınız var mı?</span>
          <Link href="/?login=true"> Giriş yapın</Link>
        </div>
      </div>
    </Modal>
  );
}
