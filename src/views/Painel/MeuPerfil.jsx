import { useContext } from "react";
import "./perfil.css";
import { UserContext } from "../../contexts/userContext";


const MeuPerfil = () => {
  const { userData } = useContext(UserContext);


  return (
    <main className="Perfil">
      <h1>Olá {userData.nome}</h1>
      <div>
        <h6>
          Sua pontuação: <b>{userData.pontos}</b>
        </h6>
        <h6>
          email: <b>{userData.email}</b>
        </h6>
        <h6>
          Coletas realizadas: <b>{userData.pedidos.length}</b>
        </h6>
        <h6>
          Residuos produzidos:
          <b>{userData.pedidos.reduce((t, v) => t + v.peso, 0)}</b>
        </h6>
      </div>
      <div id="graphLocal"></div>
    </main>
  );
};

export default MeuPerfil;
