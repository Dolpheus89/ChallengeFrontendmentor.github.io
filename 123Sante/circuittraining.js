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

const seancesCtS = [
    "Circuit Training en salle x3\n (repos entre chaque cycle:: 1min à 1min30):\n \n 1. Squats barre arrière :\n• 8 répétitions \n\n 2. Pompes :\n• jusqu'à l'échec \n\n 3. Tractions à la barre fixe (si disponible) :\n• 8 à 12 répétitions \n\n 4. Développé couché avec haltères :\n• 12 répétitions \n\n 5. Rowing avec barre T :\n• 12 répétitions",
    "Circuit Training en salle x3\n (repos entre chaque cycle:: 1min à 1min30):\n \n 1. Soulevé de terre :\n• 6 à 10 répétitions \n\n 2. Fentes avec haltères :\n• 12 répétitions \n\n 3. Développé militaire avec barre :\n• 8 à 12 répétitions \n\n 4. Rowing unilatéral avec haltère :\n• 12 répétitions\n\n 5. Crunchs :\n• 15 à 20 répétitions", 
    "Circuit Training en salle x3\n (repos entre chaque cycle: 1min à 1min30):\n \n 1. Squats bulgares avec haltères :\n• 8 à 12 répétitions\n\n 2. Pompes en déclin (pieds sur un banc) :\n• jusqu'à l'échec \n\n 3. Développé incliné avec haltères :\n• 12 répétitions \n\n 4. Tractions pronation :\n• 10 à 12 répétitions\n\n 5. Extension triceps à la poulie haute :\n• 12 répétitions", 
    "Circuit Training en salle x3\n (repos entre chaque cycle:: 1min à 1min30)):\n \n 1. Squats avec haltères :\n• 8 répétitions\n\n 2. Soulevé de terre roumain :\n• 12 répétitions\n\n 3. Dips entre deux chaises :\n• 12 à 15 répétitions\n\n 4. Curl biceps avec barre EZ :\n• 12 répétitions\n\n 5. Planche :\n• 30-60 secondes",
];

const seancesCtM = [
    "Circuit Training à la maison x3\n (repos entre chaque cycle:: 1min):\n \n 1. Squats pieds écartés :\n• jusqu'à l'échec \n\n 2. Fentes avant (alternance des jambes) :\n• 12 à 15 répétitions\n\n 3. Squats sautés :\n• 8 à 12 répétitions\n\n 4. Gainage statique :\n• 30-60 secondes\n\n 5. Mountain climbers :\n• 15 à 20 répétitions\n\n 6. Extensions triceps au sol :\n• 12 à 15 répétitions",
    "Circuit Training à la maison x3\n (repos entre chaque cycle:: 1min):\n \n 1. Pistols squats (squat sur une jambe) :\n• jusqu'à l'échec\n\n 2. Fentes latérales (alternance des jambes) :\n• 12 à 15 répétitions\n\n 3. Squats isométriques (position basse maintenue) :\n• 8 à 12 répétitions\n\n 4. Planche latérale (alternance des côtés) :\n• 15 à 20 répétitions\n\n 5. Crunchs inversés :\n• 15 à 20 répétitions\n\n 6. Extensions triceps au-dessus de la tête :\n• 12 à 15 répétitions",
    "Circuit Training à la maison x3\n (repos entre chaque cycle:: 1min):\n \n 1. Squats pieds écartés :\n• jusqu'à l'échec \n\n 2. Fentes avant (alternance des jambes) :\n• 12 à 15 répétitions\n\n 3. Squats sautés :\n• 8 à 12 répétitions\n\n 4. Gainage statique :\n• 30-60 secondes\n\n 5. Mountain climbers :\n• 15 à 20 répétitions\n\n 6. Extensions triceps au sol :\n• 12 à 15 répétitions",
    "Circuit Training à la maison x3\n (repos entre chaque cycle:: 1min):\n \n 1. Pistols squats (squat sur une jambe) :\n• jusqu'à l'échec\n\n 2. Fentes latérales (alternance des jambes) :\n• 12 à 15 répétitions\n\n 3. Squats isométriques (position basse maintenue) :\n• 8 à 12 répétitions\n\n 4. Planche latérale (alternance des côtés) :\n• 15 à 20 répétitions\n\n 5. Crunchs inversés :\n• 15 à 20 répétitions\n\n 6. Extensions triceps au-dessus de la tête :\n• 12 à 15 répétitions",
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
    const randomSeanceM = Math.floor(Math.random() * seancesCtM.length);
    Maison.innerText = seancesCtM[randomSeanceM]
  
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
    const randomSeanceS = Math.floor(Math.random() * seancesCtS.length);
    Salle.innerText = seancesCtS[randomSeanceS]
})

closePopup.addEventListener ("click", () => {
    popupAccueil.style.display = 'none';
    overlay.style.display = 'none'
})
