import { ChangeEvent, FormEvent, useState } from "react";
import { submitForm } from "../api/submitForm";
import { useNavigate } from "react-router-dom";

import { UIformDataIn } from "../components/formulario/formulario-sing_in/FormularioSingIn";
import { UIformDataUp } from "../components/formulario/FormularioSingUp";
import { loginUser } from "../api/loginUser";

type FormValues<T> = T extends UIformDataIn ? UIformDataIn : UIformDataUp;
export const useForm = <T extends UIformDataIn | UIformDataUp>(initialValues:T) => {
  const navigate = useNavigate();
  
  const [dataForm, setDataForm] = useState(initialValues);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
   
   
    const nameForm = e.currentTarget.getAttribute("name")
    
    e.preventDefault();
    if(nameForm === "singUp") {
      submitForm(dataForm);
    }
    if(nameForm === "singIn") {
      const data = await loginUser(dataForm);
      localStorage.setItem("token", data.auth);
      
      
      if (localStorage.getItem("token")) {
        // Redirige al usuario al dashboard
        navigate(`/user/${data.id}/dashboard`);
      }
      
    }

    
  };
  
  return { dataForm, handleChange, handleSubmit };
};
