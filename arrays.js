// let a = [11,2,3,4,5]

// for(let l = 0; l < a.length; l++){
//     const r = a[l]
//     console.log(r)
// }

// a.forEach((value,index,arr)=>{
// console.log(value,index,arr)
// }
// )

// let obj = {
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in obj) {
//     if (obj.hasOwnProperty.call(obj, key)) {
//         const element = obj[key]; 
//         console.log(element,key)
//     }
   
// }


// for (const iterator of a) {
//     console.log(iterator)
// }
// ******************Ch Arrays******************
// let ah = [1,2,3,4,5]
// let ah1 = [6,7,8,9,10]
// console.log(ah.push(ah1))
 
// let con = ah.concat(ah1)
// console.log(con)

// let add = [...ah,...ah1]
// console.log(add)

let jam = [11,2,3,[4,6,7,[5,4]],6,8,[5,7,9]]
// let jamFlat = jam.flat(2)
console.log(jam.flat(Infinity))