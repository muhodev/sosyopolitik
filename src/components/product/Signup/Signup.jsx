import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import { Button, Input } from "components";
import { validationSchema } from "./validationSchema";

export function Signup(props) {
  const history = useHistory();
  const {
    handleSubmit,
    getFieldProps,
    errors,
    touched,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: { displayName: "", email: "", username: "", password: "" },
    validationSchema,

    validateOnMount: true,
    onSubmit: async (values, { setSubmitting }) => {
      await signupHandler({
        username: values.username,
        password: values.password,
        email: values.email,
        name: values.displayName,
      });
      setSubmitting(false);
    },
  });

  const signupHandler = async (payload) => {
    try {
      await Auth.signUp({
        username: payload.username,
        password: payload.password,
        attributes: {
          email: payload.email,
          name: payload.name,
          picture: "default",
        },
      });
      history.push(
        history.location.pathname +
          "?confirm-signup=true&username=" +
          payload.username
      );
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-7 text-xl">
        <h1>Sosyopolitik'e kaydolun</h1>
      </div>
      <div className="mb-5">
        <Input
          label="İsim"
          type="text"
          hasError={errors.displayName && touched.displayName}
          errorMessage={errors.displayName}
          {...getFieldProps("displayName")}
        />
      </div>
      <div className="mb-5">
        <Input
          label="Email"
          hasError={errors.email && touched.email}
          errorMessage={errors.email}
          {...getFieldProps("email")}
        />
      </div>
      <div className="mb-5">
        <Input
          label="Kullanıcı Adı"
          hasError={errors.username && touched.username}
          errorMessage={errors.username}
          {...getFieldProps("username")}
        />
      </div>
      <div>
        <Input
          label="Şifre"
          type="password"
          hasError={errors.password && touched.password}
          errorMessage={errors.password}
          {...getFieldProps("password")}
        />
      </div>
      <div className="mt-5 mb-2">
        <Button
          type="submit"
          variant="primary"
          disabled={!isValid || isSubmitting}
        >
          Kaydol
        </Button>
      </div>
      <div className="text-sm">
        <span className="text-gray-600">Hesabınız var mı?</span>
        <Button isQuiet={true} onClick={() => props.switchType("login")}>
          Giriş yapın
        </Button>
      </div>
    </form>
  );
}
