//class definition
class A {
    //properties


    //constructer
    constructor() {

    }


    //method
    myFunction1() {
        console.log("hello from class a");
    }


} //class a end
class B extends A {
    //property

    //constructer
    constructor() {
        super();
        this.myFunction1();


    }


    //method
    myFun2(m) {
        console.log(`hello  ${m}`);

    }
} //class b end

class C extends B {
    //properties
    x;
    y;
    z;
    //construtor
    constructor() {
        super();
        this.x = 10;
        this.y = 5;
        this.z = 5;
        this.myFun2("pushpita");
    }
    //method
    myFun3() {
        console.log(`addition is ${this.x + this.y + this.z}`);
        console.log(`multiplication is ${this.x * this.y}`);
    }

}   //class c end 
//class D definition
class D extends C {
    //properties
    p;
    q;
    //contructor
    constructor() {
        super();
        this.p = 10;
        this.q = 5;
        this.myFun3();
    }

    //method
    myFun4(p, q) {
        console.log("addition is " + (this.p + this.q));
    }

}   //class D end
/*let obj = new D();
obj.myFun4();
obj.myFunction1();*/
class E extends D {
    //properties

    //constructor
    constructor() {
        super();
        this.myFun4();

    }

    //method
    myFun5() {
        console.log("hello everyone");
    }


}   //class E end
/*let obj = new E();
obj.myFun5(); */
class F extends E {
    //properties

    //constructor
    constructor() {
        super();
        this.myFun5();
    }

    //method
    myfun6() {
        console.log("good morning");
    }
}
/*let obj = new F();
obj.myfun6();*/
class G extends F {
    //properties

    //constructor
    constructor() {
        super();
        this.myfun6();
    }

    //method
    myFunction7() {
        console.log("have a nice day");
    }
    }     //class end
    let obj = new G();
obj.myFunction7();
