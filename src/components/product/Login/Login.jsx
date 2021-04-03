import { useFormik } from "formik";
import { Modal, Input, Button, Link } from "components";
import { validationSchema } from "./validationSchema";

export function Login(props) {
  const { handleSubmit, getFieldProps } = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Modal title="Giriş Yapın">
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <Input
              placeholder="Kullanıcı adınızı girin"
              label="Kullanıcı Adı"
              autoFocus={true}
              {...getFieldProps("username")}
            />
          </div>
          <div>
            <Input
              placeholder="Şifrenizi girin"
              label="Şifre"
              type="password"
              {...getFieldProps("password")}
            />
          </div>
          <div>
            <div className="mt-7 mb-3">
              <Button type="submit" variant="primary">
                Giriş Yap
              </Button>
            </div>
            <div className="text-sm">
              <span className="text-gray-600">Hesabınız yok mu?</span>
              <Link href="/?signup=true"> Kaydolun</Link>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
