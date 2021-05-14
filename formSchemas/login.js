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
