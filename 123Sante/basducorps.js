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

const seancesBdcS = [
    "Séance Bas du corps en salle:\n \n Squats barre arrière :\n• 4 séries de 8 répétitions \n\n Fentes avec haltères :\n• 3 séries de 10 répétitions \n\n Soulevé de terre :\n• 4 séries de 8 à 12 répétitions \n\n Extension des jambes à la machine :\n• 3 séries de 12 répétitions \n\n Curl ischio-jambiers à la machine :\n• 3 series de 12 répétitions",
    "Séance Bas du corps en salle:\n \n Soulevé de terre :\n• 4 séries de 6 à 10 répétitions \n\n Fentes avec barre :\n• 3 séries de 12 répétitions \n\n Presse à cuisses :\n• 4 séries de 8 à 12 répétitions \n\n Leg curls à la machine :\n• 3 séries de 12 répétitions\n\n Extension des mollets debout :\n• 3 séries de 10 à 12 répétitions \n\n Extensions du tronc à la machine :\n• 3 séries de 10 à 12 répétitions", 
    "Séance Bas du corps en salle:\n \n Squats bulgares avec haltères :\n• 4 séries de 8 à 12 répétitions\n\n Presse inclinée :\n• 3 séries de 8 à 12 répétitions\n\n Élévations latérales en position assise :\n• 3 séries de 12 répétitions\n\n Extension des jambes à la poulie basse :\n• 3 séries de 10 à 12 répétitions\n\n Fentes latérales avec élastique :\n• 3 séries de 12 répétitions \n\n Step-ups avec banc :\n• 3 séries de 10 à 15 répétitions", 
    "Séance Bas du corps en salle:\n \n Squats avec haltères :\n• 4 séries de 8 répétitions\n\n Soulevé de terre roumain :\n• 3 séries de 12 répétitions\n\n Presse à cuisses à 45 degrés :\n• 4 séries de 10 répétitions\n\n Extension des mollets assis :\n• 3 séries de 12 répétitions\n\n Flexions plantaires à la machine :\n• 3 séries de 10 à 12 répétitions \n\n Fentes avec rotation :\n• 3 séries de 12 répétitions",

]

const seancesBdcM = [
    "Séance Bas du corps à la maison:\n \n Squats pieds écartés :\n• 4 séries jusqu'à l'échec\n\n Fentes avant (alternance des jambes) :\n• 3 séries de 12 à 15 répétitions\n\n Squats sautés :\n• 4 séries de 8 à 12 répétitions\n\n Gainage statique :\n• 3 séries de 30-60 secondes\n\n Mountain climbers :\n• 3 séries de 15 à 20 répétitions\n\n Extensions triceps au sol :\n• 3 séries de 12 à 15 répétitions",
    "Séance Bas du corps à la maison:\n \n Pistols squats (squat sur une jambe) :\n• 4 séries jusqu'à l'échec\n\n Fentes latérales (alternance des jambes) :\n• 3 séries de 12 à 15 répétitions\n\n Squats isométriques (position basse maintenue) :\n• 4 séries de 8 à 12 répétitions\n\n Planche latérale (alternance des côtés) :\n• 3 séries de 15 à 20 répétitions\n\n Crunchs inversés :\n• 3 séries de 15 à 20 répétitions\n\n Extensions triceps au-dessus de la tête :\n• 3 séries de 12 à 15 répétitions",
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
    const randomSeanceM = Math.floor(Math.random() * seancesBdcM.length);
    Maison.innerText = seancesBdcM[randomSeanceM]
  
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
    const randomSeanceS = Math.floor(Math.random() * seancesBdcS.length);
    Salle.innerText = seancesBdcS[randomSeanceS]
})

closePopup.addEventListener ("click", () => {
    popupAccueil.style.display = 'none';
    overlay.style.display = 'none'
})
