let gameseq=[];
let userseq=[];
let btns=["red","yellow","purple","green"]
let started=false;
let level=0;
let h2=document.querySelector("h2")
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
})
function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },100)
}
function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100)
}
function levelup(){
    userseq=[]
    level++;
    h2.innerText=`level ${level}`
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`)
    gameseq.push(randcolor)
    console.log(gameseq)
    btnflash(randbtn);
}
function checkans(idx){
    if(gameseq[idx]==userseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup(),1000)
        }
    }
    else{
        h2.innerHTML=(`gameover! your score is  <b>${level} </b> <br>press any key to start`)
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset()
    }


}
function btnpress(){
  let btn=this;
  usercolor=btn.getAttribute("id")
  userseq.push(usercolor)
  userflash(btn);
  checkans(userseq.length-1)
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}
function reset(){
    started=false;
    gameseq=[]
    userseq=[]
    level=0
}