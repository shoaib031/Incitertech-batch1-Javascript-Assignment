// 1. Write a switch statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".

// switch (true) {
//     case age > 18:
//       document.write("Old enough");
//       break;
//     default:
//       document.write("Too young");
//   }

// 2. Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
//  message “Number is not divisible by 3” or “Number is divisible
// by 3”.

//  var whether = prompt("Enter the number")
//   switch (whether % 3){
//       case 0:
//         document.write("Number is divisible by 3");
//         break;
//         default:
//             document.write("Number is not divisible by 3")
//       }

// 3 . Write a program to create a calculator for +, -, *, /, % using
// switch case statements. (number1, number2 and operator will
// be input)

// let number1 = parseFloat(prompt("Enter the first number:")); 
// let number2 = parseFloat(prompt("Enter the second number:")); 
// let operator = prompt("Enter the operator (+, -, *, /, %):"); 

// let result; 

// switch (operator) {
//   case '+':  
//     result = number1 + number2;
//     document.write("Result: " + result);
//     break;
//   case '-':  
//     result = number1 - number2;
//     document.write("Result: " + result);
//     break;
//   case '*':  
//     result = number1 * number2;
//     document.write("Result: " + result);
//     break;
//   case '/':  
//     result = number1 / number2;
//     document.write("Result: " + result);
//     break;
//   case '%':  
//     result = number1 % number2;
//     document.write("Result: " + result);
//     break;
//   default:
//     document.write("Invalid operator!");
// }

// 4 . The getDay() method returns the weekday as a number
// between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 ...).
// Use the weekday number to calculate weekday name.

// let weekdayNumber = new Date().getDay(); 

// let weekdayName;

// switch (weekdayNumber) {
//   case 0:
//     weekdayName = "Sunday";
//     break;
//   case 1:
//     weekdayName = "Monday";
//     break;
//   case 2:
//     weekdayName = "Tuesday";
//     break;
//   case 3:
//     weekdayName = "Wednesday";
//     break;
//   case 4:
//     weekdayName = "Thursday";
//     break;
//   case 5:
//     weekdayName = "Friday";
//     break;
//   case 6:
//     weekdayName = "Saturday";
//     break;
//   default:
//     weekdayName = "Invalid weekday number";
// }

// document.write("Today is " + weekdayName);

// 7. Fix the following switch statement:

// function checkFruit() {
//     var text;
//     var fruits = prompt("Enter a fruit name");
//     switch(fruits) {
//     case 0 :"Banana";
//     text = "Banana is good!";
//     break;
//     case 1 : "Orange";
//     text = "I am not a fan of orange.";
//     break;
//     case 2 : "Apple";
//     text = "How you like them apples?";
//     break;
//     default :
//      text = "I have never heard of that fruit.";
// }
// document.write( text);
// }
// checkFruit();

// 8 . Write a function that displays the marks range against a
// particular grade. For example, if grade is “B”, then print Marks [
// >= 60 and <70 ]

// function displayMarksRange(grade) {
//     let marksRange;
  
//     switch (grade) {
//       case 'A':
//         marksRange = "[>= 90 and < 100]";
//         break;
//       case 'B':
//         marksRange = "[>= 80 and < 90]";
//         break;
//       case 'C':
//         marksRange = "[>= 70 and < 80]";
//         break;
//       case 'D':
//         marksRange = "[>= 60 and < 70]";
//         break;
//       case 'E':
//         marksRange = "[>= 50 and < 60]";
//         break;
//       case 'F':
//         marksRange = "[< 50]";
//         break;
//       default:
//         marksRange = "Invalid grade";
//     }
  
//     document.write("Marks Range: " + marksRange);
//   }
  
//   displayMarksRange('B');
  
// 9 . Use a switch statement to rewrite the following JavaScript
// code. Prompt the user for the number of a month rather than
// setting it to 8:

// let monthNumber = parseInt(prompt("Enter the number of a month:"));

// let monthName;

// switch (monthNumber) {
//   case 1:
//     monthName = "January";
//     break;
//   case 2:
//     monthName = "February";
//     break;
//   case 3:
//     monthName = "March";
//     break;
//   case 4:
//     monthName = "April";
//     break;
//   case 5:
//     monthName = "May";
//     break;
//   case 6:
//     monthName = "June";
//     break;
//   case 7:
//     monthName = "July";
//     break;
//   case 8:
//     monthName = "August";
//     break;
//   case 9:
//     monthName = "September";
//     break;
//   case 10:
//     monthName = "October";
//     break;
//   case 11:
//     monthName = "November";
//     break;
//   case 12:
//     monthName = "December";
//     break;
//   default:
//     monthName = "Invalid month number";
// }

// document.write("Month: " + monthName);

// DO THE FOLLOWING EXERCISES USING
// WHILE & DO-WHILE LOOPS:

// 11. Write a program to display the message “Hello World” 5
// times in your browser.

// var a = 1;
// do{
//     document.write("Hello World <br>")
//     a = a + 1;
// }while(a <= 5);

// 12. Write a program to print numeric counting from 1 to 10.

// var a = 1;
// do{
// document.write(a + "<br>")
// a = a + 1
// }while(a <= 10);

// 13. Write a program to print multiplication table of any number
// using. Table number & length should be taken as an input from
// user.

// let tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
// let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));
// for (let i = 1; i <= tableLength; i++) {
//   let result = tableNumber * i;
//   document.write(tableNumber + " x " + i + " = " + result + "<br>");
// }

// 14. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line.

// let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// for (let i = 0; i < A.length; i++) {
//   document.write(A[i] + "<br>");
// }

// 15. Write a program to print items of the following array:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br>");
// }

// 16. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.       

// var program = prompt("Enter number of items");
// var keyboard = prompt("Enter the value for index 0");
// var mouse = prompt("Enter the value for index 1");
// var flashDrive = prompt("Enter the value for index 2");
// var cpu = prompt("Enter the value for index 3");
// document.write("Number of items : " + program + "<br>" + "Items : " + "<br>" + "<br>");
// document.write(keyboard + "<br>" + mouse + "<br>" + flashDrive + "<br>" + cpu);

// 17. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write("Counting : ");
// for(var i = 0; i <= 15; i++){
//     document.write(i + ",");
// }
// document.write("Reverse Counting : ");
// for(var i = 10; i >= 1; i--){
//     document.write(i + ",");
// }
// document.write("Even : ");
// for(var i = 0; i <= 20; i += 2 ){
// document.write(i + ",")
// }
// document.write("odd : ");
// for(var i = 1; i <= 19; i += 2){
//     document.write(i + ",")
// }
// document.write("Series : ");
// for(var i = 0; i <= 20; i += 2){
//     document.write(i + "k" + ",")
// }

// 18. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var arr = prompt("Welcome to ABC bakery. what do you want to order sir/ ma'am?");
// if(arr == "cookie"){
// document.write("cookie is <b> available </b> at index 2 in our bakery")
// }else{
//     document.write("we are sorry " + arr + " is <b> not available </b> in our bakery")
// }
    
// 20. Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34

// var scores = [12, 45, 3, 22, 34, 50];
// var stopValue = parseInt(prompt("Enter the stop value:"));
// var output = [];

// for (let i = 0; i < scores.length; i++) {
//   output.push(scores[i]);
//   if (scores[i] === stopValue) {
//     break;
//   }
// }
// document.write(output.join(", "));

// 21. You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested loops.

// 22. Write a program to repeatedly print the value of the variable
// num which is input by user. Value should be decreasing by 0.5
// each time, as long as x Value remains positive.

// var num = parseFloat(prompt("Enter the number"));
// while(num > 0){
//     document.write(num)
//     num -= 0.5;
// }

// 23. The even/odd reporter
// Write a loop that will iterate from 0 to 20. For each iteration, it
// will check if the current number is even or odd, and report that
// to the screen (e.g. "2 is even").

// for(var i = 0; i <= 20; i++){
//     if(i % 2 == 0){
// document.write(i + " is even " + "<br>")
//     }else{
//         document.write(i + " is odd " + "<br>")
//     }
// }

// 25. Write a program that will write out a wedge of stars. The user
// will enter the initial number of stars, and the program will write
// out lines of stars where each line has one few star than the
// previous line. Initial number of stars: 7

// for(var a = 8; a >= 1; a--){
//   for(var b = 1; b <= a; b++){
//    document.write("*")
// }
// document.write("<br>")
// }0

// 26. Write a program to create the following patterns in your
// browser. Take number of lines as an input.

// var lines = parseInt(prompt("Enter the number of lines:"));
// for (var i = 1; i <= lines; i++) {
//   var pattern = "";
//   for (var j = 1; j <= i; j++) {
//     pattern += "* ";
//   }
//   document.write(pattern + "<br>");
