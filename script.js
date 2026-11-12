const mainMenu = document.getElementById("mainMenu");
const topicMenu = document.getElementById("topicMenu");

const backBtn = document.getElementById("backBtn");

const topicTitle = document.getElementById("topicTitle");
const topicDescription = document.getElementById("topicDescription");

const mainCards = document.querySelectorAll(".main-card");
const topicCards = document.querySelectorAll(".topic-card");

let selectedMode = "guias";


// Selección entre guías y cuestionarios
mainCards.forEach(card => {
    card.addEventListener("click", () => {

        selectedMode = card.dataset.mode;

        if (selectedMode === "guias") {
            topicTitle.textContent = "Guías de estudio";

            topicDescription.textContent =
                "Seleccioná el contenido que querés consultar.";

        } else {
            topicTitle.textContent = "Cuestionarios";

            topicDescription.textContent =
                "Seleccioná el tema sobre el que querés evaluarte.";
        }

        // Cambiar destinos de los enlaces
        topicCards.forEach(topic => {

            const guide = topic.dataset.guide;

            if (selectedMode === "guias") {
                topic.href = `guias/guia-${guide}.html`;
            } else {
                topic.href = `cuestionarios/quiz-${guide}.html`;
            }

        });

        mainMenu.classList.add("hidden");
        topicMenu.classList.remove("hidden");

    });
});


// Volver al menú principal
backBtn.addEventListener("click", () => {

    topicMenu.classList.add("hidden");
    mainMenu.classList.remove("hidden");

});