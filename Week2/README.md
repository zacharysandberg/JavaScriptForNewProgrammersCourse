## Variables - Primitive Types
- similar to algebra where a variable represents a number
- except that unlike algebra in most cases the value of our variable the value is known... i.e. we are not solving for the value but 
instead holding the value so that we can use it
- variables are the how programs stored data in a computer program
- variables can hold very little data in size or very large
- in a program a variable can store different data types in memory
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

- functions are a small block of resuable code
- they also serve as abstraction
- functions should have verb names (e.g. printReport, translate, filter)
- function may compute a value and return the result
- or the may just do some work
- it is best that a function does either one thing or the other (query, command)
- functions should have a good name that tells you what they do
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

- Functions are a way to produce reusable code.... for example 
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
- In order for programs to have any inteligence they must be able
  to make decisions
- Javascript has the if,else if, and else statements to make decisions
- The decisions should resolve to a boolean condition
- examples:  age > 43, age === 43, age >= 43, age <= 43, 
- examples with strings;  firstName.compareLocale("john") === 0;

```
let firstName = "john";
let age = 43

if(age >= 43 && firstName.compareLocale("john")){
    console.log("You're too old for this John!")
}
else if(age >= 43 || firstName.compareLocale("steve")){
    console.log(firstName + " you're too old for this!")
}
else if(age > 43{
    console.log("you met the age requirements!")
}
else{
    console.log("not sure what to do here")
}
```
- boolean operators ==, ===, <, >, >=, <=, 
- Condition Join Operators && (AND), || (OR)
 
## Objects

## Homework