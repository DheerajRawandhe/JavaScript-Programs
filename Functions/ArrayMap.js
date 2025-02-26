// Map Mathod----------------------
/*
let num=[23,45,65];
num.map((val)=>{
    console.log(val);

}); */

//-----------Filter Method---------
/*
let num=[1,3,4,5,6,8];
let EvenArr=num.filter((val)=>{
    return val%2 == 0;

});
console.log(EvenArr); */


//-------Reduce Method-------------

/*let arr=[1,2,3,4,5];
const output= arr.reduce((res,curr)=>{ // sum Calculate kra
    return res + curr;    

});
console.log(output); */ 

//Large number print 
let arr=[1,6,3,9,22];
const output= arr.reduce((prev,curr)=>{ 
    return prev>curr ? prev :curr;    

});
console.log(output); 