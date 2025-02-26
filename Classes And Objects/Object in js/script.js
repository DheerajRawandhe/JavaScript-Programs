//----------------Prototype---> Object -------------------------//

/*const student={ 
    fullName : "Dherraj Rawandhe",
    sgpa :8.2,
    marks : 92.6,
    age :19,
    isfollow : true,
    printMarks :()=>{
    console.log(this.printMarks);
   } 
   
}; */

//------------------------------------------
const employee ={
    calcTax(){  
        console.log("tax rate is 10%"); 
    },

};
const karan ={
    salary :10000,
};
karan.__proto__=employee;
console.log(employee);