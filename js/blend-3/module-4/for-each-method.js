'use strict'
/*
 * forEach() замість циклів for і for...of для масивів
 */

// const numbers = [1, 2, 3, 4, 5];

// console.log(summ(numbers));

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// function logItems(items) {
//     console.log(items);

//     for (let i = 0; i < items.length; i += 1) {
//         console.log(`${i + 1} - ${items[i]}`);
//     }
// }
/************** Changed ************/
// const logItems = items => {
//     console.log(items);
//     items.forEach((item, i) => {
//         console.log(`${i + 1} - ${item}`)
//     });
// }
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// function printContactsInfo({ names, phones } = {}) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');

//     for (let i = 0; i < nameList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }
/************** Changed ************/
// const printContactsInfo = ({ names, phones } = {}) => {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     nameList.forEach((name, i) => console.log(`${name}: ${phoneList[i]}`))
// }
//     printContactsInfo({
//         names: 'Jacob,William,Solomon,Artemis',
//         phones: '89001234567,89001112233,890055566377,890055566300',
//     });


/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// function calсulateAverage(...args) {
//     let total = 0;

//     for (let i = 0; i < args.length; i += 1) {
//         total += args[i] / args.length;
//     }
//     return total;
// }
/************** Changed ************/
// const calсulateAverage = (...args) => {
//     let total = 0;
//     args.forEach(arg => {
//         total += arg / args.length;
//     })
//     return total;
// }
/************** Changed2 ************/
// const calсulateAverage = (...args) => args.reduce((acc, arg) => acc += arg / args.length ,0)



// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2/
