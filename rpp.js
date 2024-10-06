
//function return random pick 'rock' 'paper' 'scissor'
function getComputerChoice() {
    const randomPick = Math.floor(Math.random() * 3);
    
    switch (randomPick) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        default:
            return 'scissor'
    }
}

//function show input alert to user
function getHumanChoice() {
    let humanInput = prompt("Pick one: ROCK, PAPER or SCISSOR ");
    //making any choice from human to case-insensitive
    return humanInput.toLowerCase();
}

//track score both user and computer
let humanScore = 0;
let computerScore = 0;


//function for computer and human choice at the game while playing
function playAround(humanChoice, computerChoice) {
    const human = humanChoice;
    const comp = computerChoice;

    // console.log(human);
    // console.log(comp);

    if(human == 'rock' && comp == 'rock' || human == 'paper' && comp == 'paper' || human == 'scissor' && comp == 'scissor'){
        console.log('Draw, play again.');
    } else if (human == 'rock' && comp == 'paper') {
        console.log('You lose!, Paper beats Rock.');
        return computerScore += 1;
    } else if (human == 'rock' && comp == 'scissor'){
        console.log('You Win!, Rock beats Scissor.');
        return humanScore += 1;
    } else if (human == 'paper' && comp == 'rock') {
        console.log('You Win!, Paper beats Rock.');
        return humanScore += 1;
    } else if (human == 'paper' && comp == 'scissor') {
        console.log('You lose!, Scissor beats Paper.');
        return computerScore += 1;
    } else if (human == 'scissor' && comp == 'rock') {
        console.log('You lose!, Rock beats Scissor.');
        return computerScore += 1;
    } else if (human == 'scissor' && comp == 'paper'){
        console.log('You Win!, Scissor beats Paper.');
        return humanScore += 1;
    } else {
        console.log('You dont pick one of the option correctly!')
    }
}

const humanSelection = getHumanChoice();
const computeSelection = getComputerChoice();

playAround(humanSelection, computeSelection);