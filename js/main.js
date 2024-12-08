// main.js

document.addEventListener("DOMContentLoaded", function() {
    const movieCards = document.querySelectorAll(".movie-card");

    movieCards.forEach(card => {
        card.addEventListener("click", function() {
            alert("Has seleccionado: " + card.querySelector("p").innerText);
        });
    });
});
