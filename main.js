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
var difficultySet = sanitizedNumericalInput('Pick your difficulty:\n(0)Easy\n(1)Medium\n(2)Hard',0,3);
var victoryCap;
var forbiddenNumbers = [];
var fieldNumbers = [];
var userNumber;
var inGame = true;
var score = 0;

switch (difficultySet) {
  case 0:
    victoryCap = 100;
    break;
  case 1:
    victoryCap = 80;
    break;
  case 2:
    victoryCap = 50;
    break;
}

populateRandomly(1,victoryCap,forbiddenNumbers,16);

console.table(forbiddenNumbers.sort());
console.log(victoryCap);
//Main logic
while (inGame) {
  userNumber = sanitizedNumericalInput('Insert a number',0,victoryCap);
  if (forbiddenNumbers.includes(userNumber)) {
    console.log('Sorry boo, you lost!');
    console.log('SCORE: ', score);
    inGame = false;
  }
  else if (fieldNumbers.includes(userNumber)) {
    console.log('Please, enter a number you\'ve never used.');
  }
  else if (fieldNumbers.length == (victoryCap - forbiddenNumbers.length)) {
    score++;
    console.log('You\'ve achieved a total victory!');
    console.log('SCORE:', score);
    inGame = false;
  }
  else {
    fieldNumbers.push(userNumber);
    console.log('For this time you are safe!');
    score++;
  }
}

// Output

// Geneates a random number in a range min, max (inclusive)
function randomGenie(min, max){
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// Populate an arrayToPopulate with a unique population of random numbers generated in a min max range
function populateRandomly(min,max,arrayToPopulate,population) {
  var randomNumber;
  do {
    randomNumber = randomGenie(min,max);
    if (!arrayToPopulate.includes(randomNumber)) {
      arrayToPopulate.push(randomNumber);
    }
  } while (arrayToPopulate.length < population);
}

//Force a non-empty numberical input in range between min max of a prompted input
function sanitizedNumericalInput(question,min,max) {
   do {
     usersInputRaw = parseInt(prompt(question).trim());
   } while (usersInputRaw == null || isNaN(usersInputRaw) || usersInputRaw <= min || usersInputRaw >= max );

   return usersInputRaw;
}
