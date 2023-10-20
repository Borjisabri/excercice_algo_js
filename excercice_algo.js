// exercice 1
/** console.log('Bonjour') */

//exercice 2 sabri
/**const prenom="jean";
console.log('bonjour ',prenom);*/

//excercice 3 omar 
/**const prenom="jean";
const age = 3000;
//new comment 
//excercice 15
/**const x=16;
const y=2;
console.log(x*y);*/

//excercice 8
/**var a,b,x;
a=4;
b=6;
console.log("avant a =",a,"b =",b);
x=a;
a=b;
b=x;
console.log("apres a =",a,"b =",b);*/

//excercice 10
/**
 * c=13
 * b=13
 * a=13
 */

//excercice 11
/**
 * a=3
 * b=3
 */

//excerice 12
/**
 * a=9+3=12
 * b=9+12=21
 * c=9+9=18
 * b=18+12=30
 *
 */
/*** STRUCTURE CONDITIONNELLE ET STRUCTURE ALTERNATIVE */

//excercice 1
/**const x=-9;
if (x==0) {
    console.log("le nombre est égale 0")
}
else{
    console.log("le nombre est deffirent de 0")
    if (x>0) {
        console.log("le nombre est supérieur a 0")
    }
    if (x<0) {
        console.log("le nombre est inférieur a 0")
    }
    if (x>=0) {
        console.log("le nombre est supérieur ou égale 0")
    }
    if (x<=0) {
        console.log("le nombre est inférieur ou égale 0")
    }



}*/

//excercice 4
/**const genre="fille";
if (genre=="garcon") {
    console.log('Je suis un garçon')
}
else{
    console.log(`je suis une fille`)
}*/

//excercice 5
/**const tem=-5; 
if (tem<=0) {
    console.log("Etat solide")
}
else if ((tem>=0)&&(tem<=100)) {
    console.log("Etat liquide")
}
else{
    console.log("Etat gazeux")
}*/

//excercice 6
/**const a = 6;
const b = 17;
if (a==b) {
    console.log('Les nombres sont egeaux')
}
else{
    console.log('Les deux nombres sont différents');
    console.log('la différence est :',Math.abs(a-b));
}*/

//excercice 8
/**const jour= "vendredi";
const heure= 13;
if (!((jour=='dimanche')||(heure<8)||(heure>19))) {
    console.log("Les magasins sont ouverts")
}*/

//excercice 11
/**const heure = 7;
const minute = 8;
const seconde = 9;
if ((heure>9)||(minute+1>9)||(seconde+1>9)) {

    console.log(heure+"h",minute+1,'et',seconde+1,"secondes")
}
else{
    console.log('0'+heure+':0'+minute+':0'+seconde)
}*/

//excercice 13
/**let x, somme;
const n = 2;
x = n;
somme = 0;
if (n >= 10) {
  x = x - 10;
  somme = somme + 10 * 0.1;
  if (x >= 20) {
    x = x - 20;
    somme = somme + 20 * 0.09;
    if (x != 0) {
      somme = somme + x * 0.08;
    }
  } else {
    somme = somme + x * 0.09;
  }
} else {
  somme = somme + n * 0.1;
}
console.log("la somme est :", somme);*/

//excercice 14
// unction checkDate(annee,jour,mois) {
//     if (((jour>0)&&(jour<32))&&((mois>0)&&(mois<13))&&(annee>0 && annee.toString().length===4)) {
//         return true
//     }
//     return false
// }
// const annee = 144;
// const mois = 3;
// const jour = 31;
// const isBisextille=(annee%4==0)&&(annee%100!=0)||(annee % 400 == 0);
// if (checkDate(annee,jour,mois)===false) {
//     console.log("La date est incorrecte");
// } else if (((mois==2)&&(isBisextille)&&(jour>29))||((mois==2)&&(!isBisextille)&&(jour>28))) {
//     console.log("La date est incorrecte");
// } else if ((mois==4)||(mois==6)||(mois==9)||(mois==11)&&(jour>30)) {
//     console.log("La date est incorrecte");
// } else {
//     console.log("La date est valide");
// }

//STRUCTURE ITÉRATIVE
// Tableau
// Excercice 4
const numArray = [5, 10, 13, 4, 5];
//const emptyArray = [...numArray];
const emptyArray = [];

//const newNumArray = numArray.map((w) => emptyArray.push(w));
// for (let i = 0; i < numArray.length; i++) {
//     emptyArray.push(numArray[i])

// }

// for (let i = 0; i < numArray.length /2; i++) {
//   let x = numArray[i];
//   emptyArray[i] = numArray[numArray.length - 1 - i];
//   emptyArray[numArray.length - 1 - i] = x;
// }
// console.log(emptyArray);

