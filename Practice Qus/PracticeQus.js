
//-------------------Practice Qus.1.----------------------//
/* for(let i=0; i<=100; i++){
    if(i%2==0) //Even Numbers
    console.log("i =",i);
} 
*/

//array qus 
/*
let marks= [85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum+= val;
}
let avg =sum / marks.length;
console.log(`avg marks of the class = ${avg}`); */

//array Qus 2

let item=[250,645,300,900,50];
for(let i=0; i<item.length; i++){
    let offer = item[i] /10;
    item[i]=item[i]- offer;

}
console.log(item) 
