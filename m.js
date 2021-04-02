//class definition
class A {
    //properties


    //constructor
    constructor() {
        this.myFun2();

    }

    //method
    myFun1(){
        console.log("pushpita");
    }



}  //class end
//class definition
class B extends A {
    //properties

    //constructor
    constructor() {
        super():

    }

    //method
    myFun2(){
        console.log("rathore");
    }

}     //class end

//create an object of the class B
//let object = new classname():
let obj = new B();
B.myFun1();