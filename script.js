const questions = [
  [
    "Licencia de conducir",
    "¿Qué es la licencia de conducir?",
    "Es el documento que habilita a una persona a conducir determinados vehículos, si cumple los requisitos legales."
  ],
  [
    "Licencia de conducir",
    "¿Qué requisitos generales se necesitan para obtenerla?",
    "Tener la edad requerida, presentar la documentación, aprobar los exámenes correspondientes y cumplir las condiciones de aptitud."
  ],
  [
    "Licencia de conducir",
    "¿Cuál es la edad mínima general para conducir?",
    "En el TP se indica 17 años para categorías ordinarias, con autorización legal si se trata de un menor."
  ],
  [
    "Licencia de conducir",
    "¿Desde qué edad se puede conducir un ciclomotor sin acompañante?",
    "Desde los 16 años, según lo indicado en el TP."
  ],
  [
    "Licencia de conducir",
    "¿Qué edad se requiere generalmente para categorías profesionales C, D y E?",
    "Generalmente, 21 años."
  ],
  [
    "Licencia de conducir",
    "¿Por cuánto tiempo puede tener vigencia una licencia?",
    "El TP indica que puede durar hasta 5 años, según la categoría y las condiciones."
  ],
  [
    "Documentación",
    "¿Qué documentos se deben llevar para circular?",
    "Licencia vigente, cédula de identificación del vehículo, seguro obligatorio, DNI y revisión técnica cuando corresponda; además, el vehículo debe tener sus patentes."
  ],
  [
    "Documentación",
    "¿Qué elementos de emergencia debe llevar el vehículo?",
    "Matafuego y balizas portátiles, según lo indicado en el TP."
  ],
  [
    "Responsabilidades",
    "¿Cuáles son las responsabilidades principales de quien conduce?",
    "Respetar las señales y velocidades, no conducir bajo efectos de alcohol o drogas, evitar distracciones, mantener distancia y cuidar el vehículo."
  ],
  [
    "Responsabilidades",
    "¿Por qué no se debe usar el celular al conducir?",
    "Porque distrae y reduce la atención sobre el tránsito, aumentando el riesgo de accidentes."
  ],
  [
    "Responsabilidades",
    "¿Qué se debe hacer antes de conducir?",
    "Verificar que el vehículo esté en condiciones y que se cuente con la documentación necesaria."
  ],
  [
    "Reglas de circulación",
    "¿Qué establece la prioridad de paso de la derecha?",
    "En general, se debe ceder el paso al vehículo que se aproxima por la derecha, salvo excepciones señalizadas o establecidas por la normativa."
  ],
  [
    "Reglas de circulación",
    "¿Quién tiene prioridad en una rotonda?",
    "Los vehículos que ya están circulando dentro de la rotonda."
  ],
  [
    "Reglas de circulación",
    "¿Cuál es la velocidad máxima general en calles?",
    "40 km/h."
  ],
  [
    "Reglas de circulación",
    "¿Cuál es la velocidad máxima general en avenidas?",
    "60 km/h."
  ],
  [
    "Reglas de circulación",
    "¿Cuál es la velocidad máxima general en rutas rurales?",
    "110 km/h para autos y motos, según el TP."
  ],
  [
    "Reglas de circulación",
    "¿Cuál es la velocidad máxima general en semiautopistas?",
    "120 km/h para autos y motos, según el TP."
  ],
  [
    "Reglas de circulación",
    "¿Cuál es la velocidad máxima general en autopistas?",
    "130 km/h para autos y motos, según el TP."
  ],
  [
    "Reglas de circulación",
    "¿Por qué se debe reducir la velocidad en zonas escolares?",
    "Porque hay mayor presencia de niños y peatones; el TP indica 20 km/h cuando la zona está en funcionamiento."
  ],
  [
    "Reglas de circulación",
    "¿Por qué lado se debe adelantar generalmente?",
    "Por la izquierda, solo cuando está permitido y es seguro."
  ],
  [
    "Señales",
    "¿Cuáles son los tipos principales de señales viales?",
    "Reglamentarias, preventivas e informativas. También existen marcas horizontales y señales luminosas."
  ],
  [
    "Señales",
    "¿Qué significa el semáforo rojo?",
    "Detenerse."
  ],
  [
    "Señales",
    "¿Qué significa el semáforo amarillo fijo?",
    "Precaución: prepararse para detenerse si es seguro."
  ],
  [
    "Señales",
    "¿Qué significa el semáforo verde?",
    "Avanzar si el cruce está despejado y hacerlo es seguro."
  ],
  [
    "Señales",
    "¿Qué se debe hacer ante una luz amarilla intermitente?",
    "Avanzar con precaución."
  ],
  [
    "Señales",
    "¿Qué se debe hacer ante una luz roja intermitente?",
    "Detenerse y continuar solo cuando sea seguro."
  ],
  [
    "Seguridad del vehículo",
    "¿Qué partes del vehículo deben revisarse periódicamente?",
    "Frenos, neumáticos, luces, dirección, espejos, parabrisas y limpiaparabrisas."
  ],
  [
    "Seguridad del vehículo",
    "¿Para qué sirve el cinturón de seguridad?",
    "Para sujetar a los ocupantes y reducir el riesgo de lesiones en un choque."
  ],
  [
    "Seguridad del vehículo",
    "¿El airbag reemplaza al cinturón de seguridad?",
    "No. El airbag es un complemento del cinturón."
  ],
  [
    "Seguridad del vehículo",
    "¿Para qué sirve el sistema ABS?",
    "Ayuda a evitar que las ruedas se bloqueen durante una frenada."
  ],
  [
    "Seguridad del vehículo",
    "¿Qué seguridad debe usar un motociclista?",
    "Casco correctamente colocado y ajustado, además de respetar las normas de circulación."
  ],
  [
    "Conducción segura",
    "¿Qué efectos puede producir el alcohol al conducir?",
    "Disminuye reflejos, coordinación y capacidad de atención. Si se consume alcohol, no se debe conducir."
  ],
  [
    "Conducción segura",
    "¿Qué se debe hacer si se está cansado?",
    "No conducir fatigado; descansar y, si es necesario, detenerse en un lugar seguro."
  ],
  [
    "Conducción segura",
    "¿Cómo se debe conducir con lluvia intensa?",
    "Reducir la velocidad, aumentar la distancia, evitar maniobras bruscas y detenerse en un lugar seguro si hace falta."
  ],
  [
    "Usuarios de la vía",
    "¿Qué responsabilidad tiene el peatón?",
    "Circular por lugares habilitados, respetar señales y cruzar por sendas peatonales cuando corresponda."
  ],
  [
    "Usuarios de la vía",
    "¿Qué deben hacer los pasajeros?",
    "Usar cinturón cuando corresponda, no distraer al conductor y respetar las normas de seguridad."
  ],
  [
    "Usuarios de la vía",
    "¿Qué deben respetar los ciclistas?",
    "Las normas de tránsito, señalizar sus maniobras y usar elementos de seguridad."
  ],
  [
    "Infracciones",
    "¿Qué es una infracción de tránsito?",
    "Es el incumplimiento de una norma de circulación."
  ],
  [
    "Infracciones",
    "¿Qué consecuencias puede tener una infracción?",
    "Multas, suspensión o inhabilitación para conducir y otras medidas previstas por la normativa."
  ],
  [
    "Situaciones",
    "¿Qué hacer si el semáforo está en rojo?",
    "Detenerse y esperar la señal que permita avanzar."
  ],
  [
    "Situaciones",
    "¿Qué hacer si se necesita usar el celular mientras se conduce?",
    "No usarlo al volante; detenerse en un lugar seguro antes de utilizarlo."
  ],
  [
    "Situaciones",
    "¿Qué hacer si un pasajero no tiene cinturón?",
    "Asegurarse de que se lo coloque antes de iniciar el viaje."
  ],
  [
    "Situaciones",
    "¿Qué hacer si una moto circula sin casco?",
    "El motociclista debe colocarse y ajustarse correctamente el casco antes de circular."
  ],
  [
    "Situaciones",
    "¿Qué hacer si se consumió alcohol y hay que volver a casa?",
    "No conducir. Elegir un transporte alternativo seguro o pedir ayuda a alguien que no haya consumido alcohol."
  ],
  [
    "Situaciones",
    "¿Se puede adelantar en una curva?",
    "No. Se debe esperar un tramo autorizado, con visibilidad y condiciones seguras."
  ],
  [
    "Situaciones",
    "¿Qué hacer al acercarse a un peatón en una senda peatonal?",
    "Reducir la velocidad y ceder el paso cuando corresponda."
  ],
  [
    "Situaciones",
    "¿Qué hacer si fallan los frenos?",
    "Intentar detenerse de forma segura, señalizar y solicitar asistencia mecánica."
  ]
];

const list = document.querySelector("#questions");
const search = document.querySelector("#search");
const category = document.querySelector("#category");
const count = document.querySelector("#count");
const toggleAll = document.querySelector("#toggleAll");

[...new Set(questions.map(q => q[0]))].forEach(topic => {
  const option = document.createElement("option");
  option.value = topic;
  option.textContent = topic;
  category.append(option);
});

function render() {
  const term = search.value.trim().toLowerCase();
  const topic = category.value;
  const filtered = questions.filter(([group, question, answer]) =>
    (!topic || group === topic) &&
    (question.toLowerCase().includes(term) || answer.toLowerCase().includes(term) || group.toLowerCase().includes(term))
  );
  count.textContent = `${filtered.length} pregunta${filtered.length === 1 ? "" : "s"}`;
  list.innerHTML = "";

  if (!filtered.length) {
    list.innerHTML = '<div class="empty">No encontramos preguntas con esa búsqueda.</div>';
    return;
  }

  filtered.forEach(([group, question, answer]) => {
    const originalIndex = questions.findIndex(item => item[1] === question);
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <button class="question" type="button" aria-expanded="false">
        <span class="num">${String(originalIndex + 1).padStart(2, "0")}</span>
        <span class="qtext">${question}</span>
        <span class="chevron">⌄</span>
      </button>
      <div class="answer"><span class="tag">${group}</span><div>${answer}</div></div>
    `;
    const button = card.querySelector(".question");
    button.addEventListener("click", () => {
      card.classList.toggle("open");
      button.setAttribute("aria-expanded", card.classList.contains("open"));
    });
    list.append(card);
  });
}

search.addEventListener("input", render);
category.addEventListener("change", render);
toggleAll.addEventListener("click", () => {
  const cards = [...list.querySelectorAll(".card")];
  const openAll = cards.some(card => !card.classList.contains("open"));
  cards.forEach(card => {
    card.classList.toggle("open", openAll);
    card.querySelector(".question").setAttribute("aria-expanded", openAll);
  });
  toggleAll.textContent = openAll ? "Ocultar todas las respuestas" : "Mostrar todas las respuestas";
});
render();
