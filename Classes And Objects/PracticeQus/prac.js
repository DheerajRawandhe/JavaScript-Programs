let DATA = "Secret Information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;

    }
    viewData(){
        console.log("Data =",DATA);
    }
}

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="some new value";

    }
}

let student = new user("Dheeraj","DheerajRawandhe57@gmail.com");
let student2 = new user("Shital","shital@gmail.com");

let admin1 =new Admin("admin","adminCollege@gmail.com");
