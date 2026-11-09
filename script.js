document.addEventListener("DOMContentLoaded", () => {
    // 1. Sélectionner les éléments
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // 2. Fonction pour générer une couleur hexadécimale aléatoire
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // 3. Modifier la couleur de la boîte au clic sur le bouton
    changeColorBtn.addEventListener("click", () => {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    });
});
