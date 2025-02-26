// --------Classes----------------------

class ToyotaCar {
    constructor(brand,mileage){
        console.log("Creating new Object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start() {
        console.log("Start");
    }stop(){
        console.log("Stop");
    }
   
}
let fortuner = new ToyotaCar("Fortuner",10); //constructor
console.log(fortuner);
let tarzan= new ToyotaCar("Tarzan",12);  //constructor
console.log(tarzan);