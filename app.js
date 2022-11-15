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
if (year < 101){
    return 1; 
  }
 else if (year < 201){
   return 2;
 }
else if (year < 301){
   return 3;
 }
else if (year < 401){
   return 4;
 } 
else if (year <501){
   return 5;
 } 
else if (year <601){
   return 6;
 }  
else if (year <701){
   return 7;
 } 
 else if (year <801){
   return 8;
 }  
 else if (year <901){
   return 9;
 }  
  else if (year <1001){
   return 10;
 } 
 else if (year <1101){
   return 11;
 }  
  else if (year <1201){
   return 12;
 } 
 else if (year <1301){
   return 13;
 }  
 else if (year <1401){
   return 14;
 }  
 else if (year <1501){
   return 15;
 }
 else if (year <1601){
   return 16;
 }  
  else if (year <1701){
   return 17;
 } 
  else if (year <1801){
   return 18;
 } 
  else if (year <1901){
   return 19;
 } 
  else if (year <2001){
   return 20;
 } 
 else if (year <2101){
   return 21;
 } 
  return;
}
