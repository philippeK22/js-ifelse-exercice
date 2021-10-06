// exo1

// - ## Créez un tableau comprenant 9 prénoms, la variable doit se nommer "tabPrenoms"
// - ## Récuperez la longueur de ce tableau et stockez la dans une variable du nom de "tabLength" et affichez là en suite via un console.log()
// - ## Affichez dans la console chaque prénom précédé de "Bonjour " exemple
// - ## Bonjour Nicolas


let tabPrenoms = ["hilal","ayhan","gweny","john","wassim","george","philippe","heredia","hussein"];

let tabLength = tabPrenoms.length;
console.log(tabLength);

tabPrenoms.forEach(element => {
    // alert("bonjour ," + element);
    console.log("bonjour "+ element);
});
ou
console.log(`bonjour, ${tabPrenoms[0]}`);
console.log(`bonjour, ${tabPrenoms[1]}`);
console.log(`bonjour, ${tabPrenoms[2]}`);
console.log(`bonjour, ${tabPrenoms[3]}`);
console.log(`bonjour, ${tabPrenoms[4]}`);
console.log(`bonjour, ${tabPrenoms[5]}`);
console.log(`bonjour, ${tabPrenoms[6]}`);
console.log(`bonjour, ${tabPrenoms[7]}`);
console.log(`bonjour, ${tabPrenoms[8]}`);

// exo2

// - ## Créez une variable qui comprend un chiffre aléatoire entre 1 et 10
// - ## Posez la question a l'utilisateur, demandez lui d'entrer un chiffre entre 1 et 10
// - ## Si le nombre entré par l'utilisateur est différent du nombre aléatoire généré alors répétez la question
// - ## Sinon félicitez l'utilisateur d'avoir trouvé le bon nombre !


let random = Math.round(Math.random()* (10-1) +1);
let reponse = Number(prompt(" entrez un nombre entre 1 et 10 :"));

if (reponse = random) {
    reponse =  Number(prompt(" reponse incorrecte, entrez un nombre entre 1 et 10 :"));
    if (reponse = random) {
        reponse =  Number(prompt(" reponse incorrecte, entrez un nombre entre 1 et 10 :"));
        if (reponse = random) {
            reponse =  Number(prompt(" reponse incorrecte, entrez un nombre entre 1 et 10 :"));
            if (reponse = random) {
                alert(`ta rater 3x la reponse etait : ${random}`);
            }
            else{
                alert("reponse, correcte");
            }
            
        }
        
    }
    
}

// exo3

// - ## Créez un QCM avec 3 questions,les bonnes réponses seront stockées dans un tableau.
// - ## Astuce : 
// - ## - Il faudra faire une condition
// - ## - Il y aura 3 tableaux : 
// - ## - Un tableau avec les 3 questions
// - ## - Un tableau avec les 3 réponses
// - ## Un tableau avec les questions + les réponses aux quelles on à correctement répondu
// - ## Et plein d'autres choses bonne chance.


let tabQuestions = ["2 + 3 = ", "5 + 7 = ", "10 + 32 = "];
let tabReponses = ["5", "12", "42"];
let tabQuestRepo = [];
let reponse = Number(prompt(`${tabQuestions[0]} ?`));
if(reponse = tabReponses[0]);{
    reponse = Number(prompt(`${tabQuestions[0]}`));
    if (reponse = tabReponses[0]) {
        alert(`ta rater 3x, la reponse est ${tabReponses[0]}`);
        
    }
    else{
        alert('reponse, correcte');
        tabQuestRepo.push(`${tabQuestions[0]} ${reponse}`);
    }
   

}

// exo5if-else

let temps = prompt("quel temps fait il aujd ?").toLowerCase();

if (temps === "soleil") {
    console.log("Sortez en T-shirt");

}
else if (temps === "vent" ) {
    console.log("Sortez en Pull");
    
}
else if (temps === "pluie") {
    console.log("Mettez une veste");
    
}
else if (temps === "neige") {
    console.log("Reste chez toi, il fait froid");
    
}

else{
    console.log("erreur, non valide");
}












    

