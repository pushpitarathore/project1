//class definition
class MyClass {
    //1. properties
    information = {};

    //2.constructor
    constructor(y) {
        console.log("hello from constructor");
        this.information = y;
        this.getinformation();

    }

    //3. method
    getinformation() {
        console.log(this.information);
    }

}     //end of yhe class
//create an exter object of the class
//let object = new classname();
let x = {
    fname: "pushpita",
    lname: "rathre",
    mob: "8120901006",
    addr: "neemuch MP"

};
let obj = new MyClass(x);
