let userscore =0;
const userscor=document.querySelector("#user-scor");
let compscore=0;
const compscor=document.querySelector("#comp-scor");
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const gencompchoice=()=>{
       const options=["rock","paper","scissors",];
        const randidx=Math.floor(Math.random()*3);
        return options[randidx];
    }
    const drawgame=()=>{
        console.log("the game was draw");
        msg.innerText="the game was draw";
        msg.style.backgroundColor="blue";
    }
    const showwiner=(userwin)=>{
        if(userwin==true){
            userscore++;
            userscor.innerText=userscore;
            console.log("you win");
            msg.innerText="YOU WIN!";
            msg.style.backgroundColor="green";
        }
        else{
            compscore++;
            compscor.innerText=compscore;
            console.log("you lose");
            msg.innerText="YOU lose";
            msg.style.backgroundColor="red";
        }
    }
    const newgame=()=>{
        userscor.innerText=0;
        compscor.innerText=0;
        msg.innerText="play your moves";
        msg.style.backgroundColor="brown";
    }

const playGame=(userchoice)=>{

    console.log("userchoice=",userchoice);
    const compchoice= gencompchoice();
    console.log("compchoice=",compchoice);

    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
           userwin= compchoice==="scissors"? false:true;
        }
        else{
            userwin= compchoice==="rock"? false:true;
        }
        showwiner(userwin);
    }
}

choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {  const userchoice=choice.getAttribute("id")
        playGame(userchoice);
    });
});
let e=document.createElement("button");
console.log(e);
e.innerText="NEW GAME";
e.style.backgroundColor="yellow";
let div=document.querySelector("body");
div.before(e);
e.addEventListener("click",(newgame));
