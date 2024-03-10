// let cuurentDate = new Date()
// console.log(cuurentDate.toLocaleString()) // agr hum ise backtick  me use kare to ye toString wala result dega aur type undefined  hho jayyegi ..
// console.log(` to srting method = ${cuurentDate.toString()}`)
// console.log(` to DateString method = ${cuurentDate.toDateString()}`)
// console.log(` to ISOString method = ${cuurentDate.toISOString()}`)
// console.log(` to JSON method = ${cuurentDate.toJSON()}`)
// console.log(` to LocaleDateString method = ${cuurentDate.toLocaleDateString()}`)
// console.log(` to LocaleString method = ${cuurentDate.toLocaleString()}`)
// console.log(` to LocaleTimeString method = ${cuurentDate.toLocaleTimeString()}`)
let myDate = new Date(2004, 8, 21, 4 ,20 , 25)
// console.log(myDate.toLocaleString())
// myDate = new Date("01-15-2010")
// console.log(myDate.toLocaleString())

// ************************Time stamp************************
// let mytimeStamp = Date.now()
// console.log(mytimeStamp)
// console.log(Math.floor(mytimeStamp/1000))
// console.log(myDate.getTime())

myDate.toLocaleString("default",
    {
weekday:"long",
month:"long"
    }
)

console.log(myDate.toLocaleString())
