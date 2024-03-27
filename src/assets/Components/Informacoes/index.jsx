import style from "./Informacoes.module.css";

function Informações() {
  return (
    <table>
      <thead>
        <tr>
          <th className={style.title}>IMC</th>
          <th className={style.title}>CLASSIFICAÇÃO</th>
          <th className={style.title}>OBESIDADE (GRAU)</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className={style.Information}>MENOR QUE 18,5</td>
          <td className={style.Information}>MAGREZA</td>
          <td className={style.Information}>0</td>
        </tr>

        <tr>
          <td className={style.Information}>ENTRE 18,5 E 24,9</td>
          <td className={style.Information}>NORMAL</td>
          <td className={style.Information}>0</td>
        </tr>

        <tr>
          <td className={style.Information}>ENTRE 25,0 E 29,9</td>
          <td className={style.Information}>SOBREPESO</td>
          <td className={style.Information}>I</td>
        </tr>

        <tr>
          <td className={style.Information}>ENTRE 30,0 E 39,9</td>
          <td className={style.Information}>OBESIDADE</td>
          <td className={style.Information}>II</td>
        </tr>

        <tr>
          <td className={style.Information}>MAIOR QUE 40,0</td>
          <td className={style.Information}>OBESIDADE GRAVE</td>
          <td className={style.Information}>III</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Informações;
