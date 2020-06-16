let uscore = 0;
let cscore = 0;
const playBtn = document.querySelector('.new-game-button');
const userScore = document.querySelector('.pscore');
const computerScore = document.querySelector('.cscore');
const gameInfo = document.querySelector('.info');
const choiceBoxes = document.querySelector('.choice-boxes');
const instruction = document.querySelector('.instruction');

//Start game
playBtn.addEventListener('click', () =>{
    uscore = 0;
    cscore = 0;
    userScore.textContent = 0;
    computerScore.textContent = 0;
    //Name check
    let playerName = prompt(`Podaj swoja nazwe (Max 10 znaków)`);
    let newPlayerName = document.querySelector('.player');
    const checkName = () => {
        if (playerName.length == 0 || playerName.length > 10) {
            playerName = prompt(`Podaj poprawna nazwe (Max 10 znaków)`);
            checkName();
        }else {
            newPlayerName.textContent =`${playerName}`
            choiceBoxes.classList.add("fade-in");
            choiceBoxes.classList.remove("fade-out");
            gameInfo.classList.add("fade-in");
            gameInfo.classList.remove("fade-out");
            gameInfo.textContent = `Dokonaj wyboru. Gra do 10 punktów`;
            instruction.classList.add('fade-out');
         }
    }
    checkName();
})


    //Round number check
    /*let roundNumber = prompt(`Podaj liczbe rund (max: 20)`);
    const checkNumber = () => {
        if (roundNumber < 0) {
            roundNumber = prompt(`Prosze podać numer w przedziale (0 do 20)`);
            checkNumber();
        }
        else if (roundNumber > 20) {
            roundNumber = prompt(`Prosze podać numer w przedziale (0 do 20)`);
            checkNumber();
        }
        else if (isNaN(roundNumber)) {
            roundNumber = prompt(`Prosze podać numer w przedziale (0 do 20)`);
            checkNumber();
        }
        else if (roundNumber.length == 0) {
            roundNumber = prompt(`Prosze podać numer w przedziale (0 do 20)`);
            checkNumber();
        }
        else {
            newPlayerName.textContent =`${playerName}`
            choiceBoxes.classList.add("fade-in");
            choiceBoxes.classList.remove("fade-out");
            gameInfo.classList.add("fade-in");
            gameInfo.classList.remove("fade-out");
            gameInfo.textContent = `Dokonaj wyboru. Gra do 10 punktów`;
            instruction.classList.add('fade-out');
         }
    }
    checkNumber();*/

//Player Choice
const getPlayerChoice = () => {
    const playerRock = document.querySelector(".rock");
    const playerPaper = document.querySelector(".paper");
    const playerScissors = document.querySelector(".scissors");
    playerRock.addEventListener('click', () =>{
        game('rock');
        }
    )
    playerPaper.addEventListener('click', () =>{
        game('paper');
        }
    )
    playerScissors.addEventListener('click', () =>{
        game('scissors');
        }
    )
}
getPlayerChoice();

//Computer Choice
const getComputerChoice = () => {
    const computerOptions = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3);
    return computerOptions[randomNumber];
}

//Compare
const game = (playerChoice) => {
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice){
        gameInfo.textContent = `Komputer wybrał to samo. Jest remis`;
    }
    else if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            gameInfo.textContent = `Komputer wybrał papier. Przegrałeś`;
            cscore++;
            computerScore.textContent = cscore;
        } else {
            gameInfo.textContent = `Komputer wybrał nożyczki. Wygrałeś`;
            uscore++;
            userScore.textContent  = uscore;
        }
    }
    else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            gameInfo.textContent = `Komputer wybrał nożyczki. Przegrałeś`;
            cscore++;
            computerScore.textContent  = cscore;
        } else {
            gameInfo.textContent = `Komputer wybrał kamień. Wygrałeś`;
            uscore++;
            userScore.textContent  = uscore;
        }
    }
    else {
        if (computerChoice === 'rock') {
            gameInfo.textContent = `Komputer wybrał kamień. Przegrałeś`;
            cscore++;
            computerScore.textContent  = cscore;
        } else {
            gameInfo.textContent = `Komputer wybrał papier. Wygrałeś`;
            uscore++;
            userScore.textContent  = uscore;
        }
    }

    const roundSum = (uscore+cscore);
    if (roundSum == 10) {
        if (uscore > cscore) {
            gameInfo.textContent = `Gratulacje wygrałeś. Zagraj jescze raz`;
            choiceBoxes.classList.add("fade-out");
            choiceBoxes.classList.remove("fade-in");
        }else if (uscore < cscore) {
            gameInfo.textContent = `Przykro mi przegrałeś. Spróbuj jeszcze raz`;
            choiceBoxes.classList.add("fade-out");
            choiceBoxes.classList.remove("fade-in");
        }else {
            gameInfo.textContent = `Niestety remis. Było blisko`;
            choiceBoxes.classList.add("fade-out");
            choiceBoxes.classList.remove("fade-in");
        }
    }
}