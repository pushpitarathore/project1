//class definition
class A {
    //property

    //constructer
    constructor() {

    }


    //method
    myfun1() {
        console.log("hello from myFun1 from class A");

    }


} //class a end
class B extends A{
    //property

    //constructer
    constructor(){
        super();
        this.myFun2();
    }


    //method
    myFun2(){
        console.log("hello from myFun2 from class B");
    }
} //class b defintion end 
//let object = new classname();
let obj = new B();
obj.myfun1();
