import { useFormik } from "formik";
import { Modal, Input, Button, Link } from "components";
import { validationSchema } from "./validationSchema";

export function Signup(props) {
  const { handleSubmit, getFieldProps, errors, touched, isValid } = useFormik({
    initialValues: { displayName: "", email: "", username: "", password: "" },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Modal title="Daha fazlası için kaydolun">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <Input
            label="İsim"
            type="text"
            autoFocus={true}
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
          <Button type="submit" variant="primary" disabled={!isValid}>
            Kaydol
          </Button>
        </div>
        <div className="text-sm">
          <span className="text-gray-600">Hesabınız var mı?</span>
          <Link href="/?login=true"> Giriş yapın</Link>
        </div>
      </form>
    </Modal>
  );
}
