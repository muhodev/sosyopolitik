import { useMutation } from 'react-query';
import axios from 'axios';
import { useRouter } from 'next/router';

import {
  Logo,
  FormikForm,
  Input,
  PasswordInput,
  FormikButton,
  Link
} from 'components';
import { API_URL } from 'consts';
import { signupSchema } from 'formSchemas';
import { useAuth } from 'providers';

const signup = payload =>
  axios.post(`${API_URL}/auth/signup`, payload).then(res => res.data);

export default function Signup(props) {
  const mutation = useMutation(payload => signup(payload));

  const router = useRouter();

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
            initialValues={{
              displayName: '',
              username: '',
              email: '',
              password: ''
            }}
            schema={signupSchema}
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
              <Input label="İsim" name="displayName" placeholder="İsim" />
            </div>{' '}
            <div className="pb-4">
              <Input
                label="Kullanıcı adı"
                name="username"
                placeholder="Kullanıcı adınızı oluşturun"
              />
            </div>
            <div className="pb-4">
              <Input label="Email" name="email" placeholder="Email adresi" />
            </div>
            <div className="pb-4">
              <PasswordInput
                label="Şifre"
                name="password"
                placeholder="Bir şifre belirleyin"
              />
            </div>
            <FormikButton
              isLoading={mutation.isLoading}
              variant="primary"
              size="full"
              type="submit"
            >
              Kaydol
            </FormikButton>
            <div className="text-sm flex justify-center mt-6">
              <span className="pr-1 c-text-secondary">Hesabın var mı?</span>
              <Link href="/login" className="font-medium text-center">
                Giriş yap
              </Link>
            </div>
          </FormikForm>
        </div>
      </div>
    </div>
  );
}
