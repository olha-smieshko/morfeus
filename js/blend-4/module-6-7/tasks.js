//TODO:====================01==========================
// Натискання на кновку "SHOW ME" має виводити значення з поля введення в alert
// const btnEl = document.querySelector('.js-alert-button');
// const inputEl = document.querySelector('.js-alert-input');
// // console.log(btnEl);
// // console.log(inputEl);
// btnEl.addEventListener('click', onBtnClick);
// function onBtnClick() {
//     if (!inputEl.value.trim()) {
//         console.log('empty')
//         return;
//     }
//     alert(inputEl.value.trim());
// }

//TODO:====================02==========================
// Після натискання на кнопку "SWAP ME" здійснюється обмін вмістом між двома інпутами. Можете натискати на неї кілька разів або вручну змінити вміст інпутів.
// const btnEl = document.querySelector('.js-swap-button');
// const inputLeftEl = document.querySelector('.js-left-swap-input');
// const inputRightEl = document.querySelector('.js-right-swap-input');
// btnEl.addEventListener('click', onBtnChange);
// function onBtnChange() {
//     const left = inputLeftEl.value.trim();
//     const right = inputRightEl.value.trim();
//     if (!left || !right) {
//         console.log('empty')
//         return;
//      }

//     console.log('left:', left, 'right:', right);
//     inputLeftEl.value = right;
//     inputRightEl.value = left;
// }
// function onBtnChange() {
//     const left = inputLeftEl.value.trim();
//     if (!left || !inputRightEl.value.trim()) {
//         console.log('empty')
//         return;
//      }

//      console.log('left:', left, 'right:', inputRightEl.value.trim());
//     inputLeftEl.value = inputRightEl.value.trim();
//     inputRightEl.value = left;
// }

//TODO:====================03==========================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на "Розкрити", у разі повторного натискання текст знову стає доступним і кнопка набуває початкового вигляду.
// const btnEl = document.querySelector('.js-password-button');
// const pasInputEl = document.querySelector('.js-password-input');
// btnEl.addEventListener('click', () => {
//     // console.log('empty')
//     if (pasInputEl.type === 'text') {
//         console.log(pasInputEl.type);
//         pasInputEl.type = 'password'
//         btnEl.textContent = 'Розкрити'
//         console.log(pasInputEl.type);
//         return;
//     }
//     pasInputEl.type = 'text'
//     btnEl.textContent = 'Приховати'
// })

//TODO:====================04==========================
//  Створіть HTML сторінку з табличкою,
//  яка містить список продуктів.Кожен рядок у
//  табличці повинен містити назву продукту та його ціну.
//  При натисканні на будь - який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
// const tableEl = document.querySelector('#productTable');
// const containerEl = document.querySelector('#productDetails');

// tableEl.addEventListener('click', (evt) => {
//   if (evt.target.nodeName !== "TD") {
//     return;
//   }

  // const row = evt.target.parentNode.cells;
  // const name = row[0].textContent;
  // const price = row[1].textContent;

  // console.log(`Ви вибрали ${name} за ціною  ${price}`);

//  })


//TODO:====================05==========================
// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey

// const containerEl = document.querySelector('.eventThumb');
// document.addEventListener('keydown', ({ code, key}) => {
  
//   const markup = `
//     <ul>
//       <li><b>${code}</b></li>
//       <li>${key}</li>
//     </ul>
//   `
//   containerEl.insertAdjacentHTML('afterbegin', markup);

// })


//TODO:====================06==========================
// Кнопка "Зменшити" робить квадрат меншим на 10 пікселів, кнопка "Збільшити" - робить більшим на 10 пікселів.

//TODO:====================07==========================
// Навісьте слухач за кліком на глобальний об'єкт window і визначте, коли клік відбувається всередині елемента з класом "place", виведіть в консоль повідомлення "Ви клікнули в цільовий елемент". Коли клік припадає поза зоною елемента, виведіть повідомлення "Це не цільовий елемент". Використайте метод contains.
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains

//TODO:====================08==========================
// По кліку на кнопку "Подвоїти" збільшити значення у кожному елементі списку в 2 рази

//TODO:====================09==========================
// При кліку на коло воно має слідувати за курсором. При повторному кліку воно стає в початкове положення.

// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
// https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY

//TODO:====================10==========================
// При кліці на кожну з кнопок підсумовуються значення з data-атрибутів. Після натискання на кнопку "Вивести результат" виводиться сума значення, а також статистика з інформацією про те, яка кнопка була натиснута скільки разів.

//TODO:====================11==========================
// Видаліть зі списку ті елементи, які позначені у чекбоксу.

//TODO:====================12==========================
// Дано список людей. Зроби можливість сортування списку за іменем і за прізвищем.

//TODO:====================13==========================
// Даний список людей. Зроби фільтр за ім'ям/прізвищем.

//TODO:====================14==========================
// Клік по кнопці замінює символ з першого поля введення на символ із другого поля введення в усьому тексті. Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.

//TODO:====================15==========================
// Коло має зникати під час наведення на нього.При цьому позиція сусідніх кіл повинна залишатися незмінною.
