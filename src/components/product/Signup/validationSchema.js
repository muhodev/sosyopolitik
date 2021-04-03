import * as Yup from "yup";

export const validationSchema = Yup.object({
  displayName: Yup.string()
    .min(5, "İsim alanı en az 5 karakter içermelidir.")
    .required("İsim alanı zorunludur."),
  email: Yup.string()
    .email("Geçerli bir email adresi girin")
    .required("Email alanı zorunludur."),
  username: Yup.string()
    .min(3, "Kullanıcı adı alanı en az 3 karakter içermelidir.")
    .required("Kullanıcı adı alanı zorunludur."),
  password: Yup.string()
    .min(3, "Şifre alanı en az 3 karakter içermelidir.")
    .required("Şifre alanı zorunludur."),
});
