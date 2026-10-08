const reactivos = {
    "tema": "Exponentes y radicales",
    "resultadoAprendizaje": "Identifica conceptos relacionados con la notación en ejemplos: base, coeficiente, exponente, potencia, radical, radicando o índice del radical.",
    "reactivosPorNivel": 8,
    "reactivos": [
        { "id": 1, "nivel": 1, "expresion": "3x^{4}", "pregunta": "¿Cuál es la base de $3x^{4}$?", "correcta": "x", "distractores": ["3", "4", "3x"] },
        { "id": 2, "nivel": 1, "expresion": "5x^{3}", "pregunta": "¿Cuál es la base de $5x^{3}$?", "correcta": "x", "distractores": ["5", "3", "x^{3}"] },
        { "id": 3, "nivel": 1, "expresion": "7y^{2}", "pregunta": "¿Cuál es el coeficiente de $7y^{2}$?", "correcta": "7", "distractores": ["y", "2", "y^{2}"] },
        { "id": 4, "nivel": 1, "expresion": "8y^{3}", "pregunta": "¿Cuál es la base de $8y^{3}$?", "correcta": "y", "distractores": ["8", "3", "y^{3}"] },
        { "id": 5, "nivel": 1, "expresion": "4x^{5}", "pregunta": "¿Cuál es el exponente de $4x^{5}$?", "correcta": "5", "distractores": ["4", "x", "x^{5}"] },
        { "id": 6, "nivel": 2, "expresion": "3x^{2}y^{4}", "pregunta": "¿Cuál es la base de $3x^{2}y^{4}$ respecto a $y$?", "correcta": "y", "distractores": ["3", "4", "x"] },
        { "id": 7, "nivel": 2, "expresion": "2x^{3}y^{6}", "pregunta": "¿Cuál es el exponente de $2x^{3}y^{6}$ respecto a $x$?", "correcta": "3", "distractores": ["2", "y", "6"] },
        { "id": 8, "nivel": 2, "expresion": "\\sqrt{x^{4}}", "pregunta": "¿Cuál es el radicando de $\\sqrt{x^{4}}$?", "correcta": "x^{4}", "distractores": ["2", "x", "\\sqrt{x}"] },
        { "id": 9, "nivel": 3, "expresion": "\\sqrt[3]{5x^{2}}", "pregunta": "¿Cuál es el índice de $\\sqrt[3]{5x^{2}}$?", "correcta": "3", "distractores": ["5", "2", "x"] },
        { "id": 10, "nivel": 3, "expresion": "9x^{3}y^{2}", "pregunta": "¿Cuál es el coeficiente de $9x^{3}y^{2}$?", "correcta": "9", "distractores": ["x", "y", "3"] },
        { "id": 11, "nivel": 3, "expresion": "x^{2^{3}}", "pregunta": "¿Cuál es la base de $x^{2^{3}}$?", "correcta": "x", "distractores": ["2", "3", "2^{3}"] },
        { "id": 12, "nivel": 1, "expresion": "6x^{4}", "pregunta": "¿Cuál es la potencia en $6x^{4}$?", "correcta": "x \\cdot x \\cdot x \\cdot x", "distractores": ["1296x", "4", "x"] },
        { "id": 13, "nivel": 2, "expresion": "\\sqrt[2]{3x^{2}}", "pregunta": "¿Cuál es el radicando en $\\sqrt[2]{3x^{2}}$?", "correcta": "3x^{2}", "distractores": ["2", "x", "3"] },
        { "id": 14, "nivel": 1, "expresion": "x^{5}", "pregunta": "¿Cuál es el coeficiente de $x^{5}$?", "correcta": "1", "distractores": ["5", "x", "0"] },
        { "id": 15, "nivel": 1, "expresion": "10p^{7}", "pregunta": "¿Cuál es el exponente de $10p^{7}$?", "correcta": "7", "distractores": ["10", "p", "p^{7}"] },
        { "id": 16, "nivel": 1, "expresion": "8y^{3}", "pregunta": "¿Cuál es la base de $8y^{3}$?", "correcta": "y", "distractores": ["8", "3", "y^{3}"] },
        { "id": 17, "nivel": 3, "expresion": "\\sqrt[4]{2x^{6}}", "pregunta": "¿Cuál es el índice de $\\sqrt[4]{2x^{6}}$?", "correcta": "4", "distractores": ["2", "6", "x"] },
        { "id": 18, "nivel": 3, "expresion": "\\sqrt[5]{7y^{3}}", "pregunta": "¿Cuál es el radicando en $\\sqrt[5]{7y^{3}}$?", "correcta": "7y^{3}", "distractores": ["5", "y", "3"] },
        { "id": 19, "nivel": 2, "expresion": "11x^{8}y^{2}", "pregunta": "¿Cuál es la base de $11x^{8}y^{2}$ respecto a $x$?", "correcta": "x", "distractores": ["11x", "x^{8}", "xy"] },
        { "id": 20, "nivel": 1, "expresion": "3x^{9}", "pregunta": "¿Cuál es el exponente de $3x^{9}$?", "correcta": "9", "distractores": ["3", "x", "x^{9}"] },
        { "id": 21, "nivel": 3, "expresion": "\\frac{5x^{2}}{z+1}", "pregunta": "¿Cuál es el coeficiente en $\\frac{5x^{2}}{z+1}$?", "correcta": "5", "distractores": ["x", "2", "z"] },
        { "id": 22, "nivel": 1, "expresion": "y^{6}", "pregunta": "¿Cuál es la potencia en $y^{6}$?", "correcta": "y \\cdot y \\cdot y \\cdot y \\cdot y \\cdot y", "distractores": ["6", "y", "6y"] },
        { "id": 23, "nivel": 2, "expresion": "\\sqrt[4]{2x^{3}}", "pregunta": "¿Cuál es el radicando en $\\sqrt[4]{2x^{3}}$?", "correcta": "2x^{3}", "distractores": ["4", "x", "3"] },
        { "id": 24, "nivel": 3, "expresion": "p^{3^{2}}", "pregunta": "¿Cuál es la base de $p^{3^{2}}$?", "correcta": "p", "distractores": ["3", "2", "3^{2}"] },
        { "id": 25, "nivel": 2, "expresion": "12x^{2}y^{5}", "pregunta": "¿Cuál es el coeficiente de $12x^{2}y^{5}$?", "correcta": "12", "distractores": ["x", "y", "5"] },
        { "id": 26, "nivel": 2, "expresion": "x^{4}y^{7}", "pregunta": "¿Cuál es el exponente de $x^{4}y^{7}$ respecto a $y$?", "correcta": "7", "distractores": ["4", "x", "1"] },
        { "id": 27, "nivel": 2, "expresion": "9p^{2}q^{3}", "pregunta": "¿Cuál es la base de $9p^{2}q^{3}$ respecto a $q$?", "correcta": "q", "distractores": ["9", "3", "p"] },
        { "id": 28, "nivel": 3, "expresion": "\\sqrt[6]{x^{5}}", "pregunta": "¿Cuál es el índice en $\\sqrt[6]{x^{5}}$?", "correcta": "6", "distractores": ["5", "x", "x^{5}"] },
        { "id": 29, "nivel": 3, "expresion": "\\sqrt{x^{2}y^{3}}", "pregunta": "¿Cuál es el radicando en $\\sqrt{x^{2}y^{3}}$?", "correcta": "x^{2}y^{3}", "distractores": ["2", "x", "3"] },
        { "id": 30, "nivel": 1, "expresion": "15p^{4}", "pregunta": "¿Cuál es el coeficiente de $15p^{4}$?", "correcta": "15", "distractores": ["p", "4", "p^{4}"] },
        { "id": 31, "nivel": 1, "expresion": "2x^{7}", "pregunta": "¿Cuál es la potencia en $2x^{7}$?", "correcta": "x \\cdot x \\cdot x \\cdot x \\cdot x \\cdot x \\cdot x", "distractores": ["2", "7", "x"] },
        { "id": 32, "nivel": 2, "expresion": "x^{3}y^{4}", "pregunta": "¿Cuál es el exponente de $x^{3}y^{4}$ respecto a $x$?", "correcta": "3", "distractores": ["4", "y", "1"] },
        { "id": 33, "nivel": 1, "expresion": "6x^{2}", "pregunta": "¿Cuál es la base de $6x^{2}$?", "correcta": "x", "distractores": ["6", "2", "x^{2}"] },
        { "id": 34, "nivel": 3, "expresion": "\\frac{8x^{3}y^{2}}{a+1}", "pregunta": "¿Cuál es el coeficiente de $\\frac{8x^{3}y^{2}}{a+1}$?", "correcta": "8", "distractores": ["x", "y", "3"] },
        { "id": 35, "nivel": 3, "expresion": "\\sqrt{x^{4}}", "pregunta": "¿Cuál es el índice en $\\sqrt{x^{4}}$?", "correcta": "2", "distractores": ["4", "x", "1"] },
        { "id": 36, "nivel": 3, "expresion": "\\sqrt[3]{9p^{2}}", "pregunta": "¿Cuál es el radicando en $\\sqrt[3]{9p^{2}}$?", "correcta": "9p^{2}", "distractores": ["3", "p", "2"] },
        { "id": 37, "nivel": 2, "expresion": "x^{2}y^{5}", "pregunta": "¿Cuál es la potencia en $x^{2}y^{5}$ respecto a $y$?", "correcta": "y \\cdot y \\cdot y \\cdot y \\cdot y", "distractores": ["x \\cdot x", "5y", "2x"] },
        { "id": 38, "nivel": 1, "expresion": "14x^{10}", "pregunta": "¿Cuál es el exponente de $14x^{10}$?", "correcta": "10", "distractores": ["14", "x", "x^{10}"] },
        { "id": 39, "nivel": 1, "expresion": "7y^{8}", "pregunta": "¿Cuál es la base de $7y^{8}$?", "correcta": "y", "distractores": ["7", "8", "y^{8}"] },
        { "id": 40, "nivel": 2, "expresion": "3x^{2}y", "pregunta": "¿Cuál es el coeficiente de $3x^{2}y$?", "correcta": "3", "distractores": ["x", "y", "2"] },
        { "id": 41, "nivel": 3, "expresion": "\\sqrt[7]{x^{3}}", "pregunta": "¿Cuál es el índice en $\\sqrt[7]{x^{3}}$?", "correcta": "7", "distractores": ["2", "3", "x"] },
        { "id": 42, "nivel": 3, "expresion": "\\sqrt{5x^{6}}", "pregunta": "¿Cuál es el radicando en $\\sqrt{5x^{6}}$?", "correcta": "5x^{6}", "distractores": ["5", "x", "6"] },
        { "id": 43, "nivel": 1, "expresion": "x^{2}", "pregunta": "¿Cuál es el coeficiente de $x^{2}$?", "correcta": "1", "distractores": ["x", "0", "2"] },
        { "id": 44, "nivel": 1, "expresion": "x", "pregunta": "¿Cuál es el exponente de $x$?", "correcta": "1", "distractores": ["0", "x", "\\text{no tiene exponente}"] },
        { "id": 45, "nivel": 2, "expresion": "-x^{3}", "pregunta": "¿Cuál es el coeficiente de $-x^{3}$?", "correcta": "-1", "distractores": ["3", "x", "1"] },
        { "id": 46, "nivel": 2, "expresion": "5x^{-3}", "pregunta": "¿Cuál es el exponente de $x$ en $5x^{-3}$?", "correcta": "-3", "distractores": ["5", "x", "3"] },
        { "id": 47, "nivel": 2, "expresion": "x^{\\frac{1}{2}}", "pregunta": "¿Cuál es la base en $x^{\\frac{1}{2}}$?", "correcta": "x", "distractores": ["1", "2", "1/2"] },
        { "id": 48, "nivel": 2, "expresion": "x^{\\frac{3}{4}}", "pregunta": "¿Cuál es el exponente en $x^{\\frac{3}{4}}$?", "correcta": "3/4", "distractores": ["3", "4", "x"] },
        { "id": 49, "nivel": 2, "expresion": "(x+y)^{3}", "pregunta": "¿Cuál es la base en $(x+y)^{3}$?", "correcta": "x+y", "distractores": ["x", "y", "3"] },
        { "id": 50, "nivel": 2, "expresion": "4(x+y)", "pregunta": "¿Cuál es el coeficiente en $4(x+y)$?", "correcta": "4", "distractores": ["x", "y", "x+y"] },
        { "id": 51, "nivel": 2, "expresion": "(3x^{2})^{4}", "pregunta": "¿Cuál es la base en $(3x^{2})^{4}$?", "correcta": "3x^{2}", "distractores": ["x", "3", "4"] },
        { "id": 52, "nivel": 3, "expresion": "\\sqrt{x^{2^{3}}}", "pregunta": "¿Cuál es el radicando en $\\sqrt{x^{2^{3}}}$?", "correcta": "x^{2^{3}}", "distractores": ["2", "3", "x"] },
        { "id": 53, "nivel": 1, "expresion": "9x^{3}", "pregunta": "¿Cuál es el coeficiente de $9x^{3}$?", "correcta": "9", "distractores": ["x", "3", "x^{3}"] },
        { "id": 54, "nivel": 2, "expresion": "3x^{2}y^{4}", "pregunta": "¿Cuál es la base de $3x^{2}y^{4}$ respecto a $y$?", "correcta": "y", "distractores": ["3", "4", "x"] },
        { "id": 55, "nivel": 3, "expresion": "x^{2^{3}}", "pregunta": "¿Cuál es la base de $x^{2^{3}}$?", "correcta": "x", "distractores": ["2", "3", "2^{3}"] },
        { "id": 56, "nivel": 1, "expresion": "5x^{2}", "pregunta": "¿Cuál es el índice de raíz cúbica de $5x^{2}$?", "correcta": "3", "distractores": ["5", "2", "x"] },
        { "id": 57, "nivel": 3, "expresion": "\\sqrt{3x^{2}}", "pregunta": "¿Cuál es el radicando en $\\sqrt{3x^{2}}$?", "correcta": "3x^{2}", "distractores": ["2", "x", "3"] },
        { "id": 58, "nivel": 1, "expresion": "2x^{6}", "pregunta": "¿Cuál es el índice de raíz cuarta de $2x^{6}$?", "correcta": "4", "distractores": ["2", "6", "x"] },
        { "id": 59, "nivel": 1, "expresion": "x^{4}", "pregunta": "¿Cuál es el índice en raíz cuadrada de $x^{4}$?", "correcta": "2", "distractores": ["4", "x", "1"] },
        { "id": 60, "nivel": 1, "expresion": "9p^{2}", "pregunta": "¿Cuál es el radicando en raíz cúbica de $9p^{2}$?", "correcta": "9p^{2}", "distractores": ["3", "p", "2"] },
        { "id": 61, "nivel": 1, "expresion": "2x^{3}", "pregunta": "¿Cuál es el índice en raíz séptima de $2x^{3}$?", "correcta": "7", "distractores": ["2", "3", "x"] },
        { "id": 62, "nivel": 3, "expresion": "x^{2^{3}}", "pregunta": "¿Cuál es la base en $x^{2^{3}}$?", "correcta": "x", "distractores": ["2^{3}", "3", "x^{2^{3}}"] }
    ]
}

const LETRAS = ['A', 'B', 'C', 'D'];

let respuestaCorrecta = 'A';
let vidasRestantes = 3;
let respondido = false;

let banco = null;           // contenido de reactivos.json
let nivelActual = 1;
let reactivosNivel = [];    // los 8 elegidos del nivel seleccionado
let indicePregunta = 0;

// Para la retroalimentación final
let historial = [];         // { reactivo, errores: [opciones elegidas mal] }
let erroresActuales = [];   // errores en la pregunta en curso
let opcionesActuales = [];  // opciones en orden A-D de la pregunta en curso

const incisosContainer = document.getElementById('incisos');
const preguntasContainer = document.getElementById('preguntas');
const textoPregunta = document.getElementById('textoPregunta');
const imgNivel = document.getElementById('nivelActual');
const resultados = document.querySelectorAll('.resultado');
const incisos = document.querySelectorAll('.inciso');
const disparos = document.querySelectorAll('#disparos img');

const modalAyuda = document.getElementById('modalAyuda');

document.getElementById('disparoNormal').classList.add('mostrar');

/* ---------- Carga de reactivos ---------- */
/*
fetch('file://C:\\Users\\Alan\\Archivos\\schl\\tesis\\reactivos.json')
    .then(res => res.json())
    .then(datos => {
        banco = datos;
        document.getElementById('modalResultado').textContent = banco.resultadoAprendizaje;
        iniciarNivel(1);
    })
    .catch(err => {
        // fetch no funciona abriendo el archivo directo (file://); usar Live Server u otro servidor local
        textoPregunta.textContent = 'No se pudieron cargar los reactivos.';
        console.error('Error al cargar reactivos.json:', err);
    });
*/

banco = reactivos;
document.getElementById('modalResultado').textContent = banco.resultadoAprendizaje;

/* ---------- Selección de nivel ---------- */

const modalNiveles = document.getElementById('modalNiveles');

// Nada del juego se ve hasta elegir nivel
incisosContainer.classList.add('oculto');
preguntasContainer.classList.add('oculto');

document.querySelectorAll('.boton-nivel').forEach(boton => {
    boton.addEventListener('click', () => {
        modalNiveles.hidden = true;
        iniciarNivel(Number(boton.dataset.nivel));
        mostrarIncisosYPregunta();
    });
});

// Fisher-Yates: devuelve una copia revuelta
function revolver(arreglo) {
    const copia = [...arreglo];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function iniciarNivel(nivel) {
    nivelActual = nivel;
    indicePregunta = 0;

    const delNivel = banco.reactivos.filter(r => r.nivel === nivel);
    reactivosNivel = revolver(delNivel).slice(0, banco.reactivosPorNivel);

    imgNivel.src = `./public/niveles/N${nivel}.png`;
    imgNivel.alt = `Nivel ${nivel}`;
    imgNivel.hidden = false;

    cargarPregunta();
}

function cargarPregunta() {
    const reactivo = reactivosNivel[indicePregunta];

    renderTextoConMath(textoPregunta, reactivo.pregunta);

    // Mezclar correcta + distractores y asignarlos a A-D
    const opciones = revolver([reactivo.correcta, ...reactivo.distractores]);
    incisos.forEach((inciso, i) => {
        renderMath(inciso.querySelector('.texto-inciso'), opciones[i]);
    });
    respuestaCorrecta = LETRAS[opciones.indexOf(reactivo.correcta)];

    opcionesActuales = opciones;
    erroresActuales = [];
}

function registrarPregunta() {
    historial.push({ reactivo: reactivosNivel[indicePregunta], errores: erroresActuales });
}

function siguientePregunta() {
    indicePregunta++;

    if (indicePregunta < reactivosNivel.length) {
        cargarPregunta();
    } else {
        juegoGanado();
        return;
    }
    mostrarIncisosYPregunta();
}

/* ---------- Render de matemáticas (KaTeX) ---------- */

function renderMath(elemento, tex) {
    if (window.katex) {
        katex.render(tex, elemento, { throwOnError: false });
    } else {
        elemento.textContent = tex;
    }
}

// Texto con fragmentos $...$ en modo matemático
function renderTextoConMath(elemento, texto) {
    elemento.innerHTML = '';
    // Un solo contenedor para que, si el padre es flex, el texto fluya como una línea
    const linea = document.createElement('span');
    texto.split('$').forEach((parte, i) => {
        const span = document.createElement('span');
        if (i % 2 === 1) {
            renderMath(span, parte);
        } else {
            span.textContent = parte;
        }
        linea.appendChild(span);
    });
    elemento.appendChild(linea);
}

/* ---------- Modal de ayuda ---------- */

document.querySelectorAll('#modalAyuda .tex').forEach(el => renderMath(el, el.textContent));

document.getElementById('btnAyuda').addEventListener('click', abrirAyuda);
document.getElementById('cerrarAyuda').addEventListener('click', cerrarAyuda);

// Cerrar al hacer click fuera del contenido
modalAyuda.addEventListener('click', e => {
    if (e.target === modalAyuda) cerrarAyuda();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modalAyuda.hidden) cerrarAyuda();
});

/* ---------- Instrucciones y créditos ---------- */

document.querySelectorAll('[data-abrir]').forEach(boton => {
    boton.addEventListener('click', () => {
        document.getElementById(boton.dataset.abrir).hidden = false;
    });
});

document.querySelectorAll('.modal-info').forEach(modal => {
    modal.querySelector('.modal-cerrar').addEventListener('click', () => modal.hidden = true);
    modal.addEventListener('click', e => {
        if (e.target === modal) modal.hidden = true;
    });
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') document.querySelectorAll('.modal-info').forEach(m => m.hidden = true);
});

function abrirAyuda() {
    modalAyuda.hidden = false;
}

function cerrarAyuda() {
    modalAyuda.hidden = true;
}

/* ---------- Respuestas ---------- */

incisos.forEach(inciso => {
    inciso.addEventListener('click', () => {
        if (respondido || !banco) return;
        respondido = true;

        const letra = inciso.dataset.letra;
        const esCorrecta = letra === respuestaCorrecta;

        mostrarResultado(esCorrecta);
        mostrarDisparo(esCorrecta);

        if (esCorrecta) {
            registrarPregunta();
            ocultarIncisosYPregunta();

            setTimeout(siguientePregunta, 1500);
        } else {
            erroresActuales.push(opcionesActuales[LETRAS.indexOf(letra)]);
            perderVida();
        }
    });
});

function mostrarResultado(esCorrecta) {
    resultados.forEach(r => r.classList.remove('mostrar'));

    const idMostrar = esCorrecta
        ? `correcto3`
        : 'incorrecto';

    const resultado = document.getElementById(idMostrar);
    if (resultado) resultado.classList.add('mostrar');
}

function mostrarDisparo(esCorrecta) {
    disparos.forEach(d => d.classList.remove('mostrar'));

    const idDisparo = esCorrecta ? 'disparoCorrecto' : 'disparoIncorrecto';
    document.getElementById(idDisparo)?.classList.add('mostrar');

    setTimeout(() => {
        disparos.forEach(d => d.classList.remove('mostrar'));
        document.getElementById('disparoNormal').classList.add('mostrar');
    }, 1000);
}

function ocultarIncisosYPregunta() {
    incisosContainer.classList.add('oculto');
    preguntasContainer.classList.add('oculto');
}

function mostrarIncisosYPregunta() {
    incisosContainer.classList.remove('oculto');
    preguntasContainer.classList.remove('oculto');
    resultados.forEach(r => r.classList.remove('mostrar'));
    respondido = false;
}

function perderVida() {
    const vidas = document.querySelectorAll('#vidas .vida');
    let corazonAPerder = null;

    for (let i = vidas.length - 1; i >= 0; i--) {
        if (vidas[i].tagName === 'IMG') {
            corazonAPerder = vidas[i];
            break;
        }
    }

    if (!corazonAPerder) {
        // no debería pasar, pero por seguridad
        finDelJuego();
        return;
    }

    corazonAPerder.classList.add('parpadeando');

    setTimeout(() => {
        const vacio = document.createElement('div');
        vacio.className = 'vida';
        corazonAPerder.replaceWith(vacio);
        vidasRestantes--;

        if (vidasRestantes <= 0) {
            finDelJuego();
        } else {
            ocultarResultadoIncorrecto();
            respondido = false;
        }
    }, 1000); // coincide con la duración del parpadeo (0.5s x 2)
}

function ocultarResultadoIncorrecto() {
    const incorrecto = document.getElementById('incorrecto');
    if (incorrecto) incorrecto.classList.remove('mostrar');
}

function finDelJuego() {
    registrarPregunta(); // la pregunta en la que se acabaron las vidas
    incisosContainer.classList.add('oculto');
    ocultarResultadoIncorrecto();
    textoPregunta.textContent = 'Juego terminado: te quedaste sin vidas.';
    setTimeout(() => mostrarRetro(false), 800);
}

function juegoGanado() {
    resultados.forEach(r => r.classList.remove('mostrar'));
    preguntasContainer.classList.remove('oculto');
    textoPregunta.textContent = `¡Felicidades! Completaste el nivel ${nivelActual}.`;
    setTimeout(() => mostrarRetro(true), 800);
}

/* ---------- Retroalimentación final ---------- */

const CONSEJOS = {
    'coeficiente': 'El coeficiente es el número que multiplica a la variable. Si no aparece, vale 1 (o −1 si hay un signo menos).',
    'base': 'La base es lo que se multiplica por sí mismo; es lo que está "abajo" del exponente, sin el coeficiente.',
    'exponente': 'El exponente es el número pequeño arriba de la base. Si no aparece, vale 1.',
    'potencia': 'La potencia es la multiplicación repetida de la base: x³ = x · x · x (el coeficiente no se repite).',
    'radicando': 'El radicando es todo lo que queda dentro del signo de raíz.',
    'índice': 'El índice es el número pequeño en la raíz. En la raíz cuadrada no se escribe y vale 2.'
};

function conceptoDe(reactivo) {
    const m = reactivo.pregunta.match(/coeficiente|base|exponente|potencia|radicando|índice/i);
    return m ? m[0].toLowerCase() : 'otro';
}

function mostrarRetro(gano) {
    const total = historial.length;
    const primerIntento = historial.filter(h => h.errores.length === 0).length;
    const porcentaje = total ? Math.round((primerIntento / total) * 100) : 0;

    // Aciertos por concepto
    const porConcepto = {};
    historial.forEach(h => {
        const c = conceptoDe(h.reactivo);
        porConcepto[c] ??= { total: 0, bien: 0 };
        porConcepto[c].total++;
        if (h.errores.length === 0) porConcepto[c].bien++;
    });

    let mensaje;
    if (porcentaje >= 90) mensaje = '¡Excelente! Dominas la notación de exponentes y radicales.';
    else if (porcentaje >= 70) mensaje = '¡Muy bien! Solo repasa los conceptos donde fallaste.';
    else if (porcentaje >= 50) mensaje = 'Vas por buen camino, pero conviene repasar algunos conceptos.';
    else mensaje = 'Te recomendamos revisar la ayuda antes de volver a intentarlo.';

    const cont = document.getElementById('retroContenido');
    cont.innerHTML = '';

    const titulo = document.createElement('h2');
    titulo.textContent = gano ? `¡Nivel ${nivelActual} completado!` : 'Juego terminado';
    cont.appendChild(titulo);

    const resumen = document.createElement('p');
    resumen.innerHTML = `Jugaste el <strong>nivel ${nivelActual}</strong>. ` +
        `Respondiste <strong>${primerIntento} de ${total}</strong> preguntas al primer intento (${porcentaje}%).`;
    cont.appendChild(resumen);

    const pMensaje = document.createElement('p');
    pMensaje.className = 'retro-mensaje';
    pMensaje.textContent = mensaje;
    cont.appendChild(pMensaje);

    // Tabla por concepto
    const tabla = document.createElement('table');
    tabla.className = 'retro-tabla';
    tabla.innerHTML = '<tr><th>Concepto</th><th>Al primer intento</th></tr>';
    Object.entries(porConcepto).forEach(([c, v]) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${c[0].toUpperCase() + c.slice(1)}</td><td>${v.bien} / ${v.total}</td>`;
        if (v.bien < v.total) fila.className = 'retro-debil';
        tabla.appendChild(fila);
    });
    cont.appendChild(tabla);

    // Consejos para los conceptos con errores
    const debiles = Object.keys(porConcepto).filter(c => porConcepto[c].bien < porConcepto[c].total && CONSEJOS[c]);
    if (debiles.length) {
        const h3 = document.createElement('h3');
        h3.textContent = 'Para repasar';
        cont.appendChild(h3);
        const ul = document.createElement('ul');
        debiles.forEach(c => {
            const li = document.createElement('li');
            li.textContent = CONSEJOS[c];
            ul.appendChild(li);
        });
        cont.appendChild(ul);
    }

    // Preguntas donde se equivocó
    const fallidas = historial.filter(h => h.errores.length > 0);
    if (fallidas.length) {
        const h3 = document.createElement('h3');
        h3.textContent = 'Preguntas en las que te equivocaste';
        cont.appendChild(h3);
        const ul = document.createElement('ul');
        ul.className = 'retro-fallidas';
        fallidas.forEach(h => {
            const li = document.createElement('li');
            const pregunta = document.createElement('div');
            renderTextoConMath(pregunta, h.reactivo.pregunta);
            li.appendChild(pregunta);

            const detalle = document.createElement('div');
            detalle.className = 'retro-detalle';
            detalle.append('Elegiste: ');
            h.errores.forEach((e, i) => {
                const span = document.createElement('span');
                renderMath(span, e);
                detalle.append(span);
                if (i < h.errores.length - 1) detalle.append(', ');
            });
            detalle.append(' · Correcta: ');
            const correcta = document.createElement('strong');
            renderMath(correcta, h.reactivo.correcta);
            detalle.append(correcta);
            li.appendChild(detalle);

            ul.appendChild(li);
        });
        cont.appendChild(ul);
    }

    const boton = document.createElement('button');
    boton.className = 'retro-boton';
    boton.textContent = 'Elegir nivel y jugar de nuevo';
    boton.addEventListener('click', () => location.reload());
    cont.appendChild(boton);

    document.getElementById('modalRetro').hidden = false;
}



