//normal function
function myFun1(n){
    return `hello ${n} good morning`;
}
let x = myFun1("pushpita");
console.log(x);
//fat arrow function
const myFun2 =(m)=>{     //formal argument
     return `hello ${m} good mrning again`;
}
var y = myFun2("pushpita");   //actual argument
console.log(y);
//2. fat arrow function
const hello =()=>{
    console.log("good morning everyone");
}
hello();
//3. fat arrow function
const addition=(a,b) =>{
    console.log(`addition is  ${a+b}`);
}
addition(4,6);
//4.fat arrow function
const subtraction=(a,b) =>{     //a and b are formal argument
    return `subtraction is ${a-b}`;
} 
var z = subtraction(10,5);    //actual argument
console.log(z);
//5. fat function
const percentage=(p)=>{
    console.log(`percentage is  ${p/3}`);
}


const total=(p,c,m)=>{
    return(p+c+m);

}
let t = total(45,78,89);
console.log(t);
return percentage(t);



