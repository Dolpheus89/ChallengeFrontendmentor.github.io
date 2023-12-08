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

const seancesRunS = [
    "Séance Cardio en salle :\n \n Tapis de course - Course modérée :\n• 20 minutes \n\n Vélo elliptique - Résistance moyenne :\n• 15 minutes \n\n Rameur - Intensité modérée :\n• 10 minutes \n\n Montée d'escaliers (simulateur) - Allure régulière :\n• 15 minutes \n\n Jumping jacks :\n• 5 minutes",
    "Séance Cardio en salle :\n \n Vélo stationnaire - Intervalles de haute intensité (HIIT) :\n• 20 minutes (30 secondes d'effort intense, 30 secondes de repos) \n\n Tapis de course :\n• 10 minutes \n\n Rameur - Sprint court :\n• 8 minutes \n\n Escalade (utilisez un escalier ou une machine d'escalade) :\n• 12 minutes \n\n Corde à sauter - Sauts rapides :\n• 5 minutes",
    "Séance Cardio en salle :\n \n Tapis de course - Course continue avec inclinaison :\n• 25 minutes \n\n Vélo elliptique - Résistance variée :\n• 15 minutes \n\n Rameur - Intervalle de haute intensité (HIIT) :\n• 12 minutes (20 secondes d'effort intense, 40 secondes de repos) \n\n Step (utilisez un banc ou une plateforme) - Enchaînement rapide :\n• 10 minutes \n\n Burpees - Intensité modérée :\n• 7 minutes",
    "Séance Cardio en salle :\n \n Vélo stationnaire - Course continue à intensité modérée :\n• 30 minutes \n\n Tapis de course - Marche rapide avec inclinaison :\n• 15 minutes \n\n Rameur - Sprint long :\n• 15 minutes \n\n Circuit training (alternant entre les machines cardiovasculaires) :\n• 20 minutes \n\n Jump rope - Sauts variés :\n• 8 minutes",
];

const seancesRunM = [
    "Séance Cardio en extérieur :\n \n Course à pied - Allure modérée :\n• 30 minutes \n\n Burpees - Intervalle de haute intensité (HIIT) :\n• 20 minutes (30 secondes d'effort intense, 30 secondes de repos) \n\n Sauts en hauteur (utilisez un banc ou une plateforme) - Enchaînement rapide :\n• 15 minutes \n\n Course à pied - Sprint court :\n• 10 minutes \n\n Mountain climbers - Série continue :\n• 10 minutes",
    "Séance Cardio en extérieur :\n \n Échauffement - Course lente pendant 10 minutes\n\n Séquence de Fractionné - Répétez 8 fois :\n• Sprint intense pendant 30 secondes\n• Récupération active (marche ou footing léger) pendant 60 secondes\n\n Récupération - Marche lente ou footing léger pendant 5 minutes\n\n Séance d'Étirements - Travaillez sur la souplesse pendant 10 minutes après la séance",
    "Séance Cardio en extérieur :\n \n Course à pied - Course continue avec variations d'intensité :\n• 40 minutes \n\n Exercices au sol (crunchs, pompes, burpees) - Série continue :\n• 20 minutes \n\n Sauts de côté (sauts latéraux) - Intervalle de haute intensité (HIIT) :\n• 15 minutes (30 secondes d'effort intense, 30 secondes de repos) \n\n Course à pied - Sprint final :\n• 5 minutes \n\n Étirements - Travaillez sur la souplesse pendant 10 minutes",
    "Séance Cardio en extérieur :\n \n Footing - Sortie longue à allure modérée :\n• Durée : 60 minutes \n\n Échauffement préalable - Marche rapide pendant 10 minutes \n\n Récupération active - Marche lente pendant 10 minutes \n\n Étirements - Travaillez sur la souplesse pendant 10 minutes après la séance",

];

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
    const randomSeanceM = Math.floor(Math.random() * seancesRunM.length);
    Maison.innerText = seancesRunM[randomSeanceM]
  
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
    const randomSeanceS = Math.floor(Math.random() * seancesRunS.length);
    Salle.innerText = seancesRunS[randomSeanceS]
})

closePopup.addEventListener ("click", () => {
    popupAccueil.style.display = 'none';
    overlay.style.display = 'none'
})
