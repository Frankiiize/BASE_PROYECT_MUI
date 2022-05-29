import * as Yup from "yup";

let schema = Yup.object().shape({
  email: Yup.string()
      .email('Email inválido')
      .max(100, 'El texto no debe superar los 50 carácteres')
      .required("Email es requerido"),
  password: Yup.string()
      .min(4, "La contraseña debe terner mínimo 8 caracteres")
      .required("Contraseña requerida"),
  c_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Contraseñas no coinciden')
      .required('Confirma la contraseña'),
});

export const registerSchema = () => {
  return schema ;
};