/* Música de fondo estilo chiptune generada con Web Audio API.
   La melodía es original y se sintetiza en el navegador: no usa archivos
   de audio, así que no hay derechos de autor de terceros ni descargas.

   Uso:
     const musica = crearMusica({ tempo, melodia, bajo, ... });
     musica.conectarBoton(boton);   // botón para silenciar / activar
   Los navegadores no dejan sonar audio hasta que el usuario interactúa,
   por eso la música arranca con el primer clic o tecla. */

function crearMusica(cancion) {
    const SEMITONOS = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
    const CLAVE = 'musicaActiva';

    // 'C#5' -> número MIDI; null o '-' -> silencio
    function midi(nota) {
        if (!nota || nota === '-') return null;
        const m = nota.match(/^([A-G])(#|b)?(-?\d)$/);
        if (!m) return null;
        const alter = m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0;
        return (Number(m[3]) + 1) * 12 + SEMITONOS[m[1]] + alter;
    }
    const frecuencia = n => 440 * Math.pow(2, (n - 69) / 12);

    const melodia = cancion.melodia.map(midi);
    const bajo = cancion.bajo.map(midi);
    const pasos = melodia.length;
    const duracionPaso = 60 / cancion.tempo / 2; // corcheas

    let ctx = null, salida = null, ruido = null;
    let activa = leerPreferencia();
    let sonando = false;
    let paso = 0, siguienteTiempo = 0, temporizador = null;
    let boton = null;

    function leerPreferencia() {
        try { return localStorage.getItem(CLAVE) !== 'no'; } catch { return true; }
    }
    function guardarPreferencia() {
        try { localStorage.setItem(CLAVE, activa ? 'si' : 'no'); } catch { /* sin almacenamiento */ }
    }

    function prepararAudio() {
        if (ctx) return;
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        ctx = new AC();

        // Volumen general bajo y un filtro para suavizar las ondas cuadradas
        const filtro = ctx.createBiquadFilter();
        filtro.type = 'lowpass';
        filtro.frequency.value = cancion.filtro ?? 2600;
        salida = ctx.createGain();
        salida.gain.value = cancion.volumen ?? 0.07;
        salida.connect(filtro).connect(ctx.destination);

        // Ruido blanco corto para el platillo
        ruido = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
        const datos = ruido.getChannelData(0);
        for (let i = 0; i < datos.length; i++) datos[i] = Math.random() * 2 - 1;
    }

    function tocarNota(n, t, onda, volumen, largo) {
        const osc = ctx.createOscillator();
        const env = ctx.createGain();
        osc.type = onda;
        osc.frequency.value = frecuencia(n);
        env.gain.setValueAtTime(0, t);
        env.gain.linearRampToValueAtTime(volumen, t + 0.01);
        env.gain.exponentialRampToValueAtTime(0.001, t + largo);
        osc.connect(env).connect(salida);
        osc.start(t);
        osc.stop(t + largo + 0.02);
    }

    function tocarPlatillo(t, volumen) {
        const fuente = ctx.createBufferSource();
        fuente.buffer = ruido;
        const pasaAltos = ctx.createBiquadFilter();
        pasaAltos.type = 'highpass';
        pasaAltos.frequency.value = 7000;
        const env = ctx.createGain();
        env.gain.setValueAtTime(volumen, t);
        env.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
        fuente.connect(pasaAltos).connect(env).connect(salida);
        fuente.start(t);
    }

    function programarPaso(i, t) {
        if (melodia[i] !== null) {
            tocarNota(melodia[i], t, cancion.ondaMelodia ?? 'square', 0.5, duracionPaso * 0.9);
        }
        if (bajo[i] !== null) {
            tocarNota(bajo[i], t, 'triangle', 0.9, duracionPaso * 1.8);
        }
        const platilloEnTodos = cancion.platillo === 'todos';
        if (platilloEnTodos || i % 2 === 1) {
            tocarPlatillo(t, i % 2 === 1 ? 0.35 : 0.15);
        }
    }

    // Programa las notas un poco por adelantado para que el ritmo sea estable
    function programador() {
        while (siguienteTiempo < ctx.currentTime + 0.12) {
            programarPaso(paso, siguienteTiempo);
            siguienteTiempo += duracionPaso;
            paso = (paso + 1) % pasos;
        }
    }

    function iniciar() {
        prepararAudio();
        if (!ctx || sonando) return;
        ctx.resume();
        sonando = true;
        paso = 0;
        siguienteTiempo = ctx.currentTime + 0.05;
        temporizador = setInterval(programador, 25);
    }

    function detener() {
        if (!sonando) return;
        sonando = false;
        clearInterval(temporizador);
        // Bajar el volumen de golpe corta las notas ya programadas
        const anterior = salida.gain.value;
        salida.gain.setValueAtTime(0, ctx.currentTime);
        setTimeout(() => salida.gain.setValueAtTime(anterior, ctx.currentTime), 200);
    }

    function actualizarBoton() {
        if (!boton) return;
        boton.classList.toggle('apagada', !activa);
        boton.setAttribute('aria-pressed', String(activa));
        boton.setAttribute('aria-label', activa ? 'Silenciar música' : 'Activar música');
        boton.title = activa ? 'Silenciar música' : 'Activar música';
    }

    function alternar() {
        activa = !activa;
        guardarPreferencia();
        activa ? iniciar() : detener();
        actualizarBoton();
    }

    // Primer gesto del usuario: arranca la música si está activa
    function primerGesto(e) {
        if (boton && boton.contains(e.target)) return; // el botón ya se encarga
        if (activa) iniciar();
        quitarEscuchas();
    }
    function quitarEscuchas() {
        document.removeEventListener('pointerdown', primerGesto);
        document.removeEventListener('keydown', primerGesto);
    }
    document.addEventListener('pointerdown', primerGesto);
    document.addEventListener('keydown', primerGesto);

    // Pausar si se cambia de pestaña
    document.addEventListener('visibilitychange', () => {
        if (!ctx) return;
        if (document.hidden) ctx.suspend();
        else if (sonando) ctx.resume();
    });

    return {
        conectarBoton(b) {
            boton = b;
            boton.addEventListener('click', () => {
                quitarEscuchas();
                // Activa pero aún sin sonar (sin gesto previo): el clic la arranca
                if (activa && !sonando) iniciar();
                else alternar();
            });
            actualizarBoton();
        }
    };
}

// Bajo de "brinco de octava": por cada compás, raíz - octava - raíz - octava en negras
function bajoSaltarin(raices) {
    const subir = nota => nota.replace(/\d$/, d => Number(d) + 1);
    return raices.flatMap(r => [r, '-', subir(r), '-', r, '-', subir(r), '-']);
}
