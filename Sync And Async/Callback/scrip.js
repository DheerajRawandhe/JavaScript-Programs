/* function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumcallback){    //callback 
    sumcallback(a,b);
}
calculator(2,4,(a,b)=> {
    console.log(a+b);
});  */




//--------------Callback ka use --------------------------------

function getData(dataId, getNextData){
    return new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("Data =",dataId);  //timeout ka use kar 2s bad data show 
        resolve("Success");
    },2000);
});
}

// callback hell ki jagah {promise Chaining} ka use
console.log("gatting data 1....")
getData(1)
.then((res)=>{
    console.log("gatting data 2....")
    return getData(2);
})
.then((res)=>{
    console.log("gatting data 3....")
    return getData(3);
})
.then((res)=>{
    console.log(res);
});



/*
//--Callback Hell..-->

console.log("gatting data 1....")
getData(123, () => {                  //callback ka use 
    console.log("gatting data 2....")
    getData(234, ()=>{            //multiple data ko create kr skte hai  
        console.log("gatting data 3....") 
        getData(345,()=>{
            console.log("gatting data 4....")
            getData(456);
        });
    });                                 
});  */