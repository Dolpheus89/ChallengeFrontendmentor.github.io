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
   const textElement = document.getElementById("displayText") 

   textElement.style.padding = "20px"
   textElement.style.borderRadius = "80px 80px 80px 0px"

   textElement.innerHTML = displayText
}

const btnMaison = document.getElementById("maison")
const btnSalle = document.getElementById("salle")
const popupAccueil = document.getElementById("popupAccueil")
const closePopup = document.getElementById("closePopup")
const overlay = document.getElementById("overlay")
const titreSeanceSalle = document.querySelector(".titreSeanceSalle")
const titreSeanceMaison = document.querySelector(".titreSeanceMaison")
const echauffementMaison = document.getElementById("echauffementMaison")
const echauffementSalle = document.getElementById("echauffementSalle")


btnMaison.addEventListener ("click", () => {
    popupAccueil.style.display = 'block';
    overlay.style.display = 'block'
    titreSeanceSalle.style.display = 'none'
    titreSeanceMaison.style.display = 'block'
    echauffementSalle.style.display = 'none'
    echauffementMaison.style.display = 'block'

})

closePopup.addEventListener ("click", () => {
    popupAccueil.style.display = 'none';
    overlay.style.display = 'none'
})

btnSalle.addEventListener ("click", () => {
    popupAccueil.style.display = 'block';
    overlay.style.display = 'block'
    titreSeanceSalle.style.display = 'block'
    titreSeanceMaison.style.display = 'none'
    echauffementMaison.style.display = 'none'
    echauffementSalle.style.display = 'block'
})

