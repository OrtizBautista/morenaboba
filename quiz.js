const quizQuestions = [
  // PRIORIDAD DE PASO
  {
    topic: "Prioridad de paso",
    q: "En una intersección sin semáforos ni señalización especial, dos vehículos llegan al mismo tiempo. ¿Quién tiene prioridad como regla general?",
    a: [
      "El que circula por la calle más ancha.",
      "El que viene desde la derecha.",
      "El que circula más rápido.",
      "El vehículo de mayor tamaño."
    ],
    correct: 1,
    why: "Como regla general, se debe ceder el paso al vehículo que se aproxima desde la derecha, salvo las excepciones previstas por la normativa."
  },
  {
    topic: "Prioridad de paso",
    q: "¿La prioridad de la derecha se aplica absolutamente en todas las situaciones?",
    a: [
      "Sí, nunca existen excepciones.",
      "Solo se aplica durante el día.",
      "No, existen excepciones establecidas por la normativa.",
      "Depende del tamaño de los vehículos."
    ],
    correct: 2,
    why: "La prioridad de la derecha tiene excepciones, como determinadas señales, vehículos de emergencia, cruces ferroviarios, peatones y rotondas."
  },
  {
    topic: "Rotondas",
    q: "Al ingresar a una rotonda sin una disposición especial, ¿quién tiene prioridad?",
    a: [
      "Quien ya circula por ella.",
      "Quien ingresa desde la derecha.",
      "El vehículo más rápido.",
      "El que utiliza la luz de giro."
    ],
    correct: 0,
    why: "Como regla general, tiene prioridad quien ya se encuentra circulando dentro de la rotonda."
  },
  {
    topic: "Agentes de tránsito",
    q: "Un agente de tránsito te indica que te detengas, aunque el semáforo permita avanzar. ¿Qué corresponde?",
    a: [
      "Avanzar porque el semáforo está habilitado.",
      "Avanzar lentamente.",
      "Obedecer solamente si hay otros vehículos detenidos.",
      "Detenerte y respetar la indicación del agente."
    ],
    correct: 3,
    why: "Las indicaciones de la autoridad de tránsito prevalecen sobre las señales luminosas."
  },

  // PEATONES Y ADELANTAMIENTOS
  {
    topic: "Peatones",
    q: "Una persona está cruzando por la senda peatonal cuando te aproximás. ¿Cuál es la conducta correcta?",
    a: [
      "Tocar bocina para que se detenga.",
      "Cederle el paso y detenerte si es necesario.",
      "Acelerar para pasar antes.",
      "Cambiar de carril sin observar."
    ],
    correct: 1,
    why: "El conductor debe respetar la prioridad peatonal y evitar poner en peligro a quien cruza."
  },
  {
    topic: "Adelantamiento",
    q: "¿En qué situación resulta inseguro adelantar a otro vehículo?",
    a: [
      "En una recta con buena visibilidad y espacio.",
      "Cuando la maniobra está permitida.",
      "En una curva sin visibilidad suficiente.",
      "Cuando el vehículo de adelante circula lentamente."
    ],
    correct: 2,
    why: "La falta de visibilidad impide evaluar correctamente si hay espacio suficiente para completar la maniobra."
  },
  {
    topic: "Adelantamiento",
    q: "Al adelantar, observás que un vehículo de frente se aproxima. ¿Qué principio debe guiar tu decisión?",
    a: [
      "Completar el adelantamiento a toda costa.",
      "Acelerar por encima del límite.",
      "Tocar bocina al vehículo que viene de frente.",
      "No iniciar o abandonar la maniobra si no hay espacio seguro."
    ],
    correct: 3,
    why: "El adelantamiento requiere espacio y visibilidad suficientes. Nunca debe forzarse una maniobra peligrosa."
  },

  // VELOCIDAD Y CLIMA
  {
    topic: "Velocidad",
    q: "Circulás dentro del límite permitido, pero hay niebla intensa. ¿Qué deberías hacer?",
    a: [
      "Reducir la velocidad y aumentar la distancia de seguimiento.",
      "Mantener la velocidad máxima.",
      "Seguir al vehículo delantero muy de cerca.",
      "Acelerar para salir rápidamente de la niebla."
    ],
    correct: 0,
    why: "La velocidad debe adaptarse a la visibilidad, la calzada y el tránsito, incluso por debajo del máximo permitido."
  },
  {
    topic: "Velocidad",
    q: "¿Qué significa que una velocidad sea la máxima permitida?",
    a: [
      "Que siempre es seguro circular a ella.",
      "Que no debe superarse, pero puede ser necesario circular más despacio.",
      "Que todos los vehículos deben mantenerla.",
      "Que se aplica aunque las condiciones sean peligrosas."
    ],
    correct: 1,
    why: "El límite es un máximo. El conductor debe adaptar la velocidad a las condiciones reales."
  },
  {
    topic: "Lluvia",
    q: "¿Por qué se debe aumentar la distancia de seguimiento cuando llueve?",
    a: [
      "Porque el motor pierde potencia.",
      "Porque los frenos dejan de funcionar.",
      "Porque puede disminuir la adherencia y aumentar la distancia de frenado.",
      "Porque el vehículo delantero siempre frena más rápido."
    ],
    correct: 2,
    why: "La calzada mojada puede reducir la adherencia y aumentar la distancia necesaria para detenerse."
  },
  {
    topic: "Aquaplaning",
    q: "El vehículo pierde adherencia al pasar por una acumulación de agua. ¿Qué acción es más adecuada?",
    a: [
      "Frenar bruscamente.",
      "Girar rápidamente el volante.",
      "Acelerar con fuerza.",
      "Soltar gradualmente el acelerador y evitar maniobras bruscas."
    ],
    correct: 3,
    why: "Ante el aquaplaning, se deben evitar frenadas y giros bruscos para favorecer la recuperación del control."
  },

  // ALCOHOL Y DISTRACCIONES
  {
    topic: "Alcohol",
    q: "Una persona consumió alcohol, pero afirma sentirse perfectamente bien. ¿Qué decisión es segura?",
    a: [
      "No conducir y utilizar otro medio de transporte.",
      "Conducir despacio.",
      "Tomar café y conducir.",
      "Esperar unos minutos y evaluar sus reflejos."
    ],
    correct: 0,
    why: "El alcohol afecta los reflejos, la atención y el juicio. Sentirse bien no significa estar en condiciones de conducir."
  },
  {
    topic: "Alcohol",
    q: "¿Por qué el café no es una solución para conducir después de consumir alcohol?",
    a: [
      "Porque aumenta siempre la concentración de alcohol.",
      "Porque no elimina los efectos del alcohol sobre las capacidades de conducción.",
      "Porque solo funciona en rutas.",
      "Porque reemplaza el descanso."
    ],
    correct: 1,
    why: "El café no elimina el alcohol del organismo ni garantiza recuperar las capacidades necesarias para conducir."
  },
  {
    topic: "Distracciones",
    q: "Mientras conducís recibís un mensaje. ¿Qué deberías hacer para leerlo?",
    a: [
      "Leerlo brevemente mientras avanzás.",
      "Mirarlo al llegar a una intersección.",
      "Detenerte en un lugar seguro y permitido antes de utilizar el celular.",
      "Responder usando una sola mano."
    ],
    correct: 2,
    why: "El uso del celular desvía la atención. Debe evitarse durante la conducción."
  },
  {
    topic: "Distracciones",
    q: "¿Qué tipo de distracción puede producir una conversación telefónica incluso sin sostener el celular?",
    a: [
      "Únicamente una distracción mecánica.",
      "Ninguna, si el vehículo está en movimiento.",
      "Solo una distracción visual.",
      "Una distracción cognitiva que reduce la atención al tránsito."
    ],
    correct: 3,
    why: "Una conversación puede ocupar recursos mentales necesarios para percibir y anticipar situaciones de tránsito."
  },
  {
    topic: "Fatiga",
    q: "Durante un viaje largo, el conductor comienza a sentir sueño. ¿Qué debería hacer?",
    a: [
      "Aumentar la música y seguir.",
      "Detenerse en un lugar seguro y descansar.",
      "Abrir la ventana y acelerar.",
      "Conducir más cerca del vehículo delantero."
    ],
    correct: 1,
    why: "La fatiga reduce los reflejos y la atención. La medida adecuada es detenerse y descansar."
  },
  {
    topic: "Fatiga",
    q: "¿Cuál de estas señales puede indicar fatiga al conducir?",
    a: [
      "Mayor capacidad de anticipación.",
      "Mejor percepción de distancias.",
      "Bostezos frecuentes y dificultad para concentrarse.",
      "Reflejos más rápidos."
    ],
    correct: 2,
    why: "Los bostezos, la falta de concentración y la somnolencia son signos de fatiga."
  },

  // VEHÍCULOS DE EMERGENCIA
  {
    topic: "Vehículos de emergencia",
    q: "Una ambulancia se aproxima con sirena y luces activadas. ¿Qué debés hacer?",
    a: [
      "Facilitarle el paso de manera segura.",
      "Seguirla de cerca.",
      "Acelerar para circular delante de ella.",
      "Frenar abruptamente en cualquier lugar."
    ],
    correct: 0,
    why: "Se debe facilitar el paso a los vehículos de emergencia, evitando maniobras peligrosas."
  },
  {
    topic: "Vehículos de emergencia",
    q: "¿Por qué no es correcto seguir de cerca a una ambulancia para aprovechar su paso?",
    a: [
      "Porque las ambulancias circulan demasiado lento.",
      "Porque se reduce la distancia de seguridad y se puede generar un siniestro.",
      "Porque está permitido solo en avenidas.",
      "Porque se pierde prioridad al hacerlo."
    ],
    correct: 1,
    why: "Seguir de cerca a un vehículo de emergencia es peligroso y puede interferir con su circulación."
  },

  // DOCUMENTACIÓN Y LICENCIA
  {
    topic: "Documentación",
    q: "¿Qué debe tener en cuenta un conductor respecto de la documentación para circular?",
    a: [
      "Que basta con llevar un documento vencido.",
      "Que solo se exige en viajes largos.",
      "Que el estado del vehículo reemplaza los documentos.",
      "Que debe contar con la documentación obligatoria vigente."
    ],
    correct: 3,
    why: "La circulación requiere la documentación exigida por la normativa, vigente y disponible."
  },
  {
    topic: "Licencia de conducir",
    q: "¿Por qué es importante que la licencia corresponda a la categoría del vehículo?",
    a: [
      "Porque acredita la habilitación para conducir ese tipo de vehículo.",
      "Porque determina el color del vehículo.",
      "Porque reemplaza la revisión técnica.",
      "Porque elimina la obligación de respetar las normas."
    ],
    correct: 0,
    why: "La categoría de la licencia debe habilitar al conductor para el vehículo que utiliza."
  },

  // ESTACIONAMIENTO Y FRENADO
  {
    topic: "Estacionamiento",
    q: "¿Por qué no se debe estacionar frente a una rampa para personas con movilidad reducida?",
    a: [
      "Porque las rampas son exclusivamente para bicicletas.",
      "Porque se bloquea un acceso y se dificulta la movilidad.",
      "Porque solo pueden utilizarla los vehículos grandes.",
      "Porque disminuye el límite de velocidad."
    ],
    correct: 1,
    why: "Obstruir una rampa impide o dificulta el acceso de personas que necesitan utilizarla."
  },
  {
    topic: "Estacionamiento",
    q: "¿Cuál es el riesgo de estacionar demasiado cerca de una esquina?",
    a: [
      "Mejora la visibilidad de todos.",
      "Facilita siempre el giro de los vehículos.",
      "Puede obstruir la visibilidad y aumentar el riesgo para peatones y conductores.",
      "No existe riesgo si el vehículo es pequeño."
    ],
    correct: 2,
    why: "Estacionar cerca de esquinas puede reducir la visibilidad de quienes cruzan o ingresan a la intersección."
  },
  {
    topic: "Frenado",
    q: "En un vehículo con ABS, durante una frenada de emergencia, ¿qué se recomienda?",
    a: [
      "Bombear el pedal continuamente.",
      "Soltar el pedal cuando vibra.",
      "Utilizar únicamente el freno de estacionamiento.",
      "Presionar firmemente el pedal y mantener la presión."
    ],
    correct: 3,
    why: "El ABS ayuda a evitar el bloqueo de las ruedas. En una frenada de emergencia se debe mantener una presión firme."
  },
  {
    topic: "Frenado",
    q: "¿Por qué mantener los neumáticos en buen estado es fundamental para frenar?",
    a: [
      "Porque influyen en la adherencia y el control del vehículo.",
      "Porque reemplazan al sistema de frenos.",
      "Porque evitan cualquier siniestro.",
      "Porque permiten circular siempre al máximo de velocidad."
    ],
    correct: 0,
    why: "Los neumáticos son el contacto del vehículo con la calzada y afectan la adherencia, el frenado y la estabilidad."
  },

  // PASOS FERROVIARIOS
  {
    topic: "Paso a nivel",
    q: "Las señales de un paso a nivel advierten que se aproxima un tren. ¿Qué debés hacer?",
    a: [
      "Cruzar rápidamente antes de que llegue.",
      "Detenerte y esperar hasta que sea seguro cruzar.",
      "Seguir al vehículo de adelante sin observar.",
      "Detenerte sobre las vías para mirar."
    ],
    correct: 1,
    why: "El tren tiene prioridad. No se debe cruzar cuando las señales advierten peligro ni detenerse sobre las vías."
  },
  {
    topic: "Paso a nivel",
    q: "¿Por qué nunca se debe detener un vehículo sobre las vías ferroviarias?",
    a: [
      "Porque el tren puede frenar instantáneamente.",
      "Porque las vías son exclusivas para peatones.",
      "Porque el vehículo puede quedar en la trayectoria del tren y provocar un siniestro grave.",
      "Porque solo se permite detenerse durante el día."
    ],
    correct: 2,
    why: "Detenerse sobre las vías pone en peligro a los ocupantes y a quienes circulan en el tren."
  },

  // CICLISTAS
  {
    topic: "Ciclistas",
    q: "Al adelantar a un ciclista, ¿qué conducta es más segura?",
    a: [
      "Pasar muy cerca para reducir el tiempo.",
      "Tocar bocina continuamente.",
      "Adelantar aunque venga un vehículo de frente.",
      "Mantener una separación lateral suficiente y adelantar solo si es seguro."
    ],
    correct: 3,
    why: "Los ciclistas son usuarios vulnerables. La maniobra requiere espacio lateral y condiciones seguras."
  },
  {
    topic: "Ciclistas",
    q: "¿Por qué un conductor debe revisar los espejos antes de abrir la puerta del vehículo estacionado?",
    a: [
      "Para evitar golpear a un ciclista u otro usuario que se aproxima.",
      "Para comprobar el consumo de combustible.",
      "Para tener prioridad sobre la bicicleta.",
      "Para evitar usar las luces de giro."
    ],
    correct: 0,
    why: "Abrir una puerta sin observar puede provocar una colisión con ciclistas o motociclistas."
  },

  // CONDUCCIÓN DEFENSIVA
  {
    topic: "Conducción defensiva",
    q: "Un vehículo delante tuyo frena de manera inesperada. ¿Qué factor te ayuda a evitar una colisión?",
    a: [
      "Circular pegado al vehículo delantero.",
      "Confiar únicamente en el ABS.",
      "Acelerar para cambiar de carril inmediatamente.",
      "Mantener una distancia de seguimiento adecuada."
    ],
    correct: 3,
    why: "Una distancia suficiente brinda tiempo y espacio para reaccionar ante frenadas inesperadas."
  },
  {
    topic: "Conducción defensiva",
    q: "¿Qué significa conducir de manera defensiva?",
    a: [
      "Anticipar riesgos y actuar para prevenir situaciones peligrosas.",
      "Imponer siempre la prioridad propia.",
      "Conducir más rápido que los demás.",
      "Confiar en que todos respetarán las normas."
    ],
    correct: 0,
    why: "La conducción defensiva consiste en anticipar posibles peligros y reducir los riesgos."
  },

  // CONVIVENCIA VIAL
  {
    topic: "Convivencia vial",
    q: "¿Cuál es una conducta responsable en la vía pública?",
    a: [
      "Usar la bocina para expresar enojo.",
      "Señalizar las maniobras y respetar las prioridades.",
      "Imponer el paso por circular más rápido.",
      "No ceder nunca el paso."
    ],
    correct: 1,
    why: "La convivencia vial requiere respeto, previsibilidad y cumplimiento de las normas."
  },
  {
    topic: "Convivencia vial",
    q: "¿Por qué es importante señalizar un cambio de carril con anticipación?",
    a: [
      "Porque otorga prioridad absoluta.",
      "Porque permite cambiar sin mirar los espejos.",
      "Porque comunica la intención y permite que otros reaccionen.",
      "Porque elimina la necesidad de verificar el punto ciego."
    ],
    correct: 2,
    why: "La señalización anticipada hace previsible la maniobra, pero no reemplaza la observación ni la verificación de seguridad."
  },

  // TRANSPORTE DE PASAJEROS Y NIÑOS
  {
    topic: "Transporte de pasajeros",
    q: "¿Qué debe hacer el conductor antes de iniciar la marcha con pasajeros?",
    a: [
      "Acelerar mientras suben.",
      "Iniciar la marcha si la puerta está casi cerrada.",
      "Permitir que los pasajeros se acomoden durante el movimiento.",
      "Verificar que estén correctamente ubicados y que las puertas estén cerradas."
    ],
    correct: 3,
    why: "Antes de iniciar la marcha, debe asegurarse de que los pasajeros estén ubicados de forma segura."
  },
  {
    topic: "Transporte de niños",
    q: "¿Qué criterio debe considerarse al transportar niños en un automóvil?",
    a: [
      "Utilizar el sistema de retención infantil adecuado según sus características y la normativa.",
      "Llevarlos siempre en el asiento delantero.",
      "Permitir que se sujeten con el cinturón de un adulto sin evaluar su ajuste.",
      "Transportarlos sin cinturón en trayectos cortos."
    ],
    correct: 0,
    why: "Los niños necesitan sistemas de retención adecuados a sus características y a la normativa vigente."
  },

  // SINIESTROS VIALES
  {
    topic: "Siniestros viales",
    q: "Si presenciás un siniestro vial, ¿qué acción inicial es responsable?",
    a: [
      "Mover inmediatamente a todas las personas.",
      "Proteger la zona, pedir ayuda y evitar exponerse a nuevos peligros.",
      "Abandonar el lugar sin avisar.",
      "Tomar fotografías antes de evaluar la seguridad."
    ],
    correct: 1,
    why: "Es importante proteger la escena, solicitar asistencia y evitar agravar la situación."
  },
  {
    topic: "Siniestros viales",
    q: "¿Por qué no se debe mover innecesariamente a una persona lesionada tras un siniestro?",
    a: [
      "Porque puede perder sus documentos.",
      "Porque solo un conductor puede moverla.",
      "Porque podría agravarse una lesión, especialmente en la columna.",
      "Porque está prohibido hablarle."
    ],
    correct: 2,
    why: "Mover a una persona lesionada sin necesidad puede empeorar ciertas lesiones. Se debe solicitar asistencia profesional."
  },

  // RESPONSABILIDAD VIAL
  {
    topic: "Responsabilidad vial",
    q: "¿Cuál es el principal objetivo de las normas de tránsito?",
    a: [
      "Que todos los vehículos circulen a la misma velocidad.",
      "Priorizar siempre los automóviles.",
      "Evitar que los peatones utilicen las calles.",
      "Ordenar la circulación y prevenir siniestros protegiendo la vida."
    ],
    correct: 3,
    why: "Las normas organizan la circulación, previenen riesgos y protegen la vida y la integridad de las personas."
  },
  {
    topic: "Responsabilidad vial",
    q: "Un conductor conoce muy bien una ruta y considera que puede ignorar una norma. ¿Qué actitud es correcta?",
    a: [
      "Respetar las normas aunque conozca el camino.",
      "Ignorarlas si no hay otros vehículos.",
      "Cumplirlas solo de noche.",
      "Decidir según su experiencia personal."
    ],
    correct: 0,
    why: "La experiencia no reemplaza las normas. Las reglas de circulación deben respetarse en todo momento."
  }
];

const quizPanel = document.getElementById("quizPanel");
const resultPanel = document.getElementById("resultPanel");
const progress = document.getElementById("progress");
const topic = document.getElementById("topic");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");
const resultTitle = document.getElementById("resultTitle");
const resultScore = document.getElementById("resultScore");
const resultBar = document.getElementById("resultBar");
const resultMessage = document.getElementById("resultMessage");

let currentQuestion = 0;
let score = 0;
let answered = false;

function renderQuestion() {
  answered = false;

  const question = quizQuestions[currentQuestion];

  progress.textContent =
    `Pregunta ${currentQuestion + 1} de ${quizQuestions.length}`;

  topic.textContent = question.topic;

  progressBar.style.width =
    `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;

  questionText.textContent = question.q;

  optionsContainer.innerHTML = "";
  feedback.innerHTML = "";
  feedback.className = "feedback";

  question.a.forEach((answer, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "option";
    button.textContent =
      `${String.fromCharCode(65 + index)}. ${answer}`;

    button.addEventListener("click", () => selectAnswer(index));

    optionsContainer.appendChild(button);
  });

  nextBtn.disabled = true;

  nextBtn.textContent =
    currentQuestion === quizQuestions.length - 1
      ? "Ver resultado"
      : "Siguiente →";
}

function selectAnswer(selectedIndex) {
  if (answered) return;

  answered = true;

  const question = quizQuestions[currentQuestion];
  const buttons = optionsContainer.querySelectorAll(".option");

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.correct) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && index !== question.correct) {
      button.classList.add("wrong");
    }
  });

  if (selectedIndex === question.correct) {
    score++;

    feedback.className = "feedback correct-feedback";
    feedback.innerHTML = `
      <strong>¡Correcto! 🎉</strong>
      <p>${question.why}</p>
    `;
  } else {
    feedback.className = "feedback wrong-feedback";
    feedback.innerHTML = `
      <strong>Incorrecto.</strong>
      <p>${question.why}</p>
    `;
  }

  nextBtn.disabled = false;
}

// FRASES FINALES
const frasesFinales = {
  excelente: [
    "¡Una máquina! Hasta el inspector de tránsito te aplaude.",
    "Te sabés las normas mejor que muchos que ya manejan.",
    "Impecable. No te para ni una rotonda.",
    "El volante todavía no es tuyo, pero el conocimiento sí.",
    "¡Tremendo resultado! Se nota que estudiaste.",
    "Casi perfecto. ¿Seguro que no hiciste el examen antes?"
  ],

  muyBien: [
    "¡Muy bien! Un par de repasos y estás en modo experto.",
    "La rompiste. Se te escaparon algunas, pero nada grave.",
    "Vas por buen camino. Literalmente, por el camino correcto.",
    "Buen resultado. El semáforo está en verde para seguir aprendiendo.",
    "Te falta poquito para dominarlo todo."
  ],

  regular: [
    "Bueno... el volante todavía puede esperar un poquito. 😂",
    "No estuvo mal, pero algunas preguntas te hicieron la psicológica.",
    "Hay potencial. Ahora hay que ponerle un poquito más de estudio.",
    "La rotonda te ganó esta vez, pero la revancha existe.",
    "Un repasito a la guía y volvés con todo.",
    "Tranqui, para eso está el cuestionario. ¡A seguir!"
  ],

  bajo: [
    "Epa... la guía te está pidiendo que vuelvas a estudiar. 😂",
    "El cuestionario te paseó un poquito, no te voy a mentir.",
    "Hoy ganó el tránsito. Mañana puede ganar el conocimiento.",
    "Bueno, al menos ahora sabés qué tenés que repasar.",
    "No te rindas. Hasta el GPS se recalcula.",
    "La guía te está esperando. No la dejes en visto."
  ]
};

function obtenerFraseFinal(percentage) {
  let grupo;

  if (percentage >= 90) {
    grupo = frasesFinales.excelente;
  } else if (percentage >= 75) {
    grupo = frasesFinales.muyBien;
  } else if (percentage >= 60) {
    grupo = frasesFinales.regular;
  } else {
    grupo = frasesFinales.bajo;
  }

  const indice = Math.floor(Math.random() * grupo.length);

  return grupo[indice];
}

function showResult() {
  quizPanel.hidden = true;
  resultPanel.hidden = false;

  const percentage = Math.round(
    (score / quizQuestions.length) * 100
  );

  resultScore.textContent =
    `Puntaje: ${score} de ${quizQuestions.length} (${percentage}%)`;

  resultBar.style.width = `${percentage}%`;

  if (percentage >= 90) {
    resultTitle.textContent = "¡Excelente! 🏆";
    resultMessage.textContent =
      "Tenés un gran dominio de los conceptos de Educación Vial. ¡Nivel experto!";
  } else if (percentage >= 75) {
    resultTitle.textContent = "¡Muy buen resultado! 🚦";
    resultMessage.textContent =
      "Conocés muy bien las normas. Repasá algunos detalles para mejorar todavía más.";
  } else if (percentage >= 60) {
    resultTitle.textContent = "¡Vas por buen camino! 📘";
    resultMessage.textContent =
      "Tenés una base sólida, pero conviene repasar las preguntas que te costaron.";
  } else {
    resultTitle.textContent = "¡A seguir estudiando! 💪";
    resultMessage.textContent =
      "Este cuestionario es desafiante. Repasá la guía y volvé a intentarlo.";
  }

  const frase = obtenerFraseFinal(percentage);

  resultMessage.textContent += `\n\n${frase}`;
}

function restart() {
  currentQuestion = 0;
  score = 0;

  resultPanel.hidden = true;
  quizPanel.hidden = false;

  renderQuestion();
}

nextBtn.addEventListener("click", () => {
  if (!answered) return;

  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResult();
  }
});

retryBtn.addEventListener("click", restart);

renderQuestion();