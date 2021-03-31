//class declaration
class MyClass{
    //properties

    //constructer

    //method
    myFunction1(n){
        console.log(`hello ${n} from myFunction1`);
        this.myFunction2();
    }
    myFunction2(){
        console.log("hello from myFunction2");
    }

}  //class definition end
//let objectname = new classname()
let y = new MyClass();
//object.member
y.myFunction1("pushpita"); 