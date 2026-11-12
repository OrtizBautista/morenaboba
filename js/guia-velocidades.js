const questions = [

    // =====================================
    // 1. CONCEPTOS GENERALES
    // =====================================

    {
        category: "Conceptos generales",
        question: "¿Qué es la velocidad máxima?",
        answer: "Es el límite superior de velocidad permitido para circular en una determinada vía o situación. No debe superarse, aunque las condiciones parezcan permitirlo."
    },
    {
        category: "Conceptos generales",
        question: "¿Qué diferencia existe entre velocidad máxima y velocidad precautoria?",
        answer: "La velocidad máxima es el límite legal que no se debe superar. La velocidad precautoria es aquella que permite mantener el dominio del vehículo y detenerlo ante un imprevisto, considerando el estado del conductor, del vehículo, la vía, el clima y el tránsito."
    },
    {
        category: "Conceptos generales",
        question: "¿Se debe circular siempre a la velocidad máxima permitida?",
        answer: "No. La velocidad máxima es un límite y no una obligación de circular a ese ritmo. Se debe reducir la velocidad cuando las condiciones de circulación lo requieran."
    },
    {
        category: "Conceptos generales",
        question: "¿Qué factores influyen en la velocidad segura?",
        answer: "Influyen el estado de la calzada, la visibilidad, las condiciones climáticas, el tránsito, el estado del vehículo, la carga transportada y las condiciones del conductor."
    },

    // =====================================
    // 2. VELOCIDADES EN ZONAS URBANAS
    // =====================================

    {
        category: "Zonas urbanas",
        question: "¿Cuál es la velocidad máxima general en una calle urbana?",
        answer: "La velocidad máxima general es de 40 km/h, salvo que la señalización establezca otro límite."
    },
    {
        category: "Zonas urbanas",
        question: "¿Cuál es la velocidad máxima general en una avenida urbana?",
        answer: "La velocidad máxima general es de 60 km/h, salvo que la señalización establezca otro límite."
    },
    {
        category: "Zonas urbanas",
        question: "¿Cuál es la velocidad precautoria en una encrucijada urbana sin semáforos?",
        answer: "La velocidad precautoria es de hasta 30 km/h, para poder reaccionar ante otros vehículos o peatones que se aproximen al cruce."
    },
    {
        category: "Zonas urbanas",
        question: "¿Cuál es la velocidad precautoria cerca de establecimientos escolares durante su funcionamiento?",
        answer: "Es de hasta 20 km/h, cuando corresponda por la presencia de niños y el movimiento de personas en las inmediaciones."
    },

    // =====================================
    // 3. VELOCIDADES EN ZONAS RURALES
    // =====================================

    {
        category: "Zonas rurales",
        question: "¿Cuál es la velocidad máxima general en una ruta rural para automóviles y motocicletas?",
        answer: "La velocidad máxima general es de 110 km/h, salvo señalización específica que indique un límite diferente."
    },
    {
        category: "Zonas rurales",
        question: "¿Cuál es la velocidad máxima general para microbuses, ómnibus y casas rodantes motorizadas en rutas rurales?",
        answer: "La velocidad máxima general es de 90 km/h."
    },
    {
        category: "Zonas rurales",
        question: "¿Cuál es la velocidad máxima general para camiones y automotores con casa rodante acoplada en rutas rurales?",
        answer: "La velocidad máxima general es de 80 km/h."
    },
    {
        category: "Zonas rurales",
        question: "¿Cuál es la velocidad máxima para transportes de sustancias peligrosas en rutas rurales?",
        answer: "La velocidad máxima general es de 80 km/h, de acuerdo con las disposiciones específicas aplicables."
    },
    {
        category: "Zonas rurales",
        question: "¿Qué velocidad debe respetarse al atravesar una zona urbana por una ruta?",
        answer: "La velocidad máxima general es de 60 km/h, salvo que la señalización establezca un límite diferente."
    },

    // =====================================
    // 4. SEMIAUTOPISTAS
    // =====================================

    {
        category: "Semiautopistas",
        question: "¿Cuál es la velocidad máxima general para automóviles y motocicletas en semiautopistas?",
        answer: "La velocidad máxima general es de 120 km/h."
    },
    {
        category: "Semiautopistas",
        question: "¿Cuál es la velocidad máxima general para microbuses, ómnibus y casas rodantes motorizadas en semiautopistas?",
        answer: "La velocidad máxima general es de 90 km/h."
    },
    {
        category: "Semiautopistas",
        question: "¿Cuál es la velocidad máxima general para camiones y automotores con casa rodante acoplada en semiautopistas?",
        answer: "La velocidad máxima general es de 80 km/h."
    },

    // =====================================
    // 5. AUTOPISTAS
    // =====================================

    {
        category: "Autopistas",
        question: "¿Cuál es la velocidad máxima general para automóviles y motocicletas en autopistas?",
        answer: "La velocidad máxima general es de 130 km/h, salvo señalización específica o normativa local que establezca otro límite."
    },
    {
        category: "Autopistas",
        question: "¿Cuál es la velocidad máxima general para microbuses, ómnibus y casas rodantes motorizadas en autopistas?",
        answer: "La velocidad máxima general es de 100 km/h."
    },
    {
        category: "Autopistas",
        question: "¿Cuál es la velocidad máxima general para camiones y automotores con casa rodante acoplada en autopistas?",
        answer: "La velocidad máxima general es de 80 km/h."
    },

    // =====================================
    // 6. SITUACIONES ESPECIALES
    // =====================================

    {
        category: "Situaciones especiales",
        question: "¿Cuál es la velocidad precautoria al aproximarse a un paso ferroviario sin barrera ni semáforo?",
        answer: "Se debe circular a una velocidad precautoria no superior a 20 km/h y comprobar que no se aproxima ningún tren antes de cruzar."
    },
    {
        category: "Situaciones especiales",
        question: "¿Qué velocidad debe adoptarse cerca de lugares con gran concentración de personas?",
        answer: "Se debe reducir la velocidad hasta un máximo precautorio de 20 km/h cuando se trate de las situaciones previstas por la normativa, como establecimientos escolares o lugares de gran afluencia de público durante su funcionamiento."
    },
    {
        category: "Situaciones especiales",
        question: "¿Qué sucede si una señal indica una velocidad menor que el límite general?",
        answer: "Debe respetarse el límite indicado por la señalización. El conductor siempre debe adaptar la velocidad a las condiciones de seguridad."
    },

    // =====================================
    // 7. CONDUCCIÓN PRECAUTORIA
    // =====================================

    {
        category: "Conducción precautoria",
        question: "¿Por qué se debe reducir la velocidad cuando llueve?",
        answer: "Porque disminuye la adherencia de los neumáticos, puede aumentar la distancia de frenado y existe mayor riesgo de perder el control del vehículo."
    },
    {
        category: "Conducción precautoria",
        question: "¿Cómo influye la niebla en la velocidad segura?",
        answer: "La niebla reduce la visibilidad y dificulta percibir obstáculos y otros vehículos. Por eso se debe disminuir la velocidad y aumentar la distancia de seguridad."
    },
    {
        category: "Conducción precautoria",
        question: "¿Por qué es peligroso circular demasiado rápido en una curva?",
        answer: "Porque aumenta la exigencia sobre los neumáticos y puede provocar que el vehículo pierda adherencia y estabilidad."
    },
    {
        category: "Conducción precautoria",
        question: "¿Qué relación existe entre velocidad y distancia de frenado?",
        answer: "A mayor velocidad, generalmente se necesita una distancia mayor para detener el vehículo. También influyen el estado de los frenos, los neumáticos y la calzada."
    },
    {
        category: "Conducción precautoria",
        question: "¿Qué debe hacer un conductor si las condiciones no permiten circular de forma segura al límite máximo?",
        answer: "Debe reducir la velocidad hasta poder mantener el dominio del vehículo y detenerse de manera segura ante cualquier imprevisto."
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