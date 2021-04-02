//class definition
class A{
    //properties

    //constructor
    constructor(){

    }

    //method
    addition(a,b){
        console.log(`addition is:- ${a+b}`);
    }
}     //end of the class A
//class definition
class B extends A{
    //properties

    //constructor
    constructor(a,b){
        super(a,b);
    }
    //method
    subtraction(a,b){
        console.log(`subtraction is:- ${a-b}`);
    }
}    //end of the class B
//class definition
class C extends B{
    //properties

    //constructor
    constructor(a,b){
        super(a,b);
        this.addition(a,b);
        this.subtraction(a,b);
        this.multiplication(a,b);

    }

    //method
    multiplication(a,b){
        console.log(`multiplication is:- ${a*b}`);

    }
}   //end of class C
//create an object of the class c
//let object = new classname();
//let x = new C(20,10);
class D extends C{
    //properties

    //constructor
    constructor(a,b){
        super(a,b);
        this.division(a,b);
    }
    //method
    division(a,b){
        console.log(`division is:- ${a/b}`);
    }
}    ///end of class D
//create an external object of the class D
//let object = new classname();
let x = new D(20,10);
let y = new D(15,5);
x.division(40,10);