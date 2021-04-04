import { useFormik } from "formik";
import { useLocation, useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import { checkUrlSearchParam } from "utils";

import { Modal, Input, Button, Link } from "components";
import { validationSchema } from "./validationSchema";

export function VerifySignup(props) {
  const location = useLocation();
  const history = useHistory();
  const username = checkUrlSearchParam(location.search, "username") || "";
  const {
    handleSubmit,
    getFieldProps,
    errors,
    touched,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: { username, code: "" },
    validationSchema,
    validateOnMount: true,
    onSubmit: async (values, { setSubmitting }) => {
      console.log(values.code);
      await verifySignupHandler(values.username, values.code);
      setSubmitting(false);
    },
  });

  const verifySignupHandler = async (username, code) => {
    try {
      await Auth.confirmSignUp(username, code);
      history.push(history.location.pathname);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Modal title="Devam etmek için kodu girin">
      <form onSubmit={handleSubmit}>
        {!username && (
          <div className="mb-5">
            <Input
              label="Kullanıcı Adı"
              hasError={errors.username && touched.username}
              errorMessage={errors.username}
              {...getFieldProps("username")}
            />
          </div>
        )}
        <div className="mb-5">
          <Input
            label="Kod"
            hasError={errors.code && touched.code}
            errorMessage={errors.code}
            {...getFieldProps("code")}
          />
        </div>
        <div>
          <Link>Tekrar Kod gönder</Link>
        </div>

        <div className="mt-5 mb-2">
          <Button
            type="submit"
            variant="primary"
            disabled={!isValid || isSubmitting}
          >
            Onayla
          </Button>
        </div>
      </form>
    </Modal>
  );
}
