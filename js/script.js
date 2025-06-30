// Fonction pour générer des photos aléatoires à partir de lorem Picsum
function genererPhotos(quantite) {
    for (let i = 0; i < quantite; i++) {
        let lien = `https://picsum.photos/400?random=${i}`;
        document.getElementById("gallerie-photos").innerHTML += `<img src=${lien} alt=\"https://picsum.photos/400?random=i\">`;
    }
}

genererPhotos(5);