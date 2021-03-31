//class definition
class mySecondclass {
    //properties
      x=30;
      y=15;
      z=3;

    //constructer

    //method
    myFun1(n) {
        console.log("addition is:- " + (this.x + this.y + this.z));
        console.log("hello" + n);
    

    }
    myFun2(m) {
        console.log("subtraction:- " + (this.x - this.y));
        console.log("pushpita" + m);
        this.myFun3();
    }
    myFun3() {
        console.log("multiplication is:- " + (this.x * this.y * this.z));
        this.myFun4();
    }
    myFun4() {
        console.log(`division is  ${this.x / this.y}`);
    }

}   //class definition end
//let objectname = new classname();
let a = new mySecondclass();
//object.member;
a.myFun1("pushpita");
a.myFun2("rathore");