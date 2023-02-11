import { Fragment } from 'react';
import estilosInput from './Input.module.css'
interface UIprops {
  name: string;
}

export const Input = ({ name }: UIprops) => {
  return (
    <Fragment >
      <label  className={estilosInput.label}>{name}</label>
      <input className={estilosInput.input} type="text" />
    </Fragment>
  );
};
