const menuButton = document.getElementById("menu");
const hiddenMenuList = document.getElementById("hiddenMenuList");
const navigationPage = document.getElementById('NavigationPage');
const sport = "image/sport.png";
const nourriture = "image/nourriture.png";


menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  hiddenMenuList.classList.toggle("active");
});


//   visiblité de la barre    


        navigationPage.classList.remove('invisible');

        navigationPage.addEventListener('mouseover', () => {
          navigationPage.classList.remove('invisible');
        });
        navigationPage.addEventListener('mouseout', () => {
          navigationPage.classList.add('invisible');
        });
        
       
          
            // navigationPage.style.position = 'fixed';
          
        
      

// event pour les 2 boutons
const firstButton = document.querySelector('.premierBouton');
const secondButton = document.querySelector('.deuxiemeBouton');

firstButton.addEventListener('click',(event) => {
  event.preventDefault();
  window.location.href = 'sport.html';
});

secondButton.addEventListener('click',(event) => {
  event.preventDefault();
  window.location.href = 'recettes.html';
});

//image click 


 const windowWidth = window.innerWidth;
  if (windowWidth < 499) {
    const imageSport = document.getElementById('sport').querySelector('img');
    const imageNourriture = document.getElementById('nourriture').querySelector('img');
    navigationPage.classList.add('invisible');
imageSport.addEventListener('click',(event) => {
  event.preventDefault();
  window.location.href='sport.html';
})
imageNourriture.addEventListener('click',(event) => {
  event.preventDefault();
  window.location.href='recettes.html';
})}

