// global context
firstName = "Andrei";
function getFirstName() {
  console.log("firstName:", this.firstName);
};
getFirstName();
console.log("window === this:", window === this);

// object context
const person = {
  firstName: "Tom",
  lastName: "Smith",
  getLastName: function() {
    console.log("lastName from object:", this.lastName);
  }
};
person.getLastName();

// function context
person.getFirstName = getFirstName;
person.getFirstName();
getFirstName.call(person);

// loop context
for (let i = 0; i < 5; i++) {
  console.log("loop:", this.firstName);
}

// class context
class User {
  constructor(firstName) {
    this.firstName = firstName;
  }

  getFirstName() {
    console.log("firstName from class:", this.firstName);
  }
}

const user = new User("Bob");
user.getFirstName();


// Functions types

//Name Function
function nameFunction() {
  console.log("Regular Function with name");
}
nameFunction();

//Anonymous Function
// function () {
// }

//Function Expression
const functionExpression = function () {
  console.log("Function Expression");
};
functionExpression();

//Arrow Function
const arrowFunction = () => console.log("Arrow Function");
arrowFunction();

//Constructor Functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const man = new Person("Bob", 21);
console.log(man.name);
console.log(man.age);


//Immediately Invoked Function Expressions
(function() {
  console.log('Immediately Invoked Function Expressions');
})();


// Closures
function counter() {
  let value = 0;

  function addValue() {
    console.log("Closures value:", value);
    value++;
  }

  return addValue;
};

const resultFunc = counter();
resultFunc();
resultFunc();
resultFunc();
resultFunc();

// currying
const sum = (a, b, c) => a + b + c;
const curryFunction = (func) => (a) => (b) => (c) => func(a, b, c);
const currySum = curryFunction(sum);
console.log("currySum 1 2 3:", currySum(1)(2)(3));
console.log("currySum 2 3 4:", currySum(2)(3)(4));
