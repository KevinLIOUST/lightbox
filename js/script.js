// Fonction pour générer des photos aléatoires à partir de lorem Picsum
function genererPhotos(quantite) {
    for (let i = 0; i < quantite; i++) {
        // let lien = `https://picsum.photos/${i}/1/200/300`;
        // document.getElementById("gallerie-photos").innerHTML += `<a href="${lien}" data-lightbox="image-1" data-title="My caption" data-alt="Image non trouvée"><img class="m-3" src=${lien} alt=\"https://picsum.photos/${i}/1/200/300\"></a>`;
        let lienRandom = `https://picsum.photos/400?random=${i}`;
        document.getElementById("gallerie-photos").innerHTML += `<a href="${lienRandom}" data-lightbox="image-1" data-title="My caption" data-alt="Image non trouvée"><img class="m-3 imageGeneree" src=${lienRandom} alt=\"https://picsum.photos/400?random=${i}\"></a>`;
    }
}

genererPhotos(30);

// <img class="m-3" src=${lien} alt=\"https://picsum.photos/400?random=i\"> Random
// <img class="m-3" src=${lien} alt=\"https://picsum.photos/id/400\"> id