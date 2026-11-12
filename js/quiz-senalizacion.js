const quizQuestions = [

    // =====================================
    // 1. CONCEPTOS GENERALES
    // =====================================

    {
        topic: "Conceptos generales",
        q: "¿Cuál es la función principal de la señalización vial?",
        a: [
            "Decorar las calles y rutas",
            "Regular, advertir e informar a los usuarios de la vía",
            "Indicar únicamente los nombres de las calles",
            "Reemplazar todas las normas de tránsito"
        ],
        correct: 1,
        why: "La señalización organiza la circulación, comunica información y advierte sobre posibles riesgos."
    },

    {
        topic: "Conceptos generales",
        q: "¿Cuáles son los tres grandes tipos de señalización vial?",
        a: [
            "Urbana, rural y comercial",
            "Vertical, horizontal y luminosa",
            "Peatonal, vehicular y ferroviaria",
            "Preventiva, mecánica y digital"
        ],
        correct: 1,
        why: "La señalización puede presentarse mediante carteles verticales, marcas sobre la calzada y dispositivos luminosos."
    },

    {
        topic: "Señales reglamentarias",
        q: "¿Qué indican las señales reglamentarias?",
        a: [
            "Obligaciones, prohibiciones, restricciones y prioridades",
            "Solamente lugares turísticos",
            "Únicamente peligros naturales",
            "La distancia hasta una ciudad"
        ],
        correct: 0,
        why: "Las señales reglamentarias establecen condiciones que deben respetarse durante la circulación."
    },

    {
        topic: "Señales reglamentarias",
        q: "¿Qué forma tiene habitualmente la señal PARE?",
        a: [
            "Circular",
            "Triangular",
            "Octogonal",
            "Rectangular"
        ],
        correct: 2,
        why: "La señal PARE tiene ocho lados y se reconoce fácilmente por su forma octogonal y su inscripción."
    },

    {
        topic: "Señales reglamentarias",
        q: "¿Qué indica la señal CEDA EL PASO?",
        a: [
            "Que se debe acelerar",
            "Que se debe dar prioridad a quienes circulan por la vía a la que se ingresa",
            "Que está prohibido girar",
            "Que comienza una autopista"
        ],
        correct: 1,
        why: "CEDA EL PASO indica que se debe permitir el paso de quienes tienen prioridad y detenerse si es necesario."
    },

    {
        topic: "Señales preventivas",
        q: "¿Cuál es el objetivo de las señales preventivas?",
        a: [
            "Informar sobre servicios disponibles",
            "Advertir sobre peligros o características de la vía",
            "Indicar exclusivamente límites de velocidad",
            "Señalar lugares de estacionamiento"
        ],
        correct: 1,
        why: "Las señales preventivas permiten anticipar situaciones que pueden representar un riesgo durante la circulación."
    },

    {
        topic: "Señales preventivas",
        q: "¿Qué forma suelen tener las señales preventivas?",
        a: [
            "Rombo",
            "Círculo",
            "Octógono",
            "Rectángulo horizontal"
        ],
        correct: 0,
        why: "Generalmente tienen forma de rombo, con fondo amarillo y símbolos negros."
    },

    {
        topic: "Señales preventivas",
        q: "¿Qué debe hacer un conductor al encontrar una señal que advierte una curva peligrosa?",
        a: [
            "Acelerar para atravesarla rápidamente",
            "Ignorarla si conoce el camino",
            "Reducir la velocidad y adaptar la conducción",
            "Detenerse siempre en medio de la calzada"
        ],
        correct: 2,
        why: "La advertencia permite anticiparse a la curva y adaptar la velocidad para mantener el control del vehículo."
    },

    {
        topic: "Señales informativas",
        q: "¿Para qué sirven las señales informativas?",
        a: [
            "Prohibir todas las maniobras",
            "Orientar y proporcionar información sobre destinos, distancias y servicios",
            "Advertir únicamente sobre curvas",
            "Reemplazar los semáforos"
        ],
        correct: 1,
        why: "Estas señales ayudan a los usuarios a orientarse y encontrar destinos, servicios y lugares de interés."
    },

    {
        topic: "Señales informativas",
        q: "¿Qué color se utiliza frecuentemente para indicar destinos y orientación?",
        a: [
            "Verde",
            "Rojo",
            "Rosa",
            "Negro"
        ],
        correct: 0,
        why: "El verde se utiliza habitualmente en señales de orientación y destinos, aunque existen otras combinaciones según la función."
    },

    {
        topic: "Señalización horizontal",
        q: "¿Qué es la señalización horizontal?",
        a: [
            "Los carteles ubicados sobre postes",
            "Las marcas pintadas o aplicadas sobre la calzada",
            "Los semáforos peatonales",
            "Las luces de los vehículos"
        ],
        correct: 1,
        why: "Incluye líneas, flechas, sendas peatonales y otras demarcaciones que organizan la circulación."
    },

    {
        topic: "Señalización horizontal",
        q: "¿Qué indica generalmente una línea continua?",
        a: [
            "Que siempre se puede adelantar",
            "Que no existe ninguna restricción",
            "Que existen restricciones para cruzarla según su función y ubicación",
            "Que se puede estacionar"
        ],
        correct: 2,
        why: "Las líneas continuas establecen restricciones que deben interpretarse según el tipo de demarcación y la normativa."
    },

    {
        topic: "Semáforos",
        q: "¿Qué indica la luz roja de un semáforo?",
        a: [
            "Avanzar con precaución",
            "Detenerse antes de la línea de detención o del cruce",
            "Acelerar",
            "Dar prioridad únicamente a los vehículos grandes"
        ],
        correct: 1,
        why: "La luz roja obliga a detenerse y no invadir la senda peatonal ni la intersección."
    },

    {
        topic: "Semáforos",
        q: "¿Qué significa una luz amarilla intermitente?",
        a: [
            "Detención obligatoria durante un minuto",
            "Circulación prohibida",
            "Se puede avanzar con precaución",
            "Prioridad absoluta para todos los vehículos"
        ],
        correct: 2,
        why: "La luz amarilla intermitente permite continuar con precaución y prestando atención a las condiciones del tránsito."
    },

    {
        topic: "Señalización temporal",
        q: "¿Qué debe hacer un conductor al encontrar señalización naranja por obras viales?",
        a: [
            "Ignorarla si no observa trabajadores",
            "Aumentar la velocidad para salir rápidamente",
            "Respetar las indicaciones, reducir la velocidad y seguir los desvíos",
            "Circular por cualquier sector de la calzada"
        ],
        correct: 2,
        why: "La señalización temporal advierte sobre modificaciones o riesgos transitorios. Es fundamental respetarla para proteger a trabajadores y usuarios."
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
        `${(currentQuestion / quizQuestions.length) * 100}%`;

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
        return "Demostraste un excelente dominio de la señalización vial. ¡Seguí así!";
    }

    if (percentage >= 70) {
        return "Tenés una buena comprensión de las señales y sus funciones. Repasá algunos conceptos para mejorar todavía más.";
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