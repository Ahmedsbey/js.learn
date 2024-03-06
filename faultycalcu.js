let maths1 = Math.random()

console.log(maths1)

let a = prompt("Enter first number")
let b = prompt("Enter symbols")
let c = prompt("enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
if (maths1 > 0.1) {
    alert(`the ${eval(`${a} ${b} ${c}`)}`)
} else {
    c = obj[c]
    alert(`the ${eval(`${a} ${b} ${c}`)}`)
}