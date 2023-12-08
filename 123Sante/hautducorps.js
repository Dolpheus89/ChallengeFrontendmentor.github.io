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

const seancesHdcS = [
    "Séance Haut du corps en salle:\n \n Développé couché barre :\n• 4 séries de 8 répétitions \n\n Développé incliné haltère :\n• 3 séries de 10 répétitions \n\n Tractions supination :\n• 4 séries de 8 à 12 répétitions \n\n Curl biceps avec barre EZ :\n• 3 séries de 12 répétitions \n\n Extension triceps poulie haute :\n• 3 series de 12 répétitions",
    "Séance Haut du corps en salle:\n \n Soulevé de terre :\n• 4 séries de 6 à 10 répétitions \n\n Rowing barre :\n• 3 séries de 12 répétitions \n\n Développé militaire à la barre :\n• 4 séries de 8 à 12 répétitions \n\n Pull-over avec haltère :\n• 3 séries de 12 répétitions\n\n Curl marteau :\n• 3 séries de 10 à 12 répétitions \n\n Barre au front :\n• 3 séries de 10 à 12 répétitions", 
    "Séance Haut du corps en salle:\n \n Développé incliné avec barre :\n• 4 séries de 8 à 12 répétitions\n\n Tractions pronation :\n• 3 séries de 8 à 12 répétitions\n\n Élévations frontales :\n• 3 séries de 12 répétitions\n\n Curl poulie basse :\n• 3 séries de 10 à 12 répétitions\n\n Extension triceps à la poulie basse :\n• 3 séries de 12 répétitions \n\n Dips :\n• 3 séries de 10 à 15 répétitions", 
    "Séance Haut du corps en salle:\n \n Développé couché haltère :\n• 4 séries de 8 répétitions\n\n Rowing unilatéral avec haltère :\n• 3 séries de 12 répétitions\n\n Développé militaire avec haltères :\n• 4 séries de 10 répétitions\n\n Élévations latérales inclinées :\n• 3 séries de 12 répétitions\n\n Curl biceps 21s (7rep en bas, 7rep en haut, 7rep completes) :\n• 3 séries\n\n Triceps kickback avec haltère :\n• 3 séries de 12 répétitions ",
]

const seancesHdcM = [
    "Séance Haut du corps à la maison:\n \n Pompes :\n• 4 séries jusqu'à l'échec\n\n Dips entre deux chaises ou bancs :\n• 3 séries de 12 à 15 répétitions\n\n Tractions à la barre fixe (si disponible) ou Tractions australienne :\n• 4 séries de 8 à 12 répétitions\n\n Planche :\n• 3 séries de 30-60 secondes\n\n Crunchs :\n• 3 séries de 15 à 20 répétitions\n\n Extensions triceps au sol :\n• 3 séries de 12 à 15 répétitions",
    "Séance Haut du corps à la maison:\n \n Pompes en déclin (pieds sur une chaise ou un banc) :\n• 4 séries jusqu'à l'échec\n\n Dips triceps sur une chaise :\n• 3 séries de 12 à 15 répétitions\n\n Rowing inversé (utilisez une table ou un rebord stable) :\n• 4 séries de 12 à 15 répétitions\n\n Planche avec rotation (alternance des côtés) :\n• 3 séries de 15 à 20 répétitions\n\n Crunchs inversés :\n• 3 séries de 15 à 20 répétitions\n\n Extensions triceps au-dessus de la tête :\n• 3 séries de 12 à 15 répétitions", 
    "Séance Haut du corps à la maison:\n \n Burpees :\n• 4 séries de 15 à 20 répétitions \n\n Pompes larges :\n• 3 séries jusqu'à l'échec\n\n Pull-ups inversés sous une table :\n• 4 séries de 8 à 12 répétitions\n\n Pompes diamants :\n• 3 séries jusqu'à l'échec\n\n Planche dynamique :\n• 3 séries de 30 secondes",
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
    const randomSeanceM = Math.floor(Math.random() * seancesHdcM.length);
    Maison.innerText = seancesHdcM[randomSeanceM]
  
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
    const randomSeanceS = Math.floor(Math.random() * seancesHdcS.length);
    Salle.innerText = seancesHdcS[randomSeanceS]
})

closePopup.addEventListener ("click", () => {
    popupAccueil.style.display = 'none';
    overlay.style.display = 'none'
})
