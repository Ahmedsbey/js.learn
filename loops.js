for (let i = 0; i<100; i++){
// console.log(i)
}
let a = 1
// while (a<100) {
//     console.log(a)
//     a++
// }

do {
    // console.log(a)
    a++
} while (a<100);

// for of loop on aaray
let numbers = [11,2,3,44,]
for (const num of numbers) { 
  //  console.log(num)
}



// for of loop on obj     ******not working*******
let ofObj = {
  Name:"ahmad",
  Age  : 18
}
// for (const _obj of ofObj) { 
  // console.log(_obj[ofObj])
// }




// for in loop on OBJ
let myObj  = {
    Name:"ahmad",
    Age  : 18
}

for (const key1 in myObj) {
 //  console.log(`${key1} : ${myObj[key1]}`)
}


// for in loop on array
let myarr =['ddf',455,4446,"dsff"]
for (const key in myarr) {
 //console.log(myarr[key])
}




// ForEach Loop  *8********8******8**8*****
let coding = ["Python","Js","Java","Ruby"]
coding.forEach(function (codName) {
 // console.log(codName)
})


coding.forEach(codList)

function codList(val){
 // console.log(val)
}

coding.forEach((item, inde,  arr) => {
 // console.log(item, inde,  arr)
})


let programmes = [
  {
    LangName : "Python",
    LangShrt : "Py"
  },
  {
    LangName : "Javascript",
    LangShrt : "Js"
  },
  {
    LangName : "Java",
    LangShrt : "Java"
  }
]

programmes.forEach((item) =>{
console.log(item.LangName)
}
  
)