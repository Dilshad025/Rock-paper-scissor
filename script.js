let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
// 9th
const msg = document.querySelector("#msg");
// 11
const userNumber = document.querySelector("#user-score");
const comNumber = document.querySelector("#comp-score");


const genComChoice = () => {
    // 4th ye 
    const option = ["rock", "scissor", "paper"];
    // Math.random()
    // random number genrete krne keliye 0 se 1 ke bich me ata hai aur hame 0 se 2 ke bich me lana hai to *3 krna hoga tb ye 2 tk random number genrate krega. jis bhi number tk print krana hai usse bs ek jaida se multiply hoga.floot me number genrate hoga usko hatane keliye math.floor(math.random()) typye krna hoga
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
};
// 6th
const drawGame = () => {
    console.log("game was draw");
    msg.innerHTML="Game was Draw. Play again.";
}
// 8th
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        console.log("You win!");
        // 10th
        msg.innerHTML=`you win! Your ${userChoice} beats ${compChoice}`;
        // 11
        userScore++;
        userNumber.innerHTML = userScore;
    }else{
        console.log("you lose");
        msg.innerHTML=`You Lost. ${compChoice} beats your ${userChoice}`;
        // 11
        compScore++;
        comNumber.innerHTML = compScore;
    }
}
const playGame = (userChoice) => {
    // 2nd playgame create hua hai
    console.log("user choice", userChoice);
    // generate computer choice last 5th
    const compChoice = genComChoice();
    console.log("computer choice", compChoice);
    // 7th
    if (userChoice === compChoice) {
        // draw game 
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }else{
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //  id maloom krne ka tarika 1st ye create hua hai
        // console.log("clicked", userChoice);
        playGame(userChoice);
        //  3rd ye
    });
});