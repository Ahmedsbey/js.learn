let n = "Ahmad"
console.log(n[0])
console.log(n[1])
console.log(n[2])
console.log(n[3])
console.log(n[4])
console.log(n.length)


// Template litrals
let name1 = "    Ahmad 5   "
let age = 19
console.log(`you name is ${name1} and your age  is ${age}`);
console.log(name1.toUpperCase())
console.log(name1.toLowerCase)
console.log(name1.length)
console.log(name1.slice(1,4)) 
console.log(name1.slice(1))
console.log(name1.replace("Ah","Moham"))
console.log(name1.concat(n," Raza"))
let name2 = name1.trim()
console.log(name2)

const Newstr = String("Aadil") 
console.log(Newstr.__proto__)

// charAt and at both used for similar purpose but at prototype is more flexible because its supports negative value as you can see:
console.log(Newstr.charAt(3))
console.log(Newstr.charAt(-2))
console.log(Newstr.at(-2))


console.log(Newstr.charCodeAt(0)) 
for( code = 0; code < Newstr.length  ; code++){
    console.log(Newstr[code].charCodeAt().toString())
}
console.log(Newstr.codePointAt(3))


console.log(
  `  ${Newstr.endsWith("i",4)}`
  )
