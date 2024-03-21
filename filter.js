let coding = [1,2,3,4,5,6,7,8,9,10]
// ["Python","Js","Java","Ruby"]
let codmap = coding.map((value)=> value +  5)
// console.log(codmap)

let cod = coding.filter( (item)=> {
return item >  4
})
//console.log(cod)

// ^ uper  waale ka alternate  from foreach  loop
let codPush = []
coding.forEach((val) => {
    if(val > 4){
codPush.push(val)
    }
});
// console.log(codPush)


let books = [
    {
        Name :"Book1",
        Genre : "History",
        Edition : 2010,
        Publish : 1990
    },
    {
        Name :"Book2",
        Genre : "Science",
        Edition : 2010,
        Publish : 1999
    },
    {
        Name :"Book3",
        Genre : "Hindi",
        Edition : 2009,
        Publish : 1980
    },
    {
        Name :"Book4",
        Genre : "Science",
        Edition : 2000,
        Publish : 1990
    },
    {
        Name :"Book5",
        Genre : "Hindi",
        Edition : 2015,
        Publish : 2000
    },
    {
        Name :"Books6",
        Genre : "Maths",
        Edition : 2010,
        Publish : 1994
    },
    {
        Name :"Book7",
        Genre : "History",
        Edition : 2011,
        Publish : 1998
    },
    {
        Name :"Book8",
        Genre : "Maths",
        Edition : 2004,
        Publish : 1995
    }
]

let userbooks = books.filter((flbook)=>{
return flbook.Genre === "Science" && flbook.Publish > 1995
})
// console.log(userbooks)

//Chaining ******************************8******************

let numbers  = [1,2,3,4,5,6,7,8,9,10]

let numChaining = numbers
                      .map((num)=> (num *10))
                      .map((num) => (num * 1))
                      .filter((num) => ( num > 50))

// console.log(numChaining)

let reducenum = [1,2,3,4,5]

let reducefunc =  reducenum.reduce(
    function(acc, cuurntnum){
      return  acc + cuurntnum
    },0
)