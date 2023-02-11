import { FormularioSingIn } from "../../components/formulario/formulario-sing_in/FormularioSingIn";
import estilos from "./SingIn.module.css"
export const SingIn = () => {
  return (
    <div className={estilos.container}>
      <div className={estilos.container_display_flex}>
        <div className={estilos.container_formSingin}><FormularioSingIn/></div>
      </div>
    </div>
  );
};
