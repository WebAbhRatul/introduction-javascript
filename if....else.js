/*
// if Statement
var number = 3;
if(number > 0){
    console.log('NUmber is positive');
}else{
    console.log('Number is zero or negative');
}

//  if...else if Statement
var num = 0;
if(num > 0){
    console.log('Number is positive');
}else if(num === 0){
    console.log('Number is zero');
}else{
    console.log('Number is negative');
}


// Nested if...else Statement
var num = 10;
if(num >= 0){
    if(num === 0){
        console.log('You entered a zero');
    }else{
        console.log('You entered a positive number');
    }
}else{
    console.log('You entered a nagative number');
}



// Body of if...else With Only One Statement
var num = 4;
if(num < 0)
    console.log('Number is negative');
else
    console.log('Number is positive');

*/

var num1 = 20;
var num2 = 30;
if(num1 > num2) console.log('the number between '+ num1+ ' and ' + num2 + ' the largest is ' + num1 );
if(num2 > num1) console.log('the number between '+ num1+ ' and ' + num2 + ' the largest is ' + num2 );
else console.log('numbers are equal');