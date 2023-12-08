/* Visual things */

const middleWrap = document.getElementById("middleWrap");
const CalcSection = document.getElementById("calculatorSection");
const trigger = document.getElementById("trigger");

const middleWrap_height = middleWrap.offsetHeight;
const trigger_height = trigger.offsetHeight;

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos >= middleWrap_height) {
    middleWrap.classList.add("active");
  } else {
    middleWrap.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos >= trigger_height) {
    CalcSection.classList.add("active");
  } else {
    CalcSection.classList.remove("active");
  }
});

/* Calculator */

const calculButton = document.getElementById("calcul");

calculButton.addEventListener("click", () => {
  const Tarifconv = document.getElementById("tarifC").value;
  const MontantDep = document.getElementById("mtnD").value;
  const tauxGMut = document.getElementById("tauxGMut").value;
  const resultFinal = document.getElementById("result");
  const TarifconvNunmber = parseFloat(Tarifconv);
  const MontantDepNunmber = parseFloat(MontantDep);
  if (document.getElementById("RG").checked) {
    const Regime = 0.3;
    const resultat1 = TarifconvNunmber * Regime;
    const resteACharge = resultat1 + MontantDepNunmber;
    const calculGarantie = Tarifconv * tauxGMut;
    const montantRemboursable = resultat1 + calculGarantie;

    if (resteACharge <= montantRemboursable) {
      resultFinal.value = `Vous serez remboursés ${resteACharge}€`;
    } else {
      resultFinal.value = `Vous serez remboursés ${montantRemboursable}€`;
    }
  } else if (document.getElementById("RL").checked) {
    const Regime = 0.1;
    const resultat1 = TarifconvNunmber * Regime;
    const resteACharge = resultat1 + MontantDepNunmber;
    const calculGarantie = Tarifconv * tauxGMut;
    const montantRemboursable = resultat1 + calculGarantie;
    if (resteACharge <= montantRemboursable) {
      resultFinal.value = `Vous serez remboursés ${resteACharge}€`;
    } else {
      resultFinal.value = `Vous serez remboursés ${montantRemboursable}€`;
    }
  }
});

// fenetre modal
const modalContainer = document.querySelector(".modal-container");
const modalTrigger = document.querySelectorAll(".modal-trigger");

modalTrigger.forEach((trigger) => {
  function handleClick() {
    toggleModal();
  }
  trigger.addEventListener("click", handleClick);
});

function toggleModal() {
  modalContainer.classList.toggle("active");
}

// select message

const titleElement = document.querySelector(".modal h1");
const pElement = document.querySelector(".modal p");

const title = [
  "",
  `Taux de remboursement de la <br> Sécurité sociale`,
  "Taux garantie mutuelle",
  "Tarif conventionel",
  "Dépassement d’honoraires",
];
const message = [
  // 0
  "",
  // 1
  `Comme pour tout affilié au régime général de la Sécurité sociale, l’Assurance maladie prend en charge une partie de vos frais médicaux. Le niveau de remboursement diffère selon la nature de l’acte médical ou du traitement (consultation, médicaments, analyses, appareillages, etc.).
  <br><br> 
  Ce qu’il reste à payer après l’intervention de l’Assurance Maladie se décompose de la façon suivante : <br><br>
Le montant du « ticket modérateur », soit la différence entre le tarif de référence et le remboursement de l’Assurance maladie ;<br><br>
L’éventuelle majoration du ticket modérateur si vous consultez un professionnel de santé hors parcours de soins coordonnés ; <br><br>
L’éventuel dépassement d'honoraires pratiqué par le professionnel de santé .`,
  // 2
  `La différence entre le tarif de convention et le remboursement de la Sécurité sociale s’appelle le ticket modérateur.<br> C’est donc la part des frais qui reste à votre charge. <br><br>
  Pour une consultation chez un médecin généraliste, le ticket modérateur s’élève à 7,50€. Pour ne pas payer le ticket modérateur, vous devez disposer d’une complémentaire santé. 
  Une mutuelle vient compléter le premier niveau de couverture de votre régime obligatoire.<br><br>
  Les remboursements de la mutuelle santé sont généralement indexés sur la base du tarif de convention de la Sécurité sociale. Ils sont exprimés en pourcentage. `,
  // 3
  `Les tarifs des frais de santé sont fixés par convention entre les professionnels de santé et l’Assurance maladie. Il s’agit du tarif de convention, ou base de remboursement.  <br><br>

  La Sécurité sociale a ainsi fixé : <br><br>
  
  - à 25€ la consultation d’un médecin généraliste, <br>
  - à 30€ la consultation d’un médecin spécialiste, <br>
  - à 46,70€ la consultation d’un psychiatre. `,
  // 4
  `Le dépassement d’honoraires, pour les professionnels de santé, consiste à appliquer des tarifs supérieurs aux tarifs conventionnés, établis par la Sécurité sociale et servant de référence pour la tarification des actes médicaux.<br><br>

  Les professionnels de santé, dont les médecins, qui appliquent cette convention sans surcoût sont « conventionnés secteur 1 ». Dans ce cas, la Sécurité sociale rembourse 70 % de l’intervention.<br><br>
  
  Les médecins conventionnés du secteur 2 et les médecins non conventionnés, en revanche, sont autorisés à pratiquer le dépassement d’honoraires et peuvent fixer les tarifs qu’ils souhaitent`,
];

function changeContent(classList) {
  const caseNumb = classList[1];
  const index = parseInt(caseNumb.replace("case", ""));
  titleElement.innerHTML = title[index];
  pElement.innerHTML = message[index];
}

for (let i = 1; i <= 24; i++) {
  let elements = document.getElementsByClassName("case" + i);

  Array.from(elements).forEach(function (element) {
    element.addEventListener("click", function () {
      changeContent(element.classList);
    });
  });
}
