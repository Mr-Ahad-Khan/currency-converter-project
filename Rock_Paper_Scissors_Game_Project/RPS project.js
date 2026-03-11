let computer_score=0;
let user_score=0;
let msg=document.querySelector("#msg");
let msgcon=document.querySelector("#msg-container");
let userScorepara=document.querySelector("#userscr");
let computerScorePara=document.querySelector("#computerscr");

const genCompChoice=()=>{
    let opt=["rock","paper","scissors"];
    let rndidx =Math.floor(Math.random()*3);
    return opt[rndidx];
}

const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
})

const playGame = (userChoice)=>{
    let CompChoice=genCompChoice();
    if (userChoice===CompChoice){
        msg.innerText="Game was Drawn.";
        msgcon.style.backgroundColor="rgb(250, 250, 51)";
        msgcon.style.color="black";
    }else {
        let userWin;
        if(userChoice==="rock"){
            userWin=CompChoice==="paper"?false:true;
        } else if(userChoice==="paper"){
            userWin=CompChoice==="scissors"?false:true;
        } else{
            userWin=CompChoice==="rock"?false:true;
        }
    showWinner(userWin, userChoice, CompChoice);
    }
}

const showWinner =(userWin, userChoice, CompChoice)=>{
    if(userWin){
        user_score++;
        userScorepara.innerText=user_score;
        msg.innerText=`You Won! Your ${userChoice} beats ${CompChoice}`;
        msgcon.style.backgroundColor="lightGreen";
        msgcon.style.color="black";
    } else{
        computer_score++;
        computerScorePara.innerText=computer_score;
        msg.innerText=`You Lose! ${CompChoice} beats your ${userChoice}`;
        msgcon.style.backgroundColor="rgb(252, 76, 76)";
        msgcon.style.color="black";
    }
}