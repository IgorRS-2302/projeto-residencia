import { CChart } from "@coreui/react-chartjs";
import "./style.css";
import { InfoColeta } from "../../components/InfoColeta";

function Dashboard() {
  return (
    <div className="containerDashboard">
      <div className="divGraph">
        <h1>Olá, Igor Siqueira</h1>
        <div className="divInfoGraph">
          <p className="infosGraphs">Sua pontuação: 7500</p>
          <p className="infosGraphs">Total de pedidos: 5</p>
          <p className="infosGraphs">Email: igor.siqueira2302@gmail.com</p>
        </div>
        <div className="divChart">
          <CChart
            type="bar"
            data={{
              labels: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
              ],
              datasets: [
                {
                  label: "Coletas",
                  backgroundColor: "#2d3648",
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                },
              ],
            }}
            labels="Meses"
          />
        </div>
      </div>
      <div className="divRequests">
        <h2>Últimas coletas</h2>
        <InfoColeta
          IdColeta={"012025451265"}
          Barris={2}
          DataColeta={"25/06/2023"}
          Pontuacao={1000}
        />
        <InfoColeta
          IdColeta={"398127398719"}
          Barris={4}
          DataColeta={"12/06/2023"}
          Pontuacao={2000}
        />
        <InfoColeta
          IdColeta={"546786348753"}
          Barris={1}
          DataColeta={"25/06/2023"}
          Pontuacao={500}
        />
        <InfoColeta
          IdColeta={"123789573865"}
          Barris={3}
          DataColeta={"25/06/2023"}
          Pontuacao={1500}
        />
        <InfoColeta
          IdColeta={"968594748573"}
          Barris={5}
          DataColeta={"25/06/2023"}
          Pontuacao={2500}
        />
      </div>
    </div>
  );
}

export default Dashboard;
