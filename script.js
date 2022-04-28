let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const difference = (a, b) => Math.abs(a - b);

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {

  let humanAbs = difference(humanGuess, secretTarget);
  let computerAbs = difference(computerGuess, secretTarget);

  return humanAbs <= computerAbs;

};

const updateScore = winner => {

  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
};

const advanceRound = () => currentRoundNumber += 1;