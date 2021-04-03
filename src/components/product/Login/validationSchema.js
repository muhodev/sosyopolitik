import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Kullanıcı adı alanı en az 3 karakter içermelidir.")
    .required("Kullanıcı adı alanı zorunludur."),
  password: Yup.string()
    .min(3, "Şifre alanı en az 3 karakter içermelidir.")
    .required("Şifre alanı zorunludur."),
});
