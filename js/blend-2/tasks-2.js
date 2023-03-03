'use strict';
// ! Array
//TODO:=========task-1=================
//Повернути відсортовану копію масиву за зростанням
//не змінюючи вихідний масив
//не використовувати Array.prototype.sort()
// console.log ("Hello")
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// console.log('Копія масиву:', sortArr(numbers)); //  [2, 3, 5, 7, 12, 24, 35, 56, 80]
// console.log('Початковий масив:', numbers); // [2, 5, 35, 56, 12, 24, 7, 80, 3]
// const sortArr = (arr) => {
//   const newArr = [...arr];
//     for (let i = 0; i < newArr.length; i += 1) {
//     for (let j = 1; j < newArr.length; j += 1) {
//       if (newArr[j] > newArr[j + 1]) {
//         let temp = newArr[j];
//         newArr[j] = newArr[j + 1];
//         newArr[j + 1] = temp;
//       }
//     }
//   }
//   return newArr;
//   debugger
// }


/********SORT*********/

// ЗРОСТАННЯ

// const sortArr = (arr) => [...arr].sort((a, b) => a - b);
// СПАДАННЯ

// const sortArr = (arr) => [...arr].sort((a, b) => b - a);


// звичайна функція (((( declaration
// function sortArr(arr) {
//   return [...arr].sort((a, b) => a - b);
// }


// звичайна функція (((( expression
// const sortArr = function (arr) {
//   return [...arr].sort((a, b) => a - b);
// }


/********CONSOLE*********/
console.log('Копія масиву:', sortArr(numbers)); //  [2, 3, 5, 7, 12, 24, 35, 56, 80]
console.log('Початковий масив:', numbers); // [2, 5, 35, 56, 12, 24, 7, 80, 3]

 

//TODO:=========task-2=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// console.log(calculateAverage(10, 10, 20, 200)); // 60

//! Object
//TODO:=========task-3=================
// 4. Виправте помилки, щоб код працював
// const product = {
// ціна: 5000,
// showPrice() {
// console.log(price);
// },
//};
// product.showPrice();

//TODO:=========task-4=================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const obj = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',
// };

// console.log(getBool(obj, 'car')); // true

//TODO:=========task-5=================
const filmoteka = [
  {
    id: 1,
    title: 'Duna',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 10,
    actors: [
      'Amelia Gibson',
      'Cameron Clayton',
      'Viola Vasquez',
      'Lula Collins',
      'Victor Nichols',
    ],
    adult: false,
  },
  {
    id: 2,
    title: 'Venom',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 8,
    actors: [
      'Inez Greer',
      'Barry Curtis',
      'Blanche Rios',
      'Glen Perry',
      'Logan Powers',
    ],
    adult: true,
  },
  {
    id: 3,
    title: 'Luca',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 9,
    actors: [
      'Marguerite Gibbs',
      'Lora Alvarez',
      'Jorge Simpson',
      'Thomas Hall',
      'Darrell Hunter',
    ],
    adult: false,
  },
  {
    id: 4,
    title: 'Free Guy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 6,
    actors: [
      'Calvin Andrews',
      'Mamie Myers',
      'Madge Townsend',
      'Ralph Kim',
      'Jorge Reese',
    ],
    adult: true,
  },
  {
    id: 5,
    title: 'Saw',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 7,
    actors: [
      'Adele Marsh',
      'Melvin Burgess',
      'Jesus Reese',
      'Harriet Moreno',
      'Curtis Cox',
    ],
    adult: true,
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив із усіма назвами фільмів.

//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.

//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.

//? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмеження.

//TODO:=========task-6=================

// Напишіть функцію updateObject, яка приймає об'єкт та повертає
//  новий об'єкт без вказаного параметра. Очікуваний результат ({a: 1, b: 2}, 'b') => {a: 1}

// console.log(updateObject({ a: 1, b: 2 }, 'b'));
//https://coderoad.ru/208105/%D0%9A%D0%B0%D0%BA-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D0%B7-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-JavaScript

//TODO:=========task-7=================
// Напишіть функцію updateObject, яка приймає об'єкт та повертає
// новий об'єкт без зазначених параметрів
// Очікуваний результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a'));

//TODO:=========task-8=================
// Напишіть функцію, яка приймає як параметр об'єкт
// та формує об'єкти у новому масиві у форматі [key, value]
// https://question-it.com/questions/245501/kak-razbit-obekt-js-na-massiv-par-kljuch-znachenie

// const user = {
//   name: 'John',
//   surName: 'Stones',
//   age: 20,
//   hobby: 'tenis',
//   haveCar: true,
//   merried: false,
// };

//TODO:=========task-9=================

// У кожному масиві якщо унікальний рядок, у якому не повторюються літери. Знайдіть і виведіть цей рядок.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

// console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])); // === 'foo'
// console.log(findUniq(['fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf'])); // === 'abcd'
// console.log(findUniq(['qwe', 'camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac'])); // === 'qwe'
