import React, { useContext } from "react";
import { useFormik } from "formik";
import { validate, handlerInputChangeCreator, handleTextChange } from '../../utils/utils'
import { registerSchema } from './schema'
import { Button } from "@mui/material";
import { useLogin } from "../../hooks/useLogin";
import { authContext } from "../../context/authContext";
import { login } from "../../services/login";


const Login = () => {
  const { user, handleLogin } = useContext(authContext);

  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxIiwianRpIjoiNWZjNzEyOGFkZmEyOGJiZjdkODUxZjcyNmY1OTZjNjFlZTUxZTdjMjZmYmJmNDRjNmI3NTI0Yjk4NjZlNTVkYjAyZjQxYmIxMzVmOGQ3YmUiLCJpYXQiOjE2NDIwMTUzNzIuODQ2MDA2LCJuYmYiOjE2NDIwMTUzNzIuODQ2MDExLCJleHAiOjQxMDM0NzU4ODgsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.bSfx03ZT_SM7AtDUsG-eMoc9DZ_8KM8dVKNt7hp3zyA"
  let userFake = {
    "id": 37,
    "role": "user",
    "email": "gmontoya50+1@gmail.com",
    "name": "Nobody",
    "phone": "56984743747",
    "email_verified_at": null,
    "created_at": "2022-05-18T18:38:46.000000Z",
    "updated_at": "2022-05-18T18:38:46.000000Z"
  }
  const onSubmit = () =>{
    if (process.env.REACT_APP_FAKE_LOGIN === 'true'){
      handleLogin(token, userFake )
    }else{
      login({email:formik.values.email, password: formik.values.password})
        .then((res) => {
            console.log(res.data.result.access_token, res.data.result.user);
          handleLogin(res.data.result.access_token, res.data.result.user)
        })

    }
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      c_password:'',
    },
    validate: validate(registerSchema),
    onSubmit: onSubmit,
  });
  const handleTextChange = handlerInputChangeCreator(formik)
  return(
    <form onSubmit={formik.handleSubmit}>
      <label>Correo</label>
      <input onChange={handleTextChange}  type="email" name="email" />
      <label>Contraseña</label>
      <input onChange={handleTextChange} type="password" name="password" />
      <label>Confirmacion</label>
      <input onChange={handleTextChange} type="password" name="c_password" />
      <Button variant="contained" type="submit">Enviar </Button>
    </form>
  );
};

export default Login