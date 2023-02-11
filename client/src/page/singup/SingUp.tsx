import { FormularioSingUp } from "../../components/formulario/FormularioSingUp";
import estilos from "./SingIn.module.css";
export const SingUp = () => {
  return (
    <div className={estilos.container}>
      <div className={estilos.container_display_flex}>
        <div className={estilos.container_formSingin}>
          <FormularioSingUp />
        </div>
      </div>
    </div>
  );
};
