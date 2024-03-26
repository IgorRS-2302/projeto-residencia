export function InfoColeta({ IdColeta, Barris, DataColeta, Pontuacao }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#FFF",
        color: "#000",
        padding: "2%",
        marginTop: "10px",
        borderRadius: "10px",
      }}
    >
      <div>
        <p style={{ margin: 0 }}>
          Código da coleta: <b>{IdColeta}</b>{" "}
        </p>
        <p style={{ margin: 0 }}>
          Barris: <b>{Barris}</b>
        </p>
      </div>
      <div>
        <p style={{ margin: 0 }}>
          Data da coleta: <b>{DataColeta}</b>
        </p>
        <p style={{ margin: 0 }}>
          Pontuação: <b>{Pontuacao}</b>
        </p>
      </div>
    </div>
  );
}
