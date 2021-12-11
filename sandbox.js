

let starter = document.querySelector('.starter');


let score = document.querySelector('.score');

let result = document.querySelector('.result');

let scoreCounter = 0;

let questionsCounter = 0;



let questionOne = document.querySelector('.question');
let questionTwo = document.querySelector('.questionTwo');
let questionThree = document.querySelector('.questionThree');
let questionfour = document.querySelector('.questionFour');
let questionFive = document.querySelector('.questionFive');



let country = document.querySelectorAll('#country');
let one = document.querySelectorAll('.one');
let two = document.querySelectorAll('.two');
let three = document.querySelectorAll('.three');
let four = document.querySelectorAll('.four');


let min1 = Math.ceil(0);
let max1 = Math.floor(62);
let min2 = Math.ceil(63);
let max2 = Math.floor(125);
let min3 = Math.ceil(126);
let max3 = Math.floor(187);
let min4 = Math.ceil(188);
let max4 = Math.floor(251);


let   min = Math.ceil(0);
let max = Math.floor(250);
let randomNum = Math.floor(Math.random()*(max - min) + min); 


async function getCountries() {
  let response = await fetch('https://countriesnow.space/api/v0.1/countries/capital');
  let countries = await response.json();

  let newArr = [];
  let num = Math.floor(Math.random()*(max - min) + min);
  
  let randomNum = Math.floor(Math.random()*(max1-min1) + min1);
  newArr.push(countries.data[num]['capital']);
  newArr.push(countries.data[Math.floor(Math.random()*(max2-min2) + min2)]['capital']);
  newArr.push(countries.data[Math.floor(Math.random()*(max3-min3) + min3)]['capital']);
  newArr.push(countries.data[Math.floor(Math.random()*(max4-min4) + min4)]['capital']);

 country.forEach((x) => {
  x.innerHTML = `${countries.data[num]['name']}`
 })
 
 
 
let answer = document.querySelectorAll('.answer');



 let ShuffledArray = newArr.sort(() => Math.random() - .5);

 for(let i = ShuffledArray.length; i > 0; i--) {
  
  one.forEach((x) => {
    x.innerHTML = `${ShuffledArray[0]}`;
  })
  two.forEach((x) => {
    x.innerHTML = `${ShuffledArray[1]}`;
  })
  three.forEach((x) => {
    x.innerHTML = `${ShuffledArray[2]}`;
  })
  four.forEach((x) => {
    x.innerHTML = `${ShuffledArray[3]}`;
  })
  
  
 }

 newArr.sort(() => Math.random() - .5)
  console.log(countries.data[num]);
}



getCountries();

let countriesBtn = document.querySelector('#countries');







let starterBtn = document.querySelector('.start');

starterBtn.addEventListener('click', showFirstQ);

function showFirstQ() {

  setTimeout(() => {
    getCountries();
  }, 100);

  starter.style.display = 'none';
  questionOne.style.display = 'block';
}

let nextBtn = document.querySelector('.next');


nextBtn.addEventListener('click', showSecondQ);

function showSecondQ() {
  setTimeout(() => {
    getCountries();
  }, 100);
  questionOne.style.display = 'none';
  questionTwo.style.display = 'block';
}

let nextBtn2 = document.querySelector('.next2');

nextBtn2.addEventListener('click', showSThirdQ);

function showSThirdQ() {
  setTimeout(() => {
    getCountries();
  }, 100);
  questionTwo.style.display = 'none';
  questionThree.style.display = 'block';
}

let nextBtn3 = document.querySelector('.next3');

nextBtn3.addEventListener('click', showFourthQ);

function showFourthQ() {
  setTimeout(() => {
    getCountries();
  }, 100);
  questionThree.style.display = 'none';
  questionfour.style.display = 'block';
}


let nextBtn4 = document.querySelector('.next4');

nextBtn4.addEventListener('click', showFiveQ);

function showFiveQ() {
  setTimeout(() => {
    getCountries();
  }, 100);
  questionfour.style.display = 'none';
  questionFive.style.display = 'block';
}


let nextBtn5 = document.querySelector('.next5');

nextBtn5.addEventListener('click', showResult);

function showResult() {
 
  questionFive.style.display = 'none';
  result.style.display = 'block';
}