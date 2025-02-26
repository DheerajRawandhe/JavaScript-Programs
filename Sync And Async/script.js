//------Synchronous------------------
/*
console.log("One");
console.log("two");
console.log("three"); */



//---------------ASynchronous-------------------------------------
console.log("One");
console.log("two");
console.log("three");

setTimeout(() =>{
    console.log("Hello Dheeraj");    //timeout 2s = 2000ms   // 2 sec bad out dena
},2000);

console.log("Four");
console.log("five");   // ye wait nhi krta hai iske pahle vale output ke liye...
