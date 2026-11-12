const quizQuestions = [

    {
        topic: "Normas generales",
        q: "¿Cuál es el objetivo principal de las normas de tránsito?",
        a: [
            "Aumentar la velocidad de circulación",
            "Organizar el tránsito y prevenir accidentes",
            "Dar prioridad únicamente a los automóviles",
            "Reducir la cantidad de peatones"
        ],
        correct: 1,
        why: "Las normas de tránsito organizan la circulación y establecen responsabilidades para proteger a todos los usuarios de la vía pública."
    },

    {
        topic: "Licencia de conducir",
        q: "¿Qué acredita la licencia de conducir?",
        a: [
            "Que una persona es propietaria de un vehículo",
            "Que el vehículo tiene seguro",
            "Que una persona está habilitada para conducir determinadas categorías de vehículos",
            "Que el conductor conoce todas las calles"
        ],
        correct: 2,
        why: "La licencia acredita que su titular está habilitado para conducir los vehículos correspondientes a las categorías autorizadas."
    },

    {
        topic: "Documentación",
        q: "¿Cuál de estos documentos acredita la identificación del vehículo y su inscripción registral?",
        a: [
            "La cédula de identificación del vehículo",
            "El DNI del acompañante",
            "La licencia de conducir",
            "El comprobante de estacionamiento"
        ],
        correct: 0,
        why: "La cédula de identificación permite acreditar los datos registrales del vehículo y su vinculación con el registro correspondiente."
    },

    {
        topic: "Documentación",
        q: "¿Qué documentación debe llevar un conductor para circular legalmente?",
        a: [
            "Solamente su DNI",
            "Licencia habilitante, documentación del vehículo, seguro obligatorio y demás requisitos exigibles",
            "Únicamente la cédula del vehículo",
            "Solo el comprobante de compra del automóvil"
        ],
        correct: 1,
        why: "La normativa exige documentación que acredite la habilitación del conductor, la identificación del vehículo y el cumplimiento de los requisitos de circulación."
    },

    {
        topic: "Prioridades de paso",
        q: "En una encrucijada sin semáforos ni señalización especial, ¿quién tiene prioridad de paso como regla general?",
        a: [
            "El vehículo que circula más rápido",
            "El vehículo de mayor tamaño",
            "El vehículo que aparece por la derecha",
            "El vehículo que toca bocina primero"
        ],
        correct: 2,
        why: "La regla general establece la prioridad de quien circula desde la derecha, aunque existen excepciones previstas por la normativa."
    },

    {
        topic: "Prioridades de paso",
        q: "¿Qué debe hacer un conductor cuando se aproxima a una señal de CEDA EL PASO?",
        a: [
            "Acelerar para cruzar primero",
            "Dar prioridad a quienes circulan por la vía a la que se aproxima",
            "Detenerse siempre durante un minuto",
            "Ignorar la señal si no hay semáforos"
        ],
        correct: 1,
        why: "CEDA EL PASO obliga a permitir el avance de quienes tienen prioridad. Si es necesario, el conductor debe detenerse."
    },

    {
        topic: "Peatones",
        q: "¿Qué responsabilidad tiene un conductor frente a un peatón que cruza por una senda peatonal?",
        a: [
            "Debe respetar su prioridad de paso",
            "Debe acelerar para pasar antes",
            "Debe tocar bocina para que se detenga",
            "Puede continuar si conduce por una avenida"
        ],
        correct: 0,
        why: "Los conductores deben respetar la prioridad peatonal en los lugares establecidos y conducir con precaución."
    },

    {
        topic: "Reglas de circulación",
        q: "¿Por qué lado de la calzada se debe circular normalmente en Argentina?",
        a: [
            "Por el lado izquierdo",
            "Por el centro de la calzada",
            "Por el lado derecho",
            "Por cualquier lado"
        ],
        correct: 2,
        why: "En Argentina se circula por la derecha, salvo las excepciones previstas por la normativa."
    },

    {
        topic: "Reglas de circulación",
        q: "¿Qué debe hacer un conductor antes de cambiar de carril?",
        a: [
            "Girar directamente",
            "Comprobar que la maniobra sea segura y señalizarla con anticipación",
            "Acelerar sin mirar los espejos",
            "Tocar bocina y cambiar de carril"
        ],
        correct: 1,
        why: "Antes de cambiar de carril se debe comprobar que no se ponga en peligro a otros usuarios y advertir la maniobra mediante las luces correspondientes."
    },

    {
        topic: "Adelantamiento",
        q: "¿Por qué lado se realiza normalmente un adelantamiento?",
        a: [
            "Por la derecha",
            "Por la banquina",
            "Por la izquierda",
            "Por cualquier lado"
        ],
        correct: 2,
        why: "El adelantamiento se realiza normalmente por la izquierda, respetando las condiciones de seguridad y las prohibiciones existentes."
    },

    {
        topic: "Seguridad del vehículo",
        q: "¿Cuál es la función principal del cinturón de seguridad?",
        a: [
            "Mejorar la comodidad del asiento",
            "Evitar que el vehículo consuma combustible",
            "Reducir el riesgo de lesiones en caso de una colisión",
            "Aumentar la velocidad del vehículo"
        ],
        correct: 2,
        why: "El cinturón ayuda a mantener a los ocupantes sujetos y reduce el riesgo de lesiones durante una colisión o frenada brusca."
    },

    {
        topic: "Seguridad del vehículo",
        q: "¿Qué función cumple el casco en una motocicleta?",
        a: [
            "Proteger la cabeza del conductor y acompañante",
            "Evitar que la motocicleta se caiga",
            "Aumentar la velocidad",
            "Reemplazar las luces del vehículo"
        ],
        correct: 0,
        why: "El casco homologado es un elemento de seguridad fundamental que ayuda a reducir el riesgo de lesiones en la cabeza."
    },

    {
        topic: "Conducción segura",
        q: "¿Por qué es peligroso conducir utilizando el teléfono celular?",
        a: [
            "Porque aumenta automáticamente la velocidad",
            "Porque distrae la atención y reduce la capacidad de reacción",
            "Porque modifica el funcionamiento de los frenos",
            "Porque impide utilizar el cinturón"
        ],
        correct: 1,
        why: "El uso del celular desvía la atención visual, manual y cognitiva, aumentando el riesgo de cometer errores."
    },

    {
        topic: "Conducción segura",
        q: "¿Qué debe hacer un conductor cuando se encuentra bajo los efectos del alcohol?",
        a: [
            "Conducir lentamente",
            "Conducir únicamente por calles tranquilas",
            "No conducir",
            "Conducir si está acompañado"
        ],
        correct: 2,
        why: "El alcohol afecta la percepción, la coordinación y los reflejos. No se debe conducir bajo sus efectos."
    },

    {
        topic: "Convivencia vial",
        q: "¿Qué significa conducir de manera defensiva?",
        a: [
            "Conducir siempre más rápido que los demás",
            "Anticiparse a posibles riesgos y actuar para evitar situaciones peligrosas",
            "No respetar las prioridades de paso",
            "Utilizar la bocina constantemente"
        ],
        correct: 1,
        why: "La conducción defensiva consiste en anticipar riesgos, mantener la atención y adoptar decisiones que reduzcan la posibilidad de accidentes."
    }

];


// =====================================
// ELEMENTOS DEL DOCUMENTO
// =====================================

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


// =====================================
// VARIABLES
// =====================================

let currentQuestion = 0;
let score = 0;
let answered = false;


// =====================================
// MOSTRAR PREGUNTA
// =====================================

function showQuestion() {
    answered = false;

    const question = quizQuestions[currentQuestion];

    topic.textContent = question.topic;

    questionText.textContent = question.q;

    progress.textContent =
        `Pregunta ${currentQuestion + 1} de ${quizQuestions.length}`;

    progressBar.style.width =
        `${((currentQuestion +1) / quizQuestions.length) * 100}%`;

    optionsContainer.replaceChildren();

    feedback.textContent = "";
    feedback.className = "quiz-feedback";

    nextBtn.disabled = true;

    question.a.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "quiz-option";
        button.type = "button";
        button.textContent = option;

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        optionsContainer.appendChild(button);
    });

    nextBtn.textContent =
        currentQuestion === quizQuestions.length - 1
            ? "Ver resultados →"
            : "Siguiente pregunta →";
}


// =====================================
// SELECCIONAR RESPUESTA
// =====================================

function selectAnswer(selectedIndex) {
    if (answered) return;

    answered = true;

    const question = quizQuestions[currentQuestion];
    const buttons = optionsContainer.querySelectorAll(".quiz-option");

    const isCorrect = selectedIndex === question.correct;

    if (isCorrect) {
        score++;
    }

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.correct) {
            button.classList.add("correct");
        } else if (index === selectedIndex) {
            button.classList.add("incorrect");
        }
    });

    feedback.classList.add(
        isCorrect ? "feedback-correct" : "feedback-incorrect"
    );

    const title = document.createElement("strong");
    title.textContent = isCorrect
        ? "¡Respuesta correcta!"
        : "Respuesta incorrecta";

    const explanation = document.createElement("p");
    explanation.textContent = question.why;

    feedback.replaceChildren(title, explanation);

    nextBtn.disabled = false;
}


// =====================================
// SIGUIENTE PREGUNTA
// =====================================

nextBtn.addEventListener("click", () => {
    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
});


// =====================================
// RESULTADOS
// =====================================

function showResults() {
    quizPanel.hidden = true;
    resultPanel.hidden = false;

    const percentage = Math.round(
        (score / quizQuestions.length) * 100
    );

    resultScore.textContent = `${percentage}%`;
    resultBar.style.width = `${percentage}%`;

    resultTitle.textContent =
        percentage >= 90
            ? "¡Excelente trabajo!"
            : percentage >= 70
                ? "¡Muy buen resultado!"
                : percentage >= 50
                    ? "¡Vas por buen camino!"
                    : "¡Es momento de repasar!";

    resultMessage.textContent =
        `Respondiste correctamente ${score} de ${quizQuestions.length} preguntas.\n\n` +
        getFinalMessage(percentage);
}


// =====================================
// MENSAJES FINALES
// =====================================

function getFinalMessage(percentage) {
    if (percentage >= 90) {
        return "Demostraste un excelente dominio de los conceptos del reglamento. ¡Seguí así!";
    }

    if (percentage >= 70) {
        return "Tenés una buena comprensión de las normas de tránsito. Repasá algunos conceptos para mejorar todavía más.";
    }

    if (percentage >= 50) {
        return "Comprendiste varios conceptos, pero todavía hay temas que necesitan más práctica. Volvé a consultar la guía.";
    }

    return "Todavía necesitás reforzar los contenidos de esta unidad. Repasá la guía con tranquilidad y volvé a intentarlo.";
}


// =====================================
// REINTENTAR
// =====================================

retryBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    answered = false;

    resultPanel.hidden = true;
    quizPanel.hidden = false;

    showQuestion();
});


// =====================================
// INICIALIZACIÓN
// =====================================

showQuestion();