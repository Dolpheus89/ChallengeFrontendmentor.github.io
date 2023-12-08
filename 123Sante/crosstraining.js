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

const seancesCrossS = [
    "Circuit cross-training en salle:\n \n Burpees :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Sauts en boîte :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Corde à sauter :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Mountain climbers :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Sprint sur tapis de course :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Gainage dynamique :\n• 4 séries de 20 secondes de travail, 10 secondes de repos",
    "Circuit cross-training en salle:\n \n Squat sauté :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Burpees avec push-up :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Box jumps :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Sprints stationnaires (genoux hauts) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Fentes sautées :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Plank jacks :\n• 4 séries de 20 secondes de travail, 10 secondes de repos",
    "Circuit cross-training en salle:\n \n Jump squats :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Burpees avec saut latéral :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Corde à sauter (double unders) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Planche dynamique (montée de genoux) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Sprint sur vélo stationnaire :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Gainage latéral avec rotation :\n• 4 séries de 20 secondes de travail, 10 secondes de repos",
    "Circuit cross-training en salle:\n \n Burpees avec saut vertical :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Sprints de côté (shuffle) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Sauts en étoile (jumping jacks améliorés) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Corde à sauter (sauts croisés) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Sprint sur rameur :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Mountain climbers rapides :\n• 4 séries de 20 secondes de travail, 10 secondes de repos",
];

const seancesCrossM = [
    "Circuit cross-training à la maison:\n \n Jumping jacks :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Squats sautés :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Fentes alternées :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Burpees :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Mountain climbers :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Planche dynamique (montée de genoux) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos",
    "Circuit cross-training à la maison:\n \n Sauts en étoile (jumping jacks améliorés) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Burpees avec saut vertical :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Fentes sautées :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Corde à sauter (double unders ou sauts simples) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Sprint sur place :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Gainage latéral avec rotation :\n• 4 séries de 20 secondes de travail, 10 secondes de repos",
    "Circuit cross-training à la maison:\n \n Sprints de côté (shuffle) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Sauts en boîte (utilisez une marche ou une surface stable) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Corde à sauter (sauts croisés) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Planche avec rotation (alternance des côtés) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Sprint sur place avec genoux hauts :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Mountain climbers rapides :\n• 4 séries de 20 secondes de travail, 10 secondes de repos",
    "Circuit cross-training à la maison:\n \n Corde à sauter (sauts simples) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Squats isométriques (position basse maintenue) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Burpees avec push-up :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Sprint sur place avec changement de direction :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Sauts en étoile (jumping jacks améliorés) :\n• 4 séries de 20 secondes de travail, 10 secondes de repos \n\n Crunchs inversés :\n• 4 séries de 20 secondes de travail, 10 secondes de repos",
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
    const randomSeanceM = Math.floor(Math.random() * seancesCrossM.length);
    Maison.innerText = seancesCrossM[randomSeanceM]
  
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
    const randomSeanceS = Math.floor(Math.random() * seancesCrossS.length);
    Salle.innerText = seancesCrossS[randomSeanceS]
})

closePopup.addEventListener ("click", () => {
    popupAccueil.style.display = 'none';
    overlay.style.display = 'none'
})
