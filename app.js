Boolean

function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

Reversed Strings

function solution(str){
  return str.split("").reverse().join("");
}


Return Negative

function makeNegative(num) {
  if ( num > 0 ){
    return num * -1;
  }
  else {
     return num;
  }
  }

Sum of positive

function positiveSum(arr) {
  let sum = 0
  arr.forEach(num => num > 0 && (sum += num))
  return sum
}

Hello World

function greet(){
  return "hello world!";
}

Return the day

function whatday(num) { 
  switch(num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return 'Wrong, please enter a number between 1 and 7';
  }
}

Convert a String to a Number!

const stringToNumber = function(str){
return (+str);
  return null;
}

Remove String Spaces

function noSpace(x){
  return x.replace(/\s/g, '');
  return noSpace(x);
}


Returning Strings

function greet(name){
  return "Hello, "+ name +" how are you doing today?";
}

String repeat

function repeatStr(n, s) {
return s.repeat(n);
  return '';
}

Convert a Boolean to a String

function booleanToString(b){
  return String(b);
}  
  
 Remove First and Last Character 
  
 function removeChar(str){
return str.slice(1,-1);
}

MakeUpperCase

function makeUpperCase(str) {
 return str.toUpperCase()
}

Sum The Strings

function sumStr(a,b) {
c = +a + +b;
return String(c);
}

Convert a string to an array

function stringToArray(string){
return string.split(" ");

}


Grasshopper - Summation

let summation = function (n) {
  return n * (n + 1) / 2;
}


Simple multiplication

function simpleMultiplication(number) {
if ( number % 2 == 0 ){
  return number * 8;
} 
  else {
    return number * 9;
}

}

The 'if' function

function _if(bool, func1, func2) {
  if ( bool == true ) {
     func1();
  }
  else {
     func2();
  }   
}

Quarter of the year

const quarterOf = (month) => {
  
  switch(month)  {
    case 1: 
      return 1;
    case 2:
      return 1;
    case 3:
      return 1;
    case 4:
      return 2;
    case 5:
      return 2;
    case 6:
      return 2;
    case 7:
      return 3;
    case 8:
      return 3;
    case 9:
      return 3;
    case 10:
      return 4;
    case 11:
      return 4;
    case 12:
      return 4;
 } 
  return;
}


Century From Year

function century(year) {
    return Math.round(((year+49)/100))
}


Grasshopper - Messi Goals

let laLigaGoals = 43;
let championsLeagueGoals = 10;
let copaDelReyGoals = 5;

let totalGoals = +laLigaGoals + +championsLeagueGoals + +copaDelReyGoals

Grasshopper - Messi goals function

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return +laLigaGoals + +copaDelReyGoals + +championsLeagueGoals;
}

ES6 string addition

function joinStrings(string1, string2){
   return `${string1} ${string2}`;
}



Switch it Up!

function switchItUp(number){

  switch (number){
  
  case 0:
  return "Zero";
  case 1:
  return "One";
  case 2:
  return "Two";
  case 3:
  return "Three";
  case 4:
  return "Four";
  case 5:
  return "Five";
  case 6:
  return "Six";
  case 7:
  return "Seven";
  case 8:
  return "Eight";
  case 9:
  return "Nine";
  }
}

Invert values

function invert(array) {
  for(let i = 0 ; i < array.length; i++){
    array[i] = array[i] * (-1) 
  }
  return array
}


Grasshopper - Variable Assignment Debug

let a = "dev"
let b = "Lab"

let name = a + b


Powers of 2

function powersOfTwo(n){
let solution = [];
  for (let i = 0 ; i <= n ; i++){
    
  solution.push(2 ** i);
}
  return solution
}


Square(n) Sum

function squareSum(numbers){
let solution = 0
  for (let i = 0 ; i < numbers.length ; i++) {
    solution += numbers [i]**2;
  }
return solution
}

Grasshopper - Debug sayHello

function sayHello(name) {

  return "Hello, " + name;
}


Dollars and Cents

function formatMoney(amount){
 let a = "$" + amount.toFixed(2);
  return a;
}

'If you can't sleep, just count sheep!!

let countSheep = function (num){
  let str = "" ;
  for (let i = 1 ; i <= num ; i++){

  str = str + i + " sheep...";
    }
  
return str 
}

Grasshopper - Personalized Message

function greet (name, owner) {
 if (name === owner) return "Hello boss";
else return "Hello guest"  ;
  
}


Counting sheep...

function countSheeps(arrayOfSheep) {
  let x = 0;
  for ( let i = 0 ; i < arrayOfSheep.length ; i++) {
    if (arrayOfSheep[i] == true ){
      x += 1
    }
  }
  return x;
}

Sum Arrays

// Sum Numbers
function sum (numbers) {
    "use strict";
 return numbers.reduce((accumalator, value) => {return accumalator + value}, 0);
  }

Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
    }
}

How many lightsabers do you own?

   function howManyLightsabersDoYouOwn(name) {
    if(name > 0) return 0;
    if(name == "Zach") return 18;
    else return 0;
  }

Remove exclamation marks

function removeExclamationMarks(s) {
  return s.replace(/!/g,"");
}
