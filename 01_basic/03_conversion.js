let score = "23abc"
console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);

let score1 = null
console.log(typeof score1)
console.log(typeof (score1))
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1);

let score2 = undefined
console.log(typeof score2)
console.log(typeof (score2))
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2);


let score3 = true
console.log(typeof score3)
console.log(typeof (score3))
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3);

//"33" => 33
// "33abs" => NaN
// true => 1, false => 0
// 1=> true, 0 => false
// "" => false
// "harsh" => true

let isLoggedIn = 1
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)

let someNum= 33
let stringnum=String(someNum)
console.log(typeof someNum)
console.log(typeof stringnum)