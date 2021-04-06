//export array of object
let z = [
        {    //properties
            //P:V
            name :"pushpita",
        
            //method
            getmyname:()=>{
                return this.name;
            }
            
        },
        {     //properties
            surname : "rathore",
            //method
            getMySurname:()=>{
                return this.surname;
            }
        }
    ];
    module.exports = z;