let compscore= document.querySelector("#comp-score")
let userscore= document.querySelector("#user-score")
let msg= document.querySelector("#msg")
compscore.innerText=0;
userscore.innerText=0;

const getcompchoice =()=>{
    const options=["rock choice","scissor choice","paper choice"]
     return options[Math.floor(Math.random()*3)]
}
const choices= document.querySelectorAll(".choice")
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("class")
        playGame(userchoice)
   })
    
}); 
const playGame=(userchoice)=>{
    
    console.log(userchoice)
    const compchoice= getcompchoice();
    console.log(compchoice)

if(compchoice=="rock choice"){
    
    if(userchoice=="paper choice"){
    userscore.innerText++;
    msg.innerText="YOU WON! PAPER BEATS ROCK"
    msg.style.backgroundColor="green"
    }
    else if(userchoice=="scissor choice")
        { compscore.innerText++;
          msg.innerText="YOU LOST! ROCK BEATS SCISSOR"
          msg.style.backgroundColor="red"
        }
        else if(userchoice=="rock choice")
           { msg.innerText="IT'S A DRAW"
            msg.style.backgroundColor="blue"
}}
if(compchoice=="scissor choice"){
    if(userchoice=="paper choice")
    {compscore.innerText++
        msg.innerText="YOU LOST! SCISSOR BEATS PAPER"
        msg.style.backgroundColor="red"
    }
    else if(userchoice=="rock choice")
         {userscore.innerText++
          msg.innerText="YOU WON! ROCK BEATS SCISSOR"
          msg.style.backgroundColor="green"
         }
     else 
           { msg.innerText="IT'S A DRAW"
            msg.style.backgroundColor="blue"
}
}
if(compchoice=="paper choice"){
    if(userchoice=="rock choice")
    {compscore.innerText++;
    msg.innerText="YOU LOST! PAPER BEATS ROCK"
    msg.style.backgroundColor="red"
    }
    else if(userchoice=="scissor choice"){
         userscore.innerText++
            msg.innerText="YOU WON! SCISSOR BEATS PAPER"
            msg.style.backgroundColor="green"
    }
     else 
           { msg.innerText="IT'S A DRAW"
            msg.style.backgroundColor="blue"
}
}}
