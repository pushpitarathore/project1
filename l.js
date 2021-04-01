//class definition
class A {
    //property

    //constructer
    constructer() {

    }


    //method
    myfun1() {
        console.log("hello from myFun1 from class A");

    }


} //class a end
class B extends A{
    //property

    //constructer
    constructer(){
        super();

    }


    //method
    myFun2(){
        console.log("hello from myFun2 from class B");
    }
} //class b defintion end 
//let object = new classname();
let obj = new B();
obj.myfun1();
obj.myfun2();