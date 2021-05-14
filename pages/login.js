import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  Logo,
  FormikForm,
  Input,
  PasswordInput,
  FormikButton,
  Link
} from 'components';
import { API_URL } from 'consts';

import { useAuth } from 'providers';
import { loginSchema } from 'formSchemas';

const login = payload =>
  axios.post(`${API_URL}/auth/login`, payload).then(res => res.data);

export default function Login(props) {
  const router = useRouter();
  const mutation = useMutation(payload => login(payload));
  const { state, setAuth } = useAuth();
  if (state.isLoggedIn) {
    return null;
  }
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
            onSubmit={(values, actions) => {
              mutation.mutate(values, {
                onError: err => console.log(err.message),
                onSuccess: data => {
                  setAuth({
                    token: data.token,
                    user: data.doc
                  });
                  router.push('/');
                }
              });
            }}
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
            <FormikButton
              isLoading={mutation.isLoading}
              variant="primary"
              size="full"
              type="submit"
            >
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
