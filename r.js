//array introduction
var x = [
    "pushpita",  //string
    21,         //integer
    5.3,          //float
    ["namrata", "yuvraj"],   //array
   /* [
        {
            //properties
            fathorename: "virendra singh",
            mothername: "nirmala rathore",
            //methods
            getfathorename: function () {
                return this.fathorename;

            }
        }
    ] */     //array of object
];
//console.log(x[4][0].getfathorename());
//console.log(x[3][0]);
x.forEach(hello);
function hello(a){
    console.log(a);
}

