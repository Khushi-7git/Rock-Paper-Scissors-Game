let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorediv = document.querySelectorAll(".score-board");
const user=document.querySelector("#user");
const comp=document.querySelector("#comp-score");
// Update the score display
const updateScoreDisplay = (userscore, compscore ) => {
    user.innerText=userscore;
    comp.innerText=compscore;
};
// Generate computer's choice
const gencomp = () => {
    const option = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * 3);
    return option[rand];
};

// Handle draw
const draw = (choiceid,compchoice) => {
    console.log("Game draw");
    msg.innerText =`GAME DRAW!${choiceid}is same as ${compchoice}`;
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
};

// Show winner message
const showWinner = (userwin,choiceid,compchoice) => {
    if (userwin) {
        console.log("You win");
        msg.innerText = `You win! ${choiceid} beats ${compchoice}`;
         msg.style.backgroundColor = "green";
        msg.style.color = "white";
        userscore++;
    } else {
        console.log("You lose");
        msg.innerText = `You lose! ${compchoice} beats ${choiceid}`;
         msg.style.backgroundColor = "beige";
        msg.style.color = "red";
        compscore++;
    }
    updateScoreDisplay(userscore, compscore);
};

// Main game logic
const playgame = (choiceid) => {
    console.log("User choice =", choiceid);
    const compchoice = gencomp();
    console.log("Computer choice =", compchoice);

    if (choiceid === compchoice) {
        draw(choiceid,compchoice);
    } else {
        let userwin = true;
        if (choiceid === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (choiceid === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,choiceid,compchoice);
    }

    console.log(`User Score: ${userscore}, Computer Score: ${compscore}`);
};

// Add click listeners to choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceid = choice.getAttribute("id");
        playgame(choiceid);
    });
});
