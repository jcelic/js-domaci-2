// 1.	Izračunaj sumu svih parnih brojeva nekog proizvoljnog niza od minimalno 10 članova.

const numbers = [1, 2, 4, 7, 13, 16, 34, 57, 63, 89, 124];

function addEvenNums(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }

  return sum;
}

const sum = addEvenNums(numbers);
console.log(sum); // 180




// 2.	Pronađi najmanji i najveći član niza i zbroji te brojeve, pa ako je zbroj manji od 10, ispiši "Zbroj je jednoznamenkast", a ako je veći od 10, ispiši taj broj

const numbers = [1, 63, 89, 4, 7, 124, 16, 34, 57, 2, 13];

function min(array) {
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }

  return min;
}

console.log(min(numbers)); // 1



function max(array) {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  return max;
}

console.log(max(numbers)); // 124


function minMaxSum(array) {
  return min(array) + max(array);
}

const sum = minMaxSum(numbers);

const test = sum < 10 ? 'Broj je jednoznamenkast' : sum;

console.log(test); // 125








// 3.	Iz niza stringova unijetih preko konzole, izbaci sve što nije voće

// const array = ['jabuka', 'hello', 'naranca', 'world', 'banana', 'javscript', 'kruska', 'lorem', 'ipsum', 'jagoda']; // test
const array = process.argv.slice(2);
const fruitsArray = [];

// function isFruit(fruit) {
//   if (fruit === 'jabuka' || fruit === 'naranca' || fruit === 'banana' || fruit === 'kruska' || fruit === 'jagoda') {
//     return true;
//   }
// }

// function isFruit(fruit) {
//   return (
//     fruit === "jabuka" ||
//     fruit === "naranca" ||
//     fruit === "banana" ||
//     fruit === "kruska" ||
//     fruit === "jagoda"
//   );
// }

function isFruit(fruit) {
  const filter = ['jabuka', 'naranca', 'banana', 'kruska', 'jagoda'];

  return filter.includes(fruit);
}


for (let i = 0; i < array.length; i++) {
  if (isFruit(array[i])) {
    fruitsArray.push(array[i]);
  }
}

console.log(fruitsArray);







// 4.	Napravi niz proizvoljnih podataka, pa iz tog niza izbaci sve članove koji nisu broj, te od tog dobijenog niza napravi novi niz koji je obrnutog redoslijeda

// KORISTECI 2 PETLJE
const array = [1, 5, 'hello', 34, 'world', 397, false, 'lorem', 24, true, 18, 'ipsum'];
const numbersArray = [];
const reversedArray = [];

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === 'number') {
    numbersArray.push(array[i]);
  }
}
console.log(numbersArray);


for (let i = numbersArray.length - 1; i >= 0; i--) {
  reversedArray.push(numbersArray[i]);
}
console.log(reversedArray);



// KORISTECI JEDNU PETLJU
const array = [1, 5, 'hello', 34, 'world', 397, false, 'lorem', 24, true, 18, 'ipsum'];
const newArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  if (typeof array[i] === 'number') {
    newArray.push(array[i]);
  }
}

console.log(newArray);








// 5.	Uz pomoć petlji, kreiraj ovakav ispis:
// 0123456789
// 012345678
// 01234567
// 0123456
// 012345
// 01234
// 0123
// 012
// 01
// 0



function createPattern(value) {
  let str = '';

  for (let i = 0; i <= value; i++) {
    str += i;
  }


  let i = str.length - 1;

  while (i >= 0) {
    console.log(str);
    i--;
    str = str.slice(0, -1);
  }
}

createPattern(9);