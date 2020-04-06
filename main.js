/*********************************************************************************************************************************
*
* The comp generates 16 random numbers (forbidden numbers) in a range of 1-100.
* The users has to input 1 number at a time, in a range 1-100. A number can only be used once.
* If the number is equal to one of the forbidden numbers, the match ends. Otherwise the user will keep inserting numbers.
* The match ends when the user inserts a forbidden number, or the users uses up all the allowed numbers (100 - forbidden numbers).
* At the end of each and every match, the program will communicate to the users his score (The number of inputs).
*
* BONUS:
* Easy difficulty 0: Random numbers 1-100;
* Medium difficulty 1: Random numbers 1-80;
* Hard difficulty 2: Random numbers 1-50;
*
***********************************************************************************************************************************/

var forbiddenNumbers = [];
populateRandomly(1,100,forbiddenNumbers,16);
var fieldNumbers = [];
var userNumber;
var inGame = true;
var score = 0;

//Main logic
while (inGame) {
  userNumber = parseInt(prompt('Number please'));
  if (forbiddenNumbers.includes(userNumber)) {
    console.log('Sorry boo, you lost!');
    console.log('SCORE: ', score);
    inGame = false;
  }
  else if (fieldNumbers.includes(userNumber)) {
    console.log('Please, enter a number you\'ve never used.');
  }
  else {
    fieldNumbers.push(userNumber);
    console.log('For this time you are safe!');
    score++;
  }
}

// Output
console.table(forbiddenNumbers);

// Geneates a random number in a range min, max (inclusive)
function randomGenie(min, max){
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

// Populate an arrayToPopulate with a unique population of random numbers generated in a min max range
function populateRandomly(min,max,arrayToPopulate,population) {
  var randomNumber = 0;
  do {
    randomNumber = randomGenie(min,max);
    arrayToPopulate.push(randomNumber);
  } while (!arrayToPopulate.includes(randomNumber) || arrayToPopulate.length < population);
}
