// comment
// Datatypes
// string
// integer
// float
// boolean
// array
// hash / objects
// date etc.
// null
// undefined
// NAN -  not a number
// operators 
//  PEMDAS 
// + - * / % ( )
// comparators
// < > == === != !== >= <=   
// Logical Operators
//  && || 
// variables 
// name can contain letters, nums, underscores and $
// must start with letter , $, _
// names are case sensitive
// reserve word 
// descriptive
// var name = 'bob'
// var Name = 'joe'
// var firstName = 'bob'
//  num + num2
// name = ['food']
// var greeting = 'hi'
// var planet = 'Earth'
// var peom = " Roses are red \n"
// &nbsp;
// console.log(greeting + " " + planet)
// console.log(peom)
// console.log(planet.length)
// console.log(planet.charAt(2))
// console.log(planet.charAt(20))
// console.log(planet.charAt(-20))
// var num = Number("1")
// var num = Number("1.5")
// var num = Number("1.5a")
// var num = parseInt("1.9")
// var num = parseInt("1a2")
// var num = parseFloat("1.9")
// var num = parseInt("1a2")
// console.log(num.toString())
// var num = 5.291
// console.log(num.toFixed(1))
// console.log(num.toFixed(5))
// console.log(num.toPrecision(1))
// Math.min
// Math.max
// Math.round
// Math.floor  - round down
// Math.ceil   - round up
// Math.pi
// console.log(Math.floor(2.9))
// function
function cl(input) {
  console.log(input)
}
// cl(Math.floor(2.9))
// Array 
// var arr = [ 'jill', 2, 'rick' ]
// java INT arr [2, 3, 3]
// cl(arr[2])
// var colors = ["red", "green", "pink"]
// cl(colors.indexOf("red"))
// cl(colors.indexOf("black"))
// cl(colors.includes("black"))
// cl(colors.join("~"))
// cl(colors.push("black"))
// cl(colors.unshift("black"))
// cl(colors.pop())
// cl(colors.slice(3))
// cl(colors)
// cl(colors.length)
// cl(colors.reverse())
// Loops
// var fruits = ["apple", "pear", "blueberry"]
// for(var i = 0; i < fruits.length; i++) {
//   cl(fruits[i])
// }
// fruits.forEach( function(f) {
//   cl(f)
// })
// for ( let f of fruits) {
//   cl(f)
// }
// fruits.map( function(f) {
//   cl(f)
// })
// var nums = [ 2, 3, 4, 5, 6, 11 ]
// var evens = nums.filter( function(num) {
//   return num % 2 === 0
// })
// console.log(evens)
// var sum = nums.reduce( function(total, num) {
//   return total + num
// }, 0)
// cl(sum)
// Object
// Hash
// JSON
// Class
// var person = { firstName: 'bob', age: 29 }
// cl(person['age'])
// cl(person.age)
// cl(person.firstName)
// cl(person.age = 45)
// cl(person)
// var vehicles = {
//  cars: [
//    { make: 'Chevrolet', model: 'Malibu' },
//    { make: 'Ford', model: 'Focus' }
//  ],
//  trucks: [
//    { make: 'Chevrolet', model: 'Silverado' },
//    { make: 'Toyota', model: 'Tacoma' },
//    { make: 'Ford', model: 'F-150' }
//  ]
// }
// cl(vehicles.trucks[2].model)
// JSON Javascript Object notation
// {
//   "firstName": "John",
//   "lastName": "Doe"
// } 
// person.firstName
// var person = JSON.parse(object);