const CompScore = document.getElementById("Computer-Score");
const UserScore = document.getElementById("Your-Score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissors");
const choice = document.getElementById('choice');

let user = 0;
let comp = 0;

const symbols = [
    'rock', 'paper', 'scissor'
];

function checkWinner() {
    if (user === 10 || comp === 10) {
        
        if (user < comp) {
            localStorage.setItem('loser', 'The Computer Wins!'); 
            window.location.href = "loser.html";
        } else {
            localStorage.setItem('winner', 'You Win!'); 
            window.location.href = "winner.html";
        }
    }
}

rock.addEventListener('click', () => {
    let val = Math.floor(Math.random() * 3);
    choice.textContent = `The Computer Selected: ${symbols[val]}`;
    if (symbols[val] === "scissor") {
        user++;
        UserScore.textContent = user;
    } else if (symbols[val] === "paper") {
        comp++;
        CompScore.textContent = comp;
    }
    checkWinner();
});

paper.addEventListener('click', () => {
    let val = Math.floor(Math.random() * 3);
    choice.textContent = `The Computer Selected: ${symbols[val]}`;
    if (symbols[val] === "scissor") {
        comp++;
        CompScore.textContent = comp;
    } else if (symbols[val] === "rock") {
        user++;
        UserScore.textContent = user;
    }
    checkWinner();
});

scissor.addEventListener('click', () => {
    let val = Math.floor(Math.random() * 3);
    choice.textContent = `The Computer Selected: ${symbols[val]}`;
    if (symbols[val] === "rock") {
        comp++;
        CompScore.textContent = comp;
    } else if (symbols[val] === "paper") {
        user++;
        UserScore.textContent = user;
    }
    checkWinner();
});
