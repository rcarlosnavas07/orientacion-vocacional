// Configuración de los 6 programas técnicos
const PROGRAMS = {
  TELE: {
    id: "TELE",
    name: "Sistemas Teleinformáticos",
    desc: "Posees gran habilidad para el ensamblaje, mantenimiento de hardware, configuración de redes de datos e infraestructura de comunicaciones y soporte técnico.",
  },
  PROG: {
    id: "PROG",
    name: "Programación de Software",
    desc: "Destacas en el pensamiento lógico-matemático, análisis de problemas, creación de aplicaciones web, desarrollo de algoritmos y gestión de bases de datos.",
  },
  ADMIN: {
    id: "ADMIN",
    name: "Asistencia Administrativa",
    desc: "Muestras una fuerte vocación por la organización documental, la gestión de procesos de oficina, atención al cliente, correspondencia y administración eficiente.",
  },
  LOG: {
    id: "LOG",
    name: "Integración de Operaciones Logísticas",
    desc: "Sobresales en la gestión de inventarios, optimización de cadenas de suministro, almacenamiento, distribución y coordinación de transporte y despacho.",
  },
};

// Banco de 12 Preguntas con asignación de puntos por opción
const QUESTIONS = [
  {
    text: "¿Qué actividad prefieres realizar en tu tiempo libre o en proyectos escolares?",
    options: [
      {
        text: "Desarmar aparatos electrónicos o reparar conexiones físicas y cables.",
        program: "TELE",
      },
      {
        text: "Crear páginas web, juegos o resolver acertijos lógicos en la computadora.",
        program: "PROG",
      },
      {
        text: "Organizar eventos, redactar cartas o llevar el control de agendas y documentos.",
        program: "ADMIN",
      },
      {
        text: "Llevar la cuenta exacta de productos, bodega o planear rutas eficientes.",
        program: "LOG",
      },
      {
        text: "Participar en jornadas de reciclaje, siembra de árboles o análisis de ríos.",
        program: "AMB",
      },
    ],
  },
  {
    text: "Si tuvieras que solucionar un problema urgente en una empresa, ¿cuál preferirías asumir?",
    options: [
      {
        text: "Restablecer la conexión a internet y reparar los servidores caídos.",
        program: "TELE",
      },
      {
        text: "Corregir un fallo en el código del sistema informático de ventas.",
        program: "PROG",
      },
      {
        text: "Atender las quejas de los usuarios y reorganizar los archivos físicos y digitales.",
        program: "ADMIN",
      },
      {
        text: "Agilizar los envíos retrasados en la bodega para que lleguen a tiempo a los clientes.",
        program: "LOG",
      },
      {
        text: "Diseñar un plan para reducir la contaminación y los residuos producidos.",
        program: "AMB",
      },
    ],
  },
  {
    text: "¿Qué asignatura o tema te llama más la atención?",
    options: [
      {
        text: "Electricidad, circuitos, montaje y arquitectura de computadores.",
        program: "TELE",
      },
      {
        text: "Matemáticas, algoritmos, lógica de programación y tecnología.",
        program: "PROG",
      },
      {
        text: "Español, redacción comercial, organización y servicio al cliente.",
        program: "ADMIN",
      },
      {
        text: "Cálculo de inventarios, distribución y matemáticas aplicadas.",
        program: "LOG",
      },
      {
        text: "Ecología, ciencias naturales, conservación y desarrollo sostenible.",
        program: "AMB",
      },
    ],
  },
  {
    text: "¿En qué tipo de ambiente laboral te imaginas trabajando a futuro?",
    options: [
      {
        text: "En salas de servidores, talleres de soporte técnico y redes de comunicación.",
        program: "TELE",
      },
      {
        text: "En una empresa de software o trabajando como desarrollador remoto.",
        program: "PROG",
      },
      {
        text: "En una oficina corporativa gestionando trámites, facturas y reuniones.",
        program: "ADMIN",
      },
      {
        text: "En un centro de distribución, almacén de carga o empresa de transporte.",
        program: "LOG",
      },
      {
        text: "En campo realizando mediciones ambientales, o en consultoras sostenibles.",
        program: "AMB",
      },
    ],
  },
  {
    text: "¿Cuál de las siguientes herramientas te resulta más fascinante utilizar?",
    options: [
      {
        text: "Tester, ponchadora de red, destornilladores de precisión y routers.",
        program: "TELE",
      },
      {
        text: "Editores de código (VS Code), bases de datos y frameworks de desarrollo.",
        program: "PROG",
      },
      {
        text: "Hojas de cálculo, procesadores de texto y software de gestión documental.",
        program: "ADMIN",
      },
      {
        text: "Sistemas de código de barras, lectores ópticos y software ERP de inventario.",
        program: "LOG",
      },
      {
        text: "Kits de muestreo de agua/aire, medidores de pH y microscopios de laboratorio.",
        program: "AMB",
      },
    ],
  },
  {
    text: "¿Qué proyecto escolar te causaría mayor satisfacción entregar?",
    options: [
      {
        text: "Conectar en red local todas las computadoras de la sala de informática.",
        program: "TELE",
      },
      {
        text: "Desarrollar una app o chatbot automatizado para la institución.",
        program: "PROG",
      },
      {
        text: "Crear el manual de procedimientos administrativos y archivo de la rectoría.",
        program: "ADMIN",
      },
      {
        text: "Diseñar un modelo eficiente de almacenamiento y entrega de insumos escolares.",
        program: "LOG",
      },
      {
        text: "Implementar un sistema de compostaje e impacto cero de residuos en el colegio.",
        program: "AMB",
      },
    ],
  },
  {
    text: "Cuando trabajas en equipo, ¿cuál suele ser tu rol preferido?",
    options: [
      {
        text: "El encargado de garantizar que los equipos de cómputo y proyectores funcionen.",
        program: "TELE",
      },
      {
        text: "El creador de las fórmulas, hojas inteligentes o prototipos técnicos.",
        program: "PROG",
      },
      {
        text: "El coordinador que toma apuntes, redactar el informe y organiza las entregas.",
        program: "ADMIN",
      },
      {
        text: "El que organiza los materiales, la distribución de tareas y el tiempo.",
        program: "LOG",
      },
      {
        text: "El que vela por el uso limpio de recursos y el impacto social y medioambiental.",
        program: "AMB",
      },
    ],
  },
  {
    text: "¿Qué tipo de lectura o tutoriales buscas con más frecuencia en internet?",
    options: [
      {
        text: "Cómo ensamblar un PC Gamer o configurar la Wi-Fi de tu casa.",
        program: "TELE",
      },
      {
        text: "Cómo aprender a programar en Python, JavaScript o desarrollo web.",
        program: "PROG",
      },
      {
        text: "Técnicas de oratoria, redacción ejecutiva o trucos avanzadas de Word/Excel.",
        program: "ADMIN",
      },
      {
        text: "Funcionamiento de la logística de Amazon o manejo de puertos marítimos.",
        program: "LOG",
      },
      {
        text: "Documentales sobre el cambio climático, reciclaje e impacto ambiental.",
        program: "AMB",
      },
    ],
  },
  {
    text: "¿Cuál de estos logros personales te daría más orgullo alcanzado?",
    options: [
      {
        text: "Haber diseñado e instalado la red inalámbrica de una gran empresa.",
        program: "TELE",
      },
      {
        text: "Lanzar al mercado una aplicación móvil descargada por miles de personas.",
        program: "PROG",
      },
      {
        text: "Ser el jefe de administración reconocido por la puntualidad y orden total.",
        program: "ADMIN",
      },
      {
        text: "Dirigir la logística de envíos internacionales sin ningún retraso.",
        program: "LOG",
      },
      {
        text: "Lograr que una cuenca de agua o bosque local se declare zona protegida.",
        program: "AMB",
      },
    ],
  },
  {
    text: "¿Qué cualidad personal consideras que te define mejor?",
    options: [
      {
        text: "Curioso con la tecnología, hábil con las manos y práctico.",
        program: "TELE",
      },
      {
        text: "Lógico, analítico, enfocado en detalles y persistente.",
        program: "PROG",
      },
      {
        text: "Organizado, comunicativo, disciplinado y cordial.",
        program: "ADMIN",
      },
      {
        text: "Estratégico, metódico, enfocado en tiempos y eficiencia.",
        program: "LOG",
      },
      {
        text: "Consciente del entorno, observador y protector de la naturaleza.",
        program: "AMB",
      },
    ],
  },
  {
    text: "¿Si tuvieras que hacer un curso complementario hoy mismo, de qué sería?",
    options: [
      { text: "Mantenimiento de Servidores y Redes Cisco.", program: "TELE" },
      { text: "Desarrollo Full Stack de Aplicaciones Web.", program: "PROG" },
      {
        text: "Gestión de Servicio al Cliente y Documentación Oficial.",
        program: "ADMIN",
      },
      { text: "Gestión de Almacenes y Cadena de Suministro.", program: "LOG" },
      {
        text: "Evaluación de Impacto Ambiental y Muestreo de Aguas.",
        program: "AMB",
      },
    ],
  },
  {
    text: "¿Cuál es el beneficio social que te gustaría aportar a tu comunidad?",
    options: [
      {
        text: "Conectar zonas rurales o colegios a internet rápido y seguro.",
        program: "TELE",
      },
      {
        text: "Crear software accesible que facilite la vida a personas con discapacidad.",
        program: "PROG",
      },
      {
        text: "Mejorar la atención al público en centros de salud e instituciones.",
        program: "ADMIN",
      },
      {
        text: "Asegurar que los insumos y alimentos lleguen rápido a quienes los necesitan.",
        program: "LOG",
      },
      {
        text: "Proteger las fuentes hídricas y el ecosistema de la región.",
        program: "AMB",
      },
    ],
  },
];

// Estado de la Aplicación
let currentQuestionIndex = 0;
let selectedAnswers = new Array(QUESTIONS.length).fill(null);
let studentData = { name: "", grade: "" };

function startQuiz() {
  const nameInput = document.getElementById("student-name").value.trim();
  const gradeInput = document.getElementById("student-grade").value.trim();

  if (!nameInput || !gradeInput) return;

  studentData.name = nameInput;
  studentData.grade = gradeInput;

  document.getElementById("screen-welcome").classList.remove("active");
  document.getElementById("screen-quiz").classList.add("active");

  currentQuestionIndex = 0;
  selectedAnswers = new Array(QUESTIONS.length).fill(null);
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[currentQuestionIndex];

  // Actualizar textos de progreso
  document.getElementById("question-number-text").innerText =
    `Pregunta ${currentQuestionIndex + 1} de ${QUESTIONS.length}`;
  const pct = Math.round((currentQuestionIndex / QUESTIONS.length) * 100);
  document.getElementById("progress-percent-text").innerText =
    `${pct}% completado`;
  document.getElementById("progress-bar-fill").style.width = `${pct}%`;

  // Renderizar título de la pregunta
  document.getElementById("question-text").innerText =
    `${currentQuestionIndex + 1}. ${q.text}`;

  // Renderizar opciones
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const card = document.createElement("div");
    card.className = `option-card ${selectedAnswers[currentQuestionIndex] === idx ? "selected" : ""}`;
    card.onclick = () => selectOption(idx);

    card.innerHTML = `
                <div class="option-radio"></div>
                <div class="option-text">${opt.text}</div>
            `;
    optionsContainer.appendChild(card);
  });

  // Botón Anterior
  document.getElementById("btn-prev").style.visibility =
    currentQuestionIndex === 0 ? "hidden" : "visible";

  // Botón Siguiente
  const btnNext = document.getElementById("btn-next");
  btnNext.disabled = selectedAnswers[currentQuestionIndex] === null;
  if (currentQuestionIndex === QUESTIONS.length - 1) {
    btnNext.innerText = "Ver Resultados 🎯";
  } else {
    btnNext.innerText = "Siguiente →";
  }
}

function selectOption(index) {
  selectedAnswers[currentQuestionIndex] = index;
  const cards = document.querySelectorAll(".option-card");
  cards.forEach((card, idx) => {
    if (idx === index) {
      card.classList.add("selected");
    } else {
      card.classList.remove("selected");
    }
  });
  document.getElementById("btn-next").disabled = false;
}

function nextQuestion() {
  if (selectedAnswers[currentQuestionIndex] === null) return;

  if (currentQuestionIndex < QUESTIONS.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    calculateAndShowResults();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function calculateAndShowResults() {
  // Conteo de puntos por programa
  const scores = { TELE: 0, PROG: 0, LOG: 0, ADMIN: 0 };

  selectedAnswers.forEach((ansIndex, qIndex) => {
    if (ansIndex !== null) {
      const programKey = QUESTIONS[qIndex].options[ansIndex].program;
      scores[programKey] += 1;
    }
  });

  // Convertir a arreglos ordenados por puntuación
  const totalQuestions = QUESTIONS.length;
  const sortedResults = Object.keys(scores)
    .map((key) => {
      return {
        key: key,
        name: PROGRAMS[key].name,
        desc: PROGRAMS[key].desc,
        score: scores[key],
        percentage: Math.round((scores[key] / totalQuestions) * 100),
      };
    })
    .sort((a, b) => b.score - a.score);

  const top = sortedResults[0];

  // Mostrar pantalla de resultados
  document.getElementById("screen-quiz").classList.remove("active");
  document.getElementById("screen-results").classList.add("active");

  // Llenar información
  document.getElementById("result-student-info").innerText =
    `Estudiante: ${studentData.name} (${studentData.grade})`;
  document.getElementById("top-program-title").innerText = top.name;
  document.getElementById("top-program-desc").innerText = top.desc;
  document.getElementById("top-program-pct").innerText =
    `${top.percentage}% de compatibilidad (${top.score} de ${totalQuestions} respuestas)`;

  // Renderizar barras de afinidad
  const scoresContainer = document.getElementById("scores-container");
  scoresContainer.innerHTML = "";

  sortedResults.forEach((res, index) => {
    const row = document.createElement("div");
    row.className = `score-row rank-${index + 1}`;
    row.innerHTML = `
                <div class="score-info">
                    <span class="score-name">${index + 1}. ${res.name}</span>
                    <span class="score-val">${res.percentage}% (${res.score} pts)</span>
                </div>
                <div class="score-bar-bg">
                    <div class="score-bar-fill" style="width: ${res.percentage}%;"></div>
                </div>
            `;
    scoresContainer.appendChild(row);
  });
  saveStudentResult(top, sortedResults);
}

function getStudentRegistry() {
  try {
    return JSON.parse(
      localStorage.getItem("orientacionVocacionalEstudiantes") || "[]",
    );
  } catch (e) {
    return [];
  }
}
function saveStudentResult(top, sortedResults) {
  const r = getStudentRegistry();
  r.push({
    name: studentData.name,
    grade: studentData.grade,
    program: top.name,
    percentage: top.percentage,
    score: top.score,
    date: new Date().toLocaleString("es-CO"),
    scores: sortedResults,
  });
  localStorage.setItem("orientacionVocacionalEstudiantes", JSON.stringify(r));
}
function showStudentRegistry() {
  document.getElementById("screen-results").classList.remove("active");
  document.getElementById("screen-registry").classList.add("active");
  renderStudentRegistry();
}
function backToResults() {
  document.getElementById("screen-registry").classList.remove("active");
  document.getElementById("screen-results").classList.add("active");
}
function renderStudentRegistry() {
  const r = getStudentRegistry();
  const c = {};
  Object.values(PROGRAMS).forEach((p) => (c[p.name] = 0));
  r.forEach((x) => {
    if (c[x.program] !== undefined) c[x.program]++;
  });
  document.getElementById("registry-summary").innerHTML =
    '<div class="stat-card"><strong>' +
    r.length +
    "</strong><span>Total estudiantes</span></div>" +
    Object.keys(c)
      .map(
        (k) =>
          '<div class="stat-card"><strong>' +
          c[k] +
          "</strong><span>" +
          k +
          "</span></div>",
      )
      .join("");
  const b = document.getElementById("students-table-body");
  b.innerHTML =
    r
      .slice()
      .reverse()
      .map(
        (x) =>
          "<tr><td>" +
          escapeHtml(x.name) +
          "</td><td>" +
          escapeHtml(x.grade) +
          "</td><td>" +
          escapeHtml(x.program) +
          "</td><td>" +
          x.percentage +
          "%</td><td>" +
          escapeHtml(x.date) +
          "</td></tr>",
      )
      .join("") ||
    '<tr><td colspan="5" style="text-align:center;padding:20px">Aún no hay estudiantes registrados.</td></tr>';
}
function escapeHtml(v) {
  return String(v).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[c],
  );
}
function exportStudentsCSV() {
  const r = getStudentRegistry();
  if (!r.length) {
    alert("No hay estudiantes registrados.");
    return;
  }
  const rows = [
    ["Estudiante", "Grado/Grupo", "Programa sugerido", "Afinidad", "Fecha"],
    ...r.map((x) => [x.name, x.grade, x.program, x.percentage + "%", x.date]),
  ];
  const csv = rows
    .map((a) =>
      a.map((v) => '"' + String(v).replace(/"/g, '""') + '"').join(";"),
    )
    .join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(
    new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" }),
  );
  a.download = "estudiantes_orientacion_vocacional.csv";
  a.click();
}
function clearStudentRegistry() {
  if (confirm("¿Eliminar todos los registros guardados en este navegador?")) {
    localStorage.removeItem("orientacionVocacionalEstudiantes");
    renderStudentRegistry();
  }
}

function resetQuiz() {
  document.getElementById("screen-results").classList.remove("active");
  document.getElementById("screen-welcome").classList.add("active");
  document.getElementById("form-student").reset();
}
