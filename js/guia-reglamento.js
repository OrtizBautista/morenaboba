const questions = [

    // =====================================
    // 1. LICENCIA DE CONDUCIR
    // =====================================

    {
        category: "Licencia de conducir",
        question: "¿Qué es la licencia de conducir?",
        answer: "Es el documento oficial que habilita a una persona a conducir determinados tipos de vehículos. Se obtiene luego de cumplir los requisitos establecidos por la normativa y demostrar los conocimientos y aptitudes necesarios."
    },
    {
        category: "Licencia de conducir",
        question: "¿Por qué es obligatorio contar con una licencia válida?",
        answer: "Porque acredita que el conductor está autorizado para manejar una categoría determinada de vehículos. Conducir sin estar habilitado constituye una infracción."
    },
    {
        category: "Licencia de conducir",
        question: "¿Qué significa la categoría de una licencia?",
        answer: "Indica qué tipo de vehículos puede conducir su titular. No todas las licencias habilitan para manejar cualquier vehículo."
    },
    {
        category: "Licencia de conducir",
        question: "¿Qué sucede si una persona conduce un vehículo para el que no está habilitada?",
        answer: "Está incumpliendo las condiciones de su licencia y puede recibir las sanciones correspondientes."
    },

    // =====================================
    // 2. DOCUMENTACIÓN
    // =====================================

    {
        category: "Documentación",
        question: "¿Qué documentación debe llevar un conductor?",
        answer: "Como regla general, debe contar con licencia de conducir vigente, cédula de identificación del vehículo, comprobante de seguro obligatorio vigente y demás documentación exigible según el vehículo y la jurisdicción."
    },
    {
        category: "Documentación",
        question: "¿Qué acredita la cédula del vehículo?",
        answer: "Permite identificar el vehículo y vincularlo con la información registral correspondiente. Debe estar disponible para acreditar la identificación del vehículo durante la circulación."
    },
    {
        category: "Documentación",
        question: "¿Para qué sirve el seguro obligatorio?",
        answer: "Brinda la cobertura de responsabilidad civil exigida por la normativa para responder por daños que puedan ocasionarse a terceros."
    },
    {
        category: "Documentación",
        question: "¿Qué función cumple la Verificación Técnica Vehicular (VTV) o revisión técnica obligatoria?",
        answer: "Permite comprobar que el vehículo reúne las condiciones técnicas y de seguridad exigidas para circular. Su exigencia y periodicidad dependen de la normativa aplicable."
    },

    // =====================================
    // 3. RESPONSABILIDADES
    // =====================================

    {
        category: "Responsabilidades",
        question: "¿Cuál es la responsabilidad principal de un conductor?",
        answer: "Conducir con cuidado y prevención, mantener el dominio efectivo del vehículo y evitar comportamientos que pongan en riesgo a otras personas."
    },
    {
        category: "Responsabilidades",
        question: "¿Qué significa mantener el dominio efectivo del vehículo?",
        answer: "Significa conservar en todo momento la capacidad de controlar la dirección, la velocidad y los movimientos del vehículo, teniendo en cuenta las condiciones del tránsito y del entorno."
    },
    {
        category: "Responsabilidades",
        question: "¿Qué responsabilidad tiene el conductor respecto de los pasajeros?",
        answer: "Debe procurar que viajen de forma segura, respetando la capacidad del vehículo y utilizando los sistemas de protección correspondientes."
    },
    {
        category: "Responsabilidades",
        question: "¿Por qué es importante respetar a los demás usuarios de la vía?",
        answer: "Porque la circulación es un espacio compartido. Las decisiones de cada conductor pueden afectar a peatones, ciclistas, motociclistas y otros vehículos."
    },

    // =====================================
    // 4. REGLAS DE CIRCULACIÓN
    // =====================================

    {
        category: "Reglas de circulación",
        question: "¿Por qué lado de la calzada se debe circular?",
        answer: "En Argentina se circula por la derecha, salvo las excepciones previstas por la normativa o indicadas mediante señalización."
    },
    {
        category: "Reglas de circulación",
        question: "¿Qué es la prioridad de paso?",
        answer: "Es el derecho que tiene un usuario de la vía a continuar antes que otro en determinadas situaciones. Debe respetarse según las reglas de tránsito y las señales existentes."
    },
    {
        category: "Reglas de circulación",
        question: "¿Quién tiene prioridad en una esquina sin semáforos ni señales?",
        answer: "Como regla general, tiene prioridad quien circula desde la derecha. Sin embargo, existen excepciones previstas por la Ley Nacional de Tránsito, como determinadas vías, vehículos y situaciones especiales."
    },
    {
        category: "Reglas de circulación",
        question: "¿Qué debe hacerse antes de cambiar de carril?",
        answer: "Se debe comprobar que la maniobra sea segura, observar los espejos y puntos ciegos, señalizar con anticipación y realizar el desplazamiento sin generar riesgos."
    },
    {
        category: "Reglas de circulación",
        question: "¿Cómo debe realizarse un adelantamiento?",
        answer: "Debe efectuarse por la izquierda como regla general, verificando que exista espacio suficiente, buena visibilidad y que la maniobra esté permitida. Luego se debe regresar al carril correspondiente sin poner a nadie en peligro."
    },
    {
        category: "Reglas de circulación",
        question: "¿Qué es la distancia de seguridad?",
        answer: "Es el espacio que debe mantenerse respecto del vehículo que circula adelante para poder reaccionar y detenerse sin provocar una colisión. Debe aumentarse cuando hay lluvia, poca visibilidad o calzada resbaladiza."
    },
    {
        category: "Reglas de circulación",
        question: "¿Cuándo se deben utilizar las luces de giro?",
        answer: "Deben utilizarse para advertir con anticipación los giros, cambios de carril y otras maniobras que así lo requieran, sin que su uso otorgue prioridad automática."
    },

    // =====================================
    // 5. SEGURIDAD DEL VEHÍCULO
    // =====================================

    {
        category: "Seguridad del vehículo",
        question: "¿Qué elementos de seguridad debe tener un automóvil?",
        answer: "Debe contar con los elementos exigidos por la normativa, entre ellos sistemas de frenos, dirección, iluminación y señalización en condiciones adecuadas, además de cinturones de seguridad y apoyacabezas según corresponda."
    },
    {
        category: "Seguridad del vehículo",
        question: "¿Para qué sirve el cinturón de seguridad?",
        answer: "Reduce el riesgo de lesiones al mantener a los ocupantes sujetos al asiento durante una frenada brusca o una colisión. Debe utilizarse correctamente por todos los ocupantes."
    },
    {
        category: "Seguridad del vehículo",
        question: "¿Qué función cumple el apoyacabezas?",
        answer: "Ayuda a reducir el riesgo de lesiones cervicales en determinadas colisiones, especialmente en impactos desde atrás. Debe estar correctamente regulado."
    },
    {
        category: "Seguridad del vehículo",
        question: "¿Por qué es importante revisar los neumáticos?",
        answer: "Porque influyen en la adherencia, estabilidad y capacidad de frenado. Deben tener presión adecuada y un dibujo en condiciones reglamentarias."
    },
    {
        category: "Seguridad del vehículo",
        question: "¿Qué función cumple el sistema de frenos?",
        answer: "Permite reducir la velocidad y detener el vehículo. Su correcto funcionamiento es esencial para prevenir siniestros viales."
    },

    // =====================================
    // 6. CONDUCCIÓN SEGURA
    // =====================================

    {
        category: "Conducción segura",
        question: "¿Qué significa conducir de manera preventiva?",
        answer: "Significa anticiparse a posibles riesgos, observar el entorno, mantener una distancia adecuada y actuar con prudencia para evitar situaciones peligrosas."
    },
    {
        category: "Conducción segura",
        question: "¿Por qué no se debe utilizar el celular mientras se conduce?",
        answer: "Porque desvía la atención visual, manual y mental de la conducción, reduce la capacidad de reacción y aumenta el riesgo de provocar un siniestro."
    },
    {
        category: "Conducción segura",
        question: "¿Cómo afecta el alcohol a la conducción?",
        answer: "Disminuye la capacidad de reacción, altera la percepción y dificulta la coordinación y la toma de decisiones. En Argentina rige la prohibición de conducir con alcoholemia superior a cero en las jurisdicciones alcanzadas por la normativa nacional, sin perjuicio de las reglas locales aplicables."
    },
    {
        category: "Conducción segura",
        question: "¿Por qué es peligroso conducir con sueño o cansancio?",
        answer: "Porque disminuye la atención, retrasa las respuestas y puede provocar errores de conducción. Ante el cansancio, lo seguro es detenerse en un lugar permitido y descansar."
    },
    {
        category: "Conducción segura",
        question: "¿Cómo se debe conducir cuando llueve?",
        answer: "Se debe reducir la velocidad, aumentar la distancia de seguridad, evitar maniobras bruscas y utilizar las luces correspondientes. La adherencia de los neumáticos puede disminuir."
    },
    {
        category: "Conducción segura",
        question: "¿Qué se debe hacer ante una situación de baja visibilidad?",
        answer: "Reducir la velocidad, aumentar la distancia respecto de otros vehículos y utilizar correctamente las luces. Si las condiciones impiden circular con seguridad, se debe detener el vehículo en un lugar seguro."
    },

    // =====================================
    // 7. USUARIOS DE LA VÍA
    // =====================================

    {
        category: "Usuarios de la vía",
        question: "¿Quiénes son los usuarios de la vía pública?",
        answer: "Son todas las personas que utilizan el espacio destinado a la circulación: peatones, ciclistas, motociclistas, conductores, pasajeros y otros usuarios autorizados."
    },
    {
        category: "Usuarios de la vía",
        question: "¿Qué cuidados se deben tener con los peatones?",
        answer: "Se debe respetar su prioridad en los lugares establecidos, reducir la velocidad al aproximarse a cruces peatonales y prestar especial atención a niños, personas mayores y personas con movilidad reducida."
    },
    {
        category: "Usuarios de la vía",
        question: "¿Qué medidas de seguridad debe adoptar un ciclista?",
        answer: "Debe respetar las normas de circulación, utilizar los elementos de seguridad exigidos, hacerse visible y circular por los espacios habilitados cuando corresponda."
    },
    {
        category: "Usuarios de la vía",
        question: "¿Qué protección deben utilizar los motociclistas?",
        answer: "Deben utilizar casco reglamentario correctamente colocado y abrochado. También es importante usar indumentaria visible y mantener el vehículo en buenas condiciones."
    },

    // =====================================
    // 8. INFRACCIONES Y SANCIONES
    // =====================================

    {
        category: "Infracciones y sanciones",
        question: "¿Qué es una infracción de tránsito?",
        answer: "Es el incumplimiento de una norma de circulación o de una obligación establecida por la legislación vial."
    },
    {
        category: "Infracciones y sanciones",
        question: "¿Qué consecuencias puede tener cometer una infracción?",
        answer: "Según la gravedad y la normativa aplicable, puede generar multas, retención preventiva en los casos previstos, inhabilitación u otras sanciones."
    },
    {
        category: "Infracciones y sanciones",
        question: "¿Qué es una sanción de tránsito?",
        answer: "Es la consecuencia legal que puede aplicarse cuando se comprueba una infracción. Su tipo y alcance dependen de la falta cometida y de la normativa vigente."
    },
    {
        category: "Infracciones y sanciones",
        question: "¿Por qué es importante respetar las normas aunque no haya controles?",
        answer: "Porque las normas buscan proteger la vida y la integridad de todas las personas. La seguridad vial depende del comportamiento responsable, no solamente de la presencia de controles."
    },

    // =====================================
    // 9. SITUACIONES ESPECIALES
    // =====================================

    {
        category: "Situaciones especiales",
        question: "¿Qué se debe hacer al aproximarse a un vehículo de emergencia?",
        answer: "Se debe facilitar su paso, despejar el espacio cuando sea posible y actuar con precaución, respetando las indicaciones y señales correspondientes."
    },
    {
        category: "Situaciones especiales",
        question: "¿Cómo se debe actuar al aproximarse a un paso ferroviario?",
        answer: "Se debe reducir la velocidad, observar y respetar las señales y barreras. Nunca se debe intentar cruzar si se aproxima un tren o si las señales indican detenerse."
    },
    {
        category: "Situaciones especiales",
        question: "¿Qué precauciones se deben tomar cerca de una escuela?",
        answer: "Se debe reducir la velocidad, prestar atención a los peatones y estar preparado para detenerse. Los niños pueden realizar movimientos inesperados."
    },
    {
        category: "Situaciones especiales",
        question: "¿Qué se debe hacer si ocurre un siniestro vial?",
        answer: "Se debe detener el vehículo en un lugar seguro, señalizar la situación cuando sea posible, solicitar asistencia de emergencia y evitar mover a personas lesionadas salvo que exista un peligro inmediato."
    },

    // =====================================
    // 10. CONVIVENCIA Y EDUCACIÓN VIAL
    // =====================================

    {
        category: "Convivencia y educación vial",
        question: "¿Qué es la educación vial?",
        answer: "Es el conjunto de conocimientos, hábitos y actitudes que permiten utilizar la vía pública de manera responsable, segura y respetuosa."
    },
    {
        category: "Convivencia y educación vial",
        question: "¿Qué significa convivencia vial?",
        answer: "Es compartir el espacio público respetando los derechos y necesidades de los demás usuarios, actuando con tolerancia, responsabilidad y prudencia."
    },
    {
        category: "Convivencia y educación vial",
        question: "¿Por qué la seguridad vial es una responsabilidad compartida?",
        answer: "Porque las decisiones de conductores, peatones, ciclistas, autoridades y demás usuarios influyen en la seguridad de todos. La prevención requiere compromiso colectivo."
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