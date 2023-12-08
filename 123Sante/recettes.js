
const meet = document.getElementById("meet");
const salad = document.getElementById("salad");
const fish = document.getElementById("fish");
const avocado = document.getElementById("avocado");
const block1 = document.querySelector(".block-photo1");
const block2 = document.querySelector(".block-photo2");

meet.addEventListener("click", function () {
    block1.src = "photoDishes/dish1chicken.jpg";
    block1h1.innerText = "Poulet rôti simple"
    block1ingredient.innerText = "Ingrédients: huile végétale, 1 poulet"
    block1recette.innerText = "Préchauffer le four à 190°. Prendre le poulet et le 'masser' avec de l'huile, partout, même sous les ailes. Laisser la bride.  Le poser dans un plat et le mettre au four pendant 1 h 30 (ou 2 h si c'est un bio).  Important : ne pas le piquer avec une fourchette ou un couteau, ne pas le retourner, ne plus le toucher, une fois enfourné !  Il cuit dans sa peau, comme dans un film étirable sous-vide (ne pas percer la peau)."
    block2.src = "photoDishes/dish2steak.jpg";
    block2h1.innerText = "Une entrecôte à damner un saint";
    block2ingredient.innerText = "Ingrédients: 0.5 bouquet de persil frisé, 1 entrecôte pour 2 (boucher), gros sel"
    block2recette.innerText = "Étaler une bonne pincée de gros sel de chaque côté de l'entrecôte et laisser reposer sur une assiette pendant une quinzaine de minutes. Pendant ce temps, laver et hacher le persil. En prendre la moitié et étaler sur la pièce de viande. Poêler 5 à 10 mn selon le goût. Parsemer du reste de persil et laisser tiédir 3 mn. Servir avec un taboulé (fait avec l'autre moitié du bouquet de persil)."
})

salad.addEventListener("click", function () {
    block1.src = "photoDishes/dish1greensalad.jpg";
    block1h1.innerText = "Salade César"
    block1ingredient.innerText = "Ingrédients: 2 cuillères à soupe d'huile, 2 coeurs de laitue effeuillé, 25 g de Parmesan (copeaux), 4 tranches de pain écroûtées. Pour la sauce: sel, poivre"
    block1recette.innerText = "Faites dorer le pain, coupé en cubes, 3 min dans un peu d'huile. Déchirez les feuilles de romaine dans un saladier, et ajoutez les croûtons préalablement épongés dans du papier absorbant. Préparez la sauce : Faites cuire l'oeuf 1 min 30 dans l'eau bouillante, et rafraîchissez-le. Cassez-le dans le bol d'un mixeur et mixez, avec tous les autres ingrédients; rectifiez l'assaisonnement et incorporez à la salade. Décorez de copeaux de parmesan, et servez."
    block2.src = "photoDishes/dish2greeksalad.jpg";
    block2h1.innerText = "Salade melon, feta, jambon";
    block2ingredient.innerText = "Ingrédients: sel, poivre du moulin, 1 cuillère à café de thym, 4 cuillères à soupe d' huile d'olive, 1 melon moyen, 1 coeur de salade (feuille de chêne), 200 g de feta, 4 tranches de jambon cru, 4 cuillères à soupe de jus de citron, 2 cuillères à soupe d'eau pour une sauce allégée"
    block2recette.innerText = "Eplucher le melon, et couper la chair en petits cubes. Couper les tranches de jambon cru en fines lanières. Couper la feta en cubes. Pour la sauce : verser le jus de citron dans un bol, saler, poivrer (allonger d'eau si désiré); bien mélanger. Ajouter l'huile d'olive, mélanger énergiquement, afin d'obtenir une belle émulsion et incorporer le thym. Mettre la salade, le melon, le jambon, la feta et la sauce dans un saladier, et remuer juste avant de servir."
})

fish.addEventListener("click", function () {
    block1.src = "photoDishes/dish1hareng.jpg";
    block1h1.innerText = "Harengs marinés"
    block1ingredient.innerText = "Ingrédients: sel fin, 20 grains de coriandre, 20 grains de poivre, 1 feuille de laurier, 10 brins de persil, 3 oignons, 2 carottes, 50 cl de vinaigre de vin blanc, 12 harengs"
    block1recette.innerText = "Etêtez les harengs, videz-les, grattez-les et sortez-en les laitances. Disposez-les dans une terrine puis salez-les légèrement. Versez les laitances en surface. Couvrez et laissez reposer au frais 12 heures. Mettez le vinaigre à bouillir pendant 8 à 10 minutes avec 2 oignons et les carottes coupés en rondelles, le persil, le laurier, le poivre et la coriandre. Laissez refroidir. Epongez les poissons, leurs laitances aussi. Rincez la terrine.  Remettez les poissons dans la terrine et arrosez de la marinade. Ajoutez de l'eau bouillie si nécessaire afin que les harengs et les laitances soient bien recouverts de liquide. Couvrez et mettez au frais pendant 5 jours. Moulinez à la moulinette sur grille fine. Ajoutez-les à la marinade filtrée. Désarêtez les poissons en taillant une ouverture dans le dos. Replacez-les dans la terrine en alternant avec des couches de rondelles d'oignon. Versez la marinade devenue blanche et crémeuse."
    block2.src = "photoDishes/dish2salmon.jpg";
    block2h1.innerText = "Pavés de saumon au four facile";
    block2ingredient.innerText = "Ingrédients: sel, poivre, huile d'olive, 5 oignons grelots avec le vert, 2 pavés de saumon, 1 citron jaune, 1 verre de vin blanc, câpres (facultatif)"
    block2recette.innerText = "Mettre les pavés de saumon dans un plat allant au four. Couper un citron en 2 et le presser sur les pavés. Couper le demi-citron restant en rondelles et les déposer directement sur le saumon. Ciseler les petits oignons ainsi que le 'vert' puis les mettre sur les pavés. Ecraser les câpres et les poser sur le saumon (facultatif). Verser le vin blanc et un filet d'huile d'olive sur les saumons, saler (très peu), poivrer et faire cuire à 180°, thermostat 6, pendant environ 25 min."
})

avocado.addEventListener("click", function () {
    block1.src = "photoDishes/dish1avocat.jpg";
    block1h1.innerText = "Tartare tomates et avocats"
    block1ingredient.innerText = "Ingrédients: vinaigre balsamique, huile d'olive, 6 tomates rondes, 2 avocats, 3 cuillères à soupe de pignons de pin, 1 oignon blanc, Parmesan, 0.5 citron"
    block1recette.innerText = "Dénoyauter et peler les deux avocats, puis les découper en tout petits cubes. Mélanger les cubes avec le jus du citron, dans un saladier. Plonger les tomates 30 secondes dans l'eau bouillante, puis les peler et les couper en petits cubes, Placer ces cubes dans une passoire avec du sel pendant 15 min, pour que la tomate dégorge. Mélanger les cubes d'avocat, de tomates, les pignons et un oignon frais coupé fin dans un saladier. Assaisonner avec l'huile d'olive (3 cuillères) et le vinaigre (1 cuillère). Répartit le mélange dans quatre verres de type verres à whisky, que l'on laisse une heure au réfrigérateur. Démouler les quatre verres dans de petites assiettes. Découper des lamelles de parmesan et les disposer sur les quatre tartares, en finissant avec un filet de pistou autour des dômes."
    block2.src = "photoDishes/dish2avocat.jpg";
    block2h1.innerText = "Guacamole avocat/tomate";
    block2ingredient.innerText = "Ingrédients: 1 piment, 2 cuillères à soupe de persil ou de coriandre fraîche hachée, 1 cuillère à café de cumin moulu, 2 cuillères à soupe d'huile d'olive, 1 cuillère à soupe d' oignon finement hachés, 2 tomates pelées et hachées, 1 gousse d' ail, 2 avocats mûrs, 1 jus de citron vert"
    block2recette.innerText = "Dans un saladier, placer la pulpe de tomate avec l'oignon et l'ail. Couper en deux les avocats, enlever le noyau et prélever la chair, l'écraser à l'aide d'une fourchette avant de l'incorporer au reste de la préparation. Ajouter les autres ingrédients, bien mélanger et assaisonner de sel poivre et piment selon les goûts. Servir immédiatement car les avocats noircissent à l'air libre."
})

/*const arrayRecipes = [
    {title:"Poulet rôti simple",
     ingredients:"Ingrédients: huile végétale, 1 poulet",
     preparation:"Préchauffer le four à 190°. Prendre le poulet et le masser avec de l'huile, partout, même sous les ailes. Laisser la bride.  Le poser dans un plat et le mettre au four pendant 1 h 30 (ou 2 h si c'est un bio).  Important : ne pas le piquer avec une fourchette ou un couteau, ne pas le retourner, ne plus le toucher, une fois enfourné !  Il cuit dans sa peau, comme dans un film étirable sous-vide (ne pas percer la peau).",
     imageUrl:"photoDishes/dish1chicken.jpg",
     type:"meat"
    },
    {title:"Une entrecôte à damner un saint",
    ingredients:"Ingrédients: 0.5 bouquet de persil frisé, 1 entrecôte pour 2 (boucher)",
    preparation:"Étaler une bonne pincée de gros sel de chaque côté de l'entrecôte et laisser reposer sur une assiette pendant une quinzaine de minutes. Pendant ce temps, laver et hacher le persil. En prendre la moitié et étaler sur la pièce de viande. Poêler 5 à 10 mn selon le goût. Parsemer du reste de persil et laisser tiédir 3 mn. Servir avec un taboulé (fait avec l'autre moitié du bouquet de persil).",
    imageUrl:"photoDishes/dish2steak.jpg",
    type:"meat"
    },
    {title:"Pavés de saumon au four facile",
    ingredients:"Ingrédients: sel, poivre, huile d'olive, 5 oignons grelots avec le vert, 2 pavés de saumon, 1 citron jaune, 1 verre de vin blanc, câpres (facultatif)",
    preparation:"Mettre les pavés de saumon dans un plat allant au four. Couper un citron en 2 et le presser sur les pavés. Couper le demi-citron restant en rondelles et les déposer directement sur le saumon. Ciseler les petits oignons ainsi que le vert puis les mettre sur les pavés. Ecraser les câpres et les poser sur le saumon (facultatif). Verser le vin blanc et un filet d'huile d'olive sur les saumons, saler (très peu), poivrer et faire cuire à 180°, thermostat 6, pendant environ 25 min.",
    imageUrl:"photoDishes/dish2salmon.jpg",
    type:"fish"
    },
    {title:"Harengs marinés",
     ingredients:"Ingrédients: sel fin, 20 grains de coriandre, 20 grains de poivre, 1 feuille de laurier, 10 brins de persil, 3 oignons, 2 carottes, 50 cl de vinaigre de vin blanc, 12 harengs",
     preparation:"Etêtez les harengs, videz-les, grattez-les et sortez-en les laitances. Disposez-les dans une terrine puis salez-les légèrement. Versez les laitances en surface. Couvrez et laissez reposer au frais 12 heures. Mettez le vinaigre à bouillir pendant 8 à 10 minutes avec 2 oignons et les carottes coupés en rondelles, le persil, le laurier, le poivre et la coriandre. Laissez refroidir. Epongez les poissons, leurs laitances aussi. Rincez la terrine.  Remettez les poissons dans la terrine et arrosez de la marinade. Ajoutez de l'eau bouillie si nécessaire afin que les harengs et les laitances soient bien recouverts de liquide. Couvrez et mettez au frais pendant 5 jours. Moulinez à la moulinette sur grille fine. Ajoutez-les à la marinade filtrée. Désarêtez les poissons en taillant une ouverture dans le dos. Replacez-les dans la terrine en alternant avec des couches de rondelles d'oignon. Versez la marinade devenue blanche et crémeuse.",
     imageUrl:"photoDishes/dish1hareng.jpg",
     type:"fish"
    },
    {title:"Tartare tomates et avocats",
     ingredients:"Ingrédients: vinaigre balsamique, huile d'olive, 6 tomates rondes, 2 avocats, 3 cuillères à soupe de pignons de pin, 1 oignon blanc, Parmesan, 0.5 citron",
     preparation:"Dénoyauter et peler les deux avocats, puis les découper en tout petits cubes. Mélanger les cubes avec le jus du citron, dans un saladier. Plonger les tomates 30 secondes dans l'eau bouillante, puis les peler et les couper en petits cubes, Placer ces cubes dans une passoire avec du sel pendant 15 min, pour que la tomate dégorge. Mélanger les cubes d'avocat, de tomates, les pignons et un oignon frais coupé fin dans un saladier. Assaisonner avec l'huile d'olive (3 cuillères) et le vinaigre (1 cuillère). Répartit le mélange dans quatre verres de type verres à whisky, que l'on laisse une heure au réfrigérateur. Démouler les quatre verres dans de petites assiettes. Découper des lamelles de parmesan et les disposer sur les quatre tartares, en finissant avec un filet de pistou autour des dômes.",
    imageUrl:"photoDishes/dish1avocat.jpg",
    type:"avocado"
    },
    {title:"Guacamole avocat/tomate",
    ingredients:"Ingrédients: 1 piment, 2 cuillères à soupe de persil ou de coriandre fraîche hachée, 1 cuillère à café de cumin moulu, 2 cuillères à soupe d' huile d'olive, 1 cuillère à soupe d' oignon finement hachés, 2 tomates pelées et hachées, 1 gousse d' ail, 2 avocats mûrs, 1 jus de citron vert", 
    preparation:"Dans un saladier, placer la pulpe de tomate avec l'oignon et l'ail. Couper en deux les avocats, enlever le noyau et prélever la chair, l'écraser à l'aide d'une fourchette avant de l'incorporer au reste de la préparation. Ajouter les autres ingrédients, bien mélanger et assaisonner de sel poivre et piment selon les goûts. Servir immédiatement car les avocats noircissent à l'air libre.",
    imageUrl:"photoDishes/dish2avocat.jpg",
    type:"avocado"
    },
    {title:"Salade melon, feta, jambon",
    ingredients:"Ingrédients: sel, poivre du moulin, 1 cuillère à café de thym, 4 cuillères à soupe d' huile d'olive, 1 melon moyen, 1 coeur de salade (feuille de chêne), 200 g de feta, 4 tranches de jambon cru, 4 cuillères à soupe de jus de citron, 2 cuillères à soupe d' eau pour une sauce allégée",
    preparation:"Eplucher le melon, et couper la chair en petits cubes. Couper les tranches de jambon cru en fines lanières. Couper la feta en cubes. Pour la sauce : verser le jus de citron dans un bol, saler, poivrer (allonger d'eau si désiré); bien mélanger. Ajouter l'huile d'olive, mélanger énergiquement, afin d'obtenir une belle émulsion et incorporer le thym. Mettre la salade, le melon, le jambon, la feta et la sauce dans un saladier, et remuer juste avant de servir.",
    imageUrl:"photoDishes/dish2greeksalad.jpg",
    type:"salad"
    },
    {title:"Salade César",
    ingredients:"Ingrédients: 2 cuillères à soupe d' huile, 2 coeurs de laitue effeuillé, 25 g de Parmesan (copeaux), 4 tranches de pain écroûtées, Pour la sauce: sel, poivre",
    preparation:"Faites dorer le pain, coupé en cubes, 3 min dans un peu d'huile. Déchirez les feuilles de romaine dans un saladier, et ajoutez les croûtons préalablement épongés dans du papier absorbant. Préparez la sauce : Faites cuire l'oeuf 1 min 30 dans l'eau bouillante, et rafraîchissez-le. Cassez-le dans le bol d'un mixeur et mixez, avec tous les autres ingrédients; rectifiez l'assaissonnement et incorporez à la salade. Décorez de copeaux de parmesan, et servez.",
    imageUrl:"photoDishes/dish1greensalad.jpg",
    type:"salad"
    },
];

const submitButtonMeat = document.querySelector("#meet");
submitButtonMeat.addEventListener("click", function(event) {
    changeReciepes("meat");
});

const submitButtonSalad = document.querySelector("#salad");
submitButtonSalad.addEventListener("click", function(event) {
    changeReciepes("salad");
});

const submitButtonFish = document.querySelector("#fish");
submitButtonFish.addEventListener("click", function(event) {
    changeReciepes("fish");
});

const submitButtonAvocado = document.querySelector("#avocado");
submitButtonAvocado.addEventListener("click", function(event) {
    changeReciepes("avocado");
});


function changeReciepes(type)
{
    isFirstTime = true;
    
    for (i = 0; i < arrayRecipes.length; i++) {
        if (arrayRecipes[i].type == type) {

            if (isFirstTime == true)
            {
                isFirstTime = false;

                h1 = document.querySelector(".block-item1-h1");
                p1 = document.querySelector(".block-item1-p1");
                p2 = document.querySelector(".block-item1-p2");
                image = document.querySelector(".block-photo1");
            }
            else // second time
            {
                h1 = document.querySelector(".block-item2-h1");
                p1 = document.querySelector(".block-item2-p1");
                p2 = document.querySelector(".block-item2-p2");
                image = document.querySelector(".block-photo2");
            }

            h1.innerHTML = arrayRecipes[i].title;
            p1.innerHTML = arrayRecipes[i].ingredients;
            p2.innerHTML = arrayRecipes[i].preparation;
            image.src = arrayRecipes[i].imageUrl;
        }
    }
} */




