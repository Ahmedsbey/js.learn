function adding(num1,num2){
return num1 + num2
}
console.log(adding(1,2))

function isLoggedIn(Username){
    if(!Username){
console.log('please enter a Username')
return
}
return `${Username} just Logged in`
}
console.log(isLoggedIn("Ahmad"))

function Multiples_Num(...num1){
    return num1
}
console.log(Multiples_Num(1,2,3))



let obj1 = {
    Name : "Ahmad Raza",
    Age : 19
}
function callObj(object) {
    return object
}
console.log(callObj(obj1.Age))

console.log(callObj(
    {Name : "Aadil Raza",
    Age : 10}
))
  
let arr1 = [3,5,6,77,47]
function callArr(Array){
return Array
}
console.log(callArr(arr1[1]))

console.log(callArr(
    [1,2,3,4,]
))



// Ways to write arrow function
let arrfunc = (a,b)=>{
    return a+b
}

let arrfun1 = (a,b)=> a+b

let arrfun2 = (a,b) => (a+b)

let arrfun3 = () => ({ Username:'Ahmad'})
console.log(arrfun3())


// Immedieatly Invoked Function Expressiions 
         // *****8**************!Problem  yee yaha exceuted nahi ho raha********8*8***8*8****
( (name) => {
    console.log(`IiFEJ ${name}`);
} )('Ahhmmad');

