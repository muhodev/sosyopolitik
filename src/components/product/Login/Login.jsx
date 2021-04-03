import { useFormik } from "formik";
import { Modal, Input, Button, Link } from "components";
import { validationSchema } from "./validationSchema";

export function Login() {
  const { handleSubmit, getFieldProps, errors, touched, isValid } = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema,
    validateOnMount: true,
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
              hasError={errors.username && touched.username}
              errorMessage={errors.username}
            />
          </div>
          <div>
            <Input
              placeholder="Şifrenizi girin"
              label="Şifre"
              type="password"
              hasError={errors.password && touched.password}
              errorMessage={errors.password}
              {...getFieldProps("password")}
            />
          </div>
          <div>
            <div className="mt-7 mb-3">
              <Button disabled={!isValid} type="submit" variant="primary">
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
