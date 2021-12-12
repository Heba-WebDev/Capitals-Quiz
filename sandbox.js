

let starter = document.querySelector('.starter');


let score = document.querySelector('.score');

let result = document.querySelector('.result');

let questionsCounter = 0;

let CorrectAnswer = '';

let group1 = document.querySelectorAll('.group1');
let group2 = document.querySelectorAll('.group2');
let group3 = document.querySelectorAll('.group3');
let group4 = document.querySelectorAll('.group4');
let group5 = document.querySelectorAll('.group5');



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



let answersArr = [];

async function getCountries() {
  let response = await fetch('https://countriesnow.space/api/v0.1/countries/capital');
  let countries = await response.json();

  let newArr = [];
  let num = Math.floor(Math.random()*(max - min) + min);
  
  let randomNum = Math.floor(Math.random()*(max1-min1) + min1);
  answersArr.push(countries.data[num]['capital'])
  CorrectAnswer += `${countries.data[num]['capital']}`;
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
  console.log(answersArr)
}


let nextBtn5 = document.querySelector('.next5');

nextBtn5.addEventListener('click', showResult);

function showResult() {
 
  questionFive.style.display = 'none';
  result.style.display = 'block';
  score.innerHTML = `${questionsCounter }`
  
}


let startagain = document.querySelector('.startagain');

startagain.addEventListener('click', startoverQ)


function startoverQ() {
  setTimeout(() => {
    getCountries();
  }, 100);
  result.style.display = 'none';
  starter.style.display = '';
  answersArr.length = 0;
  console.log(questionsCounter);
  group1.forEach((x) => {
    x.style.pointerEvents = '';
    x.classList.add('answer');
    x.classList.remove('correct');
    x.classList.remove('wrong');
  })

  group2.forEach((x) => {
    x.style.pointerEvents = '';
    x.classList.add('answer');
    x.classList.remove('correct');
    x.classList.remove('wrong');
  })

  group3.forEach((x) => {
    x.style.pointerEvents = '';
    x.classList.add('answer');
    x.classList.remove('correct');
    x.classList.remove('wrong');
  })

  group4.forEach((x) => {
    x.style.pointerEvents = '';
    x.classList.add('answer');
    x.classList.remove('correct');
    x.classList.remove('wrong');
  })

  group5.forEach((x) => {
    x.style.pointerEvents = '';
    x.classList.add('answer');
    x.classList.remove('correct');
    x.classList.remove('wrong');
  })
  questionsCounter = 0;
}


let firstAnswer = document.querySelector('#one');

firstAnswer.addEventListener('click', isitrigh);

function isitrigh() {

  if(answersArr.includes(firstAnswer.innerHTML)) {
    firstAnswer.classList.remove('answer');
    firstAnswer.classList.add('correct');
    questionsCounter++;
    console.log(answersArr)
    group1.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    firstAnswer.classList.remove('answer');
    firstAnswer.classList.add('wrong');
    group1.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}


let secondAnswer = document.querySelector('#two');

secondAnswer.addEventListener('click', rightTwo);

function rightTwo() {
  
  if(answersArr.includes(secondAnswer.innerHTML)) {
    secondAnswer.classList.remove('answer');
    secondAnswer.classList.add('correct');
    questionsCounter++;
    group1.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    secondAnswer.classList.remove('answer');
    secondAnswer.classList.add('wrong');
    group1.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}

let thirdAnswer = document.querySelector('#three');

thirdAnswer.addEventListener('click', rightThree);

function rightThree() {
  
  if(answersArr.includes(thirdAnswer.innerHTML)) {
    thirdAnswer.classList.remove('answer');
    thirdAnswer.classList.add('correct');
    questionsCounter++;
    console.log(answersArr)
    group1.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    thirdAnswer.classList.remove('answer');
    thirdAnswer.classList.add('wrong');
    group1.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}

let fourthAnswer = document.querySelector('#four');

fourthAnswer.addEventListener('click', rightFour);

function rightFour() {
  
  if(answersArr.includes(fourthAnswer.innerHTML)) {
    fourthAnswer.classList.remove('answer');
    fourthAnswer.classList.add('correct');
    questionsCounter++;
    group1.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    fourthAnswer.classList.remove('answer');
    fourthAnswer.classList.add('wrong');
    group1.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}



let fiveAnswer = document.querySelector('#five');

fiveAnswer.addEventListener('click', fiveCorrect);

function fiveCorrect() {
  if(answersArr.includes(fiveAnswer.innerHTML)) {
    fiveAnswer.classList.remove('answer');
    fiveAnswer.classList.add('correct');
    questionsCounter++;
    group2.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    fiveAnswer.classList.remove('answer');
    fiveAnswer.classList.add('wrong');
    group2.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}


let sixAnswer = document.querySelector('#six');

sixAnswer.addEventListener('click', sixCorrect);

function sixCorrect() {
  if(answersArr.includes(sixAnswer.innerHTML)) {
    sixAnswer.classList.remove('answer');
    sixAnswer.classList.add('correct');
    questionsCounter++;
    group2.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    sixAnswer.classList.remove('answer');
    sixAnswer.classList.add('wrong');
    group2.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}



let seventhAnswer = document.querySelector('#seven');

seventhAnswer.addEventListener('click', rightSeven);

function rightSeven() {
  
  if(answersArr.includes(seventhAnswer.innerHTML)) {
    seventhAnswer.classList.remove('answer');
    seventhAnswer.classList.add('correct');
    questionsCounter++;
    group2.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    seventhAnswer.classList.remove('answer');
    seventhAnswer.classList.add('wrong');
    group2.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}


let eigthAnswer = document.querySelector('#eight');

eigthAnswer.addEventListener('click', rightEight);

function rightEight() {
  
  if(answersArr.includes(eigthAnswer.innerHTML)) {
    eigthAnswer.classList.remove('answer');
    eigthAnswer.classList.add('correct');
    questionsCounter++;
    group2.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    eigthAnswer.classList.remove('answer');
    eigthAnswer.classList.add('wrong');
    group2.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}


let nineAnswer = document.querySelector('#nine');

nineAnswer.addEventListener('click', rightNine);

function rightNine() {
  
  if(answersArr.includes(nineAnswer.innerHTML)) {
    nineAnswer.classList.remove('answer');
    nineAnswer.classList.add('correct');
    questionsCounter++;
    group3.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    nineAnswer.classList.remove('answer');
    nineAnswer.classList.add('wrong');
    group3.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}




let tenAnswer = document.querySelector('#ten');

tenAnswer.addEventListener('click', rightTen);

function rightTen() {
  
  if(answersArr.includes(tenAnswer.innerHTML)) {
    tenAnswer.classList.remove('answer');
    tenAnswer.classList.add('correct');
    questionsCounter++;
    group3.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    tenAnswer.classList.remove('answer');
    tenAnswer.classList.add('wrong');
    group3.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}



let elevenAnswer = document.querySelector('#eleven');

elevenAnswer.addEventListener('click', rightEleven);

function rightEleven() {
  
  if(answersArr.includes(elevenAnswer.innerHTML)) {
    elevenAnswer.classList.remove('answer');
    elevenAnswer.classList.add('correct');
    questionsCounter++;
    group3.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    elevenAnswer.classList.remove('answer');
    elevenAnswer.classList.add('wrong');
    group3.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}


let twelveAnswer = document.querySelector('#twelve');

twelveAnswer.addEventListener('click', rightTwelve);

function rightTwelve() {
  
  if(answersArr.includes(twelveAnswer.innerHTML)) {
    twelveAnswer.classList.remove('answer');
    twelveAnswer.classList.add('correct');
    questionsCounter++;
    group3.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    twelveAnswer.classList.remove('answer');
    twelveAnswer.classList.add('wrong');
    group3.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}




 

let thirteenAnswer = document.querySelector('#thirteen');

thirteenAnswer.addEventListener('click', rightThirteen);

function rightThirteen() {
  
  if(answersArr.includes(thirteenAnswer.innerHTML)) {
    thirteenAnswer.classList.remove('answer');
    thirteenAnswer.classList.add('correct');
    questionsCounter++;
    group4.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    thirteenAnswer.classList.remove('answer');
    thirteenAnswer.classList.add('wrong');
    group4.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}





let fourteenAnswer = document.querySelector('#fourteen');

fourteenAnswer.addEventListener('click', rightFourteen);

function rightFourteen() {
  
  if(answersArr.includes(fourteenAnswer.innerHTML)) {
    fourteenAnswer.classList.remove('answer');
    fourteenAnswer.classList.add('correct');
    questionsCounter++;
    group4.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    fourteenAnswer.classList.remove('answer');
    fourteenAnswer.classList.add('wrong');
    group4.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}




let fifteenAnswer = document.querySelector('#fifteen');

fifteenAnswer.addEventListener('click', rightFifteen);

function rightFifteen() {
  
  if(answersArr.includes(fifteenAnswer.innerHTML)) {
    fifteenAnswer.classList.remove('answer');
    fifteenAnswer.classList.add('correct');
    questionsCounter++;
    group4.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    fifteenAnswer.classList.remove('answer');
    fifteenAnswer.classList.add('wrong');
    group4.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}





let sixteenAnswer = document.querySelector('#sixteen');

sixteenAnswer.addEventListener('click', rightSixteen);

function rightSixteen() {
  
  if(answersArr.includes(sixteenAnswer.innerHTML)) {
    sixteenAnswer.classList.remove('answer');
    sixteenAnswer.classList.add('correct');
    questionsCounter++;
    group4.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    sixteenAnswer.classList.remove('answer');
    sixteenAnswer.classList.add('wrong');
    group4.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}




let seventeenAnswer = document.querySelector('#seventeen');

seventeenAnswer.addEventListener('click', rightSeventeen);

function rightSeventeen() {
  
  if(answersArr.includes(seventeenAnswer.innerHTML)) {
    seventeenAnswer.classList.remove('answer');
    seventeenAnswer.classList.add('correct');
    questionsCounter++;
    group5.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    seventeenAnswer.classList.remove('answer');
    seventeenAnswer.classList.add('wrong');
    group5.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}



let eighteenAnswer = document.querySelector('#eighteen');

eighteenAnswer.addEventListener('click', rightEighteen);

function rightEighteen() {
  
  if(answersArr.includes(eighteenAnswer.innerHTML)) {
    eighteenAnswer.classList.remove('answer');
    eighteenAnswer.classList.add('correct');
    questionsCounter++;
    group5.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    eighteenAnswer.classList.remove('answer');
    eighteenAnswer.classList.add('wrong');
    group5.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}



let nineteenAnswer = document.querySelector('#nineteen');

nineteenAnswer.addEventListener('click', rightNineteen);

function rightNineteen() {
  
  if(answersArr.includes(nineteenAnswer.innerHTML)) {
    nineteenAnswer.classList.remove('answer');
    nineteenAnswer.classList.add('correct');
    questionsCounter++;
    group5.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    nineteenAnswer.classList.remove('answer');
    nineteenAnswer.classList.add('wrong');
    group5.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}


let twentyAnswer = document.querySelector('#twenty');

twentyAnswer.addEventListener('click', rightTwenty);

function rightTwenty() {
  
  if(answersArr.includes(twentyAnswer.innerHTML)) {
    twentyAnswer.classList.remove('answer');
    twentyAnswer.classList.add('correct');
    questionsCounter++;
    group5.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  } else {
    twentyAnswer.classList.remove('answer');
    twentyAnswer.classList.add('wrong');
    group5.forEach((x) => {
      x.style.pointerEvents = 'none';
    })
  }
}





