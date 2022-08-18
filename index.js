const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const quesE1 = document.getElementById("ques");
const formE1 = document.getElementById("form");
const inputE1 = document.getElementById("input");
const scoreE1 = document.getElementById("score");

let score= JSON.parse(  localStorage.getItem("score"));
if(!score){
    score=0;
}

scoreE1.innerText='Score:'+score;
quesE1.innerText='What is ' + num1 + ' multiply by '+ num2 + " ?" ;

const corrans = num1 * num2;

formE1.addEventListener("submit",()=>{
   const userans = +inputE1.value;
   if(userans === corrans){
    score++;
    updatelocalStorage();
   }else{
    score--;
    updatelocalStorage();
   }
   
});

formE1.addEventListener("reset",()=>{
    score=0;
    uplocalStorage();
    
 });

function updatelocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}
function uplocalStorage(){
      localStorage.setItem("score",JSON.stringify(0));
}
