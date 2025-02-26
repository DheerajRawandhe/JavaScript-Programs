// count Vowel -"a,e,i,o,u"
/* function countVowel(str){
    let  count =0;
    for(const char of str){
        if 
        (char==="a" || char==="e" || char==="i"|| char==="o"|| char==="u")
        { 
        count++;
    }
}
console.log(count);
}   */

//----------Qus2-------------------------------
/*
let num=[1,2,3,4,5];
num.forEach((num) =>{
    console.log(num*num);
});  */


//----Qus3---Filter karna hai number ko jo 90 se bda hai------
/*
let arr=[95,67,93,90,75];
let marks=arr.filter((val)=>{
    return val>90;
}
);
console.log(marks); */

//----Qus4---------------------------------------
let n=prompt("Enter a Number");
let arr=[];

for(let i=1; i<=n; i++){ 
    arr[i-1]=i;
}
console.log(arr);
/*
let sum=arr.reduce((res,curr)=>{
    return res +curr; //sum krna
});
console.log(sum); */


let fact=arr.reduce((res,curr)=>{
    return res * curr; //Factorial nikalna
});
console.log("Factorial=",fact);