const quizQuestions = [

    // =====================================
    // 1. CONCEPTOS GENERALES
    // =====================================

    {
        topic: "Conceptos generales",
        q: "¿Qué representa la velocidad máxima permitida?",
        a: [
            "La velocidad a la que todos deben circular obligatoriamente",
            "El límite superior que no se debe superar",
            "La velocidad mínima de cualquier vehículo",
            "Una recomendación sin valor normativo"
        ],
        correct: 1,
        why: "La velocidad máxima establece un límite legal. No significa que siempre sea seguro circular a esa velocidad."
    },

    {
        topic: "Conceptos generales",
        q: "¿Qué es la velocidad precautoria?",
        a: [
            "La velocidad más alta que puede alcanzar un vehículo",
            "La velocidad que permite mantener el dominio del vehículo y reaccionar ante imprevistos",
            "La velocidad utilizada exclusivamente en autopistas",
            "La velocidad indicada por el velocímetro"
        ],
        correct: 1,
        why: "La velocidad precautoria debe permitir controlar el vehículo considerando el estado del conductor, la vía, el clima, el tránsito y el vehículo."
    },

    {
        topic: "Zonas urbanas",
        q: "¿Cuál es la velocidad máxima general en una calle urbana?",
        a: [
            "20 km/h",
            "40 km/h",
            "60 km/h",
            "80 km/h"
        ],
        correct: 1,
        why: "El límite general establecido para calles urbanas es de 40 km/h, salvo señalización específica."
    },

    {
        topic: "Zonas urbanas",
        q: "¿Cuál es la velocidad máxima general en una avenida urbana?",
        a: [
            "30 km/h",
            "40 km/h",
            "60 km/h",
            "90 km/h"
        ],
        correct: 2,
        why: "En avenidas urbanas el límite general es de 60 km/h, salvo que se indique otro límite."
    },

    {
        topic: "Zonas urbanas",
        q: "¿Cuál es la velocidad precautoria en una encrucijada urbana sin semáforos?",
        a: [
            "20 km/h",
            "30 km/h",
            "40 km/h",
            "60 km/h"
        ],
        correct: 1,
        why: "La normativa establece una velocidad precautoria de hasta 30 km/h en encrucijadas urbanas sin semáforos."
    },

    {
        topic: "Zonas urbanas",
        q: "¿Cuál es la velocidad precautoria cerca de establecimientos escolares durante su funcionamiento?",
        a: [
            "10 km/h",
            "20 km/h",
            "40 km/h",
            "60 km/h"
        ],
        correct: 1,
        why: "La velocidad precautoria es de hasta 20 km/h en los lugares y momentos previstos por la normativa."
    },

    // =====================================
    // 2. ZONAS RURALES
    // =====================================

    {
        topic: "Zonas rurales",
        q: "¿Cuál es la velocidad máxima general para automóviles y motocicletas en rutas rurales?",
        a: [
            "80 km/h",
            "90 km/h",
            "110 km/h",
            "130 km/h"
        ],
        correct: 2,
        why: "El límite general para automóviles y motocicletas en rutas rurales es de 110 km/h."
    },

    {
        topic: "Zonas rurales",
        q: "¿Cuál es la velocidad máxima general para microbuses y ómnibus en rutas rurales?",
        a: [
            "80 km/h",
            "90 km/h",
            "110 km/h",
            "120 km/h"
        ],
        correct: 1,
        why: "La velocidad máxima general para estas categorías en rutas rurales es de 90 km/h."
    },

    {
        topic: "Zonas rurales",
        q: "¿Cuál es la velocidad máxima general para camiones en rutas rurales?",
        a: [
            "60 km/h",
            "80 km/h",
            "100 km/h",
            "110 km/h"
        ],
        correct: 1,
        why: "El límite general para camiones en rutas rurales es de 80 km/h."
    },

    // =====================================
    // 3. SEMIAUTOPISTAS Y AUTOPISTAS
    // =====================================

    {
        topic: "Semiautopistas",
        q: "¿Cuál es la velocidad máxima general para automóviles y motocicletas en semiautopistas?",
        a: [
            "100 km/h",
            "110 km/h",
            "120 km/h",
            "130 km/h"
        ],
        correct: 2,
        why: "El límite general para automóviles y motocicletas en semiautopistas es de 120 km/h."
    },

    {
        topic: "Autopistas",
        q: "¿Cuál es la velocidad máxima general para automóviles y motocicletas en autopistas?",
        a: [
            "100 km/h",
            "110 km/h",
            "120 km/h",
            "130 km/h"
        ],
        correct: 3,
        why: "El límite general para automóviles y motocicletas en autopistas es de 130 km/h."
    },

    {
        topic: "Autopistas",
        q: "¿Cuál es la velocidad máxima general para microbuses y ómnibus en autopistas?",
        a: [
            "80 km/h",
            "90 km/h",
            "100 km/h",
            "130 km/h"
        ],
        correct: 2,
        why: "En autopistas, el límite general para microbuses, ómnibus y casas rodantes motorizadas es de 100 km/h."
    },

    // =====================================
    // 4. SITUACIONES ESPECIALES
    // =====================================

    {
        topic: "Situaciones especiales",
        q: "¿Cuál es la velocidad precautoria al aproximarse a un paso ferroviario sin barrera ni semáforo?",
        a: [
            "10 km/h",
            "20 km/h",
            "40 km/h",
            "60 km/h"
        ],
        correct: 1,
        why: "Se debe circular a no más de 20 km/h, comprobar que no se aproxima un tren y cruzar únicamente cuando sea seguro."
    },

    {
        topic: "Situaciones especiales",
        q: "Si una señal establece un límite menor que el general de la vía, ¿qué debe hacer el conductor?",
        a: [
            "Respetar el límite indicado por la señal",
            "Mantener siempre el límite general",
            "Ignorar la señal si no hay otros vehículos",
            "Acelerar para evitar demoras"
        ],
        correct: 0,
        why: "La señalización específica debe respetarse. El conductor también debe adaptar la velocidad a las condiciones de seguridad."
    },

    // =====================================
    // 5. CONDUCCIÓN PRECAUTORIA
    // =====================================

    {
        topic: "Conducción precautoria",
        q: "¿Por qué se debe reducir la velocidad cuando llueve?",
        a: [
            "Porque el motor pierde potencia automáticamente",
            "Porque disminuye la adherencia y puede aumentar la distancia de frenado",
            "Porque las señales dejan de funcionar",
            "Porque los vehículos no pueden utilizar las luces"
        ],
        correct: 1,
        why: "La lluvia puede reducir la adherencia de los neumáticos y dificultar el frenado. Es necesario disminuir la velocidad y aumentar la distancia de seguridad."
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
        return "Demostraste un excelente dominio de los límites de velocidad y la conducción precautoria. ¡Seguí así!";
    }

    if (percentage >= 70) {
        return "Tenés una buena comprensión de los límites y las situaciones especiales. Repasá algunos valores para mejorar todavía más.";
    }

    if (percentage >= 50) {
        return "Comprendiste varios conceptos, pero todavía necesitás practicar los límites numéricos y sus aplicaciones.";
    }

    return "Todavía necesitás reforzar los contenidos de esta unidad. Repasá la guía y prestá especial atención a los valores de velocidad.";
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