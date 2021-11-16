var car = [
    'Sabb',
    'Volbo',
    'BMW'
];

console.log(car.sort());
console.log(car[0]);

const name = [
    'ratul',
    'apple',
    'hatul',
    'batul'
];

console.log(name[0]);
name.pop();
console.log(name);

name.shift();
console.log(name);

name.unshift('bani');
console.log(name);

name.push('Maoya');
console.log(name);

var num = [];
num[0] = 1;
num[1] = 2;
num[2] = 3;
num[3] = 4;
console.log(num.reverse());
console.log(num.length);
console.log(num[num.length-2]);

console.log(num);

num[0] = 111;
console.log(num);

num[3] = 'apple';
console.log(num);