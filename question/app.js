//基礎編
//Q1
let nickname = '半田耕一';
let age = 29;

console.log('私の名前は' + nickname + 'です。年齢は' + age + '歳です。');

//Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

//Q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3 );

let total = 0;
for(let i = 0; i < playerList.length; i++) {
  total += playerList[i].age;
}
let averageAge = total / playerList.length;
console.log(averageAge);

//Q6
function sayHello() {
  console.log('Hello');
};

sayHello();

const sayWorld = function() {
  console.log('World');
}

sayWorld();

//Q7
user.birthday = '2000-09-27';
console.log(user.birthday);

user.sayHello = function() {
  console.log('Hello！');
}

user.sayHello();

//Q8
let calc = {
  add: function(x, y) {
    console.log(x + y);
  },
  subtract: function(x, y) {
    console.log(x - y);
  },
  multiply: function(x, y) {
    console.log(x * y);
  },
  divide: function(x, y) {
    console.log(x / y);
  }
}

calc.add(3, 4);
calc.subtract(20, 10);
calc.multiply(7, 7);
calc.divide(10, 2);

//Q9//
function remainder(x, y) {
  return x % y;
}

x = 5;
y = 3;
console.log(x + 'を' + y + 'で割った余りは' + remainder(x, y) + 'です。');

//Q10
//変数xはfoo関数の中で定義されている為、関数の外から参照しようとしてもスコープ外なのでnot defined エラーが出てしまう。

//応用編
//Q1
console.log(Math.floor(Math.random() * 10));

//Q2
function Hello() {
  console.log('Hello World!');
}

setTimeout(Hello, 3000);

//Q3
let num = 4;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

//Q4
let numbers = [];
for(let i = 0; i <= 99; i++) {
  numbers[i] = i;
}
console.log(numbers);

let NUMBERS = Array.from({ length: 100}, (_, i) => i);
console.log(NUMBERS);

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for(let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] !== 'number') {
    console.log('not number');
  } else if (mixed[i] % 2 === 1) {
    console.log('odd');
  } else if (mixed[i] % 2 === 0) {
    console.log('even');
  }
}