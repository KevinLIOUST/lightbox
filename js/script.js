// Fonction pour générer des photos aléatoires à partir de lorem Picsum
function genererPhotos(quantite) {
    for (let i = 0; i < quantite; i++) {
        let lien1 = `https://picsum.photos/id/${i}/400/400`;
        let lien2 = `https://picsum.photos/id/${i}/800/800`
        document.getElementById("gallerie-photos").innerHTML += `<a href="${lien2}" data-lightbox="gallerie-photos" data-title="My caption" data-alt="Image non trouvée"><img class="m-3 rounded-3" src=${lien1} alt=\"${lien1}\"></a>`;
        // let lienRandom = `https://picsum.photos/400?random=${i}`;
        // document.getElementById("gallerie-photos").innerHTML += `<a href="${lienRandom}" data-lightbox="image-1" data-title="My caption" data-alt="Image non trouvée"><img class="m-3 imageGeneree" src=${lienRandom} alt=\"https://picsum.photos/400?random=${i}\"></a>`;
    }
}

genererPhotos(30);

window.addEventListener("scroll", () => {

    if (

        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight

    ) {

        // Définition des variables pour contrôler le chargement de contenu

        let offset = 0; // Définit le point de départ pour la récupération des données

        let limit = 6; // Définit le nombre d’éléments à récupérer à la fois (dans notre exemple, on récupère 6 éléments à la fois)

        let total = limit; // Initialise le nombre total d’éléments à récupérer à la valeur de la limite

        let canFetch = true; // Indique si de nouveaux contenus peuvent être récupérés

        let isLoading = false; // Indique si une requête de récupération de données est en cours



        // Sélection des éléments du DOM pour manipuler le contenu et l’animation de chargement

        const container = document.querySelector(".container"); // Sélectionne l’élément avec la classe "container" où les données seront affichées

        const animation = document.querySelector(".loader"); // Sélectionne l’élément avec la classe "loader" utilisée pour afficher l’animation de chargement



        // Fonction pour récupérer de nouveaux contenus

        function fetchData() {

            // Vérifie si une requête de récupération de données est déjà en cours ou si toutes les données ont été récupérées

            if (isLoading || offset > total) return;

            // Démarre le chargement en mettant isLoading à true et affiche l’animation de chargement

            isLoading = true;

            animation.classList.add("show");

            // Effectue une requête pour récupérer de nouveaux contenus depuis une API

            fetch(`https://dummyjson.com/products?limit=${limit}&skip=${offset}`)

                .then((res) => {

                    // Si la requête est réussie, traite la réponse JSON

                    res.json().then((data) => {

                        // Met à jour le nombre total d’éléments disponibles en fonction de la réponse du serveur

                        total = data.total;

                        // Parcourt les nouveaux éléments récupérés et les affiche dans la page

                        data.products.map((item) => {

                            let card = `

 

 

 ${item.images[0]}" class="card-image" width="600">

 

 

 

${item.title}
 

${item.description}

 

 

 

`
                                ;
                            container.innerHTML += card; // Ajoute chaque élément à la fin de la liste des éléments existants

                        });

                        // Met à jour les variables et termine le chargement

                        isLoading = false;

                        animation.classList.remove("show"); // Cache l’animation de chargement

                        offset = offset + limit; // Met à jour le point de départ pour la prochaine récupération de données

                    })

                        .catch((e) => {

                            // Si une erreur se produit lors du traitement de la réponse JSON, arrête le chargement et cache l’animation

                            isLoading = false;

                            animation.classList.remove("show");

                        });

                })

                .catch((err) => {

                    // Si une erreur se produit lors de la requête réseau, arrête le chargement et cache l’animation

                    isLoading = false;

                    animation.classList.remove("show");

                });

        }

    }

});

// // Fonction pour ajouter du HTML dans la lightbox pour préparer l'affichage de l'image dans la lightbox en question
// function ajouterHTMLLightbox(lien) {
//     lightbox.innerHTML = `
//     <img src="${i}" alt="${i}">
//             <a class="exit" onclick="ouvrirOuFermerLightbox(${lien})">
//                 <i class="bi bi-x-lg"></i>
//             </a>
//     `
// }

// // Fonction pour gérer le clique pour faire apparaître la lightbox
// function ouvrirOuFermerLightbox() {
//     ajouterHTMLLightbox();
//     const lightbox = document.getElementById("lightbox");
//     lightbox.classList.toggle("active");
// }

// <img class="m-3" src=${lien} alt=\"https://picsum.photos/400?random=i\"> Random
// <img class="m-3" src=${lien} alt=\"https://picsum.photos/id/400\"> id