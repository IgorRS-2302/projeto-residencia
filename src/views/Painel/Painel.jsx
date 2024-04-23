import { useState } from "react";

import "./style.css";
import MeusPedidos from "./MeusPedidos";
import MeuPerfil from "./MeuPerfil";
import FazerPedido from "./FazerPedido";

const nav = ["Meu perfil", "Meus pedidos", "Fazer pedido"];

const Painel = () => {
  const [currentSection, setCurrentSection] = useState("Meu perfil");
  // const {userData} = useContext(UserContext);

  return (
    <main>
      <aside>
        {nav.map((o) => (
          <button
            onClick={() => {
              setCurrentSection(() => o);
            }}
          >
            {o}
          </button>
        ))}
      </aside>
      <section>
        {currentSection && currentSection === "Meu perfil" ? (
          <MeuPerfil />
        ) : currentSection === "Meus pedidos" ? (
          <MeusPedidos />
        ) : currentSection === "Fazer pedido" ? (
          <FazerPedido />
        ) : null}
      </section>
    </main>
  );
};

export default Painel;
