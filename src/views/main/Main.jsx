/* eslint-disable jsx-a11y/anchor-is-valid */
import ImagemMissao from "../../assets/images/ImagemMissao.png";
// import Check from "../../assets/svg/check.svg";
// import Cart from "../../assets/svg/cart.svg";
// import Chat from "../../assets/svg/chat.svg";
// import Shippment from "../../assets/svg/shippment.svg";

import "../main/style.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="banner">
        <div className="bannerFilter">
          <div className="bannerContent">
            <h1>O caminho sustentável para o seu resíduo orgânico.</h1>
            <h3 style={{ paddingTop: "20%" }}>
              Transforme restos em recursos. Recicle seus compostos orgânicos!
            </h3>
            <button id="bannerButton">
              <Link
                to="/cadastro"
                style={{ textDecoration: "none", color: "#23AA01" }}
              >
                Conheça nossos planos
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="ourMission">
        <div className="missionText">
          <h1>Nossa missão</h1>
          <h2>
            Estamos trabalhando em um projeto inovador que visa reduzir a
            quantidade de resíduos orgânicos que são enviados para aterros
            sanitários, contribuindo para a diminuição da poluição ambiental,
            além de gerar um novo valor para o que seria um desperdício poder
            virar um benéficio.
          </h2>
        </div>
        <div className="divImage">
          <img src={ImagemMissao} alt="" className="imgMission" />
        </div>
      </div>
      <div className="emporium">
        <div className="bannerFilter">
          <div className="emporiumContent">
            <h1>Nossos planos</h1>
            <div className="plans">
              <div className="plansDiv">
                <h2>Plano mensal</h2>
                <b>R$ 59,90</b>
                <div>
                  <a href="#">Confira este plano </a>
                </div>
              </div>
              <div className="plansDiv">
                <h2>Plano mensal</h2>
                <b>R$ 89,90</b>
                <div>
                  <a href="#">Confira este plano </a>
                </div>{" "}
              </div>
              <div className="plansDiv">
                <h2>Plano mensal</h2>
                <b>R$ 109,90</b>
                <div>
                  <a href="#">Confira este plano </a>
                </div>{" "}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="adubo">
        <div className="aduboDivImage"></div>
        <div className="aduboText">
          <h1>Nosso produto</h1>
          <h2>
            O nosso adubo orgânico tem uma série de benéficios para a produção
            agrícola. Esse tipo de adubo é rico em nutrientes essenciais,
            melhorando a qualidade do solo e aumentando a produtividade das
            culturas, além de ser uma alternativa a fertilizantes químicos.
          </h2>
        </div>
      </div>
      {/* <section className="sobreNos">
        <div className="sobreNosInfos">
          <h2>
            Porque a <span id="green">Waste</span>
            <span id="greener">Green</span>?
          </h2>
          <h1>Somos os melhores do mundo.</h1>
          <p>
            Nosso desempenho em serviços e qualidade de produção tem o melhor
            reconhecimento do mundo. Além de que a fidelidade de nossos clientes
            mostra nossa capacidade de transformar o alimento através de um solo
            saudável.
          </p>
        </div>
        <div className="caracteristicas">
          <div className="caracteristicasInfos">
            <div>
              <img src={Check} alt="saude" />
            </div>
            <h3>Saúde de vida</h3>
            <p>
              Nosso produto não contamina o solo fazendo com que os alimentos
              cresçam bonitos e saudáveis.
            </p>
          </div>
          <div className="caracteristicasInfos">
            <div>
              <img src={Cart} alt="exp" />
            </div>
            <h3>Experiência</h3>
            <p>
              Estamos a anos no mercado, portanto somos compromissados e
              confiáveis na entrega de bons resultados.
            </p>
          </div>
          <div className="caracteristicasInfos">
            <div>
              <img src={Shippment} alt="transporte" />
            </div>
            <h3>Transporte</h3>
            <p>
              Todos os transportes, sejam para buscar ou entregar os produtos e
              resíduos são feitos de maneira 100% segura, eficiente e rápida.
            </p>
          </div>
          <div className="caracteristicasInfos">
            <div>
              <img src={Chat} alt="serviço" />
            </div>
            <h3>Melhor Serviço</h3>
            <p>
              Somos avaliados positivamente por todos os nossos clientes,
              mantendo a fidelidade deles e crescendo cada vez mais com o
              engajamento.
            </p>
          </div>
        </div>
      </section> */}
      <section className="faq">
        <div className="faqInfos">
          <h3>Contato</h3>
          <p>
            Ficou com alguma dúvida e precisa falar conosco diretamente? Envie
            um e-mail.
          </p>
          <div id="buttonFaq">
            <button>Envie um e-mail</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
