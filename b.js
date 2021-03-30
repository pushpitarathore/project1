//function decleration
function fun1(){
    let name ="pushpita";     //here name is local variable
    console.log("hello" + name);
}
//function calling
fun1();

//function declaration
function fun2(){
    var a=5;              //here a, b and c are local variables
    const b=5;
    var c=a+b;
    console.log("addition is:-" + c);
}
//function calling
fun2();