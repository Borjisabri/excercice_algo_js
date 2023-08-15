//excercice 1
/**const array1 = [1, 2, 3, 4 , 5];
const array2 = [4, 5, 6];
const newArray=array1.concat(array2);
console.log('newArray : ',newArray);*/

//excercice 2
// function chechArray(vari) {
// //   if (Array.isArray(vari)) {
// //     return true
// //   }
// //   return false
// Array.isArray(vari)?console.log("c'est un tableau"):console.log("ce n'est pas un tableau",typeof vari)
// }
// const tab='ddd';
// chechArray(tab)

//excercice 3
// const arrayWithDuplicates = [1, 2, 2, 3, 1, 4, 4, 5];
// const array3=[6,7];
// const array=[...new Set(arrayWithDuplicates),array3];
// console.log(array);

//excercice 4
// const array1 = [9, 2, 18, 1, 0, 4, 5];
// const array2 = [4, 5, 6];
// const resultat = array1.concat(array2);
// const cleanArray = [...new Set(resultat)];
// console.log(cleanArray);
// console.log(cleanArray.sort((a,b)=>b-a));

//practice 1
// const tweet = "Excited for the #weekend! #FunTimesAhead #SaturdayVibes";
// const words = tweet.split(' ');
// console.log(words);
// const hachtag = words.filter((w)=>w.includes("Fun"))
// console.log(hachtag);

//practice 4
//const date="2023-08-10";
//const [year,month,day]=date.split('-');
// console.log(year,month,day);
// console.log(day+'/'+month+'/'+year);

// const datArray=date.split('-');
// const formatted_Date=datArray.reverse().join('/');
// console.log(formatted_Date);

//practice 5
// const numbers = [2, 4, 6, 8, 7];
// console.log(numbers.some(a => a%5==0));

//practice 6
// const numbers = [3, 2, 8, 4, 7];
// console.log(numbers.every(a => a>1));

//PRACTICE 7
// const bearArray = ["bear", "beard", "bearstudio", "bears"];

// const xx = (element, index) => element + index;
// const map = (myArrayParam, callback) => {
//   const tab = [];
//   for (let index = 0; index < myArrayParam.length; index++) {
//     const element = myArrayParam[index];
//     tab.push(callback(element, index));
//   }
//   return tab;
// };

// const newArray = map(bearArray, xx);
// const newArray2 = bearArray.map(xx);
// console.log(newArray );
// console.log(newArray2 );

// console.log(bearArray.some(a => a.includes('sabri')));
// let check=false;
// bearArray.forEach((a) => {
//   if (a.includes("sabri")) {
//     check=true
//     return;
//   }
// });
// console.log(check);

// function count() {}
// let countDown = 6;
// const count = () =>
//   if (countDown >= 0) {
//     console.log(countDown);
//     countDown--;
//   } else {
//     console.log("terminer");
//     clearInterval(interval);
//   }ww
// const interval = setInterval(count, 2000);

//practice 9

// const object={
// name: "sabri",
// age:"22",
// address:{
//     city:'cairo',
//     country : 'egypt',
// }
// }
// console.log(Object.keys(object).length);
// console.log(Object.entries(object));

