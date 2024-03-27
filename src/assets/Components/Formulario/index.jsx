import { useEffect, useState } from "react";
import style from "./Formulario.module.css";
import { CalculoImc, ClassificacaoImc } from "../Imc";
import Resultado from "../Resultado";

export default function Formulario() {
  let [altura, setAltura] = useState(0);
  let [peso, setPeso] = useState(0);

  let [resultadoImc, setResultadoImc] = useState(0);
  let [classificacao, setClassificacao] = useState(0);

  useEffect(() => {
    setResultadoImc(parseFloat(CalculoImc(altura, peso)));
  }, [altura, peso]);

  useEffect(() => {
    setClassificacao(ClassificacaoImc(parseFloat(resultadoImc)));
  }, [resultadoImc]);

  return (
    <>
      <form>
        <div className={style.containerInput}>
          <label htmlFor="altura-input">Altura</label>
          <input
            onChange={(e) => {
              setAltura(e.target.value);
            }}
            id="altura-input"
            type="number"
            min={0}
          />
        </div>
        <div className={style.containerInput}>
          <label htmlFor="peso-input">Peso </label>
          <input
            onChange={(e) => {
              setPeso(e.target.value);
            }}
            id="peso-input"
            type="number"
            min={0}
          />
        </div>
      </form>
      <Resultado imc={resultadoImc} classificacao={classificacao} />
    </>
  );
}
