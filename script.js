

    let randnum= Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;
// document.querySelector(".number").textContent=randnum;


document.querySelector(".check").addEventListener("click",function(){

    const guess = Number(document.querySelector(".guess").value);
console.log(guess);


if(!guess){
    document.querySelector(".message").textContent="No Value Given!";

}
else if(guess > randnum){
    document.querySelector(".message").textContent = "Too High!";
    score--;
  
    document.querySelector(".score").textContent = score;
    console.log(score);
} else if(guess < randnum) {
    document.querySelector(".message").textContent = "Too Low!";
    score--;
    
    document.querySelector(".score").textContent = score;
    console.log(score);
}else if(guess===randnum) {
    document.querySelector(".message").textContent ="Good Work!";
    document.querySelector("body").style.backgroundColor="#4DBA46";
    document.querySelector(".number").textContent = randnum;
    alert("You Have Won!");
    if (score>highscore){
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector(".highscore").textContent = highscore;
    
}

}
)

document.querySelector(".again").addEventListener("click",function(){
    
    score = 20;
document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent ="Start guessing...";
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").textContent = "?";
    randnum= Math.trunc(Math.random()*20)+1;
    
})



