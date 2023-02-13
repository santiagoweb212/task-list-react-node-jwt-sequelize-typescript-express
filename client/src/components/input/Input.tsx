import { ChangeEvent, Fragment } from "react";
import estilosInput from "./Input.module.css";
import { useForm } from "../../hooks/useForm";
interface UIprops {
  name: string;
  type: string;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ name, type, value, handleChange }: UIprops) => {
  return (
    <Fragment>
      <label htmlFor={name} className={estilosInput.label}>{name}</label>
      <input
        className={estilosInput.input}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        required
      />
    </Fragment>
  );
};
