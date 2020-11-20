'use strict';

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const isDigit = (str) => {
  if (str.length === 1 && digits.includes(str)) {
    return true;
  } else {
    return false;
  }
};

const formElm = document.querySelector('form');
const message = document.getElementById('message');
// komponenta, která vytvoří div pro každé číslo:
const Digit = (props) => {
  return `<div class=${props.digit ? 'true' : 'false'}>${props.char}</div>`;
};
const digitElm = document.querySelector('#digits');
// funkce, která zjistí správný zápis r.čísla a zobrazí ho an stránce:
const checkBirthID = () => {
  const birthnumber = document.getElementById('birthnumber').value;
  const arrayBirthNum = Array.from(birthnumber); // převádím řetězec čísel na pole
  const objectsBirthNum = arrayBirthNum.map((num) => {
    return { char: num, digit: isDigit(num) };
  }); // vytvářím objekt pro každou cifru v poli
  console.log(objectsBirthNum);

  digitElm.innerHTML = '';
  for (let i = 0; i < objectsBirthNum.length; i++) {
    digitElm.innerHTML += Digit(objectsBirthNum[i]);
  } // cyklus pro zobrazení komponent v divu
  // podmínky pro správný zápis r.čísla:
  if (
    birthnumber.length === 10 &&
    Number.isInteger(Number(birthnumber)) &&
    Number(birthnumber) % 11 === 0
  ) {
    console.log('Kontrola proběhla v pořádku');
    message.textContent = 'V pořádku';
    return true;
  } else {
    const arrayNaN = arrayBirthNum.filter((num) => {
      return !isDigit(num); // vyfiltruju pole znaků, která nejsou čísla
    });
    return arrayNaN.length === 0
      ? (message.textContent = 'Číslo je krátké')
      : (message.textContent = 'V rodném čísle jsou nepovolené znaky');
  }
};
formElm.addEventListener('submit', checkBirthID);
formElm.addEventListener('submit', (event) => {
  event.preventDefault();
});

// const isLength9 = () => {
//   const birthNumber = document.getElementById('birthnumber').value;
//   if (birthNumber.includes())
// }
//      1.
// const birthNumber = prompt('Zadejte rodné číslo');
// if (birthNumber.length !== 10) {
//   alert('Zadané číslo není platné');
// }
// if (!Number.isInteger(Number(birthNumber))) {
//   alert('Zadaný vstup není číslo!');
// }
// if (Number(birthNumber) % 11 !== 0) {
//   alert('Číslo musí být dělitelné 11!');
// }
//      2.

// const checkBirthID = (birthnumber) => {
//   const arrayBirthNum = Array.from(birthnumber);
//   const objectsBirthNum = arrayBirthNum.map((num) => {
//     return { char: num, digit: isDigit(num) };
//   });
//   console.log(objectsBirthNum);
//   if (
//     birthnumber.length === 10 &&
//     Number.isInteger(Number(birthnumber)) &&
//     Number(birthnumber) % 11 === 0
//   ) {
//     console.log('Kontrola proběhla v pořádku');
//     return true;
//   } else {
//     const arrayNaN = arrayBirthNum.filter((num) => {
//       return !isDigit(num);
//     });
//     return arrayNaN;
//   }
// };
//      3.

// const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// const isDigit = (str) => {
//   if (str.length === 1 && digits.includes(str)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// for (let i = 0; i < birthnumber.length; i++) {
//   if (isDigit(birthnumber[i]) === false) {
//     console.log(`Chybný znak: ${birthnumber[i]}`);
//   }
// }

//      4. Kontrola pomocí filtru
// const controlFilter = (birthnumber) => {
//   const arrayBirthNum = Array.from(birthnumber);
//   return arrayBirthNum.filter((num) => {
//     !isDigit(num);
//   });
// };

//      5. Mapování

//      6. Vstup pomocí formuláře
