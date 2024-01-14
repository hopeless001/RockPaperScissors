let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepapa=document.querySelector("#user-score");
const compscorepapa=document.querySelector("#comp-score")

const gencompchoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
  // rock paper scissor
};

const drawgame = () => {
  msg.innerText="Game Draw play again";
  msg.style.backgroundColor="#081b31";
};

const showwinner = (userwin,userchoice,compchoice) => {
  if (userwin) {
    userScore++;
    userscorepapa.innerText=userScore;
    msg.innerText=`YOU WIN! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
  } else {
    compScore++;
    compscorepapa.innerText=compScore;
    msg.innerText=`YOU loss ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
  }
};

const Playgame = (userchoice) => {
  
  //generated computer choice
  const compchoice = gencompchoice();


  if (userchoice === compchoice) {
    //draw game
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin,userchoice,compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    Playgame(userchoice);
  });
});


