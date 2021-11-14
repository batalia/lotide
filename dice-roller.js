// Add code to get number from user input
const num = process.argv[2]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function diceRoller(num) {
    const numberArray = []
    // Add functionality to get num from args, create 3 random numbers between 1 - 6, and return a string
    for (i = 0; i < num; i++) {
        numberArray.push(getRandomInt(6)+1);
    }
    return `Rolled ${num} dice: ${numberArray.join(', ')}`;
  }
  
  console.log(diceRoller(num)); // Num represents the number received from the args