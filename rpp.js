


// function playGame() {

   

    //function show input alert to user
    // function getHumanChoice() {
    //     let humanInput = prompt("Pick one: ROCK, PAPER or SCISSOR ");
    //     //making any choice from human to case-insensitive
    //     return humanInput.toLowerCase();
    // }

    //track score both user and computer
 

    //Make 5 round to start over every time input send

    //function for computer and human choice at the game while playing
   

    // const humanSelection = getHumanChoice();
    // const computeSelection = getComputerChoice();

    // playAround(getHumanChoice, getComputerChoice);

    
    
    
// }

// playGame();



//New function to take choice from DOM 

const buttons = document.querySelectorAll('button');

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

let humanScore = 0;
let computerScore = 0;

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


buttons.forEach((button) => {
    button.addEventListener('click', () => {
            playAround(button.className, getComputerChoice());

            scoreHuman.textContent = humanScore;
            scoreComputer.textContent = computerScore;

            round -= 1;

            if(round === 0) {
                if (humanScore > computerScore) {
                    finalScore.innerText = ("You're Win! this game with score " + "You: " + humanScore + " VS Computer " +  computerScore)
                    finalScore.style.color = 'green';
                } else {
                    finalScore.innerText = ("You're Lose! this game with score " + "You: " + humanScore + " VS Computer " +  computerScore)
                    finalScore.style.color = 'red';
                }
            } else if(round < 0) {
                scoreHuman.textContent = 0;
                scoreComputer.textContent = 0;
                humanScore = 0;
                computerScore = 0;
                finalScore.innerText = '';
                round = 5;
            }
            console.log(round)

            headerLap.innerText = round + ' - Round left';
    })
});


//DOM UI

const scoreHuman = document.querySelector('.result h1').firstElementChild;
const scoreComputer = scoreHuman.nextElementSibling;

scoreHuman.textContent = 0;
scoreComputer.textContent = 0;
let round = 5;

const headerLap = document.createElement('h2');
const h1 = document.querySelector('.result h1');
headerLap.innerText = 5 + ' - Round left'
h1.parentNode.append(headerLap);

const finalScore = document.querySelector('.final-result');

