const questions = [

    // =====================================
    // 1. CONCEPTOS GENERALES
    // =====================================

    {
        category: "Conceptos generales",
        question: "¿Qué es la señalización vial?",
        answer: "Es el conjunto de señales, marcas, dispositivos y elementos instalados en la vía pública para regular, advertir, orientar e informar a quienes circulan."
    },
    {
        category: "Conceptos generales",
        question: "¿Cuál es el objetivo principal de las señales viales?",
        answer: "Organizar la circulación, prevenir situaciones peligrosas, comunicar obligaciones y prohibiciones, y facilitar los desplazamientos de todos los usuarios de la vía."
    },
    {
        category: "Conceptos generales",
        question: "¿Qué tipos principales de señalización existen?",
        answer: "Se clasifican principalmente en señalización vertical, horizontal y luminosa. Dentro de la señalización vertical se encuentran las señales reglamentarias, preventivas e informativas."
    },
    {
        category: "Conceptos generales",
        question: "¿Por qué es importante reconocer las señales con anticipación?",
        answer: "Porque permite interpretar las condiciones de la vía, tomar decisiones a tiempo y realizar maniobras seguras sin reaccionar de manera brusca."
    },

    // =====================================
    // 2. SEÑALES REGLAMENTARIAS
    // =====================================

    {
        category: "Señales reglamentarias",
        question: "¿Qué son las señales reglamentarias?",
        answer: "Son aquellas que indican obligaciones, prohibiciones, restricciones o prioridades que deben respetar los usuarios de la vía. Su incumplimiento constituye una infracción."
    },
    {
        category: "Señales reglamentarias",
        question: "¿Qué características visuales suelen tener?",
        answer: "Muchas son circulares, con fondo blanco y borde rojo. Sin embargo, existen excepciones importantes, como PARE, que tiene forma octogonal, y CEDA EL PASO, que tiene forma de triángulo invertido."
    },
    {
        category: "Señales reglamentarias",
        question: "¿Qué indica la señal PARE?",
        answer: "Obliga al conductor a detener completamente el vehículo antes de la línea de detención o del cruce. Solo puede continuar cuando haya comprobado que es seguro hacerlo."
    },
    {
        category: "Señales reglamentarias",
        question: "¿Qué indica la señal CEDA EL PASO?",
        answer: "Indica que el conductor debe dar prioridad a los vehículos que circulan por la vía a la que se aproxima. Debe detenerse si es necesario para ceder el paso."
    },
    {
        category: "Señales reglamentarias",
        question: "¿Qué indican las señales de prohibición?",
        answer: "Establecen acciones que no están permitidas en determinados lugares, como girar, estacionar, detenerse, adelantar o circular en cierto sentido."
    },

    // =====================================
    // 3. SEÑALES PREVENTIVAS
    // =====================================

    {
        category: "Señales preventivas",
        question: "¿Qué son las señales preventivas?",
        answer: "Son señales que advierten sobre peligros, características o condiciones particulares de la vía para que los conductores puedan anticiparse y actuar con precaución."
    },
    {
        category: "Señales preventivas",
        question: "¿Qué forma y colores suelen tener?",
        answer: "Generalmente tienen forma de rombo, con fondo amarillo y símbolos negros. Su diseño permite identificarlas rápidamente como advertencias."
    },
    {
        category: "Señales preventivas",
        question: "¿Qué advierte una señal de curva peligrosa?",
        answer: "Indica que se aproxima una curva que requiere especial precaución. El conductor debe adaptar su velocidad y evitar maniobras bruscas."
    },
    {
        category: "Señales preventivas",
        question: "¿Qué indica una señal de cruce peatonal?",
        answer: "Advierte sobre un sector donde pueden cruzar peatones. El conductor debe prestar atención, reducir la velocidad cuando corresponda y respetar la prioridad peatonal."
    },

    // =====================================
    // 4. SEÑALES INFORMATIVAS
    // =====================================

    {
        category: "Señales informativas",
        question: "¿Qué son las señales informativas?",
        answer: "Son aquellas que proporcionan información útil para orientarse, identificar destinos, conocer distancias, localizar servicios y reconocer lugares de interés."
    },
    {
        category: "Señales informativas",
        question: "¿Qué colores suelen utilizar?",
        answer: "Sus colores dependen de la función y del tipo de información. Es frecuente encontrar verde en orientación y destinos, y azul en indicaciones de servicios, aunque existen otras combinaciones."
    },

    // =====================================
    // 5. SEÑALIZACIÓN HORIZONTAL
    // =====================================

    {
        category: "Señalización horizontal",
        question: "¿Qué es la señalización horizontal?",
        answer: "Es el conjunto de marcas pintadas o aplicadas directamente sobre la calzada, como líneas, flechas, sendas peatonales y líneas de detención."
    },
    {
        category: "Señalización horizontal",
        question: "¿Qué diferencia existe entre una línea continua y una discontinua?",
        answer: "Una línea continua indica restricciones para cruzarla según su función y ubicación. Una línea discontinua puede permitir determinadas maniobras, siempre que estén autorizadas y sean seguras."
    },
    {
        category: "Señalización horizontal",
        question: "¿Qué indican las líneas amarillas y blancas?",
        answer: "En términos generales, el amarillo se utiliza para separar corrientes de tránsito de sentidos opuestos o marcar restricciones, mientras que el blanco se utiliza en diversas demarcaciones de carriles y circulación. Siempre debe interpretarse el diseño completo de la marca."
    },
    {
        category: "Señalización horizontal",
        question: "¿Qué indica una senda peatonal?",
        answer: "Es una demarcación que señala el espacio destinado al cruce de peatones. Los conductores deben respetar la prioridad peatonal en los lugares establecidos."
    },
    {
        category: "Señalización horizontal",
        question: "¿Qué función cumple la línea de detención?",
        answer: "Indica el lugar donde los vehículos deben detenerse cuando una señal, semáforo o situación de tránsito así lo exige."
    },

    // =====================================
    // 6. SEMÁFOROS
    // =====================================

    {
        category: "Semáforos",
        question: "¿Qué indica la luz roja?",
        answer: "Obliga a detenerse antes de la línea de detención o del cruce peatonal, sin invadirlo."
    },
    {
        category: "Semáforos",
        question: "¿Qué indica la luz amarilla fija?",
        answer: "Advierte que el verde está por finalizar y el rojo está próximo. Se debe detener antes de ingresar si es posible hacerlo de manera segura; si no, se debe continuar con precaución."
    },
    {
        category: "Semáforos",
        question: "¿Qué indica la luz verde?",
        answer: "Autoriza a avanzar, siempre que la intersección esté despejada y que hacerlo no genere peligro para otros usuarios."
    },
    {
        category: "Semáforos",
        question: "¿Qué significa una luz amarilla intermitente?",
        answer: "Indica que se puede continuar, pero con precaución y prestando especial atención a las condiciones del tránsito."
    },
    {
        category: "Semáforos",
        question: "¿Qué significa una luz roja intermitente?",
        answer: "Obliga a detenerse y continuar únicamente cuando se haya comprobado que no existe peligro y que el paso es seguro."
    },
    {
        category: "Semáforos",
        question: "¿Para qué sirven los semáforos peatonales?",
        answer: "Regulan el cruce de peatones e indican cuándo pueden comenzar a cruzar y cuándo deben esperar o finalizar el cruce según la señal luminosa."
    },

    // =====================================
    // 7. SEÑALIZACIÓN TEMPORAL
    // =====================================

    {
        category: "Señalización temporal",
        question: "¿Qué es la señalización temporal?",
        answer: "Es la señalización que se instala para advertir sobre situaciones transitorias, como obras, reparaciones, desvíos, obstáculos o modificaciones temporales de la circulación."
    },
    {
        category: "Señalización temporal",
        question: "¿Qué color se utiliza habitualmente en zonas de obras?",
        answer: "Se utiliza principalmente el naranja para identificar advertencias y dispositivos vinculados con trabajos viales y situaciones temporales."
    },
    {
        category: "Señalización temporal",
        question: "¿Cómo debe actuar un conductor ante una zona de obras?",
        answer: "Debe reducir la velocidad, respetar las indicaciones temporales, mantener distancia, prestar atención a los trabajadores y seguir los desvíos establecidos."
    },

    // =====================================
    // 8. INTERPRETACIÓN Y COMPORTAMIENTO
    // =====================================

    {
        category: "Interpretación y comportamiento",
        question: "¿Qué debe hacer un conductor cuando encuentra una señal?",
        answer: "Debe identificarla, interpretar su significado y actuar de acuerdo con la indicación, adaptando su conducción a las condiciones de la vía."
    },
    {
        category: "Interpretación y comportamiento",
        question: "¿Qué ocurre si una señal contradice una indicación de un agente de tránsito?",
        answer: "Las indicaciones de la autoridad de aplicación prevalecen sobre las señales de tránsito y las normas generales de circulación, en los términos establecidos por la legislación."
    },
    {
        category: "Interpretación y comportamiento",
        question: "¿Por qué no alcanza con conocer solamente la forma de las señales?",
        answer: "Porque también es necesario comprender su significado, reconocer las condiciones en las que se aplican y saber cómo actuar ante ellas."
    }

];


// =====================================
// ELEMENTOS DEL DOCUMENTO
// =====================================

const questionsContainer = document.getElementById("questions");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const countElement = document.getElementById("count");
const toggleAllButton = document.getElementById("toggleAll");

let allExpanded = false;


// =====================================
// CARGAR CATEGORÍAS
// =====================================

function loadCategories() {
    const categories = [...new Set(
        questions.map(item => item.category)
    )];

    categories.forEach(category => {
        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categorySelect.appendChild(option);
    });
}


// =====================================
// CREAR TARJETA
// =====================================

function createQuestionCard(item, index) {
    const card = document.createElement("article");
    card.className = "card";

    const questionButton = document.createElement("button");
    questionButton.className = "question";
    questionButton.type = "button";
    questionButton.setAttribute("aria-expanded", "false");

    const number = document.createElement("span");
    number.className = "num";
    number.textContent = String(index + 1).padStart(2, "0");

    const questionText = document.createElement("span");
    questionText.className = "qtext";
    questionText.textContent = item.question;

    const chevron = document.createElement("span");
    chevron.className = "chevron";
    chevron.textContent = "⌄";

    questionButton.append(number, questionText, chevron);

    const answer = document.createElement("div");
    answer.className = "answer";

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = item.category;

    const paragraph = document.createElement("p");
    paragraph.textContent = item.answer;

    answer.append(tag, paragraph);

    questionButton.addEventListener("click", () => {
        const isOpen = card.classList.toggle("open");

        questionButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    card.append(questionButton, answer);

    return card;
}


// =====================================
// MOSTRAR PREGUNTAS
// =====================================

function renderQuestions() {
    const searchTerm = searchInput.value
        .toLowerCase()
        .trim();

    const selectedCategory = categorySelect.value;

    const filteredQuestions = questions.filter(item => {
        const matchesSearch =
            item.question.toLowerCase().includes(searchTerm) ||
            item.answer.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            item.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    questionsContainer.replaceChildren();

    countElement.textContent = filteredQuestions.length;

    toggleAllButton.textContent = "Expandir todo";
    allExpanded = false;

    if (filteredQuestions.length === 0) {
        const emptyMessage = document.createElement("div");
        emptyMessage.className = "empty-state";
        emptyMessage.textContent =
            "No encontramos preguntas que coincidan con tu búsqueda.";

        questionsContainer.appendChild(emptyMessage);
        return;
    }

    filteredQuestions.forEach((item, index) => {
        questionsContainer.appendChild(
            createQuestionCard(item, index)
        );
    });
}


// =====================================
// EXPANDIR / CONTRAER TODO
// =====================================

toggleAllButton.addEventListener("click", () => {
    allExpanded = !allExpanded;

    const cards = questionsContainer.querySelectorAll(".card");

    cards.forEach(card => {
        const button = card.querySelector(".question");

        card.classList.toggle("open", allExpanded);

        button.setAttribute(
            "aria-expanded",
            String(allExpanded)
        );
    });

    toggleAllButton.textContent = allExpanded
        ? "Contraer todo"
        : "Expandir todo";
});


// =====================================
// EVENTOS DE FILTRADO
// =====================================

searchInput.addEventListener("input", renderQuestions);
categorySelect.addEventListener("change", renderQuestions);


// =====================================
// INICIALIZACIÓN
// =====================================

loadCategories();
renderQuestions();