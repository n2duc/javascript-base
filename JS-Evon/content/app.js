// 1. Naming convention
// true: firstName, lastName, name, age, _something, $anotherthing
// camelCase -> my special book -> mySpecialBook
// false: 1evondev, @name, new, let, function, class, return
// 2. Variable declaration: var, let, const
// var: global scope -> can change value later
var myName = "evondev";
myName = "evondevpro";
var yourSchool; // undefined
let brother; // undefined
// let: block scope -> can change value later
let age = 20;
age = 28;
// const: block scope -> can not change value later
const school = "Cao Thang";
// const girl; 'const' declarations must be initialized.
// school = "FPT"; // error Uncaught TypeError: Assignment to constant variable.
// 3. Temporal dead zone
{
  // TDZ is existed here
  // TDZ is existed here
  // TDZ is existed here
  // console.log(myHobbies); // Reference Error
  // TDZ is existed here
  // TDZ is existed here
  let myHobbies = "Play Badminton";
  // TDZ is not existed here
  // computer process
  // let myHobbies;
}
// 4. Hoisting
{
  // TDZ start and end here
  console.log(city); // undefined
  // TDZ is not existed here
  var city = "Ho Chi Minh";
  // computer process
  var city; // undefined
  console.log(city); // undefined
  city = "Ho Chi Minh";
  console.log(city); // Ho Chi Minh
}
{
  let password = "1234";
  const encrypt = function () {
    console.log(password);
    const password = "5678";
  };
  encrypt(); // invoke
  // computer process
  // console.log(password); Error
  /*
  let password;
  const encrypt;
  password = "1234";
  encrypt(); // invoke
  console.log(password); // Error
  const password;
  password = "5678";
  */
}
