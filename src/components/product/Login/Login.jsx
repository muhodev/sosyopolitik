import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { Auth } from "aws-amplify";
import { Modal, Input, Button, Link } from "components";
import { useAuth } from "context";
import { validationSchema } from "./validationSchema";

export function Login() {
  const history = useHistory();
  const { setUser } = useAuth();
  const {
    handleSubmit,
    getFieldProps,
    errors,
    touched,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema,
    validateOnMount: true,
    onSubmit: async (values, { setSubmitting }) => {
      await loginHandler(values.username, values.password);
      setSubmitting(false);
    },
  });

  async function loginHandler(username, password) {
    try {
      const user = await Auth.signIn({ username, password });
      setUser(user);
      history.push(history.location.pathname);
    } catch (err) {
      console.error(new Error(err));
    }
  }
  {
    console.log(isSubmitting);
  }

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
              <Button
                disabled={!isValid || isSubmitting}
                type="submit"
                variant="primary"
              >
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
