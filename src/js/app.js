const results = {
  respuestaP1: null,
  respuestaP2: null,
  respuestaP3: null,
};
const getAnswers = (numeroPregunta) => {
  let respuestas = document.getElementById(`pregunta${numeroPregunta}`)
    .children;
  console.log(respuestas[0].value);
  if (respuestas[0].checked) {
    if (numeroPregunta == 1) {
      results.respuestaP1 = 0;
    }
    if (numeroPregunta == 2) {
      results.respuestaP2 = 0;
    }
    if (numeroPregunta == 3) {
      results.respuestaP3 = 0;
    }

    /* respuestas[1].checked = false;
    respuestas[2].checked = false;
    respuestas[3].checked = false; */
  } else if (respuestas[1].checked) {
    if (numeroPregunta == 1) {
      results.respuestaP1 = 1;
    }
    if (numeroPregunta == 2) {
      results.respuestaP2 = 1;
    }
    if (numeroPregunta == 3) {
      results.respuestaP3 = 1;
    }
    /* respuestas[0].checked = false;
    respuestas[2].checked = false;
    respuestas[3].checked = false; */
  } else if (respuestas[2].checked) {
    if (numeroPregunta == 1) {
      results.respuestaP1 = 2;
    }
    if (numeroPregunta == 2) {
      results.respuestaP2 = 2;
    }
    if (numeroPregunta == 3) {
      results.respuestaP3 = 2;
    }
    /* respuestas[0].checked = false;
    respuestas[1].checked = false;
    respuestas[3].checked = false; */
  } else if (respuestas[3].checked) {
    if (numeroPregunta == 1) {
      results.respuestaP1 = 3;
    }
    if (numeroPregunta == 2) {
      results.respuestaP2 = 3;
    }
    if (numeroPregunta == 3) {
      results.respuestaP3 = 3;
    }
    /* respuestas[0].checked = false;
    respuestas[1].checked = false;
    respuestas[2].checked = false; */
  }

  /* for (i = 1; i < 4; i++) {
    let respuestas = document.getElementById(`pregunta${i}`).children;
    console.log(respuestas[0s]);
    console.log(`pregunta ${i} respuesta1 = ${respuestas.r1.checked}`);
    console.log(`pregunta ${i} respuesta2 = ${respuestas.r2.checked}`);
    console.log(`pregunta ${i} respuesta3 = ${respuestas.r3.checked}`);
    console.log(`pregunta ${i} respuesta4 = ${respuestas.r4.checked}`);
  } */
  console.log(results);
};

const analizar = () => {
  if (
    results.respuestaP1 == 0 &&
    results.respuestaP2 == 1 &&
    results.respuestaP3 == 2
  ) {
    document.getElementById("resultados").innerText("");
  }
};
