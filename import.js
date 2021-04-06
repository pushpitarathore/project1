//import function
//const hello= require("./export");
//console.log(hello());
const x = require("./export2");
console.log(x);
let y = new x();
const z =y.getMyName();
console.log(z);