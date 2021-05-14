import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email alanı zorunludur')
    .email('Lütfen geçerli bir email adresi girin.'),
  password: yup
    .string()
    .min(5, 'Şifre alanı en az 5 karakter içermelidir.')
    .required('Şifre alanı zorunludur.')
});

export const signupSchema = yup.object().shape({
  displayName: yup.string().required('İsim alanı zorunludur'),
  email: yup
    .string()
    .required('Email alanı zorunludur')
    .email('Lütfen geçerli bir email adresi girin.'),
  username: yup.string().required('Kulanıcı adı alanı zorunludur'),
  password: yup
    .string()
    .min(5, 'Şifre alanı en az 5 karakter içermelidir.')
    .required('Şifre alanı zorunludur.')
});
