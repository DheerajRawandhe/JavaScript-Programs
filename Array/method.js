/*
let food=["Apple","mengo","litchi","banana"];

// push ka use krke food me or name add kar skte h

food.push("Chips","burger","paneer"); //add the end
console.log(food);

// pop ka use last food ko delte krna 
food.pop()
console.log(food);// deleted foodItem - paneer

 //toString use in array
 console.log(food.toString());  */

//----------------------//
 // Concat ka use 
 /*
 let heroes=["Virat","Akshay","Salman","Varun"];
 let hero=["ajay","Sahrukh","kartik"];
 let allhero = heroes.concat(hero);
 console.log(allhero); */

 //---------------------//
 //unshift ka use
 /*
 let heroes=["Virat","Akshay","Salman","Varun"];
 heroes.unshift("Rohit"); //add ho jata hai starting me */

 //---------------------//

 //shift ka use
 /* 
 let heroes=["Virat","Akshay","Salman","Varun"];
 let val =heroes.shift();
 console.log("deleted",val); */     //shift first element ko delete krta h */


 //--------------------------------------------//
 //Slice Method
 /*
 let heroes=["Virat","Akshay","Salman","Varun"];
 console.log(heroes);
 console.log(heroes.slice(2)); */

 //------------------//
//Splice Mehod
let arr=[1,2,3,4,5,6,7];
arr.splice(2,0,101,102); // splice me add krna value ko 

// delete element
arr.splice(3,1); //102 delete

//replace 
arr.splice(3,1,102); 


