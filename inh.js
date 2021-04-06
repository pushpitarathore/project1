//create class
class MyClass{
    //1property
    name="";     
    //2.constructor
    constructor(n){
     this.name=n;
    }

    //3.methods
     fun1(n){
         console.log(n);
     }
}
class MyClass1 extends MyClass{
    //1property

    //2.constructor
    constructor(n){

        super(n);
        this.fun1(n);
    }

    //3.methods
    
}
//let obj = new MyClass1("hello");
//objet.property
//module.export={};
module.exports=MyClass1;