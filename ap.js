'use strict'

//Start of Game!
//First tell me who you are.
//Greet them

var greeting = alert('I\'d like to play a game');
var name = prompt('What is your name if you dare')
var antigreeting = alert('That was a mistake. Now the name ' + name + ' is on the internet FOREVER!');
var answerRight = 0;

// //Question 1

alert('Question 1');

var height = prompt('Based off my profile picture in class, am I 6 feet 6 inches tall??? Y/N').toUpperCase();

if (height === 'Y' || height ==='YES')  {
  alert('Yes! Very estute observation!');
  answerRight++;
} else if (height === 'N' || height === 'NO') {
  alert('LIES!!!');
} else  {
  alert('Yea I\'m going to need a yes or no there highspeed.');
}

// //Question 2

alert('Next Question!');

var birth = prompt('Was I born and raised in Seattle?? Y/N').toUpperCase();

if (birth === 'Y' || birth === 'YES') {
  alert('You know it! Magtown Mafia!');
  answerRight++;
} else if (birth === 'N' || birth === 'NO') {
  alert('Where\'d you think I\'m from? Timbuktu??');
} else  {
  alert('Yea I\'m going to need a yes or no there highspeed.');
}

// //Question 3

alert('On to the next question!');

var baseball = prompt('Was I so bad at baseball that I wasn\'t ranked in the state of washington in the top 25 among baseball athletes my senior year in high school? Y/N').toUpperCase();

console.log(baseball);

if (baseball === 'N' || baseball === 'NO') {
  alert('Damn straight! I threw fire back then!');
  answerRight++;
} else if (baseball === 'Y' || baseball === 'YES')  {
  alert('We can\'t be friends...');
} else  {
  alert('Yea I\'m going to need a yes or no there highspeed.');
}

// //Question 4

alert('Moving on!');

var deploy = prompt('Have I deployed to the Middle East twice? Y/N').toUpperCase();

if (deploy === 'Y' || deploy === 'YES')  {
  alert('You bet! All expense paid vacation by Uncle Sam!');
  answerRight++;
} else if (deploy === 'N' || deploy === 'NO')  {
  alert('If I didn\'t go? Then where was I???');
} else  {
  alert('Yea I\'m going to need a yes or no there highspeed.');
}

// //Question 5

alert('Lets go further!');

var dog = prompt('Do I own a dog the size of my foot? Y/N').toUpperCase();

if (dog === 'Y' || dog === 'YES') {
  alert('... and he will bite your toes off... literally he\'s a little demon.');
  answerRight++;
} else if (dog === 'N' || dog === 'NO') {
  alert('Well if you don\'t believe me, watch your feet. Don\'t step on him.');
} else  {
  alert('Yea I\'m going to need a yes or no there highspeed.');
}

//Message about how many correct

console.log(answerRight);

if (answerRight === 0) {
  alert('wow... you got none right...you clearly don\'t care to pay attention so we can\'t be friends! Good luck on the next two harder questions.');
} else if (answerRight === 1) {
  alert('Just 1 right??? Was that one right answer a guess? I guess good luck on the next 2 questions. Maybe you\'ll get lucky again.');
} else if (answerRight === 2) {
  alert('Only 2. Tisk Tisk... go to next hard questions.');
} else if (answerRight === 3) {
  alert('3 right answers isn\'t bad... Not at all good, but not bad. Good luck on the harder questions.');
} else if (answerRight === 4) {
  alert('Hey! 4 questions right! I\'ll take that. I know you can get through these next harder questions.');
} else if (answerRight === 5) {
  alert('You got a perfect score! Did we just become best friends!?!?');
}
alert('Alright! Time for some harder questions!');

//Question 6


var counter = 0;
var answer = 1;

while (counter <= 3)  {
  var question6 = prompt('How many times have I gone to the Space Needle? Only 4 tries!'); 
  
  while (question6 === '' || isNaN(question6)) {
    question6 = prompt('We are thinking of a number ya big dummy!');
  }
  
  if (question6 == answer) {
    alert('Wow, you have a keen attention to detail!');
    break;
}   else {
    alert('Wrong!');
    counter++    
}
  
}


alert('This question you probably won\'t get...');

//Question 7

var beer = ['blue moon', 'immortal ipa', 'pbr', 'stella', 'african amber'];
var counter = 0;

while (counter < 5) {
  var beerQuestion = prompt('I am a beer fan but can you guess one of my favorites? Careful only 6 guesses.');

  if (beerQuestion === beer[0] || beerQuestion === beer[1] || beerQuestion === beer[2] || beerQuestion === beer[3] || beerQuestion === beer[4] || beerQuestion === beer[5]) {
    alert('Good Job!');
    break;

  } else {
    counter++
    alert('Wrong!');
  }
}

alert('Hope you had fun!')

//end...

