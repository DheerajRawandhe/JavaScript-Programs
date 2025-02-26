// Async ----------------
/*
async function hello(){
    console.log("Hello DR");
}
*/


// Async-await--------------------------
/*
function api(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather Data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData() {
    await api(); // 1st call          // Async-Await 
    await api(); // 2nd call
    await api(); // 2nd call
    await api(); // 2nd call
}
*/

//=====Async-Await....=============================================

function getData(dataId) {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{ 
            console.log("Data =",dataId);
            resolve("Success");
        },2000); 
    });
}

async function getAllData(){
    console.log("gatting data 1...");    // Async-Await    
    await getData(1);
    console.log("gatting data 2...");
    await getData(2);
    console.log("gatting data 3...");
    await getData(3);

}

// IIFE---iska use karke function() ko bina name diye exicute krna------>
//IIFE-> Immediately output deta hai

(async function (){                        
    console.log("gatting data 1...");  // and func() ko call krne ki jarurat nhi hoti autometic output! print.. //   
    await getData(1);
    console.log("gatting data 2...");
    await getData(2);
    console.log("gatting data 3...");
    await getData(3);
    console.log("gatting data 4...");
    await getData(4);
    console.log("gatting data 5...");
    await getData(5);
    
})();