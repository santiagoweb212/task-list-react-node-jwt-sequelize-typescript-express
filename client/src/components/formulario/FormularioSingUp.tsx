import { Input } from "../input/Input";
import estilosForm from "./Formulario.module.css";
import fb from "../../assets/img/facebook.png";
import google from "../../assets/img/google.png";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
export interface UIformDataUp {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: UIformDataUp = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const FormularioSingUp = () => {
  const { dataForm, handleChange, handleSubmit } = useForm(initialValues);
  

  return (
    <form name="singUp" onSubmit={handleSubmit}>
      <h1 className={estilosForm.h1_title}>Create Account</h1>
      <div className={estilosForm.container_div_input}>
        <div className={estilosForm.div_name}>
          <Input
            name="name"
            type="text"
            value={dataForm.name}
            handleChange={handleChange}
          />
        </div>
        <div className={estilosForm.div_lastname}>
          <Input
            name="lastName"
            type="text"
            value={dataForm.lastName}
            handleChange={handleChange}
          />
        </div>
      </div>
      <Input
        name="email"
        type="email"
        value={dataForm.email}
        handleChange={handleChange}
      />
      <Input
        name="password"
        type="password"
        value={dataForm.password}
        handleChange={handleChange}
      />
      <Input
        name="confirmPassword"
        type="password"
        value={dataForm.confirmPassword}
        handleChange={handleChange}
      />

      <div className={estilosForm.box_terms}>
        <input type="checkbox" name="" id="terms" required />
        <label htmlFor="terms">I agree to the terms and conditions</label>
      </div>
      <button className={estilosForm.button} type="submit">sing up</button>
      <div className={estilosForm.container_img}>
        <img className={estilosForm.img_google} src={google} alt="google" />
        <img className={estilosForm.img_fb} src={fb} alt="facebook" />
      </div>
    </form>
  );
};
