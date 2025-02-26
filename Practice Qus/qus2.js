
//-------------------Practice Qus..----------------------//
/*
let gameNum=25;
let userNum =prompt("Guess The Game Number :"); 
while(userNum != gameNum){  
userNum =console.log("You Entered Wrong Number, Guess again");
};
console.log("Congratulations, You Entered The Right Number"); */



//-------------------Practice Qus.2.----------------------//
/*
let hed=document.querySelector("h1");
console.dir(hed.innerText);
hed.innerText = hed.innerText + " Code With DR"; */   //Concatenate ->Two string ko jodna



//-------------------Practice Qus.3.----------------------//
let box=document.querySelectorAll(".Box");  
let idx=1;
for(boxes of box){
        boxes.innerText= `new  ${idx}`;  //Boxes ke name change  
        idx++;
}
//box[2].innerText=box[2].innerText + " I am DR ";
//console.dir(box[1]);
