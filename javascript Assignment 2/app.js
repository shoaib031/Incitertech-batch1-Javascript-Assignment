// USER INPUT & CONDITIONAL STATEMENTS;

var userName = prompt("Please enter your name");

alert("Hi,"  + userName +"\n\n" +"Prevent this page from creating additional dialogs");

var num = prompt("Enter a number to print its multiplication table");

var num = Number(num);

document.write("<table>");
document.write("<table>" + "Multiplation table of " + num);
document.write("<tr><td>" + num +" x 1 = " + (num * 1) + "<br />" + "</td></tr>");
document.write("<tr><td>" + num +" x 2 = " + (num * 2) + "<br />" + "</td></tr>");
document.write("<tr><td>" + num +" x 3 = " + (num * 3) + "<br />" + "</td></tr>");
document.write("<tr><td>" + num +" x 4 = " + (num * 4) + "<br />" + "</td></tr>");
document.write("<tr><td>" + num +" x 5 = " + (num * 5) + "<br />" + "</td></tr>");
document.write("<tr><td>" + num +" x 6 = " + (num * 6) + "<br />" + "</td></tr>");
document.write("<tr><td>" + num +" x 7 = " + (num * 7) + "<br />" + "</td></tr>");
document.write("<tr><td>" + num +" x 8 = " + (num * 8) + "<br />" + "</td></tr>");
document.write("<tr><td>" + num +" x 9 = " + (num * 9) + "<br />" + "</td></tr>");
document.write("<tr><td>" + num +" x 10 = " + (num * 10) + "<br />" + "<br />" + "</td></tr>");
document.write("</table>");

var city = prompt("Please enter your city");

alert("Welcome to city of light," + city + "\n\n" + "Prevent this page from creating additional dialogs");

var male = prompt();

alert("Good Morning Sir," + male + "\n\n" + "Prevent this page from creating additional dialogs");

var maxAge = 16 ;

var currentAge = 18 ;

var ages = prompt("You are welcome");

console.log( maxAge < currentAge);

var maxAge = 18;

var currentAge = 18;

var ages = prompt("You are welcome");

console.log( maxAge == currentAge);

var number = prompt ("Please refill the fuel in your car");
var number2 = prompt("Please refill the fuel in your car");
var div=(number/4);

document.write("Divide of "+number +" and "+number2+" is "+div +"<br />"+"<br />");

var a = 4;

if (++a === 5){

alert("given condition for variable a is true");

}

var b = 82;

if (b++ === 83){

alert("given condition for variable b is true");

}

var c = 12;

if (c++ === 13){

alert("condition 1 is true");

}

if (c === 13){

alert("condition 2 is true");

}

if (++c < 14){

alert("condition 3 is true");

}

if(c === 14){

alert("condition 4 is true");

}

var materialCost = 20000;

var laborCost = 2000;

var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){

alert("The cost equals");

}

if (true){

alert("True");

}
if (false){

alert("False");

}

if("car" < "cat"){

alert("car is smaller than cat");

}

var marks = "Marks Sheet";

document.write( "<b>" +marks+"</b>" + "<br />"+"<br />");

var totalMarks = "Total marks : ";
var number = 300;

document.write(totalMarks + number +"<br />");

var marksObtained = "Marks obtained : ";
var number = 219;

document.write(marksObtained + number + "<br />");

var percentage = "Percentage : ";
var number = 73;
var icon = "%";

document.write(percentage + number + icon + "<br />");

var grade = "Grade : ";
var gradeB = "B";

document.write(grade + gradeB + "<br />");

var remarks = "Remarks : ";
var remaks = "You need to improve";

document.write(remarks + remaks + "<br />" + "<br />");

var shoppingCart = "<b>Shopping Cart</b>";

document.write(shoppingCart + "<br />" + "<br />");

var nameItem1 = "Price of T-Shirt is ";
var priceItem1 = 1000;

document.write(nameItem1 + priceItem1 +"<br />");

var quantityItem1 = "Quantity of T-Shirt is ";
var quantityNum = 2;

document.write(quantityItem1 + quantityNum + "<br />");

var nameItem2 = "Price of USB Flash drive is ";
var priceItem2 = 700;

document.write(nameItem2 + priceItem2 + "<br />");

var quantityItem2 = "Quantity of USB Flash drive is ";
var quantityNum = 3;

document.write(quantityItem2 + quantityNum + "<br />" + "<br />");

var shippingCharges = "Shipping Charges ";
var number = 250;

document.write(shippingCharges + number + "<br />" + "<br />");

var totalCost = "Total cost of your order is ";
var tatalcostNum = 4350 + " PKR";

document.write(totalCost + tatalcostNum +"<br />");

var disCounted = "Discounted Price is ";
var discountedPrice = 3915 + " PKR";

document.write(disCounted + discountedPrice + "<br />" + "<br />");

var number = prompt("Guess game ");
var number = Number(number);

document.write(number + "Bingo! Correct answer." + "<br />" +"<br />");

var num = prompt("Please enter your number");
var num2 = prompt("Please enter your number");

var num = Number(num);
var num2 = Number(num2);

var divide = (num / num2);

document.write("Divide of " + num +" and "+num2 + " is " + div + "<br />" + "<br />");

var teamName = "Team Tigers have won the game \n\n";
var team = "Prevent this page from creating additional dialogs.";

alert(teamName + team);

var string = "Pakistan is a string \n\n";
var sting = "Prevent this page from creating additional dialogs.";
 
alert(string + sting);

var number = "92 is a number \n\n";
var num = "Prevent this page from creating additional dialogs.";

alert(number + num);

var boolean = "true is a boolean \n\n";
var boolan = "Prevent this page from creating additional dialogs.";

alert(boolean + boolan);

var hot = prompt("Karachi nowadays is too hot");
var hot =Number(hot);

document.write("T > " + hot  +" then " +" It is too hot outside." +"<br />");

var normal = prompt("Karachi nowadays is too normal");
var normal = Number(normal);

document.write("T > " + normal +" then " +" The Weather today is Normal." + "<br />");

var cool = prompt("Karachi nowadays is too cool");
var cool = Number(cool);

document.write("T > " + cool +" then " +" Today's Weather is cool." + "<br />");

var soCool = prompt("Karachi nowadays is too so cool");
var soCool = Number(soCool);

document.write("T > " + soCool +" then " +" OMG! Today's weather is so Cool." + "<br />" + "<br />");

var firstNumber = 2;
var secondNumber = 8;
var numbers = 2+8;

alert("2 " + "+" + " 8 " + " is " + numbers + "\n\n" + "Prevent this page from creating additional dialogs");

var firstNumber = 8;
var secondNumber = 2;
var numbers = 8-2;

alert("8 " + "-" + " 2 " + " is " + numbers + "\n\n" + "Prevent this page from creating additional dialogs");

var firstNumber = 2;
var secondNumber = 8;
var numbers = 2*8;

alert("2 " + "*" + " 8 " + " is " + numbers + "\n\n" + "Prevent this page from creating additional dialogs");

var firstNumber = 2;
var secondNumber = 8;
var numbers = 2/8;

alert("2 " + "/" + " 8 " + " is " + numbers + "\n\n" + "Prevent this page from creating additional dialogs");

var firstNumber = 2;
var secondNumber = 8;
var numbers = 2%8;

alert("2 " + "%" + " 8 " + " is " + numbers + "\n\n" + "Prevent this page from creating additional dialogs");

var days =prompt("Weeks");

document.write("It's a week day." + "<br />"  + days + "<br />");

var days =prompt("Weeks");

document.write(days + "<br />");

var days =prompt("Weeks");

document.write(days + "<br />");

var days =prompt("Weeks");

document.write(days + "<br />");

var days =prompt("Weeks");

document.write(days + "<br />" + "<br />");

var days = prompt("weekend");

document.write("It's weekend." + "<br />" + days + "<br />" + "<br />");

var days = prompt("holidays");

document.write("Yay! It's a holiday." + "<br />" + days + "<br />");

var a = 50;
var b = 40;

console.log(50 > 40);

var num1 = 10;
var num2 = 10;

console.log(num1 == num2);

var eng = prompt("Enter language code");

var world = "Hello, World";

alert(world + "\n\n" + "Prevent this page from creating additional dialogs.");

var german = prompt("Enter language code");

var world = "Hallo, Welt!";

alert(world + "\n\n" + "Prevent this page from creating additional dialogs.");

var spanish = prompt("Enter language code");

var world = "Hola Mundo";

alert(world + "\n\n" + "Prevent this page from creating additional dialogs");

var numbes = prompt("Please enter a number");

var boats = prompt(" Please enter a  noun \n\n Prevent this page from creating additional dialogs");

alert(numbes + boats + "\n\n" + "Prevent this page from creating additional dialogs");