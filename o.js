//class definition
class A{

    //properties

    //constructor
    constructor(){

    }

    //method
    myFun(name){
        console.log(`hello ${name} from class a`);
    }

}    //end of the class
//create an external object of the class
//let object = new classname();
/*let x = new A();
x.myFun("pushpita");*/
//class definition
class B extends A{
    //properties

    //constructor
    constructor(name){
        super(name);
        this.myFun(name);
        this.myFun2(name)
    }
    //method
    myFun2(name){
        console.log(`hello ${name} class B`);
    }

}      //end of the class b
//create an external object of the class
//let object = new classname();
let y = new B("pushpita");
