// //callback

// function printNameFunction(printed) {
//   console.log(printed);
// }

// function printYourName(name, callback) {
//   callback("Hello " + name);
// }

// printYourName("Marcin", printNameFunction);

// function addWord(add) {
//   console.log("Elo " + add);
// }

// printYourName("Wacek", addWord);

// let arrowFun = (add) => {
//   console.log(add);
// };

// arrowFun("swag");

let sayHi = (firstName) => "hi " + firstName;

console.log(sayHi("Marcin"));

let hiFun = () => {
  console.log("hi");
};

hiFun();

//hoisting

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 3));

// never use var!!
let alpha = ["a", "b", "c", "d", "e"];

console.log(alpha[2]);

const b = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

console.log(b[0][3], b[1][2], b[2][0]);

//objects!

let car = {
  make: "ford",
  model: "focus",
  isUsed: true,
  makeNoise: function () {
    console.log("wrumm");
  },
};

console.log(car.makeNoise());

let book = {
  title: "swag",
  author: {
    name: "super gość",
    age: 69,
  },
};

console.log(book.author.name);

// array methods

const a = [1, 2, 3, 4, 5, 6];

const newA = a.find((num) => {
  return num < 2;
});

console.log(newA);

const itemsPrice = [
  { price: 10 },
  { price: 12 },
  { price: 99 },
  { price: 6 },
  { price: 3 },
];

const finalPrice = itemsPrice.reduce((sum, item) => {
  return sum + item.price;
}, 0);
console.log(finalPrice);

let aa = "marcin";
let bb = "kaciczak";

console.log(`${aa} ${bb}`);

// new and this keywords

function creatUser(name, age) {
  return { name: name, age: age };
}

console.log(creatUser("Marcin", 25));

function User(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

const user = new User("sally", 35, true);

console.log(user);

//youtube function

const ytLink = document.querySelector("[data-link]");

ytLink.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click");
});

// lesson 42

const grandParent = document.querySelector("#grand-parent");

const childs = grandParent.querySelectorAll(".child");

const parent = grandParent.querySelector(".parent");

childs.forEach(changeColorToBlue);

function changeColorToBlue(child) {
  child.style.color = "blue";
}

parent.style.color = "pink";

// grandParent.style.color = "red";

// console.log(grandParent.children);

// const parentOne = grandParent.children[0];
// console.log(parentOne);
// const parentTwo = parentOne.nextElementSibling;
// parentTwo.style.color = "red";

// const childOne = parentOne.children[0];

// childOne.style.display = "none";

// console.log(parentTwo);

// const childTwo = document.querySelector("#child-2");

// const grandParent = childTwo.closest("#grand-parent");

// console.log(grandParent);

// grandParent.style.color = "green";

let arrayCheck = [];

if (arrayCheck.length === 0) {
  console.log("empty");
} else if (arrayCheck.length < 5) {
  console.log("small");
} else if (arrayCheck.length < 10) {
  console.log("medium");
} else {
  console.log("large");
}
