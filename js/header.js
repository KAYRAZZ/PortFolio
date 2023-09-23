document.addEventListener("DOMContentLoaded", function () {

    const liens = document.querySelectorAll(".lien");
    const currentPageURL = window.location.href;
    const gradientAnimation = document.querySelector(".gradientAnimation");
    const body = document.body;
    setTimeout(function () {
        body.style.opacity = 1;
        gradientAnimation.style.opacity = 0.3;
    }, 500);

    liens.forEach((lien) => {
        if (lien.href == currentPageURL) {
            setTimeout(function () {
                lien.classList.add("active");
            }, 500);
        }

        lien.addEventListener("click", function (e) {
            e.preventDefault();
            if (lien.href != currentPageURL) {
                gradientAnimation.style.opacity = 0;
                body.style.opacity = 0;
                liens.forEach((lienActive) => {
                    var a = lienActive.getAttribute("class");
                    if (a == 'lien active') {
                        lienActive.classList.remove("active");
                    }
                });
                // Attendre 2 secondes avant le changement de page
                setTimeout(function () {
                    // Rediriger vers la nouvelle page
                    window.location.href = lien.href;
                }, 300);
            }
        })
    });
});

