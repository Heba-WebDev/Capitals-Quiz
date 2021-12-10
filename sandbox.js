

let starter = document.querySelector('.starter');



let starterBtn = document.querySelector('.start');

let questionOne = document.querySelector('.question');



let country = document.querySelector('#country');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');


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

 country.innerHTML = `${countries.data[num]['name']}`
 
 
 
let answer = document.querySelectorAll('.answer');



 let ShuffledArray = newArr.sort(() => Math.random() - .5);

 for(let i = ShuffledArray.length; i > 0; i--) {
  one.innerHTML = `${ShuffledArray[0]}`;
  two.innerHTML = `${ShuffledArray[1]}`;
  three.innerHTML = `${ShuffledArray[2]}`;
  four.innerHTML = `${ShuffledArray[3]}`;
  
 }

 newArr.sort(() => Math.random() - .5)
  console.log(countries.data[num]);
}



getCountries();

let countriesBtn = document.querySelector('#countries');
countriesBtn.addEventListener('click', refreshList);

function refreshList(){
    setTimeout(() => {
     getCountries();
   }, 100);
  }
