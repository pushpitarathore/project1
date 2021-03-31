//class decleration
//pascal case
class myFirstClass{
    //properties

    //constructer

    //method
    myFunction1(){
        console.log("hello everbody");
    }
    myFunction2(){
        console.log("good morning");
        this.myFunction3();
    }
    myFunction3(){
        console.log("pushpita rathore");
    }

}   //class definition end
//let objectname= new classname();
let x = new myFirstClass();
//object.member
x.myFunction1();
x.myFunction2();
