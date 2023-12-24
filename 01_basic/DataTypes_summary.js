// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 1
const name = "Harsh"
const isLoggedIn = true
const outsideTemp = null  // output=>object
let userEmail = undefined
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
const bigNumber = 2165126598156n


// Reference (Non primitive)
// Array, Objects, Functions 

//Array
const cars = ["Swift", "Alto", "BMW", "Audi"]
let myObj = {
    name: "Harsh",
    age: 20,
}

//Function
const myFunction= function(){
    console.log("Hello Harsh")
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)