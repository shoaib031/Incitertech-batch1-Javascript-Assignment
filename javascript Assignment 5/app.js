for(a = 1; a <= 5; a++){
    document.write("HELLO WORLD" + "<br>")
}
for(a = 1; a <= 10; a++){
    document.write(a + "<br>")
}
var number = prompt("ENTER A NUMBER TO PRINT ITS MULTIPLICATION TABLE")
var length = prompt("ENTER THE LENGTH OF A TABLE")
for(var a = 1; a <= length; a++){
    document.write(number + " x " +  a  + " = " + (a*number) + " <br> ")
}
var arr = ["NOKIA", "Samsung"," Apple", "Sony", "Huawei"]
for( a = 0; a <= arr.length -1; a++){
 document.write(arr[a] + "<br>")
}
let fruits = ["Apple","Grapes","Banana"]
for(let i = 0; i < fruits.length; i++){
    document.write(`Element at index ${i} is ${fruits[i]}`);
}
var arr = prompt("ENTER NUMBER OF ITEMS")
document.write("NUMBERS OF ITEMS : " + arr +"<br>" + "ITEMS :" + "<br>" + "<br>")
var array = prompt("ENTER VALUR FOR INDEX 0")
var keyboard = prompt("ENTER VALUR FOR INDEX 1")
var mouse = prompt("ENTER VALUR FOR INDEX 2")
var cpu = prompt("ENTER VALUR FOR INDEX 3")
document.write(array + "<br>")
document.write(keyboard + "<br>")
document.write(mouse + "<br>")
document.write(cpu + "<br>")
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
document.write("Counting :" + a + "<br>")
a.reverse();
document.write("Reverse Counting :" + a + "<br>")
for(var a = 1; a <= 20 ; a++){
    if(a % 2 == 0){
        document.write(" ," + a )
    }
}
document.write("<br>")
for(var a = 1; a <= 20 ; a++){
    if(a % 2 != 0){
        document.write(" ," + a)
    }
}
var a = ["cake", "apple", "pie", "cookie", "chips", "patties"]
var b = prompt("Welocme to abc bakery what do you want to order  sir / \n ma'am?")
if( b == "cake"){
   document.write("Cake is <b> available</b>at index 2 in our bakery" + b)
}else{
  document.write("We are sorry this is <b> not available in our bakery </b>")
}
var arr = ["Array items: " + 24, 53, 78, 91, 12];
var largest = ["The largest number is " + 91];

document.write(arr + "<br />" + largest + "<br />" + "<br />");

var arr = ["Array items: " + 24, 53, 78, 91, 12];
var smallest = ["The smallest number is " + 12];

document.write(arr + "<br />" + smallest + "<br />" + "<br />");

var arr = ["Array items: " + 24, 53, 78, 91, 12];
var smallest = ["The largest number is " + 12]; 
var largest = ["The largest number is " + 91];

document.write(arr + "<br />" + smallest + "<br />" + largest + "<br />" + "<br />");

var multiple = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,];

document.write(multiple + "<br />" + "<br />");

var input = prompt("Please enter a number");
var scores = [12, 45, 3, 22, 34, 50];

if(input == 3){
    document.write("It is end to " + 3);
}else if(input == 34){
    document.write("It is end to " + 34 );
}

var numbers = prompt("Enter a number")

var num = [0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5];

num.reverse();

document.write(num + "<br />" + "<br />");

for (var x = 0; x <= 20; x++) {
    if (x === 0) {
            document.write(x +  " is even" + "<br />");
    }
    else if (x % 2 === 0) {
            document.write(x + " is even" + "<br />");   
    }
    else {
            document.write(x + " is odd" + "<br />");
    }
}

var A = ["The product of the odd integers from "];
var num = [1 + " to " + 7 + " is " + 105];

document.write(A + num + "<br />" + "<br />");

var arr = ["*" + "*" + "*" + "*" + "*" + "*" + "*"];
document.write(arr + "<br />");

var arr = ["*" + "*" + "*" + "*" + "*" + "*"];
document.write(arr + "<br />");

var arr = ["*" + "*" + "*" + "*" + "*"];
document.write(arr + "<br />");

var arr= ["*" + "*" + "*" + "*"] 
document.write(arr + "<br />");

var arr = ["*" + "*" + "*"];
document.write(arr + "<br />");

var arr = ["*" + "*"];
document.write(arr + "<br />");

var arr = ["*"];
document.write(arr + "<br />");
for(var a = 1; a <= 5; a++){
    for(var b = 1; b <= a; b++ ){
        document.write("*");
    }
    document.write("<br>");
}
document.write("<br>")
for(var a = 1; a <= 5; a++){
    for(var b = 1; b <= a; b++){
        document.write("*");
    }
    document.write("<br>");
}
document.write("<br>")

for(var a = 5; a >= 1; a--){
   for(var b = 1; b <= a; b++){
    document.write("*")
}
document.write("<br>")
}