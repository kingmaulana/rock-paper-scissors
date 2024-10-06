
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

function getHumanChoice() {
    let humanInput = prompt("Pilih antar scisor or banan: ");
    console.log(humanInput);
}

getHumanChoice()