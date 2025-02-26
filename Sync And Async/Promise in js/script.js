/*
let promise = new Promise((resolve ,reject) =>{
    console.log("I am a promise");
    //resolve("success");
    reject("Your order is rejected");   //Error
})  */


//========Promises me 2 Functions/Hendlers => (Resolve & Reject)--->Create krna===--------------

/*
function getData(dataId,getNextdata) {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("Data =",dataId);
            resolve("Success");
            //reject("Your order is rejected")  //Error
            if(getNextdata){
                getNextdata();
            }
        },4000);
    });
}  */



//-------Promise  ==> .then() and .catch() ka use----------------------------------------------
/*
const getPromise = ()=>{
    return new Promise((resolve ,reject) =>{
        console.log("I am a promise");
        resolve("Success");
        //reject("reject your order");   //Error
    });  
};

let promise = getPromise();
promise.then((res)=>{  
    console.log("Promise Fulfilled =",res);     
});

promise.catch((err)=>{
    console.log("rejected =",err);  
}) */



//--------Promise Chain------------------------------------------

function AsyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data1");
            resolve("Success");
        }, 2000);
    });
}

function AsyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data2");
            resolve("Success");
        }, 2000);
    });
}

console.log("Fatching Data1...");
AsyncFunc1().then((res)=>{
    console.log("Fatching Data2...");
AsyncFunc2().then((res)=> {
    
});
});
