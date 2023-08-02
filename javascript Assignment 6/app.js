// var firstName = prompt("ENTER YOUR FIRST NAME")
// var lastName = prompt("ENTER YOUR LAST NAME")
// var fullName = "ASSALAMUALIKUM " + firstName + " " + lastName
// document.write(fullName)

// var mobile = prompt("ENTER YOUR FAVOURITE MOBILE")
// document.write("MY FAVOURITE PHONE IS : " + mobile + "<br>")
// var array = ["LENGTH OF ARRAY : "]
// document.write(array)

// var favoriteModel = prompt("What is your favorite mobile phone model?");
// document.write("MY FAVOURITE PHONE IS " + favoriteModel)
// document.write("<br>")
// var inputLength = favoriteModel.length;
// document.write(`The length of your input is ${inputLength}`);

// var country = "pakistani"
// document.write("String : " + country + "<br>")
// for(var i = 0; i< country.length; i++){
// if(country[i] === 'n'){
// document.write("index of 'n' : " + country[i], i)
// }
// }

// let val = "Hello World"
// for(let i = 10; i >= 0; i--){
//  if(val[i] === 'l'){
//     document.write("Last Index of",val[i],i);
//     break
//  }
// }

// var a = "Pakistani"
// document.write("String : " + a + "<br>")
// var word = "Pakistani";
// var thirdChar = word.charAt(3);
// document.write("character at index 3 : " + thirdChar);

// var firstName = "Shoaib"
// var lastName = "Siddiqui"
// var fullName = firstName.concat(lastName)
// document.write(fullName)

// var a = "Hyderabad"
// document.write("String : " + a + "<br>")
// var word = "Hyderabad"
// var replaceWord = word.replace("Hyder", "Islam")
// document.write("After Replacement : " + replaceWord )

// var message = "Ali and sami are best friends. They play cricket and football together"
// document.write("Message : " + message + "<br>")
// var word = "Ali and sami are best friends. They play cricket and football together"
// var replaceMessage = word.replace(/and/g,"&")
// document.write("After Replacement : " + replaceMessage)

// var str = "472";
// var num = parseInt(str);
// document.write("String value: " + str + "<br>");
// document.write("Type of string value: " + typeof str + "<br>");
// document.write("Number value: " + num + "<br>");
// document.write("Type of number value: " + typeof num);

// var url = prompt("Enter a URL in the format www.example.com");
// var start = url.indexOf("www.") + 4;
// var end = url.indexOf(".", start);
// var domain = url.slice(start, end);
// document.write("The domain name is: " + domain);

// var input = prompt("ENTER HERE")
// document.write("user input : " + input)
// document.write("<br>")
// document.write("Upper case : " + input.toUpperCase())

// var input = prompt("ENTER HERE")
// document.write("user input : " + input)
// document.write("<br>")
// document.write("Upper case : " + input.toLowerCase())

// var num = 35.36;
// var str = num.toString();
// str = str.replace(".", ""); 
// document.write(str); 

// var a = "3"
// var b = "3"
// document.write("A + B is " + a + b)

// var a = "3"
// var b = "3"
// var c = a - b 
// document.write("A - B is " + c )

// let username = prompt("Please enter your username:");

// if (/[@.,!]/.test(username)) {
//   alert("Your username contains a special symbol. Please enter a valid username.");
//   username = prompt("Please enter a valid username:");
// }
// document.write("Your username is: " + username);

// let str1 = prompt("Please enter the first string:");
// let str2 = prompt("Please enter the second string:");
// if (str1 > str2) {
//   document.write(str1 + " is greater than " + str2);
// } else if (str2 > str1) {
//   document.write(str2 + " is greater than " + str1);
// } else {
//   document.write("Both strings are equal");
// }

// var university = "University of Karachi";
// var universityArray = university.split(" ");
// document.write("Array Elements:<br>");
// for (var i = 0; i < universityArray.length; i++) {
//   document.write(universityArray[i] + "<br>");
// }

// var inputString = prompt("Please enter a string:");
// var lastCharacter = inputString.charAt(inputString.length - 1);
// alert("The last character of the input string is: " + lastCharacter);
// let x = 5;
// let y = 6;
// x += x > y ? x : y;
// document.write(x)

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


// function lookUpProfile(name, prop){
//   for (var i = 0; i < contacts.length; i++) {
//     if(contacts[i].firstName === name) {
//       return contacts[i][prop] || "No such property";
//     }
//   }
//   return "No such contact";
// }

// // Change these values to test your function
// var data = lookUpProfile("Sherlock", "hello");

// console.log(data);
 var myName = "shoaib";
 console.log("🚀 ~ file: app.js:169 ~ myName:", myName)
