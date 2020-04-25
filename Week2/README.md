## Variables - Primitive Types
- similar to algebra where a variable represents a number
- in program a variable can store different data types in memory
- JavaScript has 5 different primitive types 
    - number, string, Boolean, null, undefined
    - number examples: 1, 3000, 3.567
    - string examples: 'John', 'This phrase', '3000', "John", "This", "3000"
    - boolean: true, false
    - null
    - undefined:  more about this when we get to objects
```
    let firstName = "John"
    let age = 43
    let isOldEnough = true
    let isYoungMan = false

    age = age + 5
    let fullName = firstName + " " + "smith"

```
## Functions

- a function example
```
//All functions in javascript start with the word function
//they are followed by a name e.g. do something
//they are then followed by curly braces
//let's call the lines in between the opening and closing curly
//the body
//the body is where a function does all the work
//a functiona may have parameters. In this case a and b variables
//this function takes the value of a an b... adds them and returns 
//their sum
function doSomething(a,b){
    return a + b
}
```
- A function is only executed if it is called
to call the function above we can do this
```
let x = doSomething(3,4)

let a = 10
let b = 20
let c = doSomething(a,b)
```

- Functions are a way to prouce reusable code.... for example 
we can resuse the function doSomething above like this

```
let sum1 = doSomething(5,4)
console.log(sum1)

let sum2 = domething(100,50)
console.log(sum1)

//best to be aware that params should be of a known expected type
//so.. don't do this...
//but JS let's you do it
let fullname = doSomething("John", "Smith")
console.log(sum2)

```

## Decisions

## Objects

## Homework