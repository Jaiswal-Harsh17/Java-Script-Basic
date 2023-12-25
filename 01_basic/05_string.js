const name = "Harsh "
const repoCount = 50

// console.log(name + repoCount + " Value")
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const game = new String('tekken3-aka5')

// console.log(game[0])
// console.log(game.__proto__)

// console.log(game.length)
// console.log(game.toUpperCase())
// console.log(game.charAt(3))
// console.log(game.indexOf("k"))

const newString = game.substring(0, 4)
// console.log(newString)

const anotherString = game.slice(2, 5)
// console.log(anotherString)

const newString1 = "    Harsh     "
// console.log(newString1)
// console.log(newString1.trim())

const url = "https://harsh.com/harsh%20jaiswal"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))//checks whether it is present or not.

console.log(game.split('-')) // Seperate and makes an Array


