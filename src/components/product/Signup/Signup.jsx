import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { Modal, Input, Button, Link } from "components";
import { validationSchema } from "./validationSchema";

export function Signup(props) {
  const history = useHistory();
  const { handleSubmit, getFieldProps } = useFormik({
    initialValues: { email: "", username: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
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
            {...getFieldProps("email")}
          />
        </div>
        <div className="mb-5">
          <Input
            placeholder="Bir kullanıcı adı belirleyin"
            label="Kullanıcı Adı"
            {...getFieldProps("username")}
          />
        </div>
        <div>
          <Input
            placeholder="Şifre oluşturun"
            label="Şifre"
            type="password"
            {...getFieldProps("password")}
          />
        </div>
        <div className="mt-5 mb-2">
          <Button variant="primary">Kaydol</Button>
        </div>
        <div className="text-sm">
          <span className="text-gray-600">Hesabınız var mı?</span>
          <Link href="/?login=true"> Giriş yapın</Link>
        </div>
      </div>
    </Modal>
  );
}
