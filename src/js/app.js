const resultado1 = "resultado 1";
const resultado2 = "resultado 2";
const resultado3 = "resultado 3";

const results = {
  respuestaP1: null,
  respuestaP2: null,
  respuestaP3: null,
};
const getAnswers = (numeroPregunta, numeroRespuesta) => {
  let respuestas = document.getElementsByClassName(
    `answersPackage${numeroPregunta}`
  ).children;

  if (numeroPregunta == 1) {
    results.respuestaP1 = numeroRespuesta;
  } else if (numeroPregunta == 2) {
    results.respuestaP2 = numeroRespuesta;
  } else if (numeroPregunta == 3) {
    results.respuestaP3 = numeroRespuesta;
  }
};

const activateAnswer = (numeroPregunta, numeroRespuesta) => {
  const elements = document.getElementById(`answersPackage${numeroPregunta}`)
    .children;
  Array.prototype.forEach.call(elements, (item) => {
    if (
      item.className.includes(
        `answerPackage${numeroPregunta}__${numeroRespuesta}`
      )
    ) {
      item.classList.add(`answerPackage${numeroPregunta}__active`);
    } else {
      item.classList.remove(`answerPackage${numeroPregunta}__active`);
    }
  });
};

const analizar = () => {
  let diario = document.getElementById("diario");
  let semanal = document.getElementById("semanal");
  let resultado = `${results.respuestaP1}${results.respuestaP2}${results.respuestaP3}`;
  switch (resultado) {
    case "000":
      let productoDiario1 = document.createElement("div");
      productoDiario1.textContent = "Sup, y'all?";
      productoDiario1.setAttribute("class", "productoDiario");
      document.getElementById("diario").appendChild(productoDiario1);
      break;
    case "100":
      document.getElementById("resultados").innerHTML = resultado2;
      break;
    case "200":
      document.getElementById("resultados").innerHTML = resultado3;
      break;
    case "300":
      document.getElementById("resultados").innerHTML = resultado4;
      break;
  }
};
