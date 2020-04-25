
/*
    Complete the assignments below.
    They are labeled Assignment 1, Assignment 2 and Assignment 3...
    Run your code by opending the terminal from the VS Code menu
    In the terminal enter -> node homework.js
    That should run your code.

   
    Create all the code below according to the instructions
    Once you are doen copy the output and past it to the bottom of this
    script.
    Add, Commit and Push to push your changes to github

    Modify the code only where it says add your code here
    Your output should look like this
    Test 1.1 PASSED!
    Test 1.2 PASSED!
    Test 1.3 PASSED!
    Test 1.4 PASSED!
    Test 2.1 PASSED!
    ...

    If any of your tests fail keep working at it until all your tests pass

*/

/*
    Assignment 1:
    Fix this function so that it compares a b and and returns the lowes of 
    the three numbers... you will have to do multiple if statements
*/
function findSmallestOfThreeNumbers(a, b, c){
    
    //Add your code here
}

if( 1 == findSmallestOfThreeNumbers(1,2,3)){
    console.log("Test 1 PASSED!")
}
else{
    console.log("Test 1 FAILED!")
}

if( 2 == findSmallestOfThreeNumbers(110,2,300)){
    console.log("Test 1 PASSED!")
}
else{
    console.log("Test 1 FAILED!")
}

if( 1 == findSmallestOfThreeNumbers(100,2,1)){
    console.log("Test 3 PASSED!")
}
else{
    console.log("Test 3 FAILED!")
}

if( 3 == findSmallestOfThreeNumbers(3,3,3)){
    console.log("Test 4 PASSED!")
}
else{
    console.log("Test 4 FAILED!")
}

/**
 * Assignment 2
 * Fix this function so that it returns a formmatted name in the format
 * lastName, firstName
 * for example formatName("jane", "doe") returns "doe, jane"
 * @param {*} firstName 
 * @param {*} lastName 
 */
function formatName(firstName, lastName){
    //Assignment 1
    //add your code here
    
}

let firstName = "John"
let lastName = "Smith"
let formattedName = formatName(firstName, lastName)

if("Smith, John".localeCompare(formattedName) == 0){
    console.log("Test 2.1 PASSED!")
}
else{
    console.log("Test 2.1 FAILED")
}

/*
    Assignment 3
    Create a function that prints the following information
    Name: First Name Last Initial
    Hobbie: Favorite Hobby
    Home State:  Home State

    Replace the values with your name, your hobby and your home state
    Call the function to produce the output

    The function does not need any parameters... you can hard code the output
*/
