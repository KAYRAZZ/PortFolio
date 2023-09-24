document.addEventListener("DOMContentLoaded", function () {

    // document.getElementById("loader").style.display = "none";

    const liens = document.querySelectorAll(".lien");
    const currentPageURL = window.location.href;
    const gradientAnimation = document.querySelector(".gradientAnimation");
    const body = document.body;
    // Attend 0.5s avant d'afficher le body et l'animation gradient
    setTimeout(function () {
        body.style.opacity = 1;
        gradientAnimation.style.opacity = 0.3;
    }, 500);
    // Permet de souligner la page actuel dans le header
    liens.forEach((lien) => {
        // Si le lien du href de la page est égal à la page actuel
        // Ou si la page actuel en ajoutant 'index.html' est égal au lien
        // 'Ou' car quand le site est en ligne, sur les pages principales il n'y a pas le lien du fichier 
        // Donc on l'ajoute directement
        const linkURL = lien.href;
        if (linkURL === currentPageURL || (currentPageURL + 'index.html') === linkURL) {
            // On ajoute une class au lien actuel pour la transition
            setTimeout(function () {
                lien.classList.add("active");
            }, 500);
        }
        lien.addEventListener("click", function (e) {
            // On empeche son rechargement
            e.preventDefault();
            // Si on clique sur une page différente que celle actuelle
            // On faire disparaitre le body
            if (lien.href != currentPageURL) {
                body.style.opacity = 0;
                // On enlève une class au lien actuel pour la transition
                liens.forEach((lienActive) => {
                    var a = lienActive.getAttribute("class");
                    if (a == 'lien active') {
                        lienActive.classList.remove("active");
                    }
                });
                // Attendre 0.3 secondes avant le changement de page
                setTimeout(function () {
                    // Rediriger vers la nouvelle page
                    window.location.href = lien.href;
                }, 300);
            }
        })
    });
});

// On ajoute une class quand on clique le menu
const menu = document.querySelector(".menu");
const barre = document.querySelector(".barre");
let cliquable = true;

barre.addEventListener("click", () => {
    if (cliquable) {
        menu.classList.toggle("active");
        cliquable = false;

        setTimeout(() => {
            cliquable = true;
        }, 1000);
    }
})