/**
 * if(truthy) {...} else {....}
 */
// if (3 > 5) {
//   console.log("you are right");
// } else {
//   console.log("you are wrong");
// }
console.log(5 == "5"); // true
console.log(5 === "5"); // false
// console.log(5 == 5); // true
console.log(5 && "evondev" && true && "Javascript"); // Javascript
console.log(5 && 0 && true && "Javascript"); // 0
console.log(0 || "" || null || undefined || false); // false
console.log(0 || "evondev" || null || undefined || false); // evondev

const myScore = 10;
const yourScore = 10;
const myClass = "12A";
const yourClass = "12B";
// console.log(NaN === NaN);
if (myScore === yourScore && parseInt(myClass) === parseInt(yourClass)) {
  // 1
  console.log(1);
} else {
  // 2
  console.log(2);
}
console.log(![]);

const myHero = "Black Panther";
if (myHero === "Captain America") {
  console.log("My hero is Captain America");
} else if (myHero === "Ant Man") {
  console.log("My hero is Ant Man");
} else if (myHero === "Black Panther") {
  console.log("My hero is Black Panther");
} else {
  console.log("I have no my hero");
}

switch (myHero) {
  case "Black Panther":
  case "Captain America":
    console.log("Yeah we have 2 heroes");
    break;
  case "Black Panther":
    console.log("My hero is Black Panther");
    break;

  default:
    console.log("I have no my hero");
    break;
}
const money = 1000;
// conditional(truthy) ? true: truthy ? valueA : truthy ? valueB : valueC;
let isStillHaveMoney = money > 10_000 ? true : false;
let isStillHaveMoney2 = money > 10_000 && true;
console.log("isStillHaveMoney2:", isStillHaveMoney2);
// truthy && <Component/>
// if (money > 10000) {
//   isStillHaveMoney = true;
// } else {
//   isStillHaveMoney = false;
// }
