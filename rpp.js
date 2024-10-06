
//function return random pick 'rock' 'paper' 'scissor'
function cmpChoice() {
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


for (let index = 0; index < 10; index++) {
    console.log(`${index + 1}. ${cmpChoice()}`)
}