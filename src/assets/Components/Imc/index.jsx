function CalculoImc(altura, peso) {
  const calculo = peso / altura ** 2;

  return calculo.toFixed(2);
}

function ClassificacaoImc(result) {
  let classificacao = "";

  if (result < 18.5) {
    classificacao = "MAGREZA";
  } else if (result >= 18.5 && result <= 4.9) {
    classificacao = "NORMAL";
  } else if (result >= 25 && result <= 29.9) {
    classificacao = "SOBREPESO";
  } else if (result >= 30 && result <= 39.9) {
    classificacao = "OBESIDADE";
  } else if (result > 40) {
    classificacao = "OBESIDADE GRAVE";
  }

  return classificacao;
}

export { ClassificacaoImc, CalculoImc };
