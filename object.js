let mySym = Symbol("Sym1")
let obj1 = {
    Name : "Ahmad",
   "Full Name": "Ahmad Raza",
    Age :19,
    "Address":"Ajmer",
    [mySym] : "hdfhj"
}


// console.log(obj1.Name)
// console.log(obj1.Age)
// console.log(obj1.Address) 
// console.log(obj1["Full Name"])
// console.log(obj1[mySym])
// console.log(typeof obj1[mySym])

obj1.greeting = function(){
    console.log(`Js user ${this["Full Name"],this.Age}`)
}
// console.log(obj1.greeting())

const {Age} = obj1;
const {Age : Ag} = obj1;
console.log(Ag)