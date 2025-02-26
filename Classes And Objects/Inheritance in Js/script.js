/*class parent{
    hello(){
        console.log("Hello");
    }
}
class child extends parent{
}
    let obj= new child(); */


//--------------------------------------------------------

class person{
    constructor(){
        this.species="Home sapiens"; //constructor
    }
    eat(){
        console.log("eat");
    }sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Farming");
    }

}
class Engineer extends person{
    work(){
        console.log("Solve Problems in Coding");
    }

}
let Dheeraj=new Engineer(); 
