// global scope
const longStr =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, sit voluptatum eveniet voluptatem, magnam nisi doloribus, maxime ipsam eligendi quisquam delectus maiores laudantium accusamus recusandae earum! Rem omnis ex officia!";
const cutStr = longStr.slice(0, 40) + "...";
const longStr2 =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure provident nulla quia accusamus ipsa praesentium voluptatem aut, saepe exercitationem earum atque nemo minus laborum consequatur nesciunt nihil, impedit voluptates facilis?";
const cutStr2 = longStr2.slice(0, 30) + "...";
// parameters
function truncate(str, number) {
  let result = str.slice(0, number) + "---";
  // body of function
  return result;
}
// arguments
console.log(
  truncate(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem cumque facere doloribus mollitia! Eligendi voluptatibus mollitia quasi, maiores ut repellat distinctio exercitationem veniam deserunt ipsa quod voluptas, aliquam a eveniet.",
    20
  )
); // undefined
console.log(
  truncate(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus corrupti quod possimus ea dolor, minus sit mollitia fuga blanditiis consectetur impedit hic a rem ullam doloribus quas perspiciatis nemo eveniet.",
    "50"
  )
);
// I am evondev -> evondev am I
// const reverseEvondevStr = "I am evondev".split(" ").reverse().join(" ");
// const reverseShinStr = "I am shin".split(" ").reverse().join(" ");
function reverseString(str) {
  // const str = "I am duong";
  const reverseStr = str.split(" ").reverse().join(" ");
  return reverseStr;
}
console.log(reverseString("I am shin"));
// function declaration -> hoisting
function total(a, b) {
  return a + b;
}
// ES6
// function expression -> not hoisting
const myFunction = function () {};
// arrow function
const total2 = (a, b) => {
  return;
};
// arrow function shorthand
const total3 = (a, b) => a + b;
console.log(total2(5, 7)); // 12
// function definition
function drinkWater() {
  console.log("drink water");
}
function planForTheNextDay() {
  console.log("plan for the next day");
}
function teachingStudents(callback) {
  // body code of function
  const isTeachingDone = true;
  if (isTeachingDone) {
    if (typeof callback === "function") {
      callback();
    } else {
      console.log("invalid callback");
    }
    // drinkWater();
    // goToSleep();
  }
  // end code of function
}
teachingStudents(() => console.log("HEHE I am drinking water"));
