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

You only need one - Beginner

function check(a, x) {
return a.includes(x);
}

Basic Mathematical Operations

function basicOp(operation, value1, value2)
{
  let start = 0;
  switch (operation){
    case "+": 
      return value1 + value2;
      break;
    case "-": 
      return value1 - value2;
      break;
    case "*": 
      return value1 * value2;
      break;
    case "/": 
      return value1 / value2;
      break;
      }
  return;
}


Keep Hydrated!

function litres(time) {
  let result = time*0.5;
  return Math.floor(result);
}

Third Angle of a Triangle

function otherAngle(a, b) {
let c = 180 - (a+b);
  return c
}

Super Duper Easy

function problem(x){
 if (typeof x === 'number'){
 x = x * 50;
  x += 6;
  return x;
}
  return "Error"
}
  


Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
 let a = distanceToPump;
  let b = mpg;
  let c = fuelLeft;
  
  if( a/c <= b ){
    return true;
}
    return false;
  }


MakeUpperCase

function makeUpperCase(str) {
return str.toUpperCase(str);
}

You Can't Code Under Pressure #1

function doubleInteger(i) {
  i = i *2;
  return i;
}


Function 2 - squaring an argument

function square(x){
 let a = x**2;
 return a;
}


Grasshopper - Basic Function Fixer

function addFive(num) {
  var num = num + 5;
  return num
}


Find out whether the shape is a cube

var cubeChecker = function(volume, side){
  
  if( volume == side*side*side && volume > 0){
    return true
  }
  return false;
}

Area or Perimeter

const areaOrPerimeter = function(l , w) {
  if (l == w){
    return l*w
  }
  return 2*l + 2*w
};

Jenny's secret message

function greet(name){
  
  if (name != "Johnny")
  return "Hello, " + name + "!";
  
  if(name == "Johnny")
  return "Hello, my love!";
}

Find Nearest square number

function nearestSq(n){
    return n = Math.pow(Math.round(Math.sqrt(n)), 2);
   }


Will there be enough space?

function enough(cap, on, wait) {
let sum = on + wait;
  if (cap > sum){
    return 0
  }
  else {
    return sum - cap;  
  }    
}


Volume of a Cuboid

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    let sum = length * width * height;
    return sum;
  }
}

Sum of angles

function angle(n) {
return sum = 180 *(n-2);
}


Beginner Series #1 School Paperwork

function paperwork(n, m) {
if ( n< 0 || m<0){
  return 0
}
  else {
    return n * m
  }
}

Opposites Attract

function lovefunc(flower1, flower2){
let t = flower1 % 2;
  let s = flower2 % 2;
  if (t != s){
    return true
  }
  return false
  
}

Find the Remainder

function remainder(n, m){

if (n > m){
  return n % m;
}
if (n < m){
  return m % n;
}
if ( m < 0){
  return m % n;
}
if ( m === 0 || n === 0){
    return NaN
}
  
  
 Is he gonna survive? 
  
  function hero(bullets, dragons){
  let b = bullets;
  let d = dragons;

if (b/2 >= d){
  return true;
}
  return false;
}

  Training JS #7: if..else and ternary operator

  function saleHotdogs(n){
  if (n < 5){
  return n * 100
    }
  if (n >= 5 && n < 10){
    return n * 95
  }
  else (n >= 10)
  return n * 90
}
  
  Training JS #1: create your first JS function and print "Hello World!"
  
function helloWorld(){
  let str = "Hello World!";
  console.log(str)
  }

  
  Training JS #2: Basic data types--Number
  
  let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a =  v3, //set number value to a
      b =  v1; //set number value to b
  return a - b;
}

function equal3(){
  let a =  v5, //set number value to a
      b =  v1; //set number value to b
  return a * b;
}

function equal4(){
  let a =  v4, //set number value to a
      b =  v5; //set number value to b
  return a / b;
}

function equal5(){
  let a =  v6, //set number value to a
      b =  v3; //set number value to b
  return a % b;
}
  

  Training JS #3: Basic data types--String
  
  
  var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

  Training JS #4: Basic data types--Array
  
function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  return arr
  
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}
