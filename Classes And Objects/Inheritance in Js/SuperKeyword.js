//--------------------Super Keyword ka use-------------------

class per{
    constructor(name){
        this.species="Home sapiens"; //constructor
        this.name= name;
    }
    eat(){
        console.log("eat");
    }
}
class Eng extends per{
    constructor(name){
        super(name);    //to invoke per_son class constructor
    }
    work(){
        super.eat();
        console.log("Solve Problems in Coding");
    }

}
let EngObj=new Eng("Dheeraj"); 
