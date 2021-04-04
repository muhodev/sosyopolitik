import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Kullanıcı adı alanı en az 3 karakter içermelidir.")
    .required("Kullanıcı adı alanı zorunludur."),
  code: Yup.string()
    .length(6, "Kod alanı 6 karakter içermelidir.")
    .required("Kod alanı zorunludur."),
});
