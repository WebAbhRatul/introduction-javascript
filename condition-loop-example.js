/*
// Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
var num1 = -5, num2 = 4, num3 = -8;
if(num1 > 0 && num2 > 0 && num3 > 0 ){
    console.log('Sign is plus: +');
}else if (num1 < 0 && num2 < 0 && num3 < 0){
    console.log('Sign is minus: -');
}else if( num1 > 0 && num2 < 0 && num3 < 0){
    console.log('Sign is plus: +');
}else if(num1 < 0 && num2 > 0 && num3 < 0){
    console.log('Sign is plus: +');
}else{
     console.log('Sign is minus: -');
}

// Write a JavaScript conditional statement to sort three numbers.

var x = 0, y = -1, z = 5;
if(x>y && x>z){
    if(y>z) console.log(x,y,z);
    else console.log(x,z,y);
}else if(y>x && y>z){
    if(x>z) console.log(y,x,z);
    else console.log(y,z,x);
}else if(z>x && z>y){
    if(x>y) console.log(z,x,y);
    else console.log(z,y,x);
}


// Write a JavaScript conditional statement to find the largest of five numbers.
var a = 1, b = 4, c = 445, d = -9, e = 98;
if(a>b && a>c && a>d && a>e) console.log('largest number is a : ',a);
else if (b>a && b>c && b>d && b>e) console.log('largest number is b: ',b);
else if (c>a && c>b && c>d && c>e) console.log('largest number is c: ',c);
else if (d>a && d>b && d>c && d>e) console.log('largest number is d: ',d);
else console.log('largest number is e: ',e);


// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even
for (var i=0; i<=15; i++){
    if(i % 2 === 0){
        console.log(i,' is even ');
    }else{
        console.log(i, ' is odd');
    }
}


// Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. Go to the editor

// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68

var david = 80, vinoth = 77, divya = 88, ishita = 95, thomas = 68;
var average = (david+vinoth+divya+ishita+thomas)/5;
console.log(average);
if(average<60) console.log('F');
else if(average < 70) console.log('D');
else if(average < 80) console.log('C');
else if(average < 90) console.log('B');
else if(average < 100) console.log('A');
*/


// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for(var i=0; i<= 100; i++){
    if (i%3 == 0 && i%5 == 0) console.log('FizzBuzz');
    else if(i%5 == 0) console.log('Buzz');
    else if (i%3 == 0) console.log('Fizz');
    else console.log(i);
}

