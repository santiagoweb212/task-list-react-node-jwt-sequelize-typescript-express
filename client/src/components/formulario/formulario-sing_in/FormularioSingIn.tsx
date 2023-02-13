import { Input } from "../../input/Input";
import estilos from "./FormularioSingIn.module.css";
import fb from "../../../assets/img/facebook.png";
import google from "../../../assets/img/google.png";
import { useForm } from "../../../hooks/useForm";
export interface UIformDataIn {
  email: string;
  password: string;
}

export const FormularioSingIn = () => {
  const initialValues:UIformDataIn={
    email: "",
    password: "",
  };
  const { dataForm, handleChange,handleSubmit } = useForm(initialValues);

  return (
    <form name="singIn" onSubmit={handleSubmit}>
      <h1 className={estilos.h1_title}>Login</h1>
      <Input
        name="email"
        type="text"
        value={dataForm.email}
        handleChange={handleChange}
      />
      <Input
        name="password"
        type="password"
        value={dataForm.password}
        handleChange={handleChange}
      />
      <div className={estilos.wrapper_button}>
        <button className={estilos.button}>login</button>
      </div>
      <p className={estilos.p}>sing in witch social media</p>
      <div className={estilos.container_img}>
        <img className={estilos.img_google} src={google} alt="google" />
        <img className={estilos.img_fb} src={fb} alt="facebook" />
      </div>
    </form>
  );
};
