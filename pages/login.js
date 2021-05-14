import {
  Logo,
  FormikForm,
  Input,
  PasswordInput,
  FormikButton,
  Link
} from 'components';
import { loginSchema } from 'formSchemas';

export default function Login(props) {
  return (
    <div className="w-full h-full flex justify-center ">
      <div className="c-bg-secondary border px-4 py-5 w-full md:w-4/12 mt-6">
        <div className="flex items-center justify-center pb-4">
          <Logo />
        </div>
        <div>
          <FormikForm
            initialValues={{ email: '', password: '' }}
            schema={loginSchema}
          >
            <div className="pb-4">
              <Input label="Email" name="email" placeholder="Email adresi" />
            </div>
            <div className="pb-2">
              <PasswordInput
                label="Şifre"
                name="password"
                placeholder="Şifre"
              />
            </div>
            <Link
              className="font-medium text-sm flex mb-6 c-text-secondary"
              href="/"
            >
              Şifremi unuttum
            </Link>
            <FormikButton variant="primary" size="full" type="submit">
              Giriş Yap
            </FormikButton>
            <div className="text-sm flex justify-center mt-6">
              <span className="pr-1 c-text-secondary">Hesabın yok mu?</span>
              <Link href="/signup" className="font-medium text-center">
                Kaydol
              </Link>
            </div>
          </FormikForm>
        </div>
      </div>
    </div>
  );
}
