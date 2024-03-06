let a = [11,2,3,4,5]

for(let l = 0; l < a.length; l++){
    const r = a[l]
    console.log(r)
}

a.forEach((value,index,arr)=>{
console.log(value,index,arr)
}
)

let obj = {
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
        const element = obj[key]; 
        console.log(element,key)
    }
   
}


for (const iterator of a) {
    console.log(iterator)
}

