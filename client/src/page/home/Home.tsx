import { Link } from "react-router-dom";
import estilos from "./Home.module.css";
export const Home = () => {
  return (
    <div className={estilos.container}>
      <nav className={estilos.nav}>
        <h1 className={estilos.h1}>TASKIFY</h1>
        <ul className={estilos.container_link}>
            <li className={estilos.li}><Link className={estilos.link} to="/sing-in">
            singin
          </Link></li>
          <li className={estilos.li}><Link className={estilos.link} to="/sing-up">
            singup
          </Link></li>
          
          
        </ul>
      </nav>
      <div className={estilos.container_flex_description}>
      <div className={estilos.container_description}>
        <h2 className={estilos.description_h2}>Organiza tu trabajo y tu vida</h2>
        <h3 className={estilos.description_h3}>Concéntrate, organízate y trae calma a tu vida con TASKIFY</h3>
        <div className={estilos.container_link_empezar}><Link className={estilos.link} to="/sing-up">empezar</Link></div> 
      </div>
      
      </div>
     
    </div>
  );
};
