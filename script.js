let userscore=0;
let compscore=0;

const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")
const choices=document.querySelectorAll(".choice")

const gencomputerchoice = () => {
    const options=["rock" , "paper" ,"scissors"]
    const randidx = Math.floor(Math.random()*3);
    return  options[randidx];
};

let message=document.querySelector("#message");

const drawgame = () => {
    // console.log("game was draw")
    message.innerText = "Game Is Draw "
     message.style.backgroundColor="blue";
    
};
const showwin = (userwin) => {
    if(userwin){
        userscore++
        userscorepara.innerText=userscore;
        // console.log("you win");
        message.innerText = "You Win";
        message.style.backgroundColor="green";
    }else{
        compscore++
        compscorepara.innerText=userscore;
        // console.log("you lose");
        message.innerText = "You Lose";
        message.style.backgroundColor="red";
    }
};


const playgame=(userchoice)=>{
    console.log("userchoice =" , userchoice);
    const compchoice = gencomputerchoice();
    console.log("comp choice =" , compchoice)
    if(userchoice===compchoice){
        drawgame()
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin =compchoice==="paper" ? false:true
            showwin(userwin);
        }else if (userchoice==="paper"){
             userwin =compchoice==="scissors" ? false:true
             showwin(userwin);
        }else{
            userwin =compchoice==="rock"? false:true
            showwin(userwin);
        }
    } 
};
choices.forEach((choice) => {
    choice.addEventListener("click" , ()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice) 
    });
});