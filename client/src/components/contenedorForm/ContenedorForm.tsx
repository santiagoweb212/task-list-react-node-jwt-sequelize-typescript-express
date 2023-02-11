import estilos from "./ContenedorForm.module.css"
export const ContenedorForm = () => {
  return (
    <div className={estilos.container}>
      <div className={estilos.container_display_flex}>
        <div className={estilos.container_formSingin}></div>
      </div>
    </div>
  );
};
