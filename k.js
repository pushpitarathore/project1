 //class definition
class MyClass {
    //1. property 
        name = '';
    

    //2. constructer
    constructor() {
        this.name ="morning";
        this.myFunction2();        


    }

    //3. method
    myFun1(n) {     //n is formal argument
        console.log(`hello ${n}`);
    
    }
    myFunction2() {
        console.log("good " + this.name);
    }
}   //class definition end
//create an external object of the class
//let object = new classname();
let o = new MyClass();
o.myFun1("pushpita");

