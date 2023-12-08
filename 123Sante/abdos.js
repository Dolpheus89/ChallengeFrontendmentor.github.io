// Fonction pour basculer l'affichage du menu déroulant
function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

function toggleDropdown1() {
    const dropdown = document.getElementById("myDropdown1");
    dropdown.classList.toggle("show");
}

function toggleDropdown2() {
    const dropdown = document.getElementById("myDropdown2");
    dropdown.classList.toggle("show");
}

// Ferme le menu déroulant si l'utilisateur clique en dehors de celui-ci
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction() {
    // Code à exécuter lors du clic sur l'image
    const displayText = "Assure-toi de faire un échauffement adéquat avant chaque séance, ce qui peut inclure 5 à 10 minutes de cardio léger suivi d'étirements dynamiques.";

    // Afficher le texte dans l'élément avec l'ID "displayText"
    document.getElementById("displayText").innerHTML = displayText;
}

const btnMaison = document.getElementById("maison")
const btnSalle = document.getElementById("salle")
const popupAccueil = document.getElementById("popupAccueil")
const closePopup = document.getElementById("closePopup")
const overlay = document.getElementById("overlay")
const titreSeanceSalle = document.querySelector(".titreSeanceSalle")
const titreSeanceMaison = document.querySelector(".titreSeanceMaison")
const Maison = document.getElementById("Maison")
const Salle = document.getElementById("Salle")
const generateurS = document.getElementById("generateurS")
const generateurM = document.getElementById("generateurM")

const seancesAbsS = [
    "Séance Abdos/Gainage en salle:\n \n Crunchs inversés sur banc :\n• 4 séries de 15 à 20 répétitions \n\n Planche latérale avec rotation (alternance des côtés) :\n• 3 séries de 15 à 20 répétitions \n\n Crunchs sur Swiss Ball :\n• 4 séries de 15 à 20 répétitions \n\n Élévation des jambes suspendu à la barre fixe :\n• 3 séries de 12 répétitions \n\n Gainage frontal sur Swiss Ball :\n• 3 séries de 30-60 secondes",
    "Séance Abdos/Gainage en salle:\n \n Crunchs inversés sur Swiss Ball :\n• 4 séries de 15 à 20 répétitions \n\n Planche latérale avec rotation (alternance des côtés) :\n• 3 séries de 15 à 20 répétitions \n\n Crunchs obliques avec haltères :\n• 4 séries de 15 à 20 répétitions de chaque côté \n\n Élévation des jambes suspendu à la barre fixe :\n• 3 séries de 12 répétitions \n\n Gainage frontal sur Swiss Ball :\n• 3 séries de 30-60 secondes",
    "Séance Abdos/Gainage en salle:\n \n Crunchs inversés sur banc incliné :\n• 4 séries de 15 à 20 répétitions \n\n Planche avec pieds sur Swiss Ball :\n• 3 séries de 30-60 secondes \n\n Crunchs obliques avec haltères :\n• 4 séries de 15 à 20 répétitions de chaque côté \n\n Élévation des jambes suspendu à la barre fixe :\n• 3 séries de 12 répétitions \n\n Gainage latéral avec rotation :\n• 3 séries de 15 à 20 répétitions de chaque côté",
    "Séance Abdos/Gainage en salle:\n \n Crunchs inversés sur Swiss Ball avec twist :\n• 4 séries de 15 à 20 répétitions de chaque côté \n\n Planche avec pieds sur Swiss Ball :\n• 3 séries de 30-60 secondes \n\n Crunchs obliques avec haltères :\n• 4 séries de 15 à 20 répétitions de chaque côté \n\n Élévation des jambes suspendu à la barre fixe :\n• 3 séries de 12 répétitions \n\n Gainage frontal sur Swiss Ball avec élévation des bras :\n• 3 séries de 30-60 secondes",
];

const seancesAbsM = [
    "Séance Abdos/Gainage à la maison:\n \n Crunchs inversés :\n• 4 séries de 15 à 20 répétitions \n\n Planche latérale (alternance des côtés) :\n• 3 séries de 15 à 20 répétitions \n\n Mountain climbers :\n• 4 séries de 15 à 20 répétitions \n\n Levée des jambes au sol :\n• 3 séries de 12 répétitions \n\n Gainage frontal :\n• 3 séries de 30-60 secondes",
    "Séance Abdos/Gainage à la maison:\n \n Crunchs inversés avec rotation :\n• 4 séries de 15 à 20 répétitions de chaque côté \n\n Planche latérale (alternance des côtés) :\n• 3 séries de 15 à 20 répétitions \n\n Mountain climbers avec rotation des genoux :\n• 4 séries de 15 à 20 répétitions \n\n Levée des jambes au sol en V :\n• 3 séries de 12 répétitions \n\n Gainage frontal avec élévation des bras :\n• 3 séries de 30-60 secondes",
    "Séance Abdos/Gainage à la maison:\n \n Crunchs inversés sur une chaise :\n• 4 séries de 15 à 20 répétitions \n\n Planche avec pieds surélevés (sur une chaise) :\n• 3 séries de 30-60 secondes \n\n Mountain climbers avec rotation des genoux :\n• 4 séries de 15 à 20 répétitions \n\n Levée des jambes au sol en V :\n• 3 séries de 12 répétitions \n\n Gainage latéral (alternance des côtés) :\n• 3 séries de 15 à 20 répétitions",
    "Séance Abdos/Gainage à la maison:\n \n Crunchs inversés avec twist russe :\n• 4 séries de 15 à 20 répétitions de chaque côté \n\n Planche avec pieds surélevés (sur une chaise) :\n• 3 séries de 30-60 secondes \n\n Mountain climbers avec rotation des genoux :\n• 4 séries de 15 à 20 répétitions \n\n Levée des jambes au sol en V :\n• 3 séries de 12 répétitions \n\n Gainage frontal avec élévation des bras :\n• 3 séries de 30-60 secondes",
]

btnMaison.addEventListener ("click", () => {
    popupAccueil.style.display = 'block';
    overlay.style.display = 'block'
    titreSeanceSalle.style.display = 'none'
    titreSeanceMaison.style.display = 'block'
    Salle.style.display = 'none'
    Maison.style.display = 'block'
    generateurM.style.display = 'block'
    generateurS.style.display = 'none'

})

generateurM.addEventListener ('click', () => {
    const randomSeanceM = Math.floor(Math.random() * seancesAbsM.length);
    Maison.innerText = seancesAbsM[randomSeanceM]
  
})


btnSalle.addEventListener ("click", () => {
    popupAccueil.style.display = 'block';
    overlay.style.display = 'block'
    titreSeanceSalle.style.display = 'block'
    titreSeanceMaison.style.display = 'none'
    Maison.style.display = 'none'
    Salle.style.display = 'block'
    generateurM.style.display = 'none'
    generateurS.style.display ='block'
    
})

generateurS.addEventListener ('click', () => {
    const randomSeanceS = Math.floor(Math.random() * seancesAbsS.length);
    Salle.innerText = seancesAbsS[randomSeanceS]
})

closePopup.addEventListener ("click", () => {
    popupAccueil.style.display = 'none';
    overlay.style.display = 'none'
})
