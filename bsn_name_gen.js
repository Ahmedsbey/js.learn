/* Adjectives:
Crazy Engine Bros
Crazy Foods Limited
Crazy Garments Hub

Crazy Foods Bros
Crazy Garments Limited
Crazy Engine Hub


Crazy Engine Limited
Crazy Foods Hub
Crazy Garments Bros

Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
 */

let random = Math.floor(Math.random()*10)
let fname = "Crazy Amazing Fire" 
let mname = "Engine Foods Garments" 
let lname = "Bros Limited Hub"   


//1
if(random<=3){
     fname="Crazy"
}else if(random<=6){
    fname="Amazing"
}else{
    fname="Fire"
}




//2
random = Math.floor(Math.random()*10)
if(random>=7){
    mname="Engine"
}else if(random>4){
   mname="Foods"
}else{
   mname="Garments"
}



//3
random = Math.floor(Math.random()*10)
if(random<=3){
    lname="Bros"
}else if(random<=8){
   lname="Limited"
}else{
   lname="Hub"
}

console.log(`your buisness name is ${fname} ${mname} ${lname}`)
// console.log(lname.slice())
// if(random<3){
// console.log(`your buisness name is ${fname.slice(0,5)} ${mname.slice(0,6)} ${lname.slice(0,4)}`)
// }else if(random<6){
//     console.log(`your buisness name is ${fname.slice(6,13)} ${mname.slice(7,13)} ${lname.slice(5,12)}`)
// }else if(random<9){
//     console.log(`your buisness name is ${fname.slice(14,18)} ${mname.slice(13,21)} ${lname.slice(13,16)}`)
// }else{
//     console.log(`your buisness name is ${fname.slice(0,5)} ${mname.slice(7,13)} ${lname.slice(13,16)}`)
// }