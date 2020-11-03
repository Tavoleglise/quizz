const resultado1 = "resultado 1";
const resultado2 = "resultado 2";
const resultado3 = "resultado 3";

const results = {
  respuestaP1: null,
  respuestaP2: null,
  respuestaP3: null,
};
const getAnswers = (numeroPregunta, numeroRespuesta) => {
  let respuestas = document.getElementById(`answersPackage${numeroPregunta}`)
    .children;
  console.log(respuestas);

  if (numeroPregunta == 1) {
    results.respuestaP1 = numeroRespuesta;
  } else if (numeroPregunta == 2) {
    results.respuestaP2 = numeroRespuesta;
  } else if (numeroPregunta == 3) {
    results.respuestaP3 = numeroRespuesta;
  }

  console.log(results);
};

const activateAnswer = (numeroPregunta, numeroRespuesta) => {
  let element = document.getElementsByClassName(
    `answerPackage${numeroPregunta}__${numeroRespuesta}`
  );
  if (numeroPregunta == 1) {
  }
};

const analizar = () => {
  if (
    results.respuestaP1 == 0 &&
    results.respuestaP2 == 0 &&
    results.respuestaP3 == 0
  ) {
    document.getElementById("resultados").innerHTML = resultado1;
  } else if (
    results.respuestaP1 == 0 &&
    results.respuestaP2 == 0 &&
    results.respuestaP3 == 1
  ) {
    document.getElementById("resultados").innerHTML = resultado2;
  } else if (
    results.respuestaP1 == 0 &&
    results.respuestaP2 == 0 &&
    results.respuestaP3 == 2
  ) {
    document.getElementById("resultados").innerHTML = resultado3;
  }
};
