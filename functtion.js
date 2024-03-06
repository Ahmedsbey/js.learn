/*console.log("my name  is Ahmad")
console.log("my name  is Aadil")
console.log("my name  is nasir")
console.log("my name  is Ahmad raza")
*/
function intro(name){
    console.log("my name  is "+name)
    console.log("my name  is "+name)
    console.log("my name  is "+name)
    console.log("my name  is "+name)
}
// intro("ahmad")

function sum(a,b=0,c=1) {
    return a+b +c
}
result = sum(1,2,3)
// console.log(result)


// this is arrow function
const func1 = (a,b,c)=>{
    return a+b +c
}

fun=func1(2,2,2)
console.log(fun)