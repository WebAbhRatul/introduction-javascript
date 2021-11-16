var num1 = 3;
var num2 = 3.14;
console.log(num1, num2);

var num3 = 123e5;
var num4 = 123e-5;
console.log(num3, num4);

var num5 = 99999999999999; //14 digits
var num6 = 999999999999999; //15 digits
var num7 = 9999999999999999; //16 disits
console.log(num5, num6, num7);

// floating 

var x = .1;
var y = .2;
console.log(x + y);

// adding number and strings 
var a = 10;
var b = 5;
var d = '5';
var c = a + b;
var e = a + d;
console.log(c, typeof c); 
console.log(e, typeof e); 

console.log('The result is ' + a + b);


// Numeric Strings
// JavaScript will try to convert strings to numbers in all numeric operations:
var a1 = '10';
var b1 = '20';
var c1 = b1 / a1;
console.log(c1, typeof c1);
var d1 = a1 * b1;
console.log(d1, typeof d1);


// You can use the global JavaScript function isNaN() to find out if a value is a not a number:

var x1 = 100;
var x2 = 'Apple';
var x3 = x1 / x2;
console.log(isNaN(x3));


// JavaScript Numbers as Objects
var ab = new Number(123);
console.log(ab, typeof ab);
console.log(isNaN(ab));



