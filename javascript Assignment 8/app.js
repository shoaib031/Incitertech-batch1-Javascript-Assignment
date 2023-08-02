// CREATE A BLOCK OF CODE THAT YOU CAN USE SEVERAL TIMES.

// function inciterTech(){
//  document.write("hello world")
// }
// inciterTech();
// inciterTech()

// WRITE A FUNCTION THAT DISPLAY CURRENT DATE AND TIME IN YOUR BROWSER.

// function dateAndTime(){
//     var now = new Date();
//     document.write(now.getDate() + "<br>");
//     document.write(now.getHours() + " : " + now.getMinutes() + " : " + now.getSeconds());
// }
// dateAndTime();

// WRITE A FUNCTION THAT TAKES FIRST & LAST NAME AND THEN IT GREETS THE USER USING HIS FULL NAME.

// function greetUser(firstName, lastName) {
//     return 'Hello, ' + firstName + ' ' + lastName + '!';
//   }
//   let firstName = 'John';
//   let lastName = 'Doe';
//   let greeting = greetUser(firstName, lastName);
//   console.log(greeting); // Outputs: "Hello, John Doe!"
     
// WRITE A FUNCTION THAT ADDS TWO NUMBERS (INPUT BY USER) AND RETURNS THE SUM OF TWO NUMBERS.

// function addNumbers(){
//     let Num1 = Number(prompt("Enter the first number"));
//     let Num2 = Number(prompt("Enter the last number"));
//     let total = Num1 + Num2;
//     return total;
// }
// let result = addNumbers();
// document.write(result);

// WRITE A FUNCTION THAT TAKES THREE ARGUMENTS NUM1, NUM2 & OPERATOR & COMPUTE THE DESIRED OPERATION. RETURN AND SHOW THE DESIRED RESULT IN YOUR BROWSER

// function calculate(num1, num2, operator) {
//     let result;
  
//     switch (operator) {
//       case "+":
//         result = num1 + num2;
//         break;
//       case "-":
//         result = num1 - num2;
//         break;
//       case "*":
//         result = num1 * num2;
//         break;
//       case "/":
//         result = num1 / num2;
//         break;
//       default:
//         result = "Invalid operator";
//     }
  
//     document.write(result);
//     return result;
//   }
//   calculate(5, 10, "+"); 
// calculate(20, 5, "*");
// calculate(10, 2, "/"); 

// WRITE A FUNCTION THAT SQUARE ITS ARGUMENT.

// function square(number) {
//     return number * number;
//   }
//   console.log(square(5)); 
//   console.log(square(7)); 
//   console.log(square(-3));  

// Write a function that take start and end number as inputs & display counting in your browser.

// function count(startNumber, endNumber) {
//     for (let i = startNumber; i <= endNumber; i++) {
//       document.write(i + "<br>");
//     }
//   }
//   count(1, 10); 
// count(5, 15); 

// WRITE A FUNCTION THAT WRITES VARIABLE LENGTH ARGUMENTS LIST IN YOUR BROWSER.

// function length(param1 , param2){
// document.write(length.length)
// }
// length();

// WRITE THE FUNCTION THAT ACCEPTS ANY NUMBER OF ARGUMENTS AND FIND THE LARGEST NUMBER OF THE ARRAY

// function largest(){
//     var large = arguments[0];
//     for(var i = 1; i < arguments.length; i++){
// if(arguments[i] > large)
// large = arguments[i];
//     }
//     return large;
// }
// largest(1,5,4,3,2);
// document.write(largest);

// WRITE A FUNCTION THAT CALCULATES THE AREA OF A TRIANGLE .

// function calculateTriangleArea(base, height) {
//     return 0.5 * base * height;
//   }
//   calculateTriangleArea(10, 5); 
    
// WRITE A FUNCTION THAT RECEIVES AN ARRAY & RETURNS THE SORTED ARRAY.

// function sortArray(array) {
//     return array.sort();
//   }
//   sortArray([5, 2, 8, 1, 4]); 

// WRITE A FUNCTION THAT TAKES NUMBER ARRAYS SUMS ITS ELEMENT AND RETURN THE SUM

// function sumArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//     return sum;
//   }
//   sumArray([1, 2, 3, 4, 5]); 
    
// Execute & monitor the output of following JS program:

// var param = function inner() {
//     return typeof inner;
//   }
//   console.log(param()); 
//   console.log(typeof inner); 
    
// Write a function that computes power of a number. E.g. 2

// function computePower(base, exponent) {
//     return Math.pow(base, exponent);
//   }
//   computePower(2, 3); 

// Write a function that simulates a dice & returns a random dice value.

// function rollDice() {
//     return Math.floor(Math.random() * 6) + 1;
//   }
//   rollDice(); 

// WRITE A JAVASCRIPT FUNCTION THAT REVERSE A NUMBER. EXAMPLE x =32243;

// function reverseNumber(number) {
//     return parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number);
//   }



  