import style from "./Resultado.module.css";

function Resultado({ imc, classificacao }) {
  return (
    <>
      <div>
        <h3>Resultado:</h3>
      </div>

      {!Number.isNaN(imc) ? (
        imc === 0 ? (
          <p>Verifique os valores digitados!</p>
        ) : (
          <div className={style.resultadoContainer}>
            <p className={style.imc}>
              <span>IMC:</span> {imc}
            </p>
            <p className={style.classificacao}>
              <span>Classificação:</span> {classificacao}
            </p>
          </div>
        )
      ) : (
        <p>Insira os valores nos campos!</p>
      )}
    </>
  );
}

export default Resultado;
