import { Input } from "../input/Input";
import estilosForm from "./Formulario.module.css";
import fb from "../../assets/img/facebook.png";
import google from "../../assets/img/google.png";

export const FormularioSingUp = () => {
  return (
    <form action="">
      <h1 className={estilosForm.h1_title}>Create Account</h1>
      <div className={estilosForm.container_div_input}>
        <div className={estilosForm.div_name}>
          <Input name="name" />
        </div>
        <div className={estilosForm.div_lastname}>
          <Input name="last name" />
        </div>
      </div>
      <Input name="email" />
      <Input name="password" />
      <Input name="confirm password" />
      
      <div className={estilosForm.box_terms}>
        <input type="checkbox" name="" id="terms" />
        <label htmlFor="terms">I agree to the terms and conditions</label>
      </div>
      <button className={estilosForm.button}>sing up</button>
      <div className={estilosForm.container_img}>
        <img className={estilosForm.img_google} src={google} alt="google" />
        <img className={estilosForm.img_fb} src={fb} alt="facebook" />
      </div>
    </form>
  );
};
