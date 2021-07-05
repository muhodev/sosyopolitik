import { Modal, Logo, Button, Label, Input } from "components";

export function SignupModal(props) {
  return (
    <Modal>
      <div>
        <div className="text-center mb-8">
          <Logo />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            placeholder="Email adresinizi girin"
            onChange={() => {}}
            value=""
          />
        </div>
        <div className="mt-4">
          <Label>Şifre</Label>
          <Input
            placeholder="Şifrenizi oluşturun"
            onChange={() => {}}
            value=""
          />
        </div>
        <div className="mt-8">
          <Button variant="primary" size="full">
            Kaydol
          </Button>
        </div>
        <div className="mt-6">
          <p className="font-medium text-gray-600 text-center text-sm">
            <span>Zaten bir hesabınız var mı? </span>
            <Button className="text-purple-600">Giriş yapın</Button>
          </p>
        </div>
      </div>
    </Modal>
  );
}
