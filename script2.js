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

function minMaxSum(array) {
  const newArray = array.sort((a, b) => {
    return a - b;
  })

  const sum = newArray[0] + newArray[newArray.length - 1];
  return sum < 10 ? 'Zbroj je jednoznamenkast' : `${sum}`;
}

console.log(minMaxSum(numbers)); // 125







// 3.	Iz niza stringova unijetih preko konzole, izbaci sve što nije voće

// const stringsArray = ['jabuka', 'hello', 'naranca', 'world', 'banana', 'javscript', 'kruska', 'lorem', 'ipsum', 'jagoda']; // test
const stringsArray = process.argv.slice(2);

function filterFruits(array) {
  const fruits = array.filter(fruit => {
    return (
      fruit === 'jabuka' ||
      fruit === 'naranca' ||
      fruit === 'banana' ||
      fruit === 'kruska' ||
      fruit === 'jagoda'
    );
  })

  return fruits;
}

console.log(filterFruits(stringsArray));








// 4.	Napravi niz proizvoljnih podataka, pa iz tog niza izbaci sve članove koji nisu broj, te od tog dobijenog niza napravi novi niz koji je obrnutog redoslijeda

const randomArray = [1, 5, 'hello', 34, 'world', 397, false, 'lorem', 24, true, 18, 'ipsum'];

function getReversedNums(array) {
  const numsArray = array.filter(num => {
    return typeof num === 'number';
  })

  return numsArray.reverse();
}

console.log(getReversedNums(randomArray));







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
