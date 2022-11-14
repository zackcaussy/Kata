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
